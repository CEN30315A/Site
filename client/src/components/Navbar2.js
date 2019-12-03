import React, { Component } from "react";
import logo from "../xdg_header_mod.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavDropdown, Nav } from 'react-bootstrap'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
  <Navbar bg="light" expand="lg">
      <Nav>
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          
          <ul className="nav-items">
          
            <li className="nav-item">
              <a
                activeClass="active"
                href="#section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/about">Our Story</NavDropdown.Item>
            </NavDropdown>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                href="/home#section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Digi-Clamp
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                href="/procedures"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Procedures
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                href="/efficacy"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Clinical Efficacy
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                href="/home#section8"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Order
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                href="/home#section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                href="/home#section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FAQ
              </a>
            </li>

            <li className="nav-item">
              <a
                activeClass="active"
                href="/login"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Login
              </a>
            </li>
            
          </ul>
         
        </div>
      
       </Nav>
    </Navbar>
    );
  }
}
