import React from "react";
import "./Contact.css";
import {Link} from 'react-router-dom';


export default function Contacts(props) {
  
   
  
  return (
    <>
    
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a class="navbar-brand" href="#"> */}
    <img src="/images/img23.png" width="30" height="30" alt="" loading="lazy"/>
  
  <Link className="navbar-brand" to="#"> Asset Managment System</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" >
      {/* <li className="nav-item active">
        
        <Link className="nav-link" to="/"> Home <span class="sr-only">(current)</span></Link>
      </li> */}
      
       <li className="nav-item active">
        <Link className="nav-link" to="/Assets">Services</Link>
      </li>
       <li className="nav-item2 active"> 
        <Link className="nav-link" to="/Addassets">Addassets</Link>
      </li>  
      {/* <li className="nav-item2 active"> 
        <Link className="nav-link" to="/General">Report</Link>
      </li> */}
      <li className="nav-item active" >
        <Link className="nav-link" to="/Contacts">Contact</Link>
      </li> 
      
      <li className="nav-item1 active" style={{marginLeft:'140px'}}>
        <Link className="nav-link" to="/AdminLogin">Logout</Link>
      </li> 
      {/* <li className="nav-item2 active"> 
        <Link className="nav-link" to="/Signup">SignUp</Link>
      </li> 
      */}
      
    
    {/* <li className="nav-item2 active"> 
        <Link className="nav-link" to="/Assets">addAssets</Link>
      </li> */}
      </ul>
   
  </div>
</nav>
<div className="conta">
    <div>
      <h1 class="cont">Contact Us</h1>
      <div
        className="card"
        style={{
          width: "20rem",
          marginLeft: "500px",
          border: "5px solid skyblue",
          padding: "15px",
        }}
      >
        
        <img src="\images\cont.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p style={{ color: "black" }} class="card-text">
           <h6> Asset Managment System <br></br>
            Corporate Head Quarters 323 Udyog Vihar, Phase 2 Bangalore,
            karnataka 560060 </h6>
          </p>
        </div>
      </div>
      
    </div>
    
    </div>
    onClick={() =>props.history.push('/AdminHome')}
    </>
  );
}
