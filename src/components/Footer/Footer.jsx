import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom CSS for the lines
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="pt-4" style={{ backgroundColor: 'plum', color: 'black' }}>
        <div className="container">
          {/* Top Line */}
          <hr style={{ borderColor: '#fff', borderWidth: '2px' }} />

          <div className="row">
            {/* Contact Us Section */}
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>
                Kinango Technical & Vocational College.<br />
                Mombasa - Nairobi Road<br />
                P.O. BOX 6790-00, Samburu, K.<br />
                Email Us:<br />
                <a 
                  href="mailto:info@kmtc.ac.ke" 
                  className="text-black" 
                  style={{ textDecoration: 'none' }}
                >
                  kinangotvc@.ac.ke
                </a><br />
                <a 
                  href="kinangotvc@.ac.ke" 
                  className="text-black" 
                  style={{ textDecoration: 'none' }}
                >
                  admissions@ktvc.ac.ke
                </a>
              </p>

              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="/contact">
                  <li>
                    <i className="fa fa-facebook" style={{ fontSize: '32px', color: '#800080' }}></i>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <i className="fa fa-x-twitter" style={{ fontSize: '32px', color: '#800080' }}></i>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <i className="fa fa-tiktok" style={{ fontSize: '32px', color: '#800080' }}></i>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <i className="fa fa-youtube" style={{ fontSize: '32px', color: '#800080' }}></i>
                  </li>
                </Link>
              </ul>
              <Link to="/contact">
                <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
              </Link>
            </div>

            {/* Quick Links Section */}
            <div className="col-md-4">
              <h5 >Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link 
                    to="/" 
                    className="text-black" 
                    style={{ textDecoration: 'none' }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-black" 
                    style={{ textDecoration: 'none' }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="https://intellimis.com/login" 
                    className="text-black" 
                    style={{ textDecoration: 'none' }}
                  >
                   Student Portal
                  </Link>
                </li>
                <li>
                  <Link 
                    to="https://intellimis.com/back-login" 
                    className="text-black" 
                    style={{ textDecoration: 'none' }}
                  >
                    Staff Portal
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/downloads" 
                    className="text-black" 
                    style={{ textDecoration: 'none' }}
                  >
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/noticeboard" 
                    className="text-black" 
                    style={{ textDecoration: 'none' }}
                  >
                    Noticeboard
                  </Link>
                </li>
              </ul>
            </div>


            {/* YouTube Section */}
            <div className="col-md-4">
              <h5>YouTube</h5>
              <div className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/your-video-link"
                  title="KMTC Campus"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="text-muted">
                Disclaimer: The presentation of the information on this website in no way represents the expression of a political opinion whatsoever on the part of KTVC. Region, county, and community names are used solely for ease of reference and do not indicate a political or territorial preference.
              </p>
            </div>
          </div>
        </div>

        {/* Top Button with Line */}
        <div className="text-center pb-2">
          <a href="#top" className="btn btn-outline-light top-button">TOP</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
