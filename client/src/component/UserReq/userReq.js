import React from 'react';
import Button from 'react-bootstrap/Button';
import './userReq.css';
import { Link } from 'react-router-dom';

class User extends React.Component{
    render(){
        return <>
        

            
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
        
         <Link className="nav-link" to="/"><FaHome/> Home <span class="sr-only">(current)</span></Link>
       </li> */}
      
        {/* <li className="nav-item active">
         <Link className="nav-link" to="/Assets"> </Link>
       </li>
       <li className="nav-item2 active"> 
         <Link className="nav-link" to="/addAssets"> </Link>
       </li>
       <li className="nav-item2 active"> 
         <Link className="nav-link" to="/General"> </Link>
       </li>
       <li className="nav-item active" >
         <Link className="nav-link" to="/Contacts"> </Link>
       </li>  */}
      
      <li className="nav-item1 active" style={{marginLeft:'400px'}}>
         <Link className="nav-link" to="/Dashboard" >Logout</Link>
       </li>
       
       </ul>
   
   </div>
 </nav>
   <h3 style={{marginTop:'5px'}}>Request sent</h3>
   <button variant="primary" size="sm" block="" type="submit">
        <Link to="/Users" style={{textDecoration:'none',color:'white',textAlign:'center'}}>Back </Link> 
        </button>
 </>
   }
}
export default User;