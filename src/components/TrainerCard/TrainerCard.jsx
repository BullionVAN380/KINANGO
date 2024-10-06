import React from 'react';

const TrainerCard = ({ trainer }) => (
  <div className="col-md-4">
    <div className="card mb-4">
      <img src={trainer.image} className="card-img-top" alt={`${trainer.name}'s photo`} />
      <div className="card-body">
        <h5 className="card-title">{trainer.name}</h5>
        <p className="card-text">
          <strong>Department:</strong> {trainer.department}
        </p>
        <p className="card-text">
          <strong>Course:</strong> {trainer.course}
        </p>
      </div>
    </div>
  </div>
);

export default TrainerCard;
