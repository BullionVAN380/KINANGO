import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnersSection.css'
import kenyaGovLogo from '../../utils/images/kenya.png';
import konzaLogo from '../../utils/images/konza.png';
import cdaccLogo from '../../utils/images/cdacc.png';
import knekLogo from '../../utils/images/knek.png';
import tvetaLogo from '../../utils/images/tveta.png';

const PartnersSection = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">
        <span className="text">Our</span> Partners
      </h1>
      <div className="row justify-content-center ">
        <div className="col-md-2 col-12 mb-3">
          <img src={kenyaGovLogo} alt="Kenya Government Logo" className="img-fluid logo-size" />
        </div>
        <div className="col-md-2 col-12 mb-3">
          <img src={tvetaLogo} alt="Kenya Government Logo" className="img-fluid logo-size" />
        </div>
        <div className="col-md-2 col-12 mb-3">
          <img src={konzaLogo} alt="Konza Technopolis Logo" className="img-fluid logo-size" />
        </div>
        <div className="col-md-2 col-12 mb-3">
          <img src={cdaccLogo} alt="cdaccLogo" className="img-fluid logo-size" />
        </div>
        <div className="col-md-2 col-12 mb-3">
          <img src={knekLogo} alt="knekLogo" className="img-fluid logo-size" />
        </div>
        
      </div>
    </div>
  );
};

export default PartnersSection;
