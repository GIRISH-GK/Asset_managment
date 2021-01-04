import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./generalReport.css";

export default class CurrentAssets extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a class="navbar-brand" href="#"> */}
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
              {/* <li className="nav-item active">
                <Link className="nav-link" to="/Assets">
                  Services
                </Link>
              </li>
              <li className="nav-item2 active">
                <Link className="nav-link" to="/addAssets">
                  Addassets
                </Link>
              </li> */}
              <li className="nav-item2 active">
                <Link className="nav-link" to="/General">
                  Report
                </Link>
              </li>
              {/* <li className="nav-item active">
                <Link className="nav-link" to="/Contacts">
                  Contact
                </Link>
              </li> */}
               <li className="nav-item1 active" style={{marginLeft:'350px'}}>
                <Link style={{textDecoration:'none',color:'black'}}  to="/dashboard">
                  Back
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="general">
          <div className="col-md-7">
            <h3 className="ma" > UsersReport</h3>

            <table className="table table-striped table-dark ">
              <thead className="thead-light" >
                <tr>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HP</td>
                  <td>10</td>
                  <td>200000</td>
                </tr>
                <tr>
                  <td>Chair</td>
                  <td>10</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>Chair</td>
                  <td>45</td>
                  <td>2025566</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
