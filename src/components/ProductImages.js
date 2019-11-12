import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import google from "../google.png";
import logo from "../placeholder.png";


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
            <div className="section-light">
                <div className="section-content">
                    <h1>Procedures</h1>
                     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    <img
                        src={google}
                        alt = "Video skintag"
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
                            <iframe width="465" height="315" title= "title1" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                            <iframe width="465" height="315" title="title2" src="https://www.youtube.com/embed/ZnKvQbpDYXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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