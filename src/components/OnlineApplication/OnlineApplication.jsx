import React from 'react'
import Commingsoon from '../../utils/images/soon.png'

function OnlineApplication() {
  return (
    
       <div className="container mt-5">
      {/* Image section */}
      <div className="position-relative text-center">
        {/* Background Image */}
        <img
          src={Commingsoon} 
          alt="Fees Background"
          className="img-fluid"
     
        />
        </div>
    </div>
  )
}

export default OnlineApplication
