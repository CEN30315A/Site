import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

function OrderForm() {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
    }

		return (
            <div>
                <button className="btn btn-outline-primary" type="button" onClick={handleShow}>
                    <i className="fa fa-shopping-cart"></i>
                    &nbsp;
                    Purchase Digi-Clamp
                </button>

                <ReactBootstrap.Modal show={show} onHide={handleShow}>
                    <ReactBootstrap.Form action="/api/orders/submit_order" method="post">
                        <ReactBootstrap.Modal.Header closeButton>
                            <ReactBootstrap.Modal.Title>
                                Order Form
                            </ReactBootstrap.Modal.Title>
                        </ReactBootstrap.Modal.Header>

                        <ReactBootstrap.Modal.Body>
                                <ReactBootstrap.Form.Row>
                                    <ReactBootstrap.Col>
                                        <ReactBootstrap.Form.Label>First Name</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control placeholder="First name" name="firstname" id="firstname" />
                                    </ReactBootstrap.Col>

                                    <ReactBootstrap.Col>
                                        <ReactBootstrap.Form.Label>Last Name</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control placeholder="Last name" name="lastname" id="lastname" />
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Form.Row>

                                <ReactBootstrap.Form.Row>
                                    <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridEmail">
                                        <ReactBootstrap.Form.Label>Email</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="email" placeholder="Enter email" name="email" id="email" />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group as={ReactBootstrap.Col} >
                                        <ReactBootstrap.Form.Label>Phone Number</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control placeholder="Phone Number" name="phonenumber" id="phonenumber" />
                                    </ReactBootstrap.Form.Group>
                                </ReactBootstrap.Form.Row>

                                <ReactBootstrap.Form.Group controlId="formGridAddress1">
                                    <ReactBootstrap.Form.Label>Address</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control placeholder="1234 Main St" name="address1" id="address1" />
                                </ReactBootstrap.Form.Group>

                                <ReactBootstrap.Form.Group controlId="formGridAddress2">
                                    <ReactBootstrap.Form.Label>Address 2</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control placeholder="Apartment, studio, or floor" name="address2" id="address2" />
                                </ReactBootstrap.Form.Group>

                                <ReactBootstrap.Form.Row>
                                    <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridCity">
                                        <ReactBootstrap.Form.Label>City</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control name="city" id="city" />
                                    </ReactBootstrap.Form.Group>

                                    <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridState">
                                        <ReactBootstrap.Form.Label>State</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control as="select" name="stateUS" id="stateUS">
                                            <option>Choose...</option>
                                            <option>AL</option>
                                            <option>AK</option>
                                            <option>AZ</option>
                                            <option>AR</option>
                                            <option>CA</option>
                                            <option>CO</option>
                                            <option>CT</option>
                                            <option>DE</option>
                                            <option>FL</option>
                                            <option>GA</option>
                                            <option>HI</option>
                                            <option>ID</option>
                                            <option>IL</option>
                                        </ReactBootstrap.Form.Control>
                                    </ReactBootstrap.Form.Group>

                                    <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridZip">
                                        <ReactBootstrap.Form.Label>Zip</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control name="zipcode" id="zipcode" />
                                    </ReactBootstrap.Form.Group>
                                </ReactBootstrap.Form.Row>
                            </ReactBootstrap.Modal.Body>

                            <ReactBootstrap.Modal.Footer>
                                <button class="btn btn-outline-primary" onClick={handleShow}>
                                    Cancel
                                </button>

                                {/* <input class="btn btn-outline-primary" type="submit" id="submitDetails" name="submitDetails" value="Submit" /> */}
                                <button class="btn btn-outline-primary" type="Submit">
                                    Checkout
                                </button>
                            </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Form>
                    </ReactBootstrap.Modal>
            </div>
		);
	}

export default OrderForm;