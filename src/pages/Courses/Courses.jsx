import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import Electrical from '../../utils/images/electrical.jpg';
import Automotive from '../../utils/images/automotive.jpg';
import Bussness from '../../utils/images/bussness.jpg';
import ICT from '../../utils/images/ict.jpg';
import SupplyChain from '../../utils/images/supply.jpg';
import Hr from '../../utils/images/Hr.jpg';
import SocialWork from '../../utils/images/social.png';
import Fushon from '../../utils/images/fashon.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [Electrical],
        title: 'Electrical & Elrctronics Engineering',
        description: 'Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 2,
        img: [Automotive],
        title: 'Automotive Engineering',
        description: 'Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 3,
        img: [ICT],
        title: 'Information Communication & Technology',
        description: ' Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 4,
        img: [Bussness],
        title: 'Bussiness Management',
        description: ' Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 5,
        img: [SupplyChain],
        title: 'Supply Chain Management',
        description: 'Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 6,
        img: [Hr],
        title: 'Human Resourse Management',
        description: 'Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 7,
        img: [SocialWork],
        title: 'Social Work and Community Development',
        description: 'Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 8,
        img: [Fushon],
        title: 'Fashon & Design',
        description: ' Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>The following short courses are on offer in KTVC. Short courses are offered to individuals, corporate or tailor-made for organizations. Enroll today to meet your Continuous Professional Development (CPD) requirements and remain relevant in your profession.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6 ' >
                        <Card className='text-white shadow scale-hover-effect'>
                        <Card.Img src={course.img} className="img-fluid" />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-3 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='fs-6 text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;