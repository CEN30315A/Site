import React, { useState } from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import skin_tag_before from '../skin_tag_before.jpg';
import skin_tag_during1 from '../skin_tag_during1.jpg';
import skin_tag_during2 from '../skin_tag_during2.jpg';
import skin_tag_during3 from '../skin_tag_during3.jpg';
import skin_tag_followup from '../skin_tag_followup.jpg';
import prea_before from '../prea_before.JPG';
import prea_during_1 from '../prea_during_1.JPG';
import prea_during_2 from '../prea_during_2.JPG';
import prea_after from '../prea_after.JPG';
import poly_before from '../poly_before.jpg';
import poly_during_1 from '../poly_during_1.jpg';
import poly_during_2 from '../poly_during_2.jpg';
import poly_after from '../poly_after.jpg';
//images for the product section
//once clicked it will go to another product image.
export default function ProductImages ({ title, dark, id }) {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);

  const handleShow1 = () => {
		setShow1(!show1);
  }

  const handleShow2 = () => {
    setShow2(!show2);
  }

  const handleShow3 = () => {
    setShow3(!show3);
  }

  const handleShow4 = () => {
    setShow4(!show4);
  }

  const handleShow5 = () => {
    setShow5(!show5);
  }

  const handleShow6 = () => {
    setShow6(!show6);
  }

  const handleShow7 = () => {
    setShow7(!show7);
  }

  const handleShow8 = () => {
    setShow8(!show8);
  }

  const handleShow9 = () => {
    setShow9(!show9);
  }

  const handleShow10 = () => {
    setShow10(!show10);
  }

  const handleShow11 = () => {
    setShow11(!show11);
  }

  const handleShow12 = () => {
    setShow12(!show12);
  }

  const handleShow13 = () => {
    setShow13(!show13);
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
                          src= {skin_tag_before}
                          onClick={handleShow1}
                          alt="First slide"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show1} onHide={handleShow1} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Small Skin Tag Before Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src= {skin_tag_before}
                              alt="First slide"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
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
                          src={skin_tag_during1}
                          onClick={handleShow2}
                          alt="Second slide"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show2} onHide={handleShow2} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Small Skin Tag During Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src={skin_tag_during1}
                              alt="Second slide"
                              height={550}
                            />
                         </ReactBootstrap.Modal.Body>
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
                          src={skin_tag_during2}
                          onClick={handleShow3}
                          alt="Third slide"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show3} onHide={handleShow3} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Small Skin Tag During Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src={skin_tag_during2}
                              alt="Third slide"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow3}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={skin_tag_during3}
                          onClick={handleShow4}
                          alt="Fourth slide"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show4} onHide={handleShow4} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Small Skin Tag During Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src={skin_tag_during3}
                              alt="Fourth slide"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow4}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={skin_tag_followup}
                          onClick={handleShow5}
                          alt="Fifth slide"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show5} onHide={handleShow5} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Small Skin Tag Follow-up Visit
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src={skin_tag_followup}
                              alt="Fifth slide"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow5}>
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
                          src= {prea_before}
                          onClick={handleShow10}
                          alt="First slide2"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show10} onHide={handleShow10} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Newborn Preauricular Tag Before Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src= {prea_before}
                              alt="First slide2"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow10}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={prea_during_1}
                          onClick={handleShow11}
                          alt="Second slide2"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show11} onHide={handleShow11} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Newborn Preauricular Tag During Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src= {prea_during_1}
                              alt="Second slide2"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow11}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={prea_during_2}
                          onClick={handleShow12}
                          alt="Third slide2"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show12} onHide={handleShow12} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Newborn Preauricular Tag During Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src= {prea_during_2}
                              alt="Third slide2"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow12}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={prea_after}
                          onClick={handleShow13}
                          alt="Fourth slide2"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show13} onHide={handleShow13} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Newborn Preauricular Tag After Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src= {prea_after}
                              onClick={handleShow10}
                              alt="Fourth slide2"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow13}>
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
                          src= {poly_before}
                          onClick={handleShow6}
                          alt="First slide3"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show6} onHide={handleShow6} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Large Newborn Finger Before Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src= {poly_before}
                              alt="First slide3"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow6}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={poly_during_1}
                          onClick={handleShow7}
                          alt="Second slide3"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show7} onHide={handleShow7} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Large Newborn Finger During Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src={poly_during_1}
                              alt="Second slide3"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow7}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={poly_during_2}
                          onClick={handleShow8}
                          alt="Third slide3"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show8} onHide={handleShow8} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Large Newborn Finger During Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src={poly_during_2}
                              alt="Third slide3"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow8}>
                              Close
                            </button>
                          </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={poly_after}
                          onClick={handleShow9}
                          alt="Fourth slide3"
                          height={550}
                        />
                        <ReactBootstrap.Modal show={show9} onHide={handleShow9} size="lg">
                          <ReactBootstrap.Modal.Header closeButton>
                          </ReactBootstrap.Modal.Header>
                          <ReactBootstrap.Modal.Title>
                            Large Newborn Finger After Removal
                          </ReactBootstrap.Modal.Title>
                          <ReactBootstrap.Modal.Body>
                            <img
                              className="d-block w-100"
                              src={poly_after}
                              alt="Fourth slide3"
                              height={550}
                            />
                          </ReactBootstrap.Modal.Body>
                          <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow9}>
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
  
