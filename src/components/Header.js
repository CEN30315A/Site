import React, { Component } from "react";
import logo from "../xdg_header_mod.svg";
import {animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="header" id="header">
        <div className="nav-content">
          <img
            src={logo}
            className="head-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          
        </div>
      </nav>
    );
  }
}
