import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import large_skin_tag from '../large_skin_tag.jpg';
import clinical_prea from '../clinical_prea.JPG';
import clinical_poly from '../clinical_poly.JPG';

//Clinical efficacy
//images for the cards
//after clicking images you are directed to google drive with more information
export default function ClinicalEfficacy({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <CardDeck>
          <Card className="card-color" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={large_skin_tag} />
            <Card.Body>
              <Card.Title>Skin Tags</Card.Title>
              <Card.Text>
              </Card.Text>
              <a href="https://drive.google.com/file/d/14-1DtiGnqudbjF_5XakhE3Q9kLSXFL11/view?usp=sharing" style={{ color: '#F6D058' }}>Link to Skin Tag White Paper</a>
            </Card.Body>
          </Card>
          <Card className="card-color" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={clinical_prea} />
            <Card.Body>
              <Card.Title>Preauricular Tags</Card.Title>
                <Card.Text>
                </Card.Text>
                <a href="https://drive.google.com/file/d/1f7lvdy9OvBskxCT2obcMNIQMJSZW5r5D/view?usp=sharing" style={{ color: '#F6D058' }}>Link to Digi-Clamp Summary</a>
            </Card.Body>
          </Card>
          <Card className="card-color" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={clinical_poly} />
            <Card.Body>
              <Card.Title>Polydoctyly Tags</Card.Title>
              <Card.Text>
              </Card.Text>
              <a href="https://drive.google.com/file/d/1nrnTwWGSjvYoYQ_NwhfZUyjxQ859bpvI/view?usp=sharing" style={{ color: '#F6D058' }}>Link to Polydoctyly Tag Procecure</a>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}
