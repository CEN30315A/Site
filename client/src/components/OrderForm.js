import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';

class OrderForm extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
            <div>
                <button class="btn btn-outline-primary" type="button" onClick={this.handleShow}>
                    <i class="fa fa-shopping-cart"></i>
                    &nbsp;
                    Purchase Digi-Clamp
                </button>
                <ReactBootstrap.Modal show={this.state.show} onHide={this.handleClose}>
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            Order Form
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <form>
                        <input
                            type = "text"
                            placeholder = "First Name"
                            ref={ (code) => this.code = code }
                        />
                        </form>
                        <form>
                            <input
                                type="text"
                                placeholder="Last Name"
                                ref = { (name) => this.name = name }
                            />
                        </form>
                        <form>
                            <input
                                type = "text"
                                placeholder = "Address Line 1"
                                ref = { (latitude) => this.latitude = latitude }
                            />
                        </form>
                        <form>
                            <input
                                type = "text"
                                placeholder = "Address Line 2"
                                ref = { (longitude) => this.longitude = longitude }
                            />
                        </form>
                        <form>
                            <input
                                type = "text"
                                placeholder = "City"
                                ref = { (address) => this.address = address }
                            />
                        </form>
                        <form>
                            <input
                                type = "text"
                                placeholder = "Zip Code"
                                ref = { (address) => this.address = address }
                            />
                        </form>
                        <form>
                            <input
                                type = "text"
                                placeholder = "State"
                                ref = { (address) => this.address = address }
                            />
                        </form>
                        <form>
                            <input
                                type = "text"
                                placeholder = "Email Address"
                                ref = { (address) => this.address = address }
                            />
                        </form>
                        <form>
                            <input
                                type = "text"
                                placeholder = "Phone Number"
                                ref = { (address) => this.address = address }
                            />
                        </form>
                    </ReactBootstrap.Modal.Body>
                    <ReactBootstrap.Modal.Footer>
                        <button class="btn btn-outline-primary" onClick={this.handleClose}>
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
}

export default OrderForm;