import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function header() {
  return (
    <div className="header__top">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="search__icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionone">Hello, SignIn</span>
          <span className="header__optiontwo">Accounts & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionone">Returns </span>
          <span className="header__optiontwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionone">Your</span>
          <span className="header__optiontwo">Prime</span>
        </div>
        <div className="header__shoppingcart">
        <span className="header__optionone"> <ShoppingCartIcon /></span>
          <span className="header__optiontwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default header;
