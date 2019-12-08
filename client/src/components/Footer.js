import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link} from "react-scroll";
import { SocialIcon } from 'react-social-icons';


//Footer information allowing user to see all of the components
//Provides links to social media
const Footer = () => {
  return (
    <MDBFooter color="primary-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Follow XDG Technologies:</h5>
            <SocialIcon url="https://www.facebook.com/xdgtechnologies" bgColor="#F6D058" />
            &nbsp;
            &nbsp;
            <SocialIcon url="https://twitter.com/xdgtechnologies" bgColor="#F6D058" />
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Digi-Clamp
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Procedures
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Clinical Efficacy
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section8"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Order
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FAQ
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section7"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                activeClass="active"
                to="section8"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Login
              </Link>
            </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; <a href="http://xdgtechnologies.com/" style={{ color: '#F6D058' }}> XDG Technologies </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;