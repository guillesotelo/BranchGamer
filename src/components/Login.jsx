/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../store/loggedUserReducer";
import LoginGoogle from "./LoginGoogle";
import Navbar from "./Navbar";

export default function Login(props) {
    const [alert, setAlert] = useState(false);
    const dispatch = useDispatch();
    const [value, setValue] = useState({ email: "", password: "" });
    const history = useHistory();

    const onChange = ({ target }) => {
        setValue((value) => {
            return {
                ...value,
                [target.name]: target.value,
            };
        });
    };

    const handleClick = () => {
        const data = {
            email: "carlitos@branchgamer.com",
            password: "carlos2407" 
        }
        setValue(data)
        onSubmit(data)
        history.push('/')
    }

    const onSubmit = (e) => {
        if(e.target) e.preventDefault();
        axios
            .post("/api/auth/login", value)
            .then((res) => res.data)
            .then((data) => {
                window.localStorage.setItem(
                    "branchToken",
                    `Bearer ${data.token}`
                );
                dispatch(setUser());
                history.push("/");
            })
            .catch((err) => {
                setAlert(true);
                setTimeout(() => setAlert(false), 1500);
            });
    };

    return (
        <div>
            <div>
                <Navbar />
                <Link
                    to="/"
                    className="goback"
                    style={{ textDecoration: "none" }}
                >
                    <svg
                        class="svg-icon"
                        viewBox="0 0 20 20"
                        style={{
                            color: "black",
                            width: "25px",
                            paddingTop: "5px",
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
                    <form onSubmit={onSubmit}>
                        <div className="log-text">Login</div>
                        <div className="form-group d-flex align-items-center">
                            <div className="icon">
                                <span class="far fa-envelope"></span>
                            </div>{" "}
                            <input
                                onChange={onChange}
                                autoComplete="off"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <div className="icon">
                                <span className="fas fa-key"></span>
                            </div>{" "}
                            <input
                                onChange={onChange}
                                autoComplete="off"
                                placeholder="password"
                                type="password"
                                name="password"
                            />
                        </div>
                        {alert && (
                            <Alert
                                style={{
                                    borderRadius: "30px",
                                    fontSize: "12px",
                                    height: "12px",
                                    paddingTop: 0,
                                    paddingBottom: "17px",
                                }}
                                variant={"danger"}
                            >
                                Email o contraseña inválidos
                            </Alert>
                        )}
                        <input
                            type="submit"
                            value="Login"
                            className="log-btn"
                        />
                        <br />
                        <LoginGoogle />
                        <br />
                        <br />
                        <h6> ¿No tienes cuenta? ¡Click aquí!</h6>
                        <Link to="/register">
                            <button className="register-btn">
                                Registrarme
                            </button>
                        </Link>
                    <button className='admin-btn' onClick={handleClick}>👤 &nbsp; ADMIN LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
