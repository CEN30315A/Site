import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../placeholder.png";
import ModalComponent from './ModalComponent';

export default class ProductImages extends Component {
	constructor(props, context) {
		super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleShow3 = this.handleShow3.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleClose3 = this.handleClose3.bind(this);

		this.state = {
      show: false,
      show2: false,
      show3: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
  }

  handleClose2() {
		this.setState({ show2: false });
	}
  
  handleShow2() {
		this.setState({ show2: true });
  }

  handleClose3() {
		this.setState({ show3: false });
	}
  
  handleShow3() {
		this.setState({ show3: true });
  }

	render() {
		return (
            <div className="section">
                <div className="section-content">
                    <h1>Procedures</h1>
                    <div className="carousel-allign">
                    <h4>Skin Tags</h4>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {logo}
                          onClick={this.handleShow}
                          alt="First slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show} onHide={this.handleClose} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aQkPcPqTq4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={this.handleShow2}
                          alt="Second slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show2} onHide={this.handleClose2} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rTfa-9aCTYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose2}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={this.handleShow3}
                          alt="Third slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show3} onHide={this.handleClose3} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="765" height="575" title= "title1" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose3}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                    </Carousel>
                    <h4>Preauricular Tags</h4>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {logo}
                          onClick={this.handleShow}
                          alt="First slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show} onHide={this.handleClose} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aQkPcPqTq4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={this.handleShow2}
                          alt="Second slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show2} onHide={this.handleClose2} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rTfa-9aCTYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose2}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={this.handleShow3}
                          alt="Third slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show3} onHide={this.handleClose3} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="765" height="575" title= "title1" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose3}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                    </Carousel>
                    <h4>Polydoctyly Tags</h4>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {logo}
                          onClick={this.handleShow}
                          alt="First slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show} onHide={this.handleClose} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aQkPcPqTq4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={this.handleShow2}
                          alt="Second slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show2} onHide={this.handleClose2} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rTfa-9aCTYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose2}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={this.handleShow3}
                          alt="Third slide"
                        />
                        <ReactBootstrap.Modal show={this.state.show3} onHide={this.handleClose3} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="765" height="575" title= "title1" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={this.handleClose3}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
		);
	}
}