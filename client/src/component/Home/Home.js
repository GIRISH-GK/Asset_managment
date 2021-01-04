import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Welcome extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#e3f2fd'}}>
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
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>

              {/* <li className="nav-item active">
        <Link className="nav-link" to="/Assets"></Link>
      </li>
      <li className="nav-item active" >
        <Link className="nav-link" to="/Contacts"></Link>
      </li>  */}
              {/* <li className="nav-item2 active"> 
        <Link className="nav-link" to="/Assets">addAssets</Link>
      </li> */}
              {/* <li className="nav-item active">
        <Link className="nav-link" to="/Assets"></Link>
      </li>
      <li className="nav-item active" >
        <Link className="nav-link" to="/Contacts"></Link>
      </li>  */}
              {/* <li className="nav-item2 active"> 
        <Link className="nav-link" to="/Assets">addAssets</Link>
      </li> */}

              <li className="nav-item1 active" style={{marginLeft:'250px'}} >
                <Link className="nav-link"  to="/AdminHome">
                  Admin
                </Link>
              </li>
              <li className="nav-item2 active">
                <Link className="nav-link" to="/UserHome">
                  Manager
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="container">
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-8 offset-md-2">
              <h3>Welcome To Asset Managment System</h3>
            </div>
          </div>
        </div> */}
        {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.corporatefinanceinstitute.com/assets/asset-management.jpeg" class="d-block w-100" alt="..." style={{ height:'580px'}}/>
    </div>
    <div class="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/asset-management-concept-financial-report-desk-asset-management-concept-financial-report-desk-117201826.jpg" class="d-block w-100" alt="..." style={{ height:'580px'}}/>
    </div>
    <div class="carousel-item">
      <img src="/image/img23.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </a>
</div> */}
        <div class="carousel-item active">
          <img
            src="https://cdn.corporatefinanceinstitute.com/assets/asset-management.jpeg"
            class="d-block w-100"
            alt="..."
            style={{ height: "569px" }}
          />
        </div>
      </>
    );
  }
}
