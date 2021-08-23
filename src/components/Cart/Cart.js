import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);

  //   --Total Product Cost --//
  const totalPrice = cart.reduce(
    (totalAccumulator, currentProduct) =>
      totalAccumulator + currentProduct.price,
    0
  );
  const totalUpdatePrice = totalPrice.toFixed(2);

  // --Shipping Cost --//
  let shippingCost = 0;
  if (totalPrice >= 50) {
    shippingCost = 0;
  } else if (totalPrice < 50 && totalPrice >= 30) {
    shippingCost = 5.0;
  } else if (totalPrice < 15 && totalPrice >= 1) {
    shippingCost = 10;
  } else {
    shippingCost = 0;
  }
  const shippingUpdateCost = shippingCost.toFixed(2);

  //   --Tax Calculated --//
  const tax = totalPrice * 0.1;
  const taxUpdate = tax.toFixed(2);

  // --Total Price ---//
  const orderPrice = totalPrice + tax;
  const totalOrderPrice = orderPrice.toFixed(2);

  return (
    <div className="product-cart">
      <h4 style={{ textAlign: "center", fontSize: "bold" }}>Order Summary</h4>
      <h6 style={{ textAlign: "center" }}>Items Ordered : {cart.length}</h6>
      <p>Shipping & Handling : ${shippingUpdateCost}</p>
      <p>Total before Tax :$ {totalUpdatePrice}</p>
      <p>Estimated Tax :$ {taxUpdate}</p>
      <h5 style={{ color: "red" }}>Order Total :${totalOrderPrice}</h5>
      <button className="cart-btn">Review Your Order</button>
    </div>
  );
};

export default Cart;
