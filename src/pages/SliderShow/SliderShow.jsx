import React from 'react'
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './SliderShow.css';
import SliderImage from '../../components/Slider/Slider';

function SliderShow() {
  return (
    <div>

    <Carousel className="h-100 w-100">
      <Carousel.Item className="h-100">
        <SliderImage text="First slide" slideNumber={0} />       
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <SliderImage text="Second slide" slideNumber={1} />  
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <SliderImage text="Third slide" slideNumber={2} />
      </Carousel.Item>
    </Carousel>
  </div>

  )
}

export default SliderShow
