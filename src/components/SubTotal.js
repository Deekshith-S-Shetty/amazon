import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./DataLayer/StateProvider";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "./DataLayer/reducer";
import "./SubTotal.css";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />

      <button
        onClick={(e) => {
          navigate("/payment");
        }}
        className="btn checkout-btn"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
