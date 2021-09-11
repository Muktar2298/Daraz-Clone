import React from "react";
import "./ConfirmationMessage.css";
import Images from "../../images/successicon.jpg";
import { useHistory } from "react-router";

const ConfirmationsMessage = () => {
  const history = useHistory();
 
  return (
    <div className="confirm-container">
      <img src={Images} alt="avatar" style={{ width: "30%", height: "30%" }} />
      <h2>Congratulations You Successfully Purchase Products</h2>
     
    </div>
  );
};

export default ConfirmationsMessage;
