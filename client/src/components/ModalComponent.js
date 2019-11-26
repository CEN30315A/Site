import React, { useState } from "react";
import * as ReactBootstrap from 'react-bootstrap';

export default function ModalComponent ({body}) { 

    const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
    }

	return (
        <div className="section">
            <div className="section-content">

                    <ReactBootstrap.Modal show={show} onHide={handleShow} size="lg">
                        <ReactBootstrap.Modal.Header closeButton>
                        </ReactBootstrap.Modal.Header>
                        <ReactBootstrap.Modal.Body>
                            <img
                            className="d-block w-100"
                                src = {body}
                                onClick={handleShow}
                                alt="Second slide"
                            />
                            
                        </ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Modal.Footer>
                            <button class="btn btn-outline-primary" onClick={handleShow}>
                                Close
                            </button>
                        </ReactBootstrap.Modal.Footer>
                    </ReactBootstrap.Modal>               
            </div>
        </div>
	);
};