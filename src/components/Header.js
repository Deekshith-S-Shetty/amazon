import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./DataLayer/StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./DataLayer/Firebase";
import "./Header.css";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          className="header-logo"
          src="./images/amazonLogo.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-one">
              {!user ? "Hello Guest" : user.email}
            </span>
            <span className="header-option-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"} style={{ textDecoration: "none" }}>
          <div className="header-option">
            <span className="header-option-one">Returns</span>
            <span className="header-option-two">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-one">Your</span>
          <span className="header-option-two">Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header-basket">
            <ShoppingBasketIcon />
            <span className="header-option-two header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
