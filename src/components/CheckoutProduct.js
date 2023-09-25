import { useStateValue } from "./DataLayer/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {};

  return (
    <div className="checkout-product">
      <img className="checkout-product-img" src={image} alt="Product" />

      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((value, index) => {
              return <p key={index}>🌟</p>;
            })}
        </div>
        <button
          id="remove-from-basket-btn"
          className="btn"
          onClick={removeFromBasket}
        >
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
