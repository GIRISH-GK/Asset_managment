// import React from "react";
// import { Link } from 'react-router-dom'
// import  "./Sign_up.css";
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
//         <Link className="nav-link" to="/Login">Login</Link>
//       </li> 
//       <li className="nav-item2 active"> 
//         <Link className="nav-link" to="/Signup">SignUp</Link>
//       </li> 
    
      
    
//     {/* <li className="nav-item2 active"> 
//         <Link className="nav-link" to="/Assets">addAssets</Link>
//       </li> */}
//       </ul>
   
//   </div>
// </nav>
//       <div className="main" >
        
//         {/* <h3 style={{textAlign:"center"}}>SignUp Form</h3> */}
//         <div>
          
//         </div>
//         {this.state.isFormSubmitted ? (
//           <div className="details">
//             <h3>Thanks for signing up, find your details below:</h3>
//             <div className="details">First Name: {this.state.firstName}</div>
//             <div className="details">Last Name: {this.state.lastName}</div>
//             <div className="details">Email Address: {this.state.emailAddress}</div>
//             <Link to="/profile" className="link"></Link>
//           </div>
//         ) : (
//           <div style={{textAlign:"center"}} className="sign">
//           <form class="border" onSubmit={this.handleSubmit} >
//             <input
//               type="text"
//               placeholder="First Name"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.firstNameError && (
//               <div className="errorMsg">{this.state.firstNameError}</div>
//             )}
//             <br></br>
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.lastNameError && (
//               <div className="errorMsg">{this.state.lastNameError}</div>
//             )}

//             <br></br>
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
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               name="passwordConfirmation"
//               value={this.state.passwordConfirmation}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.passwordConfirmationError && (
//               <div className="errorMsg">
//                 {this.state.passwordConfirmationError}
//               </div>
//             )}
//             <br></br>
//             <button className="btn-primary">Signup</button>
//           </form>
//           </div>
//         )}
//       </div>
//       </>
//     );

//   }
// }
// export default FormComponent;
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Sign_up.css";

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

// class App1 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: null,
//       lastName: null,
//       email: null,
//       password: null,
//       formErrors: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//       },
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     if (formValid(this.state)) {
//       console.log(`
//         --SUBMITTING--
//         First Name: ${this.state.firstName}
//         Last Name: ${this.state.lastName}
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
//       case "firstName":
//         formErrors.firstName =
//           value.length < 3  ? "This field required" : "";
//         break;
//       case "lastName":
//         formErrors.lastName =
//           value.length < 2 ? "  This field required" : "";
//         break;
//       case "email":
//         formErrors.email = emailRegex.test(value)
//           ? ""
//           : "invalid email address";
//         break;
//       case "password":
//         formErrors.password =
//           value.length < 8  ? "minimum 8 characaters required" : "";
//         break;
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };

//   render() {
//     const { formErrors } = this.state;

//     return (
//       <>
//         <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#e3f2fd'}}>
//           {/* <a class="navbar-brand" href="#"> */}
//           <img
//             src="/images/img23.png"
//             width="30"
//             height="30"
//             alt=""
//             loading="lazy"
//           />

//           <Link className="navbar-brand" to="#">
//             {" "}
//             Asset Managment System
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav">
//               <li className="nav-item active">
//                 <Link className="nav-link" to="/">
//                   {" "}
//                   Home <span class="sr-only">(current)</span>
//                 </Link>
//               </li>

//               <div></div>
//               <li className="nav-item1 active" style={{marginLeft:'250px'}}>
//                 <Link
//                   className="nav-link"
//                   to="/Login"
//                   style={{ textAlign: "center" }}
//                 >
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item2 active">
//                 <Link
//                   className="nav-link"
//                   to="/Signup"
//                   style={{ textAlign: "center" }}
//                 >
//                   SignUp
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
       
//         <div className="wrapper">
//           <div className="form-wrapper">
//             <h3 style={{textAlign:'center'}}>SignUp Form</h3>
//             <form onSubmit={this.handleSubmit} noValidate>
//               <div className="firstName">
//                 <label htmlFor="firstName"><h6>First Name</h6></label>
//                 <input
//                   className={formErrors.firstName.length > 0 ? "error" : null}
//                   placeholder="First Name"
//                   type="text"
//                   name="firstName"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//                 {formErrors.firstName.length > 0 && (
//                   <span className="errorMessage">{formErrors.firstName}</span>
//                 )}
//               </div>
//               <div className="lastName">
//                 <label htmlFor="lastName"><h6>Last Name</h6></label>
//                 <input
//                   className={formErrors.lastName.length > 0 ? "error" : null}
//                   placeholder="Last Name"
//                   type="text"
//                   name="lastName"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//                 {formErrors.lastName.length > 0 && (
//                   <span className="errorMessage">{formErrors.lastName}</span>
//                 )}
//               </div>
//               <div className="email">
//                 <label htmlFor="email"><h6>Email</h6></label>
//                 <input
//                   className={formErrors.email.length > 0 ? "error" : null}
//                   placeholder="Email"
//                   type="email"
//                   name="email"
//                   noValidate
//                   onChange={this.handleChange}
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
//                 />
//                 {formErrors.password.length > 0 && (
//                   <span className="errorMessage">{formErrors.password}</span>
//                 )}
//               </div>
//               <div className="createAccount">
//               <button type="submit"  className="btn-primary"><Link to="/Login" style={{textDecoration:'none',color:'white'}}>Signup</Link></button>
//               <Link to="/Login" className="link" style={{textDecoration:'none'}}>Already Have an Account?-Please Login</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default App1;

import React, { Fragment, useState } from "react";
import { Link,Redirect } from "react-router-dom";
import './Sign_up.css';

import { toast } from "react-toastify";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:3001/authentication/register",
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
        toast.success("Register Successfully");
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
        <div className="wrapper">
          <div className="form-wrapper">
      <h2 className="mt-2 text-center">Register</h2>
      <form  onSubmit={onSubmitForm}>
      <div className="email">
        <label htmlFor="email"><h6>Name</h6></label>
      <input style={{borderColor:'black'}}
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        </div>

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
        
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/Login" style={{textDecoration:'none',textAlign:'center',color:'black'}}><h6>Already Have an Account?-Please Login</h6></Link>
      </div>
      </div>
    </Fragment>
  );
};

export default Register;