import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./DataLayer/StateProvider";
import { getBasketTotal } from "./DataLayer/reducer";
import "./SubTotal.css";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

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

      <button className="btn checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
