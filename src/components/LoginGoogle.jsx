/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUser } from "../store/loggedUserReducer";
import { setUserVoid } from "../store/loggedUserReducer";

import "../containers/App.css";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { setGoogleTrue, setGooglefalse } from "../store/googleReducer";

const clientId =
  "1000128027001-1hm0fsrjmpmkldp3qeb8uvci632jp77i.apps.googleusercontent.com";

export function LoginGoogle() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const dispatch = useDispatch();
  const onLoginSuccess = (res) => {
    setShowloginButton(false);
    setShowlogoutButton(true);

    const value = {
      name: res.profileObj.givenName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
    };
    axios
      .post("/api/auth/login", value)
      .then((res) => res.data)
      .then((data) => {
        window.localStorage.setItem("branchToken", `Bearer ${data.token}`);
        dispatch(setUser());

        dispatch(setGoogleTrue());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  function logOut() {
    window.localStorage.removeItem("branchToken");
    dispatch(setUserVoid());
  }

  const onSignoutSuccess = () => {
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    window.localStorage.removeItem("branchToken");
    dispatch(setUserVoid());
    dispatch(setGooglefalse());
    alert("Ha cerrado sesion correctamente");
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Loguearme con Google"
          className="log-btn"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Desloguearme"
          onClick={logOut}
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default LoginGoogle;
