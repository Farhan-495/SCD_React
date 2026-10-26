import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto text-start">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h6 className="fw-normal mb-2">Links</h6>
            <ul className="list-unstyled text-secondary small mb-0">
              <li className="mb-1">Home</li>
              <li className="mb-1">Computer Science</li>
              <li className="mb-1">Courses</li>
              <li className="mb-1">Reports</li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="fw-normal mb-2">Contact Info</h6>
            <p className="text-secondary small mb-1">Contact Us</p>
            <p className="text-secondary small mb-1">+1: 123 456 7890</p>
            <p className="text-secondary small mb-0">trm@studentportal.com</p>
          </div>
        </div>
        <div className="text-center pt-3 border-top border-secondary text-secondary small mt-2">
          © 2026 StudentPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;