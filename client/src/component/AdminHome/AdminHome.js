import React from "react";
import { Link } from "react-router-dom";
import "./AdminHome.css";

export default class Welcome extends React.Component {
  render() {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
         
          <img
            src="/images/img23.png"
            width="30"
            height="30"
            alt=""
            loading="lazy"
          />

          <Link className="navbar-brand" to="#">
            {" "}
            Asset Managment System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item1 active" style={{ marginLeft: '350px' }}>
                <Link className="nav-link" to="/AdminLogin">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="home">
          <h2 className="h2">
            Welcome to Admin Page{" "}
          </h2>
        </div>
      </>
    );
  }
}
