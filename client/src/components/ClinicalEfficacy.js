import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import logo from "../placeholder.png";

export default function ClinicalEfficacy({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <CardDeck>
          <Card className="card-color" text="white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Skin Tags</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
              <Card.Link href="#">Statistical Results</Card.Link>
              <br/>
              <Card.Link href="#">Link to Research Paper</Card.Link>
            </Card.Body>
          </Card>
          <Card className="card-color" text="white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Preauricular Tags</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
                <button class="btn btn-outline-primary">
                  White Paper
                </button>
            </Card.Body>
          </Card>
          <Card className="card-color" text="white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Polydoctyly Tags</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
              <button class="btn btn-outline-primary">
                White Paper
              </button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}
