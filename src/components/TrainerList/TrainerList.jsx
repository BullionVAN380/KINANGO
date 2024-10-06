import React from 'react';
import TrainerCard from '../TrainerCard/TrainerCard';
import trainer1 from '../../utils/images/trainer1.jpg'


const trainers = [
  {
    image: trainer1,
    name: 'Josphat Bwire',
    department: 'Computation',
    course: 'ICT',
  },
  {
    image: trainer1,
    name: 'Baraka Ruwa',
    department: 'Humanity',
    course: 'Algebra',
  },
  {
    image: trainer1,
    name: 'Sam Brown',
    department: 'Engineering',
    course: 'Electrical',
  },
];

const TrainerList = () => (
  <div className="container mt-5">
    <div className="row">
      {trainers.map((trainer, index) => (
        
        <TrainerCard key={index} trainer={trainer} />
        
      ))}
    </div>
  </div>
);

export default TrainerList;
