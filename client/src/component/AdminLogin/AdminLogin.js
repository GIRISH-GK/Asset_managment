// import React, { Component,useState } from "react";
// import { Link } from "react-router-dom";
// import "./AdminLogin.css";

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

// class welcom3 extends Component {
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
//         Email: ${this.state.email}
//         Password: ${this.state.password}
//       `);
//     } else {
//       console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
//       alert("Invalid credentials");
//     }
//   };

//   handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       // case "firstName":
//       //   formErrors.firstName =
//       //     value.length < 3 ? "minimum 3 characaters required" : "";
//       //   break;
//       // case "lastName":
//       //   formErrors.lastName =
//       //     value.length < 3 ? "minimum 3 characaters required" : "";
//       //   break;
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
//               <li className="nav-item1 active" style={{marginLeft:'350px'}}>
//                 <Link
//                   className="nav-link"
//                   to="/AdminLogin"
//                   // style={{ textAlign: "center" }}
//                 >
//                   Login
//                 </Link>
//               </li>
//               {/* <li className="nav-item2 active">
//                 <Link
//                   className="nav-link"
//                   to="/Signup"
//                   style={{ textAlign: "center" }}
//                 >
//                   SignUp
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//         </nav>
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
//               <button type="submit"  className="btn-primary"><Link to="/Assets" style={{textDecoration:'none',color:'white'}}>Login</Link></button> 
//                 <Link to="/AdminLogin" className="link" style={{textDecoration:'none',color:'black'}}> <h6>Hey are you Admin?? yes- Please Login</h6></Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default welcom3;


import React, { Fragment, useState } from "react";
import { Link ,Redirect } from "react-router-dom";
import "./AdminLogin.css";

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

              
              {/* <li className="nav-item1 active" style={{marginLeft:'270px'}}>
                <Link
                  className="nav-link"
                  to="/AdminLogin"
                  style={{ textAlign: "center" }}
                >
                  Login
                </Link>
              </li> */}
              {/* <li className="nav-item2 active">
                <Link
                  className="nav-link"
                  to="/Signup"
                  style={{ textAlign: "center" }}
                >
                  Register
                </Link>
              </li> */}
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
      <Link to="/AdminLogin" style={{textDecoration:'none',textAlign:'center',color:'black'}}><h6>Hey are you Admin?? yes- Please Login</h6></Link>
      </div>
      </div>
    </Fragment>
  );
};

export default Login;

