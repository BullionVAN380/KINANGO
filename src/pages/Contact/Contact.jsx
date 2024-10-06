import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import KwaleLocationImg from '../../utils/images/kwaleImage.jpg';
import SamburuLocationImg from '../../utils/images/samburuImage.png';
import MacknoneLocationImg from '../../utils/images/macknone.jpg';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                
                <h1 className="mb-4">
                    <span className="text">Get</span> In Touch
                </h1>
                <p className='text-center w-75 mb-5'> We would love to hear from you! Whether you have questions about our programs, need assistance with the application process, or want to learn more about our campus facilities, feel free to reach out. Your future starts here, and we are here to help you every step of the way!</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='Your address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>County</Form.Label>
                        <Form.Select defaultValue="Select Your County">
                            <option>Select Your County</option>
                            <option>Kilifi</option>
                            <option>Mombasa</option>
                            <option>Kwale</option>
                            <option>Lamu</option>
                            <option>TaitaTaveta</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control placeholder='Postcode' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Locations</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={KwaleLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Kwale</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={SamburuLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Samburu</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={MacknoneLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Macknone Rd</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;