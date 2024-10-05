import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import news from '../../utils/images/news1.png';


const blogs = [
    {
        id: 1,
        img: [news],
        title: 'Wanyonyi: My ambition to be Nairobi governor is unstoppable.',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 2,
        img: {news},
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 3,
        img: [news],
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 4,
        img: [news],
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 5,
        img: [news],
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 6,
        img: [news],
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 7,
        img: [news],
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 8,
        img: [news],
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
    {
        id: 9,
        img: [news],
        title: 'Kinango KTVC',
        description: 'My journey to City Hall 2027 is still on. I expect Westlands to give me 100 per cent of the voteWanyonyi said his determination is fuelled by a conviction that Nairobi’s leadership needs a visionary approach.'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>NEWS & EVENTS</h1>
                <p className='text-center w-75 mb-5'></p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;