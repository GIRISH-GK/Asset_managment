
import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import { Link} from 'react-router-dom';
import './users.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class RequestAssets extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAssetName = this.onChangeAssetName.bind(this);
     this.onChangeAssetPhone_number = this.onChangeAssetPhone_number.bind(this);
    this.onChangeAssetTitle = this.onChangeAssetTitle.bind(this);
     this.onChangeAssetCatagory = this.onChangeAssetCatagory.bind(this);
     this.onChangeAssetQuantity = this.onChangeAssetQuantity.bind(this);
     
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name:'',
      phone_number:'',
      title: '',
      catagory: '',
      quantity: ''
     
    }
  }

  onChangeAssetName(e) {
    this.setState({name: e.target.value})
  }
  onChangeAssetPhone_number(e) {
    this.setState({phone_number: e.target.value})
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
  

  onSubmit(e) {
    e.preventDefault()

    const assetObject = {
      name:this.state.name,
      phone_number:this.state.phone_number,
      title:this.state.title,
      catagory:this.state.catagory,
      quantity:this.state.quantity
      
    };
    axios.post('http://localhost:3001/api/v1/request',assetObject)
    .then(res => console.log(res.data));
    // console.log(`Assets successfully created!`);
    // console.log(`Title: ${this.state.Title}`);
    // console.log(`Catagory: ${this.state.Catagory}`);
    // console.log(`Quantity: ${this.state.Quantity}`);
    // console.log(`Price: ${this.state.Price}`);
    // console.log(`TotalPrice: ${this.state.TotalPrice}`);
       this.props.history.push('/UserReq')
    this.setState({Name: '', Phone_Number: '', Title: '',Catagory:'',Quantity:''});
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
        <li className="nav-item2 active">
                <Link className="nav-link" to="/General">
                  Report
                </Link>
              </li>
      
       {/* <li className="nav-item active">
         <Link className="nav-link" to="/General">Report</Link>
       </li>
       <li className="nav-item2 active"> 
         <Link className="nav-link" to="/addAssets">Addassets</Link>
       </li>
       <li className="nav-item2 active"> 
         <Link className="nav-link" to="/General">Report</Link>
       </li>
       <li className="nav-item active" >
         <Link className="nav-link" to="/Contacts">Contact</Link>
       </li> */}
      
      <li className="nav-item1 active" style={{marginLeft:'350px'}}>
         <Link className="nav-link" to="/Dashboard">Logout</Link>
       </li>
       
       </ul>
   
   </div>
 </nav>
 <div className="user">
<h3 style={{textAlign:'center'}}>Request Form</h3>
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label><h6>Name</h6></Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeAssetName}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>Phone Number</h6></Form.Label>
          <Form.Control type="text" value={this.state.Phone_Number} onChange={this.onChangeAssetPhone_number}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>Title</h6></Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeAssetTitle}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>Catagory</h6></Form.Label>
          <Form.Control type="text" value={this.state.catagory} onChange={this.onChangeAssetCatagory}/>
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label><h6>Quantity</h6></Form.Label>
          <Form.Control type="text" value={this.state.quantity} onChange={this.onChangeAssetQuantity}/>
        </Form.Group>

        <Button variant="success" size="lg" block="block" type="submit"
        style={{textDecoration:'none',color:'white'}}>send
        </Button>
      </Form>
    </div>
    </div>
    </>
  }
}