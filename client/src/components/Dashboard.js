import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from ".././actions/authActions";
import OrderForm from './OrderForm';
import Table from 'react-bootstrap/Table'

const axios = require("axios");

class Dashboard extends Component {
  state = {
    rows: []
};

async componentDidMount(){
  const response = await axios.get('/retrieve_orders')

  let data = response['data']

  let newRows = []

  data.map(transaction=>{
      newRows.push(
          <tr>
              <td>Token</td>
              <td>{transaction['email']} </td>
              <td>{transaction['date']} </td>
              <td>{transaction['quantity']} </td>
              <td>{transaction['firstname']} </td>
              <td>{transaction['lastname']} </td>
              <td>{transaction['phonenumber']} </td>
              <td>{transaction['address1']} </td>
              <td>{transaction['address2']} </td>
              <td>{transaction['city']} </td>
              <td>{transaction['stateUS']} </td>
              <td>{transaction['zipcode']} </td>
          </tr>
      );
  });

  this.setState({rows: newRows});
          
          
}
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    //check for admin
    const admin = user.id === "5de5b062d795790c74e3d80d";

    const regUser = 
<div style={{ height: "75vh" }} className="container valign-wrapper">
  <div className="row">
    <div className="landing-copy col s12 center-align">
    <br/>
      <h4>
        <b>Hi</b> {user.name.split(" ")[0]}!
        
      </h4>
      <br/><br/>
      <h5>Order below</h5>
      <br/>
      <OrderForm/>
      <br/>
      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
        }}
        onClick={this.onLogoutClick}
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  </div>
</div>







const adminPage = 
<div>
  <Table striped bordered hover>
      <thead>
          <tr>
          <th>Token (Transaction Number) </th>
          <th>Email</th>
          <th>Date</th>
          <th>Quantity</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Address1</th>
          <th>Address2</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          </tr>
      </thead>
      <tbody>
          {this.state.rows}
      </tbody>
  </Table>
  <button
    style={{
    width: "150px",
    borderRadius: "3px",
    letterSpacing: "1.5px",
    marginTop: "1rem"
    }}
  onClick={this.onLogoutClick}
  className="btn btn-primary"
  >
    Logout
  </button>
</div>
    
      const page = admin ? adminPage : regUser;
    return (
      page
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);