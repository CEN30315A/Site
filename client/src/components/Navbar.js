import React, { Component } from "react";
import logo from "../xdg_header_mod.png";
import { Link, animateScroll as scroll } from "react-scroll";
 import { NavLink, Switch, Route } from 'react-router-dom';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
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
                href="/#section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                activeClass="active"
                to="/about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="/home#section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Digi-Clamp
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                activeClass="active"
                to="/efficacy"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Clinical Efficacy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClass="active"
                to="/procedures"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Procedures
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                href="/#section3"
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
                href="/#section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </a>
            </li>
            
            <li className="nav-item" >
    
              <a
                activeClass="active"
                href="/#section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              
                FAQ
              
              </a>
            
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}
