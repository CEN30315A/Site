import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Redirect } from 'react-router'


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
                <ReactBootstrap.Form action="/api/orders/submit_order" method="post" target="_self">
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            Order Form

                            </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>

                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Form.Row>
                            <ReactBootstrap.Col>
                                <ReactBootstrap.Form.Label>Quantity</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control placeholder="Quantity" name="quantity" id="quantity" />
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Form.Row>
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
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
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