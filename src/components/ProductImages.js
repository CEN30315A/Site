import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import google from "../google.png";


class ProductImages extends Component {
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
            <div className="section-dark">
                <div className="section-content">
                    <h1>Procedures</h1>
                    <img
                        src={google}
                        onClick={this.handleShow}
                        className="nav-logo"
                    />
                    &nbsp;&nbsp;&nbsp; 
                    <button class="btn btn-outline-primary" onClick={this.handleShow}>
                        Skin Tags
                    </button>
                    <ReactBootstrap.Modal show={this.state.show} onHide={this.handleClose}>
                        <ReactBootstrap.Modal.Header closeButton>
                            <ReactBootstrap.Modal.Title>
                                Skin Tags
                            </ReactBootstrap.Modal.Title>
                        </ReactBootstrap.Modal.Header>
                        <ReactBootstrap.Modal.Body>
                            <iframe width="465" height="315" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose}>
                                Close
                            </button>
                        </ReactBootstrap.Modal.Footer>
                    </ReactBootstrap.Modal>
                    &nbsp;&nbsp;&nbsp; 
                    <button class="btn btn-outline-primary" onClick={this.handleShow}>
                        Polydoctyly Tags
                    </button>
                    <ReactBootstrap.Modal show={this.state.show} onHide={this.handleClose}>
                        <ReactBootstrap.Modal.Header closeButton>
                            <ReactBootstrap.Modal.Title>
                                Skin Tags
                            </ReactBootstrap.Modal.Title>
                        </ReactBootstrap.Modal.Header>
                        <ReactBootstrap.Modal.Body>
                            <iframe width="465" height="315" src="https://www.youtube.com/embed/ZnKvQbpDYXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose}>
                                Close
                            </button>
                        </ReactBootstrap.Modal.Footer>
                    </ReactBootstrap.Modal>
                </div>
            </div>
		);
	}
}

export default ProductImages;