import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';





function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut ratione dolore quasi at dolores molestias.</p>
            </div>
        </header>

        <div className='container my-5'>
            <h1>About KTVC</h1>
            
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        
        
    </div>
  )
}

export default About;