// import React from 'react';
// import './addAssets.css';
// 
// import axios from 'axios';



//import React from 'react'

// export default class AddEdit extends React.Component {

//   constructor(props){
//     super(props)

//     this.onChangeAssetTitle = this.onChangeAssetTitle.bind(this);
//     this.onChangeAssetCatagory = this.onChangeAssetCatagory.bind(this);
//     this.onChangeAssetQuantity = this.onChangeAssetQuantity.bind(this);
//     this.onChangeAssetPrice = this.onChangeAssetPrice.bind(this);
//     this.onChangeAssetTotalPrice = this.onChangeAssetTotalPrice.bind(this);
    
//   }

//     onFormSubmitted = (event) => {
//         event.preventDefault();
//     }

//     render() {
//         return <>
//          <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       {/* <a class="navbar-brand" href="#"> */}
//     <img src="/images/img23.png" width="30" height="30" alt="" loading="lazy"/>
  
//   <Link className="navbar-brand" to="#"> Asset Managment System</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav" >
//       {/* <li className="nav-item active">
        
//         <Link className="nav-link" to="/"><FaHome/> Home <span class="sr-only">(current)</span></Link>
//       </li> */}
      
//       <li className="nav-item active">
//         <Link className="nav-link" to="/Assets">Services</Link>
//       </li>
//       <li className="nav-item2 active"> 
//         <Link className="nav-link" to="/addAssets">Addassets</Link>
//       </li>
//       <li className="nav-item2 active"> 
//         <Link className="nav-link" to="/General">Report</Link>
//       </li>
//       <li className="nav-item active" >
//         <Link className="nav-link" to="/Contacts">Contact</Link>
//       </li>
      
//      <li className="nav-item1 active">
//         <Link className="nav-link" to="/Login">Logout</Link>
//       </li>
       
//       </ul>
   
//   </div>
// </nav>
//             <h4 style={{textAlign:'center'}}>Add the Assets</h4>
//             <div className="wrapper1">
//                 <div className="form-wrapper2">
//                     <div className="col-md-5 offset-md-2">
//                         <form className="border" onSubmit={this.onFormSubmitted}>
//                             <div className="form-group">
//                                 <label><h6>Title</h6></label>
//                                 <input className="be" type="text" name="Title_name" 
//                                 placeholder="Enter Title" className="form-control"
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label><h6>Catagory</h6></label>
//                                 <input className="be" type="text" name="Catagory" 
//                                 placeholder="Catagory" className="form-control"
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label><h6>Quantity</h6></label>
//                                 <input  className="be" type="text" name="Quantity" 
//                                 placeholder="Quantity" className="form-control"
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label><h6>Price</h6></label>
//                                 <input className="be" type="text" name="Price" 
//                                 placeholder="Price" className="form-control"
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label><h6>Total Price</h6></label>
//                                 <input  type="text" name="Total Price" 
//                                 placeholder="Total Price" className="form-control"
//                                 />
//                             </div>
                            
//                             <Link to="/Assets" className="link" className="btn btn-success" >Addassets</Link>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     }
// }


import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import { Link} from 'react-router-dom'
import './addAssets.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class CreateAssets extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAssetTitle = this.onChangeAssetTitle.bind(this);
     this.onChangeAssetCatagory = this.onChangeAssetCatagory.bind(this);
     this.onChangeAssetQuantity = this.onChangeAssetQuantity.bind(this);
     this.onChangeAssetPrice = this.onChangeAssetPrice.bind(this);
     this.onChangeAssetTotal = this.onChangeAssetTotal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: '',
      catagory: '',
      quantity: '',
      price:'',
      total:''
    }
  }

  onChangeAssetTitle(e) {
    this.setState({title: e.target.value})
  }

  onChangeAssetCatagory(e) {
    this.setState({catagory: e.target.value})
  }

  onChangeAssetQuantity(e) {
    this.setState({quantity: e.target.value})
  }
  onChangeAssetPrice(e) {
    this.setState({price: e.target.value})
  }
  onChangeAssetTotal(e) {
    this.setState({total: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const assetObject = {
      title:this.state.title,
      catagory:this.state.catagory,
      quantity:this.state.quantity,
      price:this.state.price,
      total:this.state.total
    };
    axios.post('http://localhost:3001/api/v1/addAsset',assetObject)
    .then(res => console.log(res.data));
    alert('Assets details added Successfully');
    // console.log(`Assets successfully created!`);
    // console.log(`Title: ${this.state.Title}`);
    // console.log(`Catagory: ${this.state.Catagory}`);
    // console.log(`Quantity: ${this.state.Quantity}`);
    // console.log(`Price: ${this.state.Price}`);
    // console.log(`TotalPrice: ${this.state.TotalPrice}`);
    this.props.history.push('/Assets')

    this.setState({Title: '', Catagory: '', Quantity: '',Price:'',Total:''});
  }

  render() {
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
      
       <li className="nav-item active">
         <Link className="nav-link" to="/Assets">Services</Link>
       </li>
       <li className="nav-item2 active"> 
         <Link className="nav-link" to="/addAssets">Addassets</Link>
       </li>
       {/* <li className="nav-item2 active"> 
         <Link className="nav-link" to="/General">Report</Link>
       </li> */}
       <li className="nav-item active" >
         <Link className="nav-link" to="/Contacts">Contact</Link>
       </li>
      
      <li className="nav-item1 active" style={{marginLeft:'120px'}}>
         <Link className="nav-link" to="/AdminLogin">Logout</Link>
       </li>
       
       </ul>
   
   </div>
 </nav>
    
      <div className="img">
       <h3 style={{textAlign:'center',color:'black'}}>Add the Asset</h3>
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label><h6>Title</h6></Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeAssetTitle}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>Catagory</h6></Form.Label>
          <Form.Control type="catagory" value={this.state.catagory} onChange={this.onChangeAssetCatagory}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>Quantity</h6></Form.Label>
          <Form.Control type="text" value={this.state.quantity} onChange={this.onChangeAssetQuantity}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>Price</h6></Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangeAssetPrice}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>TotalPrice</h6></Form.Label>
          <Form.Control type="text" value={this.state.total} onChange={this.onChangeAssetTotal}/>
        </Form.Group>

        <Button variant="success" size="lg" block="block" type="submit">
        <Link to="/Assets" style={{textDecoration:'none', color:'white'}}>Add</Link> 
        </Button>
      </Form>
    </div>
    </div>
    </>
  }
  
}