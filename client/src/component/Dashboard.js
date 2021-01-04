import React, { useEffect, useState } from "react";
import "./Dashbord.css";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
 // const [email, setEmail] =useState("");
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:3001/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
     // setEmail(parseData.user_email);
      
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
      <>
      <div className="dash">
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
              {/* <li className="nav-item2 active">
                <Link className="nav-link" to="/dashboard">
                  Profile
                </Link>
              </li> */}
              {/* <li className="nav-item active">
                <Link className="nav-link" to="/Contacts">
                  Contact
                </Link>
              </li> */}
               {/* <li className="nav-item1 active" style={{marginLeft:'350px'}}>
                <Link className="nav-link" to="/dashboard">
                  Profile
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
    <div >
    
    
      <h1 className="mt-5"></h1>
      <h2 style={{textAlign:'center'}}>Name: {name}</h2>
      {/* <h2 style={{textAlign:'center'}}>Email: {email}</h2> */}
      
      <button variant="primary" size="sm" block="" type="submit" style={{marginLeft:'650px' }} onClick={e => logout(e)}>
      <Link to="/login" style={{ textDecoration:'none', color:'white',textAlign:'center' }}>Logout</Link>
      </button>
    </div>
    </div>
    </>
  );
};

export default Dashboard;