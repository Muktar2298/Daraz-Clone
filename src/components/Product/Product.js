import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props);
  const { img, name, price, stock, seller } = props.product;

  return (
    <div className="product">
      <div>
        <img src={img} alt="product_img" />
      </div>
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>by: {seller}</p>
        <p>$ {price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button onClick={() => props.handleAddToCart(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};  

export default Product;
