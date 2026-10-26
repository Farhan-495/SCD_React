import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          StudentPortal
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/manager">StudentManager</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/reports">Reports</Link>
            </li>
          </ul>

          {/* Pure HTML/Bootstrap Search Bar (No React Logic) */}
          <form className="d-flex">
            <input
              className="form-control me-2 form-control-sm"
              type="search"
              placeholder="Search..."
            />
            <button className="btn btn-outline-light btn-sm" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;