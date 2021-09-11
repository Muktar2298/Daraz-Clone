import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import firebaseConfig from "./firebase.config";
import {} from "firebase/auth";
const app = initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    photoURL: "",
  });
  // --Google Provider --//
  const provider = new GoogleAuthProvider();
  // --Google Sign In --//
  const googleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const userInfo = {
          isLoggedIn: true,
          name: displayName,
          email: email,
          photoURL: photoURL,
        };
        setUser(userInfo);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  //   --Google SignOut --//
  const googleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        const userInfo = {
          isLoggedIn: false,
          name: "",
          email: "",
          photoURL: "",
        };
        setUser(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {/* --Google Sign  Start-- */}
      <div style={{ marginTop: "5%" }}>
        {user.isLoggedIn && (
          <div>
            <img
              src={user.photoURL}
              alt="avatar"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )}
        {/* --GoogleSign-- */}
        {user.isLoggedIn ? (
          <button type="button" onClick={googleSignOut}>
            Google Sign Out
          </button>
        ) : (
          <button type="button" onClick={googleSignIn}>
            Google Sign In
          </button>
        )}
      </div>
      {/* --Google Sign End-- */}

      {/* --Login Form Start-- */}
      <div></div>
      {/* --Login Form End-- */}
    </>
  );
};

export default Login;
