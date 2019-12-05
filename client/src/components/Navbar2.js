import React, { Component } from "react";
import logo from "../xdg_header_mod.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavDropdown, Nav, Navbar } from 'react-bootstrap'

export default class Navbar2 extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
  <div className="nav-content">
  <Navbar bg="light" expand="lg" sticky="top">
        
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#section1">Home</Nav.Link>


            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/about">Awards and Recognition</NavDropdown.Item>
              <NavDropdown.Item href="/about">Our Story</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/#section2">Digi-Clamp</Nav.Link> 

            <Nav.Link href="/procedures">Procedures</Nav.Link>
            <NavDropdown title="Procedures" id="basic-nav-dropdown">
              <NavDropdown.Item href="/procedures">Skin Tags</NavDropdown.Item>
              <NavDropdown.Item href="/procedures">Polydactyl</NavDropdown.Item>
              <NavDropdown.Item href="/procedures">Preaurical Tags</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Efficacy" id="basic-nav-dropdown">
              <NavDropdown.Item href="/procedures">Skin Tags</NavDropdown.Item>
              <NavDropdown.Item href="/procedures">Polydactyl</NavDropdown.Item>
              <NavDropdown.Item href="/procedures">Preaurical Tags</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#section8">Order</Nav.Link>
            <Nav.Link href="/#section3">Contact Us</Nav.Link>
            <Nav.Link href="/#section4">FAQ</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>

           </Nav> 
           </Navbar.Collapse> 
          
         
        
      
       
    </Navbar>
    </div>
    );
  }
}
