import React from "react";
import Table from 'react-bootstrap/Table'

const axios = require("axios"); 


class AdminPage extends React.Component {
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
                    <td>"Token" </td>
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
    
    render(){
        return (
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
            </div>
        )
    }

    // return (

    //     <div>
    //         <h1>asdakskd</h1>
    //         <table>
    //             <thead>
    //                 <th>Token (Transaction Number) </th>
    //                 <th>Email</th>
    //                 <th>Date</th>
    //                 <th>Quantity</th>
    //                 <th>First Name</th>
    //                 <th>Last Name</th>
    //                 <th>Phone Number</th>
    //                 <th>Address1</th>
    //                 <th>Address2</th>
    //                 <th>City</th>
    //                 <th>State</th>
    //                 <th>Zip</th>
    //             </thead>
    //             <tbody>
    //                 {rows}
    //             </tbody>
    //         </table>
    //     </div>
    //      )
}

export default AdminPage;
