/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUserVoid } from "../store/loggedUserReducer";
export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  let { isLogIn, googleLogin } = useSelector((state) => state);
  const inicio = () => {
    history.push("/");
  };
  function logOut() {
    window.localStorage.removeItem("branchToken");
    dispatch(setUserVoid());
  }
  
  return (
    <div>
      <nav className="navbar-expand-sm navbar-light bg-white border-bottom">
        {" "}
        <button className="logo-btn" onClick={inicio}>
          <img
            className="logo"
            src="https://i.postimg.cc/MK3vy7xt/Captura-de-Pantalla-2021-07-01-a-la-s-01-10-58.png"
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
          <ul className="navbar-nav">
            <li className="nav-item">
              {!isLogIn ? (
                <div className="nav-link">
                  <Link to="/login" style={{ textDecoration: "none" }}>
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
                  <button className="log-out-button" onClick={()=>{
                      if(googleLogin) history.push("/login")
                      else logOut()
                  }}>
                    <span className="fa fa-user-o p-0"></span>
                    <svg
                      class="svg-icon"
                      viewBox="0 0 20 20"
                      style={{ height: "30px" }}>
                      <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                    </svg>
                    <span className="text">LogOut</span>
                  </button>
                </div>
              )}
            </li>
            <li className="nav-item ">
              <div className="nav-link" href="#">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <span class="fa fa-shopping-cart"></span>
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
                  <span class="text">&nbsp;&nbsp;&nbsp;&nbsp;Carrito</span>
                </Link>
              </div>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
