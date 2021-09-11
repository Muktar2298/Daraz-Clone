import React, { useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import Login from "./Login";
import { useHistory, useLocation } from "react-router";
const app = initializeApp(firebaseConfig);

const LoginForm = () => {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    seccess: false,
  });

  //--Use Context Api --//
  const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  //--handleInput --//
  const handleInput = (e) => {
    const { name, value } = e.target;
    let isFieldValid = true;
    if (name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(value);
    }
    if (name === "password") {
      isFieldValid = value.length > 6 && /\d/.test(value);
    }
    if (isFieldValid) {
      setUser((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //--SignUp --//
    if (newUser && user.email && user.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const ifSignIn = { ...user };
          ifSignIn.error = "";
          ifSignIn.seccess = true;
          setUser(ifSignIn);
          updateUserInfo(user.name);
        })
        .catch((error) => {
          var errorMessage = error.message;
          const ifErrorOccurs = { ...user };
          ifErrorOccurs.error = errorMessage;
          setUser(ifErrorOccurs);
        });
    }
    //--SignIn --//
    if (!newUser && user.email && user.password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((response) => {
          const userSignIn = response.user;
          const ifSignIn = { ...user };
          ifSignIn.error = "";
          ifSignIn.seccess = true;
          setUser(ifSignIn);
          setUserLoggedIn(ifSignIn); //--set signIn info to app component state --//
          history.replace(from); //--after signIn go to expected page --//
          console.log("signIn userInfo", userSignIn);
        })
        .catch((error) => {
          var errorMessage = error.message;
          const ifErrorOccurs = { ...user };
          ifErrorOccurs.error = errorMessage;
          setUser(ifErrorOccurs);
        });
    }
    const updateUserInfo = (name) => {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          console.log("Updated profile Successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  return (
    <div>
      <Login />
      <h1>Our Own Authentication </h1>
      <input
        type="checkbox"
        name="newUser"
        onChange={() => setNewUser(!newUser)}
      />
      <label htmlFor="newUser"> Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && (
          <input
            type="text"
            name="name"
            onBlur={handleInput}
            placeholder=" Enter Your Name.."
          />
        )}
        <br />
        <br />
        <input
          type="email"
          name="email"
          onBlur={handleInput}
          placeholder=" Enter Your Email.."
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          onBlur={handleInput}
          placeholder="Enter Your Password"
          required
        />
        <br />
        <br />
        <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
        <br />
        <br />
      </form>
      <p style={{ color: "red" }}>{user.error}</p>
      {user.seccess && (
        <p style={{ color: "green" }}>
          Successfully {newUser ? "Created" : "LogIn"} Account
        </p>
      )}
    </div>
  );
};

export default LoginForm;
