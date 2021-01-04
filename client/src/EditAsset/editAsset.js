import axios from 'axios';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Link} from 'react-router-dom';
import './editAsset.css'
import Button from 'react-bootstrap/Button';



export default class EditAsseta extends Component {

    constructor(props) {
        super(props)
    
    //this.onChangeAssetTitle = this.onChangeAssetTitle.bind(this);
    this.onChangeAssetCatagory = this.onChangeAssetCatagory.bind(this);
    this.onChangeAssetQuantity = this.onChangeAssetQuantity.bind(this);
    this.onChangeAssetPrice = this.onChangeAssetPrice.bind(this);
    this.onChangeAssetTotal = this.onChangeAssetTotal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
        // State
        this.state = {
           // title: '',
            catagory: '',
            quantity: '',
            price:'',
            total:''
          }
      }
      componentDidMount() {
      

        axios.get("http://localhost:3001/getAsset/" + this.props.match.params.title )
        
          .then(res => {
            console.log(res.data);
            this.setState({
              //title: res.data.addAsset[0].title,
              catagory: res.data.addAsset[0].catagory,
              quantity: res.data.addAsset[0].quantity,
              price: res.data.addAsset[0].price,
              total:res.data.addAsset[0].total
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      // onChangeAssetTitle(e) {
      //   this.setState({title: e.target.value})
      // }
    
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
         // title:this.state.title,
          catagory:this.state.catagory,
          quantity:this.state.quantity,
          price:this.state.price,
          total:this.state.total
        };
    
        axios.put("http://localhost:3001/api/v1/addAsset/" + this.props.match.params.title, assetObject)
          .then((res) => {
            console.log(res.data.addAsset)
            alert('Assets successfully updated')
            console.log('Assets successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect 
        this.props.history.push('/Assets')
        axios.get("http://localhost:3001/getAsset/")
        .then(res => {
            // console.log(res.data);
            this.setState({ userObject: res.data.addAsset });
        })
        .catch(function (error) {
            console.log(error);
        })

      }
      
    

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

          <li className="nav-item1 active" style={{marginLeft:'150px'}}>
            <Link className="nav-link" to="/AdminLogin">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>  
          
          <div className="upd">  
            <h3 style={{textAlign:'center'}}>Update the Asset</h3>
            <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        {/* <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeAssetTitle}/>
        </Form.Group> */}

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

        <Button variant="warning" size="lg" block="block" type="submit">
        <Link to="/Assets" style={{textDecoration:'none',color:'white'}}>Update</Link> 
        </Button>
      </Form>
    </div>
    </div>
    </>
    }
}