import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./DataLayer/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./DataLayer/reducer";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import { db } from "./DataLayer/Firebase";
import "./Payment.css";

// Used when a backend (functions directory) is in use.
// axios.defaults.baseURL = "http://127.0.0.1:5001/fir-2bbb7/us-central1/api";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe) return;

    const createPaymentIntent = async () => {
      const total = Math.round(getBasketTotal(basket) * 100);
      console.log(process.env.REACT_APP_STRIPE_SECRET_KEY);

      const response = await fetch(
        "https://api.stripe.com/v1/payment_intents",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`, // Note: This is not secure for production
          },
          body: new URLSearchParams({
            amount: total,
            currency: "usd",
          }),
        }
      );
      const paymentIntent = await response.json();
      setClientSecret(paymentIntent.client_secret);
    };
    createPaymentIntent();
    // Below code are used when backed (functions directory) is in use
    // const getClientSecret = async () => {

    //   const response = await axios({
    //     method: "post",
    //     url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
    //   });
    //   setClientSecret(response.data.clientSecret);
    // };
    // getClientSecret();
  }, [basket, stripe]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        let paymentIntent;
        if (result.error) {
          paymentIntent = result.error.payment_intent;
        } else {
          paymentIntent = result.paymentIntent;
        }
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: "EMPTY_BASKET" });
      });

    navigate("/", { replace: true });
  };

  const handleChange = (event) => {
    if (error) {
      setDisabled(event.empty);
    }
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h2 className="basket-count">
          Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h2>
        {/* Delivery Address Section  */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>#23 house name</p>
            <p>Bangalore, Karnataka</p>
          </div>
        </div>

        {/* Review Items Section  */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Method Section  */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="price-container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                />
                <button
                  className="pay-btn"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? "Processing..." : "Buy Now"}</span>
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
