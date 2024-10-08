import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaAward } from 'react-icons/fa';
import CountUp from 'react-countup'; // Importing CountUp for number animations

const StatsCard = ({ icon, number, label }) => {
  return (
    <div className="col-md-3 col-sm-6 text-center mb-4">
      <div className="mb-3">
        {icon}
      </div>
      {/* Animated CountUp for numbers */}
      <h1>
        <CountUp end={number} duration={3} /> {/* Animates counting to the target number */}
      </h1>
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
          number={2000} 
          label="Total Number of Trainees" 
        />
        <StatsCard 
          icon={<FaChalkboardTeacher className='icon-color fa-2x' size={50} />} 
          number={40} 
          label="Number of Trainers" 
        />
        <StatsCard         
          icon={<FaBook className='icon-color fa-2x' size={50} />} 
          number={15} 
          label="Number of Programs" 
        />
        <StatsCard          
          icon={<FaAward className='icon-color fa-2x' size={50} />} 
          number={2} 
          label="Number of Examination Boards" 
        />
      </div>
    </div>
  );
};

export default DashboardStats;
