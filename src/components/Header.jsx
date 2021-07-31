/** @format */

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { setProductos, buscarProducto } from "../store/productos";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserVoid } from "../store/loggedUserReducer";

export default function Header() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputs, setInputs] = React.useState("")

    const shuffle = (arr) => {
        let currentIndex = arr.length,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex],
                arr[currentIndex],
            ];
        }
        return arr;
    };

    let { isLogIn, loggedUser, googleLogin } = useSelector((state) => state);

    const buscar = function (e) {
        if (e.keyCode === 13) {
            dispatch(buscarProducto(e.target.value.toLowerCase()));
            e.target.value = "";
        }
    };

    const buscarConLaLupita = () => {
        dispatch(buscarProducto(inputs.target.value.toLowerCase()));
    };

    function inicio() {
        axios
            .get(`/api/products`)
            .then((res) => res.data)
            .then((data) => {
                dispatch(setProductos(shuffle(data)));
            });
    }

    function logOut() {
        window.localStorage.removeItem("branchToken");
        dispatch(setUserVoid());
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom">
                {" "}
                <button className="logo-btn" onClick={inicio}>
                    <img
                        className="logo"
                        src="https://i.postimg.cc/3J1SHX0X/b-g-logo.png"
                        alt="Branch&Gamer"
                    />
                </button>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor"
                    aria-controls="navbarColor"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {" "}
                    <span className="navbar-toggler-icon"></span>{" "}
                </button>
                <div className="collapse navbar-collapse" id="navbarColor">
                    <ul className="navbar-nav d-flex justify-content-around w-100 align-items-center">
                        <li className="nav-item  bg-light search-nav-item d-flex justify-content-start">
                            <input
                                type="text"
                                id="search"
                                className="bg-light pl-3"
                                placeholder="Busca un producto"
                                onKeyUp={buscar}
                                onChange={data => setInputs(data)}
                            />

                            <span className="fa fa-search text-muted">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>

                            <svg
                                class="svg-icon"
                                viewBox="0 0 20 20"
                                style={{ height: "30px", paddingTop: "5px" }}
                                inputs={inputs}
                                onClick={buscarConLaLupita}
                            >
                                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                            </svg>
                        </li>
                        <div className="d-flex">
                            <li className="nav-item">
                                {!isLogIn ? (
                                    <div className="nav-link">
                                        <Link
                                            to="/login"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <span className="fa fa-user-o p-0"></span>
                                            <svg
                                                class="svg-icon"
                                                viewBox="0 0 20 20"
                                                style={{ height: "30px" }}
                                            >
                                                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                                            </svg>
                                            <span className="text">Login</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="nav-link">
                                        <button
                                            className="log-out-button"
                                            onClick={() => {
                                                if (googleLogin)
                                                    history.push("/login");
                                                else logOut();
                                            }}
                                        >
                                            <span className="fa fa-user-o p-0"></span>
                                            <svg
                                                class="svg-icon"
                                                viewBox="0 0 20 20"
                                                style={{ height: "30px" }}
                                            >
                                                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                                            </svg>
                                            <span className="text">LogOut</span>
                                        </button>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item ">
                                <div className="nav-link">
                                    <Link
                                        to="/cart"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <span className="fa fa-shopping-cart"></span>
                                        <svg
                                            class="svg-icon"
                                            viewBox="0 0 20 20"
                                            style={{ height: "30px" }}
                                        >
                                            <path
                                                fill="none"
                                                d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"
                                            ></path>
                                            <path
                                                fill="none"
                                                d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"
                                            ></path>
                                            <path
                                                fill="none"
                                                d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"
                                            ></path>
                                        </svg>
                                        <span className="text">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Carrito
                                        </span>
                                    </Link>
                                </div>{" "}
                            </li>
                            {isLogIn && loggedUser.isAdmin ? (
                                <li className="nav-item ">
                                    <div className="nav-link">
                                        <Link
                                            to="/admin"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <span className="fa fa-shopping-cart"></span>
                                            <img
                                                src="https://img.icons8.com/ios/50/000000/admin-settings-male.png"
                                                style={{ height: "30px" }}
                                            />
                                            <span className="text">
                                                &nbsp;&nbsp;&nbsp;&nbsp;Admin
                                            </span>
                                        </Link>
                                    </div>{" "}
                                </li>
                            ) : (
                                ""
                            )}

                            {isLogIn && !loggedUser.isAdmin ? (
                                <li className="nav-item ">
                                    <div className="nav-link">
                                        <Link
                                            to="/perfil"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <span className="fa fa-shopping-cart"></span>
                                            <svg
                                                class="svg-icon"
                                                viewBox="0 0 20 20"
                                                style={{ height: "30px" }}
                                            >
                                                <path d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"></path>
                                            </svg>
                                            <span className="text">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perfil
                                            </span>
                                        </Link>
                                    </div>{" "}
                                </li>
                            ) : (
                                ""
                            )}
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
