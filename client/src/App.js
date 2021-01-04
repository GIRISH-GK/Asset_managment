import React, {useState,useEffect} from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {BrowserRouter as Router, Redirect, Route,  Switch} from 'react-router-dom';
import './App.css';

import Home from './component/Home/Home';
import AdminLogin from './component/AdminLogin/AdminLogin';
import AdminHome from './component/AdminHome/AdminHome';
import Login from './component/Login/Login';
import Sign_up from './component/Signup/Sign_up';
import addAssets from './component/addAssets/addAssets';
import Contacts from './component/Contacts/Contact';
import generalReport from './component/General/generalReport';
import editAsset from './EditAsset/editAsset';
import notFound from './component/NotFound/notFound';
import assetList from './component/Assets/assetList.component';

import Dashboard from "./component/Dashboard";
import UserHome from './component/UserHome/UserHome';
import users from './component/Users/users';
import userReq from './component/UserReq/userReq';

toast.configure();



function App() {
  // const checkAuthenticated = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3001/authentication/verify", {
  //       method: "POST",
  //       headers: { jwt_token: localStorage.token }
  //     });

  //     const parseRes = await res.json();

  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   } 
  // };

  // useEffect(() => {
  //   checkAuthenticated();
  // }, []);


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };
  return (
    <div >
       
      <Router >
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Contacts" component={Contacts}/>
        <Route path="/AdminLogin"  render={props => !isAuthenticated ? (<AdminLogin {...props} setAuth={setAuth} />):(<Redirect to="/Assets"/>)}/>
        <Route path="/AdminHome"  component={AdminHome}/>
        {/* <Route path="/Assets" component={Assets}/> */}
        <Route exact path="/login"  render={props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />):(<Redirect to="/users"/>)}/>
        <Route exact path="/Signup" render={props => !isAuthenticated ? (<Sign_up {...props} setAuth={setAuth}/>):(<Redirect to="/users"/>) }/>
        <Route exact path="/Dashboard" render={props => !isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} />):(<Redirect to="/login"/>)}/>
        <Route path="/addAssets" component={addAssets}/> 
        <Route path="/EditAsset/:title" component={editAsset}/>
        <Route path="/General"  component={generalReport} />
        <Route path="/Assets" component={assetList}/>

        <Route path="/Users" component={users}/>
        
        <Route path="/UserHome" component={UserHome}/>
        <Route path="/UserReq" component={userReq}/>
        
        <Route component={notFound}/>
      </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
