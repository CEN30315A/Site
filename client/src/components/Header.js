import React, { Component } from "react";
import plc1 from "../plc1.jpg";
import plc2 from "../plc2.jpg";
import plc3 from "../plc3.jpg";
import {animateScroll as scroll } from "react-scroll";
import Carousel from 'react-bootstrap/Carousel';

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="header">
         <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {plc1}
              alt="First slide"
              //style={{height: 500 }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {plc2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {plc3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
