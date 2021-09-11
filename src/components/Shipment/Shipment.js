import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./Shipment.css";

const Shipment = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const ShipmentSubmitBtn = (data) => {
    history.push("/confirmationmessage");
  };

  const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
  return (
    <>
      <form onSubmit={ShipmentSubmitBtn}>
        <input
          name="name"
          defaultValue={userLoggedIn.name}
          required
          placeholder=" Enter Your Name.."
        />
        <br />
        <input
          name="email"
          defaultValue={userLoggedIn.email}
          required
          placeholder=" Enter Your Email.."
        />
        <br />

        <input name="address" required placeholder=" Enter Your address.." />
        <br />
        <input type="phone" required placeholder=" Enter Your Phone Number.." />
        <br />
        <input type="submit" value="Confirm Order" />
      </form>
    </>
  );
};

export default Shipment;
