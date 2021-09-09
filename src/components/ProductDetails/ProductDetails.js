import React from "react";
import { useParams } from "react-router";
import Product from "../Product/Product";
import fakeData from "./../../fakeData/index";
import "../Product/Product.css";

const ProductDetails = () => {
  const { productKey } = useParams();
  // --data load based on product key --//
  const product = fakeData.find((pd) => pd.key === productKey);

  return (
    <div>
      <h1>Product Key is {productKey}</h1>
      <Product showAddToCartBtn={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
