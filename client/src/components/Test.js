import React, { useState } from "react";
import * as ReactBootstrap from 'react-bootstrap';

function Test ({body}) { 

    const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
    }

	return (
        <div className="section">
            <div className="section-content">
            <button class="btn btn-outline-primary" type="button" onClick={handleShow}>
                                    Purchase Digi-Clamp
                </button>
                    <ReactBootstrap.Modal show={show} onHide={handleShow} size="lg">
                        <ReactBootstrap.Modal.Header closeButton>
                        </ReactBootstrap.Modal.Header>
                        <ReactBootstrap.Modal.Body>
                            {body}
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

export default Test;