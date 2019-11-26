import React, { useState } from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../placeholder.png";

export default function ProductImages ({ title, dark, id }) {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleShow1 = () => {
		setShow1(!show1);
  }

  const handleShow2 = () => {
    setShow2(!show2);
  }

  const handleShow3 = () => {
    setShow3(!show3);
  }

	return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
          <div className="carousel-allign">
            <h4>Skin Tags</h4>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {logo}
                          onClick={handleShow1}
                          alt="First slide"
                        />
                        <ReactBootstrap.Modal show={show1} onHide={handleShow1} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" title="title1" src="https://www.youtube.com/embed/aQkPcPqTq4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow1}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={handleShow2}
                          alt="Second slide"
                        />
                        <ReactBootstrap.Modal show={show2} onHide={handleShow2} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" title="title2" src="https://www.youtube.com/embed/rTfa-9aCTYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow2}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={handleShow3}
                          alt="Third slide"
                        />
                        <ReactBootstrap.Modal show={show3} onHide={handleShow3} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="765" height="575" title= "title3" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow3}>
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
                          onClick={handleShow1}
                          alt="First slide"
                        />
                        <ReactBootstrap.Modal show={show1} onHide={handleShow1} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" title="title4" src="https://www.youtube.com/embed/aQkPcPqTq4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow1}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={handleShow2}
                          alt="Second slide"
                        />
                        <ReactBootstrap.Modal show={show2} onHide={handleShow2} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" title="title5" src="https://www.youtube.com/embed/rTfa-9aCTYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow2}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={handleShow3}
                          alt="Third slide"
                        />
                        <ReactBootstrap.Modal show={show3} onHide={handleShow3} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="765" height="575" title= "title6" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow3}>
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
                          onClick={handleShow1}
                          alt="First slide"
                        />
                        <ReactBootstrap.Modal show={show1} onHide={handleShow1} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" title="title7" src="https://www.youtube.com/embed/aQkPcPqTq4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow1}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={handleShow2}
                          alt="Second slide"
                        />
                        <ReactBootstrap.Modal show={show2} onHide={handleShow2} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="560" height="315" title="title8" src="https://www.youtube.com/embed/rTfa-9aCTYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow2}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={logo}
                          onClick={handleShow3}
                          alt="Third slide"
                        />
                        <ReactBootstrap.Modal show={show3} onHide={handleShow3} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Body>
                            <iframe width="765" height="575" title= "title1" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow3}>
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
  
