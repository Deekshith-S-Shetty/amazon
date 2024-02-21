import React from "react";
import { useStateValue } from "./DataLayer/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import "./Payment.css";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
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
          <div className="payment-details"></div>
        </div>
      </div>
    </div>
  );
}
