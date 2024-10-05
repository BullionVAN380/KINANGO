import React from 'react';
import './NoticeBoard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InfoSec2 from '../../utils/pdfs/INFORMATION SECURITY 2.pdf';
import InfoSec from '../../utils/pdfs/INFORMATION SECURITY.pdf';
import SoftIn2 from '../../utils/pdfs/SOFTWARE INSTALL 2.pdf';
import SoftIn from '../../utils/pdfs/SOFTWARE INSTALL.pdf';
import Ubuntu from '../../utils/pdfs/UBUNTU SI PRAC. LV 6.pdf';

function Noticeboard() {
  return (
    <div className="container my-4">
      <h1 className='text-center mb-5'>NOTICEBOARD</h1>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">File Name</th>
            <th scope="col" className="text-center">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INFORMATION SECURITY</td>
            <td className="text-center">
              <a href={InfoSec} download className="text-purple" style={{ fontSize: '24px' }}>
                <i className="fas fa-download"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>INFORMATION SECURITY 2</td>
            <td className="text-center">
              <a href={InfoSec2} download className="text-purple" style={{ fontSize: '24px' }}>
                <i className="fas fa-download"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>SOFTWARE INSTALLATION</td>
            <td className="text-center">
              <a href={SoftIn} download className="text-purple" style={{ fontSize: '24px' }}>
                <i className="fas fa-download"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>SOFTWARE INSTALLATION 2</td>
            <td className="text-center">
              <a href={SoftIn2} download className="text-purple" style={{ fontSize: '24px' }}>
                <i className="fas fa-download"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>UBUNTU INSTALLATION</td>
            <td className="text-center">
              <a href={Ubuntu} download className="text-purple" style={{ fontSize: '24px' }}>
                <i className="fas fa-download"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>KALI LINUX INSTALLATION</td>
            <td className="text-center">
              <a href={Ubuntu} download className="text-purple" style={{ fontSize: '24px' }}>
                <i className="fas fa-download"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Noticeboard;
