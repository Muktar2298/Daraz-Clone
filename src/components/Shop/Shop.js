import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  // --Fake Data load --//
  const first10 = fakeData.slice(0, 10);
  const [products, setproducts] = useState(first10);
  return (
    <div className="shop-container">

      {/* --Product Container -- */}
      <div className="product-container">
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </div>


      {/* --Cart Container -- */}
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Items Ordered : 0</p>
      </div>
    </div>
  );
};

export default Shop;
