import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  // --Fake Data load --//
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  //--Cart State --//
  const [cart, setCart] = useState([]);

  // --HandleAddToCart --//
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      {/* --Product Container -- */}
      <div className="product-container">
        {products.map((pd) => (
          <Product product={pd} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>

      {/* --Cart Container -- */}
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
