import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Feebarner from '../../utils/images/fee.png'

function FeeStructure() {
  return (
    <div className="container mt-5">
      {/* Image section */}
      <div className="position-relative text-center">
        {/* Background Image */}
        <img
          src={Feebarner} 
          alt="Fees Background"
          className="img-fluid"
          style={{
            height: "300px",
            width: "100%"
          }}
        />

        {/* Date Overlay */}
        <div
          className="position-absolute bg-primary text-white p-3"
          style={{
            top: "20px",
            left: "20px",
          }}
        >
          <h5 className="mb-0">18</h5>
          <p className="mb-0">OCT, 2018</p>
        </div>
      </div>

      {/* Fee Structures Links */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <ul className="list-unstyled text-left">
            <li>
              <a href="#" className="text-primary">Diploma Programmes Fee Structures</a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-primary">Certificate Programmes Fee Structures</a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-primary">Artisan Programmes Fee Structure</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeeStructure