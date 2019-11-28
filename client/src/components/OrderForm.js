import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Form from './Form.tsx';


function OrderForm() {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
    }



		return (
            <div>
                <button class="btn btn-outline-primary" type="button" onClick={handleShow}>
                    <i class="fa fa-shopping-cart"></i>
                    &nbsp;
                    Purchase Digi-Clamp
                </button>
                <ReactBootstrap.Modal show={show} onHide={handleShow}>
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            Order Form
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Form>                       
                            <ReactBootstrap.Form.Row>
                                <ReactBootstrap.Col>
                                    <ReactBootstrap.Form.Label>First Name</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control placeholder="First name" />
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col>
                                    <ReactBootstrap.Form.Label>Last Name</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control placeholder="Last name" />
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Form.Row>
                            <ReactBootstrap.Form.Row style = {{paddingTop : 10}}>
                                <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridEmail">
                                    <ReactBootstrap.Form.Label>Email</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control type="email" placeholder="Enter email" />
                                </ReactBootstrap.Form.Group>
                                <ReactBootstrap.Form.Group as={ReactBootstrap.Col} >
                                    <ReactBootstrap.Form.Label>Phone Number</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control placeholder="Phone Number" />
                                </ReactBootstrap.Form.Group>
                            </ReactBootstrap.Form.Row>
                            <ReactBootstrap.Form.Group controlId="formGridAddress1">
                                <ReactBootstrap.Form.Label>Address</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control placeholder="1234 Main St" />
                            </ReactBootstrap.Form.Group>
                            <ReactBootstrap.Form.Group controlId="formGridAddress2">
                                <ReactBootstrap.Form.Label>Address 2</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control placeholder="Apartment, studio, or floor" />
                            </ReactBootstrap.Form.Group>
                            <ReactBootstrap.Form.Row>
                                <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridCity">
                                    <ReactBootstrap.Form.Label>City</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control />
                                </ReactBootstrap.Form.Group>
                                <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridState">
                                    <ReactBootstrap.Form.Label>State</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control as="select">
                                        <option>Choose...</option>
                                        
			<option value="AK">Alaska</option>
			<option value="AL">Alabama</option>
			<option value="AR">Arkansas</option>
			<option value="AZ">Arizona</option>
			<option value="CA">California</option>
			<option value="CO">Colorado</option>
			<option value="CT">Connecticut</option>
			<option value="DC">District of Columbia</option>
			<option value="DE">Delaware</option>
			<option value="FL">Florida</option>
			<option value="GA">Georgia</option>
			<option value="HI">Hawaii</option>
			<option value="IA">Iowa</option>
			<option value="ID">Idaho</option>
			<option value="IL">Illinois</option>
			<option value="IN">Indiana</option>
			<option value="KS">Kansas</option>
			<option value="KY">Kentucky</option>
			<option value="LA">Louisiana</option>
			<option value="MA">Massachusetts</option>
			<option value="MD">Maryland</option>
			<option value="ME">Maine</option>
			<option value="MI">Michigan</option>
			<option value="MN">Minnesota</option>
			<option value="MO">Missouri</option>
			<option value="MS">Mississippi</option>
			<option value="MT">Montana</option>
			<option value="NC">North Carolina</option>
			<option value="ND">North Dakota</option>
			<option value="NE">Nebraska</option>
			<option value="NH">New Hampshire</option>
			<option value="NJ">New Jersey</option>
			<option value="NM">New Mexico</option>
			<option value="NV">Nevada</option>
			<option value="NY">New York</option>
			<option value="OH">Ohio</option>
			<option value="OK">Oklahoma</option>
			<option value="OR">Oregon</option>
			<option value="PA">Pennsylvania</option>
			<option value="PR">Puerto Rico</option>
			<option value="RI">Rhode Island</option>
			<option value="SC">South Carolina</option>
			<option value="SD">South Dakota</option>
			<option value="TN">Tennessee</option>
			<option value="TX">Texas</option>
			<option value="UT">Utah</option>
			<option value="VA">Virginia</option>
			<option value="VT">Vermont</option>
			<option value="WA">Washington</option>
			<option value="WI">Wisconsin</option>
			<option value="WV">West Virginia</option>
			<option value="WY">Wyoming</option>
                                    </ReactBootstrap.Form.Control>
                                </ReactBootstrap.Form.Group>
                                <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridZip">
                                    <ReactBootstrap.Form.Label>Zip</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control />
                                </ReactBootstrap.Form.Group>
                            </ReactBootstrap.Form.Row>
                        </ReactBootstrap.Form>
                    </ReactBootstrap.Modal.Body>
                    <ReactBootstrap.Modal.Footer>
                        <button class="btn btn-outline-primary" onClick={handleShow}>
                            Cancel
                        </button>
                        

                        <button class="btn btn-outline-primary" >
                            Click Here To Pay
                           <StripeProvider apiKey= "pk_test_LOEe7VBA0Zl8LYOL4QXw3U3Y00cpT2mN0C" >
                               <Elements>
                            <Form/>
                               </Elements>
                           </StripeProvider>
                        </button>
                    </ReactBootstrap.Modal.Footer>
                </ReactBootstrap.Modal>
            </div>


		);
	}

export default OrderForm;