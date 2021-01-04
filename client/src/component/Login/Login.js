// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Login.css'

// const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// class FormComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       emailAddress: "",
//       password: "",
//       passwordConfirmation: "",
//       firstNameError: "",
//       emailAddressError: "",
//       passwordError: "",
//       passwordConfirmationError: "",
//       isFormSubmitted: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.validateFirstName = this.validateFirstName.bind(this);
//     this.validateLastName = this.validateLastName.bind(this);
//     this.validateEmailAddress = this.validateEmailAddress.bind(this);
//     this.validatePassword = this.validatePassword.bind(this);
//     this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
//       this
//     );
//     this.validateField = this.validateField.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value
//     });

//     return;
//   }

//   handleBlur(event) {
//     const { name } = event.target;

//     this.validateField(name);
//     return;
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     let formFields = [
//       "firstName",
//       "lastName",
//       "emailAddress",
//       "password",
//       "passwordConfirmation"
//     ];
//     let isValid = true;
//     formFields.forEach(field => {
//       isValid = this.validateField(field) && isValid;
//     });

//     if (isValid) this.setState({ isFormSubmitted: true });
//     else this.setState({ isFormSubmitted: false });

//     return this.state.isFormSubmitted;
//   }

//   validateField(name) {
//     let isValid = false;

//     if (name === "firstName") isValid = this.validateFirstName();
//     else if (name === "lastName") isValid = this.validateLastName();
//     else if (name === "emailAddress") isValid = this.validateEmailAddress();
//     else if (name === "password") isValid = this.validatePassword();
//     else if (name === "passwordConfirmation")
//       isValid = this.validatePasswordConfirmation();
//     return isValid;
//   }

//   validateFirstName() {
//     let firstNameError = "";
//     const value = this.state.firstName;
//     if (value.trim() === "") firstNameError = "First Name is required";

//     this.setState({
//       firstNameError
//     });
//     return firstNameError === "";
//   }

//   validateLastName() {
//     let lastNameError = "";
//     const value = this.state.lastName;
//     if (value.trim() === "") lastNameError = "Last Name is required";

//     this.setState({
//       lastNameError
//     });
//     return lastNameError === "";
//   }

//   validateEmailAddress() {
//     let emailAddressError = "";
//     const value = this.state.emailAddress;
//     if (value.trim === "") emailAddressError = "Email Address is required";
//     else if (!emailValidator.test(value))
//       emailAddressError = "Email is not valid";

//     this.setState({
//       emailAddressError
//     });
//     return emailAddressError === "";
//   }

//   validatePassword() {
//     let passwordError = "";
//     const value = this.state.password;
//     if (value.trim === "") passwordError = "Password is required";
//     else if (!passwordValidator.test(value))
//       passwordError =
//         "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

//     this.setState({
//       passwordError
//     });
//     return passwordError === "";
//   }

//   validatePasswordConfirmation() {
//     let passwordConfirmationError = "";
//     if (this.state.password !== this.state.passwordConfirmation)
//       passwordConfirmationError = "Password does not match Confirmation";

//     this.setState({
//       passwordConfirmationError
//     });
//     return passwordConfirmationError === "";
//   }

//   render() {
//     return (

//       <>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       {/* <a class="navbar-brand" href="#"> */}
//     <img src="/images/img23.png" width="30" height="30" alt="" loading="lazy"/>

//   <Link className="navbar-brand" to="#"> Asset Managment System</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav" >
//       <li className="nav-item active">

//         <Link className="nav-link" to="/Home"> Home <span class="sr-only">(current)</span></Link>
//       </li>

//       {/* { <li className="nav-item active">
//         <Link className="nav-link" to="/Assets">Services</Link>
//       </li>
//       <li className="nav-item active" >
//         <Link className="nav-link" to="/Contacts"><FaPhone/>Contact</Link>
//       </li> */}
//       <div></div>
//      <li className="nav-item1 active">
//         <Link className="nav-link" to="/Login" style={{textAlign:"center"}}>Login</Link>
//       </li>
//       <li className="nav-item2 active">
//         <Link className="nav-link" to="/Signup" style={{textAlign:"center"}}>SignUp</Link>
//       </li>

//     {/* <li className="nav-item2 active">
//         <Link className="nav-link" to="/Assets">addAssets</Link>
//       </li> */}
//       </ul>

//   </div>
// </nav>
//       <div className="log" >
//         <h3 style={{textAlign:"center"}}>Login Form</h3>

//           <div style={{textAlign:"center"}}>
//           <form class="border" onSubmit={this.handleSubmit} >

//             <input
//               type="email"
//               placeholder="Email Address"
//               name="emailAddress"
//               value={this.state.emailAddress}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.emailAddressError && (
//               <div className="errorMsg">{this.state.emailAddressError}</div>
//             )}
//             <br></br>

//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.passwordError && (
//               <div className="errorMsg">{this.state.passwordError}</div>
//             )}

//             <br></br>
//             <button type="submit"  className="btn-primary"><Link to="/assets">Login</Link></button> <br></br>

//             <Link to="/Signup" className="link">you don't have account??- Please SignUp</Link>
//           </form>
//           </div>

//       </div>
//       </>
//     );
//   }
// }
// export default FormComponent;

// import React, { Component } from "react";
// import { Link ,Redirect } from "react-router-dom";

// import "./Login.css";

// const emailRegex = RegExp(
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach((val) => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach((val) => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

// class welcom1 extends Component {
//   constructor(props) {
//     super(props);
//     this.userEmaileRef=React.createRef();
//     this.userPasswordRef=React.createRef();

//     this.state = {
//       email: null,
//       password: null,
//       formErrors: {
//         email: "",
//         password: "",
//         formValid:false,
      
        
//       },
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.userEmaileRef.current.value);

//     fetch( "http://localhost:3001/authentication/login",{
//       method:'POST',
//       headers:{
//         'content-type':'application/json'
//       },
//       body:JSON.stringify({
//         user_email:this.userEmaileRef.current.value,
//         user_password:this.userPasswordRef.current.value,

//       })
//     }
//     ).then(response=>{
//       response.json().then(result=>{
//         console.log(result);
//       });
//     },error=>{
//       console.log(error);
//     });
    
      

//     if (formValid(this.state)) {

//       console.log(`
//         --SUBMITTING--
//         Email: ${this.state.email}
//         Password: ${this.state.password}
//       `);
//     } else {
//       console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
//       alert("Form  is Invalid ");
//     }
//   };

//   handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       case "email":
//         formErrors.email = emailRegex.test(value)
//           ? ""
//           : "invalid email address";
//         break;
//       case "password":
//         formErrors.password =
//           value.length < 8 ? "minimum 8 characaters required" : "";
//         break;
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };

//   validateForm(){
//     this.setState({
//       formValid: this.state.email && this.state.password
//     })
//   }

//   render() {
//     const { formErrors } = this.state;
//     if(this.state.formValid){
//       return <Redirect to='/'/>
//     }

//     return (
//       <>
        // <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#e3f2fd'}}>
        //   {/* <a class="navbar-brand" href="#"> */}
        //   <img
        //     src="/images/img23.png"
        //     width="30"
        //     height="30"
        //     alt=""
        //     loading="lazy"
        //   />

        //   <Link className="navbar-brand" to="#">
        //     {" "}
        //     Asset Managment System
        //   </Link>
        //   <button
        //     className="navbar-toggler"
        //     type="button"
        //     data-toggle="collapse"
        //     data-target="#navbarNav"
        //     aria-controls="navbarNav"
        //     aria-expanded="false"
        //     aria-label="Toggle navigation"
        //   >
        //     <span class="navbar-toggler-icon"></span>
        //   </button>
        //   <div class="collapse navbar-collapse" id="navbarNav">
        //     <ul class="navbar-nav">
        //       <li className="nav-item active">
        //         <Link className="nav-link" to="/">
        //           {" "}
        //           Home <span class="sr-only">(current)</span>
        //         </Link>
        //       </li>

        //       <div></div>
        //       <li className="nav-item1 active" style={{marginLeft:'250px'}}>
        //         <Link
        //           className="nav-link"
        //           to="/Login"
        //           style={{ textAlign: "center" }}
        //         >
        //           Login
        //         </Link>
        //       </li>
        //       <li className="nav-item2 active">
        //         <Link
        //           className="nav-link"
        //           to="/Signup"
        //           style={{ textAlign: "center" }}
        //         >
        //           SignUp
        //         </Link>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
//         <div className="wrapper">
//           <div className="form-wrapper">
//             <h3 style={{textAlign:'center'}}>Login Form</h3>
//             <form onSubmit={this.handleSubmit} noValidate>
              
              
//               <div className="email">
//                 <label htmlFor="email"><h6>Email</h6></label>
//                 <input
//                   className={formErrors.email.length > 0 ? "error" : null}
//                   placeholder="Email"
//                   type="email"
//                   name="email"
                  
//                   noValidate
//                   onChange={this.handleChange}
//                   ref={this.userEmaileRef}
//                 />
//                 {formErrors.email.length > 0 && (
//                   <span className="errorMessage">{formErrors.email}</span>
//                 )}
//               </div>
//               <div className="password">
//                 <label htmlFor="password"><h6>Password</h6></label>
//                 <input
//                   className={formErrors.password.length > 0 ? "error" : null}
//                   placeholder="Password"
//                   type="password"
//                   name="password"

//                   noValidate
//                   onChange={this.handleChange}
//                   ref={this.userPasswordRef}
//                 />
//                 {formErrors.password.length > 0 && (
//                   <span className="errorMessage">{formErrors.password}</span>
//                 )}
//               </div>
//               <div className="createAccount">
//               <button type="submit"  className="btn-primary"><Link to="/Users" style={{textDecoration:'none',color:'white'}}>Login</Link></button> 
//                 <Link to="/Signup" className="link" style={{textDecoration:'none'}}>you don't have account??- Please SignUp</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default welcom1;


import React, { Fragment, useState } from "react";
import { Link ,Redirect } from "react-router-dom";
import "./Login.css";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:3001/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
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
                  {" "}
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>

              
              <li className="nav-item1 active" style={{marginLeft:'270px'}}>
                <Link
                  className="nav-link"
                  to="/Login"
                  style={{ textAlign: "center" }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item2 active">
                <Link
                  className="nav-link"
                  to="/Signup"
                  style={{ textAlign: "center" }}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="wrapper" >
          <div className="form-wrapper">
      <h2 className="mt-2 text-center">Login</h2>
      <form  onSubmit={onSubmitForm}>
      <div className="email">
        <label htmlFor="email"><h6>Email</h6></label>
        <input style={{borderColor:'black'}}
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        </div>
        <div className="password">
          <label htmlFor="password"><h6>Password</h6></label>
        <input style={{borderColor:'black'}}
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        </div>
        <button class="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/Signup" style={{textDecoration:'none',textAlign:'center',color:'black'}}> <h6>you don't have account??- Please register</h6></Link>
      </div>
      </div>
    </Fragment>
  );
};

export default Login;
