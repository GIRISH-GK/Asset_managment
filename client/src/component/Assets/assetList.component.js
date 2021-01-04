// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Assets.css";
// import axios from "axios";

// export default class CurrentAssets extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { assetCollection: [] };
//     this.deleteAsset = this.deleteAsset.bind(this);
//   }

//   deleteAsset = (title) => {
//     if (window.confirm("Are you sure to delete this record?")) {
      
//       axios.delete("http://localhost:3001/api/v1/addAsset/title" + title)
//         .then((res) => {
//           console.log("Asset successfully deleted!");
//           alert("Deleted succesfully");
//           this.setState({
//             assetCollection: this.state.assetCollection.filter(
//               (addAsset) => addAsset.title !== title
//             ),
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };
//   componentDidMount() {
    
//  axios.get("http://localhost:3001/getAsset")
//       .then((res) => {
//         console.log(res.data);
//         this.setState({ assetCollection: res.data.addAsset });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
//                 <Link className="nav-link" to="/Assets">
//                   Services
//                 </Link>
//               </li>
//               <li className="nav-item2 active">
//                 <Link className="nav-link" to="/addAssets">
//                   Addassets
//                 </Link>
//               </li>
//               <li className="nav-item2 active">
//                 <Link className="nav-link" to="/General">
//                   Report
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <Link className="nav-link" to="/Contacts">
//                   Contact
//                 </Link>
//               </li>

//               <li className="nav-item1 active">
//                 <Link className="nav-link" to="/Login">
//                   Logout
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <div>
//           <div className="col-md-7">
//             <h3 className="ma"> Manage the Current assets</h3>
//             <Link to="/addAssets">
//               {" "}
//               <button type="button" id="b" className="btn btn-primary">
//                 Addassets
//               </button>
//             </Link>
//             <table className="table table-dark table-striped ">
//               <thead className="thead-dark">
//                 <tr>
//                   <th>Title</th>
//                   <th>Category</th>
//                   <th>Quantity</th>
//                   <th>Price</th>
//                   <th>Total</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                   {this.state.assetCollection.map(data => (
                   
//                     <tr>
//                     <td>{data.title}</td>
//                     <td>{data.catagory}</td>
//                     <td>{data.quantity}</td>
//                     <td>{data.price}</td>
//                     <td>{data.total}</td>

//                     <td>
//                       <Link to={"/edit_addAsset/" + data.title}>
//                         <button
//                           size="sm"
//                           style={{ cursor: "pointer" }}
//                           className="btn text-info fas fa-pencil-alt"
//                         ></button>
//                       </Link>
//                       <button
//                         size="sm"
//                         onClick={() => this.deleteAsset(data.title)}
//                         className="btn text-danger far fa-trash-alt"
//                       ></button>
//                     </td>
//                   </tr>
//                 ))}
                
//               </tbody>
                   
//             </table>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
 
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Assets.css'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//import assetTableRow from './assetTableRow';


export default class assetList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      assets: []
    };
    this.deleteAssets = this.deleteAssets.bind(this);
  }

  deleteAssets = (title) => {
    axios.delete("http://localhost:3001/api/v1/addAsset/" + title)
        .then((res) => {
           console.log(res.data.addAsset)
            console.log('Asset successfully deleted!')
            this.setState({
              assets: this.state.assets.filter(assets => assets.title !== title)
            })
        }).catch((error) => {
            console.log(error)
        })
}

  componentDidMount() {
    axios.get("http://localhost:3001/getAsset")
      .then(res => {
       
        this.setState({
          assets: res.data.data.addAsset
        });
        console.log(this.state.assets)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // DataTable() {
  //   return this.state.assets.map((res, i) => {
  //     return <assetTableRow obj={res} key={i} />;
  //   });
  // }


  render() {
    return <>
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
          <li className="nav-item active">
            <Link className="nav-link" to="/Assets">
              Services
            </Link>
          </li>
          <li className="nav-item2 active">
            <Link className="nav-link" to="/addAssets">
              Addassets
            </Link>
          </li>
          {/* <li className="nav-item2 active">
            <Link className="nav-link" to="/General">
              Report
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link className="nav-link" to="/Contacts">
              Contact
            </Link>
          </li>

          <li className="nav-item1 active" style={{marginLeft:'130px'}}>
            <Link className="nav-link" to="/AdminLogin">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="table-wrapper">
    
            <h3 style={{textAlign:'center'}}> Manage the Current assets</h3>
             <Link to="/addAssets">
               {" "}
               <Button size="sm" variant="success" id="b" >
                 Addassets
               </Button>
             </Link>
      <Table className=" container table table-dark table-striped mt-5 ">
        <thead className="table table-light">
          <tr>
            <th>Title</th>
            <th>Catagory</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {this.state.assets.map(data => (
          <tr key={data.title}>
                <td>{data.title}</td>
                <td>{data.catagory}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
                <td>{data.total}</td>
                <td>
                 <Button size="sm" variant="warning">   <Link className="edit-link" style={{textDecoration:'none',color:'white'}} to={"/EditAsset/" + data.title }>
                        Update
                    </Link> </Button>
                    
                  <Button onClick={ () => this.deleteAssets(data.title)} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
           ) )}
        </tbody>
      </Table>
    </div>
    </>
  }
}
