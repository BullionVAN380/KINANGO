import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import logo from './utils/images/kinangoLogo.jpg';
import Contact from './pages/Contact/Contact';
import Downloads from './pages/Downloads/Downloads';
import Portal from './pages/Portals/Portal';
import { NavDropdown } from 'react-bootstrap';
import ContactNav from './components/ContactNav/ContactNav';
import Noticeboard from './components/NoticeBoard/NoticeBoard';
import PrincipalMessage from './components/PrincipalMessage/PrincipalMessage';
import AboutKTVC from './components/AboutKTVC/AboutKTVC';
import WhyChooseKTVC from './components/WhyChooseKTVC/WhyChooseKTVC';
import TrainerList from './components/TrainerList/TrainerList';
import FaqAccordion from './components/FaqAccordion/FaqAccordion';
import { useState } from 'react'; // Import useState

function App() {
  const [expanded, setExpanded] = useState(false); // State to track Navbar toggle

  const handleToggle = () => setExpanded(!expanded); // Toggle function
  const handleLinkClick = () => setExpanded(false); // Close on link click

  return (
    <div>
      <ContactNav />
      <Navbar expand="lg" className='position-sticky w-100 fixed-top bg-purple' expanded={expanded}>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' onClick={handleToggle} />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Link to='/' className='custom-link nav-link text-uppercase' onClick={handleLinkClick}>Home</Link>
              <Link to='/courses' className='custom-link nav-link text-uppercase' onClick={handleLinkClick}>Our Courses</Link>

              <NavDropdown title="About Us" id="aboutus-dropdown" className='text-uppercase'>
                <NavDropdown.Item as={Link} to="/aboutktvc" className="custom-link" onClick={handleLinkClick}>About KTVC</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/whychoosektvc" className="custom-link" onClick={handleLinkClick}>Why Choose KTVC</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainers" className="custom-link" onClick={handleLinkClick}>Trainers</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/principalmessage" className="custom-link" onClick={handleLinkClick}>Principal Message</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="News & Events" id="news-dropdown" className='text-uppercase'>
                <NavDropdown.Item as={Link} to="/news" className="custom-link" onClick={handleLinkClick}>News</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/events" className="custom-link" onClick={handleLinkClick}>Events</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/noticeboard" className="custom-link" onClick={handleLinkClick}>Noticeboard</NavDropdown.Item>
              </NavDropdown>

              <Link to='/contact' className='custom-link nav-link text-uppercase' onClick={handleLinkClick}>Get in Touch</Link>
              <Link to='/downloads' className='custom-link nav-link text-uppercase' onClick={handleLinkClick}>Downloads</Link>

              <NavDropdown title="Portal" id="portal-dropdown" className='text-uppercase'>
                <NavDropdown.Item href="https://intellimis.com/login" className="custom-link" onClick={handleLinkClick}>Students</NavDropdown.Item>
                <NavDropdown.Item href="https://intellimis.com/back-login" className="custom-link" onClick={handleLinkClick}>Staff</NavDropdown.Item>
                <NavDropdown.Item href="https://intellimis.com/#free-demo" className="custom-link" onClick={handleLinkClick}>Help</NavDropdown.Item>
                <NavDropdown.Item href="https://intellimis.com/faq" className="custom-link" onClick={handleLinkClick}>FAQs</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path='/portal' element={<Portal />} />
        <Route path='/news' element={<Blog />} />
        <Route path='/events' element={<Blog />} />
        <Route path='/noticeboard' element={<Noticeboard />} />
        <Route path='/aboutktvc' element={<AboutKTVC />} />
        <Route path='/whychoosektvc' element={<WhyChooseKTVC />} />
        <Route path='/principalmessage' element={<PrincipalMessage />} />
        <Route path='/trainers' element={<TrainerList />} />
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
              </Link>
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
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/courses" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Our courses</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About us</li>
                    </Link>
                    <Link to="/blog" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>News </li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Get In Touch</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>© 2024 Copyright KTVC ICT SUPPORT, All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
