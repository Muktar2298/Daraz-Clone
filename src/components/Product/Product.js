import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props.product.key);
  const { img, name, price, stock, seller, key } = props.product;
  let showAddToCartBtn = props.showAddToCartBtn;
  // console.log(showAddToCartBtn);

  return (
    <div className="product">
      <div>
        <img src={img} alt="product_img" />
      </div>
      <div className="product-info">
        <h5 className="product-name">
          <Link to={`/product/${key}`}>{name}</Link>
        </h5>
        <p>by: {seller}</p>
        <p>$ {price}</p>
        <p>only {stock} left in stock - order soon</p>
        {showAddToCartBtn && (
          <button onClick={() => props.handleAddToCart(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
