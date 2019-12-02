import React, { Component } from "react";
import plc1 from "../Carlos.jpg";

import {animateScroll as scroll } from "react-scroll";
import Carousel from 'react-bootstrap/Carousel';

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="header">
         <Carousel fade="true" indicators="true" controls="true" >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {plc1}
              alt="First slide"
              height={250}
              //style={{height: 500 }}
            />
            <Carousel.Caption>
              <h3>Introducing the Digi-Clamp.</h3>
              <p>Old Problems. New Solution.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
