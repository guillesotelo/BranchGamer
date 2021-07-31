/** @format */

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../store/user";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import  RegisterGoogle from "../components/RegisterGoogle";
import Navbar from "./Navbar";
import LoginGoogle from "./LoginGoogle";

export default function Register() {
  const History = useHistory();
  let usuario = useSelector((state) => state.register);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/auth/register", usuario).then(() => {
      History.push("login");
    });
  }

  function handleChangeNombre(e) {
    dispatch(setRegister({ ...usuario, name: e.target.value }));
  }

  function handleChangeEmail(e) {
    dispatch(setRegister({ ...usuario, email: e.target.value }));
  }

  function handleChangePassword(e) {
    dispatch(setRegister({ ...usuario, password: e.target.value }));
  }

  return (
    <div>
      <div>
        <Navbar />
        <div class="register">
        <Link
                    to="/login"
                    className="goback"
                    style={{ textDecoration: "none" }}
                >
                    <svg
                        class="svg-icon"
                        viewBox="0 0 20 20"
                        style={{
                            color: "black",
                            width: "25px",
                            paddingBottom: "10px"
                        }}
                    >
                        <path
                            fill="none"
                            d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
                        ></path>
                    </svg>
                </Link>
          <div className="register-card">
            <form action="#" onSubmit={handleSubmit}>
              <div className="log-text">Registro</div>
              <div className="form-group d-flex align-items-center">
                <div className="icon">
                  <span className="far fa-user"></span>
                </div>{" "}
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={handleChangeNombre}
                />
              </div>
              <div className="form-group d-flex align-items-center">
                <div className="icon">
                  <span class="far fa-envelope"></span>
                </div>{" "}
                <input
                  autocomplete="off"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="form-group d-flex align-items-center">
                <div className="icon">
                  <span className="fas fa-key"></span>
                </div>{" "}
                <input
                  autocomplete="off"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  className="reg-pass"
                  onChange={handleChangePassword}
                />
              </div>
              <RegisterGoogle/>
              {/* <GoogleLogin
                clientId="1000128027001-1hm0fsrjmpmkldp3qeb8uvci632jp77i.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    className="register-btn"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Registrate con Google
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              /> */}
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt=""
              />
              <br />
              <br />
              <input type="submit" value="Enviar" className="register-btn" />
              {/* <div className="terms mb-2">
                    {" "}
                    By clicking "Signup", you acknowledge that you have read the{" "}
                    <a href="#">Privacy Policy</a> and agree to the{" "}
                    <a href="#">Terms of Service</a>.
                </div>
                <div className="connect border-bottom mt-4 mb-4"></div>
                <ul className="p-0 social-links">
                    <li>
                        <a href="#">
                            <span className="fab fa-facebook-f"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fab fa-google"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fab fa-github"></span>
                        </a>
                    </li>
                </ul> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
