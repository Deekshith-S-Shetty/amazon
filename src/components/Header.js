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
          <span className="header-option-one">Hello Guest</span>
          <span className="header-option-two">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-one">Returns</span>
          <span className="header-option-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-one">Your</span>
          <span className="header-option-two">Prime</span>
        </div>
        <div className="header-basket">
          <ShoppingBasketIcon />
          <span className="header-option-two basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
