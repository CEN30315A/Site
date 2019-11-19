import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

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
                            <ReactBootstrap.Form.Row>
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
                                        <option>...</option>
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
                        <button class="btn btn-outline-primary">
                            Checkout
                        </button>
                    </ReactBootstrap.Modal.Footer>
                </ReactBootstrap.Modal>
            </div>
		);
	}

export default OrderForm;