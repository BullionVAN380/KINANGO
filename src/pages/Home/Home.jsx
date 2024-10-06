import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import startcourse from '../../utils/images/courses.jpg';
import JitumeImg from '../../utils/images/jitumie.jpg';
import BarazaImg from '../../utils/images/baraza.jpg';
import FresherImg from '../../utils/images/fresher.jpg';
import SliderShow from '../SliderShow/SliderShow';
import Noticeboard from '../../components/NoticeBoard/NoticeBoard';
import DashboardStats from '../../components/DashboardStats/DashboardStats';
import PartnersSection from '../../components/PartnersSection/PartnersSection';


const blogs = [
    {
        id: 1,
        img: [BarazaImg],
        title: 'Students Baraza',
        description: 'Baraza is a Kiswahili word meaning a public meeting(s) that is used as a platform for creating awareness, responding to issues affecting a given community, sharing vital information, providing citizens with the opportunity to identify and propose solutions to concerns.'
    },
    {
        id: 2,
        img: [JitumeImg],
        title: 'Jitume Training',
        description: 'Jitume is an Initiative aimed at providing the youth with access to Digital Services, Digital Skills, and Opportunities to enable them take advantage of technology for job creation..'
    },
    {
        id: 3,
        img: [FresherImg],
        title: 'Freshers Party',
        description: 'To introduce yourself as a fresher, start with a formal greeting, mention your name, where you are from and where you currently live, state your academic qualifications, highlight your key skills,.'
    }
];

function Home() {
  return (
    <div className='home-page'>
      <div >
         <SliderShow />
      </div>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className="py-5">
            <DashboardStats/>
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>Align with Accreditation Bodies: Ensure the courses meet the national and international educational standards. For example, in Kenya, the Curriculum Development, Assessment, and Certification Council (CDACC) approves technical courses.</p> 
                        <p>Hands-on Learning: Focus on practical, hands-on training that prepares students for real-world applications. Technical education should balance theory with experiential learning.</p>  
                        <p> Incorporate Modern Technology: Include the latest tools, software, and techniques that reflect current industry practices.</p> 
                        <p>  Course Structure: Define the duration, modules, and assessment methods for each course. For example, split courses into semesters with theoretical lessons, lab work, and internships.t.</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={startcourse} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
           <Noticeboard/>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h1 className="mb-4">
                    <span className="text">Latest</span> On Updates
                </h1>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Updates</button>
                </Link>
            </div>
        </div>

        <div className="py-5">
            <PartnersSection/>
        </div>

    </div>
  )
}

export default Home;