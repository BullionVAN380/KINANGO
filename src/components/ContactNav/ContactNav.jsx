import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './ContactNav.css';
import Logo from '../../utils/images/kinangoLogo.jpg';
import logo from '../../utils/images/kinangoLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ContactNav() {
  return (
    
    <Navbar bg="light" className="bg-body-tertiary py-2">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Brand Logo */}
        <Navbar.Brand className="mb-3 mb-md-0">
        <Link to="/" className='navbar-brand d-flex align-items-center'>
        <img src={logo} alt="logo" className="img-fluid rounded-circle" style={{ width: "45px", height: "45px" }} />
        <span className='mx-2 text-primary lh-1 fw-semibold fs-6'>
          Kinango Technical &
          <br />
          Vocational College
          <br />
        </span>
      </Link>
          
        </Navbar.Brand>

        {/* Contact details - Responsive layout */}
        <div className="d-flex flex-column flex-md-row justify-content-end align-items-start w-100">
          {/* Phone Section */}
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <FontAwesomeIcon className="icon-color fa-2x" icon={faPhone} />
            <span className="mx-2 text-primary lh-1 fw-semibold fs-6">
              Call:
              <br />
              0722000000
            </span>
          </div>

          {/* Email Section */}
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <FontAwesomeIcon className="icon-color fa-2x" icon={faEnvelope} />
            <span className="mx-2 text-primary lh-1 fw-semibold fs-6">
              Email:
              <br />
              ktvctechal@gmail.com
            </span>
          </div>

          {/* Address Section */}
          <div className="d-flex align-items-center">
            <FontAwesomeIcon className="icon-color fa-2x"icon={faMapMarkerAlt} />
            <span className="mx-2 text-primary lh-1 fw-semibold fs-6">
              Address:
              <br />
              Macknon Road, Mombasa Rd
            </span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default ContactNav;
