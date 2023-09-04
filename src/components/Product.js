import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product-info">
        <p>
          The lean Startup: How Constant Innovation Creates Radically Successful
          Paperback
        </p>
        <p className="product-price">
          <small>$</small>
          <strong>11.96</strong>
        </p>
        <div className="product-rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>
      <img
        className="product-image"
        src="./images/theLeanStartup.jpg"
        alt="The Lean Startup Book"
      />
      <button id="add-to-basket-btn">Add to Basket</button>
    </div>
  );
}

export default Product;
