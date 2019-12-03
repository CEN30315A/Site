import React, { Component } from "react";
import logo from "../xdg_header_mod.png";
import { Link, animateScroll as scroll } from "react-scroll";

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
              <a
                activeClass="active"
                href="/about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </a>
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
                href="/home#section3"
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
                href="/home#section4"
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
                href="/home#section5"
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
                href="/home#section6"
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
      </nav>
    );
  }
}
