import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function PortalBaner() {
  return (
    <div className="container my-5 d-flex justify-content-between align-items-center bg-purple text-white p-4 rounded shadow">
      {/* Left Side: Text Content */}
      <div className="text-start">
        <p className="mb-1">Congratulations! Your KTVC Journey Starts Here.</p>
        <p className="h5 fw-bold mt-2">CLICK HERE TO ACCESS THE NEW PORTAL</p>
      </div>

      {/* Right Side: Button */}
      <a href="https://intellimis.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-light text-primary fw-semibold shadow-sm">
        CLICK HERE
      </a>
    </div>
  )
}

export default PortalBaner
