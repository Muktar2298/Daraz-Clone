import React from "react";
import { useHistory } from "react-router";

const Review = () => {
  const history = useHistory();
  const handlePlaceOrder = () => {
    history.push("/shipment");
  };
  return (
    <div>
      <h1>Review Is Comming</h1>
      <button className="cart-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Review;
