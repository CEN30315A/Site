import React, { Component } from "react";
import logo from "../xdg_header_mod.svg";
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
              src= {logo}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
