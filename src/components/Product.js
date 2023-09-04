import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product-info">
        <p>
          The lean Startup: How Constant Innovation Creates Radically Successful
          Paperback
        </p>
        <p className="product-price">
          $<strong>11.96</strong>
        </p>
        <div className="product-rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>
      <img src="./images/theLeanStartup.jpg" alt="The Lean Startup Book" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
