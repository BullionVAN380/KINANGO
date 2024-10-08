import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaAward } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; // Importing Intersection Observer

const StatsCard = ({ icon, number, label }) => {
  // Hook to track when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when it becomes visible
    threshold: 0.3,     // How much of the component should be visible (30%)
  });

  return (
    <div className="col-md-3 col-sm-6 text-center mb-4" ref={ref}>
      <div className="mb-3">
        {icon}
      </div>
      <h1>
        {inView ? <CountUp end={number} duration={3} /> : 0}  {/* Start counting when inView is true */}
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
          number={34} 
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
