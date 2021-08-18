import React from "react";
import "./Header.css";
import logo from "../.././images/daraz.png";

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
      </div>
    </div>
  );
};

export default Header;
