import React from "react";
import "./Header.css";
import logo from "../.././images/daraz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* --nav menu -- */}
      <div className="nav-menu">
        <img src={logo} alt="" />
        <Link exact to="/">
          Shop
        </Link>
        <Link exact to="/review">
          Review
        </Link>
        <Link exact to="manage">
          Manage Inventory
        </Link>
        <input type="text" name="search" placeholder=" Search..."></input>
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default Header;
