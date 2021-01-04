import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class assetTableRow extends Component {
    render() {
        
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.catagory}</td>
                <td>{this.props.obj.quantity}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.total}</td>
                <td>
                    <Link className="edit-link" to={"/addAsset/" + this.props.obj._title}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}