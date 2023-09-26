import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./DataLayer/StateProvider";
import { getBasketTotal } from "./DataLayer/reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="sub-total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}): <strong>{value}</strong>
            </p>
            <small>
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
