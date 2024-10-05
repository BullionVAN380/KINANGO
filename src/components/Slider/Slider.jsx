import React from 'react';
import PropTypes from 'prop-types';
import Slider1 from '../../utils/images/slider.jpg';
import Slider2 from '../../utils/images/home.jpg';
import Slider3 from '../../utils/images/lab.jpg';

function Slider({ text, slideNumber }) {
  // Array of image sources
  const images = [Slider1, Slider2, Slider3];

  // Set the current image based on slideNumber
  const currentImage = images[slideNumber];

  return (
    <>
      <img
        className="d-block w-100 h-100 mt-0"
        src={currentImage}
        alt={text}
        style={{ height: '500px', objectFit: 'cover' }}
      />
    </>
  );
}

Slider.propTypes = {
  text: PropTypes.string.isRequired,
  slideNumber: PropTypes.number.isRequired, // Added slideNumber prop
};

export default Slider;
