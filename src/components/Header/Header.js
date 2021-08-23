import React from "react";
import "./Header.css";
import logo from "../.././images/daraz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div className="header">
      {/* --nav menu -- */}
      <div className="nav-menu">
        <img src={logo} alt="" />
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="manage">Manage Inventory</a>
        <input type="text" name="search" placeholder=" Search..."></input>
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default Header;
