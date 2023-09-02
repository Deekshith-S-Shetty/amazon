import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="./images/amazonLogo.png"
        alt="Amazon Logo"
      />
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option1">Hello Guest</span>
          <span className="header-option2">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option1">Returns</span>
          <span className="header-option2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option1">Your</span>
          <span className="header-option2">Prime</span>
        </div>
        <div className="header-basket">
          <ShoppingBasketIcon />
          <span className="header-option2 basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
