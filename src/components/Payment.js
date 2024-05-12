import React, { useState } from "react";
import { useStateValue } from "./DataLayer/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./DataLayer/reducer";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import "./Payment.css";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

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
            {basket.map((item) => (
              <CheckoutProduct
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
            <form>
              <CardElement />

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
                  <span>{processing ? "Processing..." : "Buy Now}"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
