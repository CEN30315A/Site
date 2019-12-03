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
         <Carousel fade="true" indicators="" controls="">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {plc1}
              alt="First slide"
              height={250}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
