import { useStateValue } from "./DataLayer/StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch the item to data layer
    dispatch({
      type: "addToBasket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
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
      </div>
      <img className="product-image" src={image} alt="Product" />
      <button id="add-to-basket-btn" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
