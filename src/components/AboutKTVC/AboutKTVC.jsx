import React from 'react';
import './AboutKTVC.css';

function AboutKTVC() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About KTVC</h1>
      
      <div className="mb-4">
        <p className="lead">
          KTVC is a State Corporation established by Section 3 of the Kenya Medical
          Training College Act (Cap 261 of the laws of Kenya), and falls under the 
          Ministry of Health. The College is entrusted with the role of training 
          various disciplines in the health sector, conducting research, and consultancy.
          The College has 84 Campuses and 5 satellites, strategically located in 45 of the
          47 counties in the country, offering 95 medical courses within its 18
          departments.
        </p>
      </div>

      <div className="mb-4">
        <strong>Vision</strong>
        <p>A globally competitive institution for training human resource for health.</p>
      </div>

      <div className="mb-4">
        <strong>Mission</strong>
        <p>To develop fit-for-purpose middle-level health professionals through transformative training, research, and consultancy.</p>
      </div>

      <div className="mb-4">
        <strong>Core Values</strong>
        <ul className="list-unstyled">
          <li>Accountability</li>
          <li>Integrity</li>
          <li>Responsiveness</li>
          <li>Equity</li>
          <li>Teamwork</li>
          <li>Professionalism</li>
          <li>Creativity and Innovation</li>
        </ul>
      </div>

      <div className="mb-4">
        <strong>KTVC Programmes (as at January 2024)</strong>
        <ul className="list-unstyled">
          <li>Clinical Medicine and Surgery (Certificate, Diploma and Higher Diploma)</li>
          <li>Community Oral Health (Diploma)</li>
          <li>Dental Technology (Diploma)</li>
          <li>Health Promotion and Community Health (Certificate, Diploma and Higher Diploma)</li>
          <li>Health Records and Information Technology (Certificate and Diploma)</li>
          <li>Medical Education (Higher Diploma)</li>
        </ul>
      </div>

      <div className="mb-4">
        <strong>Short courses (as at January 2024)</strong>
        <ul className="list-unstyled">
          <li>Safe Phlebotomy</li>
          <li>HIV Training and Counseling Services (HTS)</li>
          <li>Adherence Counseling</li>
          <li>Echocardiography</li>
          <li>Monitoring & Evaluation</li>
          <li>Healthcare Entrepreneurship</li>
          <li>Safe Phlebotomy</li>
          <li>Infection Prevention and Control</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutKTVC;
