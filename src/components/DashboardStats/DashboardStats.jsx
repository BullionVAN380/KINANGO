import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaAward } from 'react-icons/fa';

const StatsCard = ({ icon, number, label }) => {
  return (
    <div className="col-md-3 text-center">
      <div className="mb-3">
        {icon}
      </div>
      <h1>{number}</h1>
      <p>{label}</p>
    </div>
  );
};

const DashboardStats = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <StatsCard 
          icon={<FaUserGraduate className='icon-color fa-2x' size={50} />} 
          number="2,000" 
          label="Total Number of Trainees" 
        />
        <StatsCard 
          icon={<FaChalkboardTeacher className='icon-color fa-2x' size={50} />} 
          number="34" 
          label="Number of Trainers" 
        />
        <StatsCard         
          icon={<FaBook className='icon-color fa-2x' size={50} />} 
          number="15" 
          label="Number of Programs" 
        />
        <StatsCard          
          icon={<FaAward className='icon-color fa-2x' size={50} />} 
          number="2" 
          label="Number of Examination Boards" 
        />
      </div>
    </div>
  );
};

export default DashboardStats;
