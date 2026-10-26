import React from 'react';

function Courses() {
  return (
    <div className="container py-4 text-start">
      <h1 className="fw-bold text-dark mb-4">Courses</h1>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3">
            <h5 className="fw-bold text-dark">Software Construction</h5>
            <p className="text-muted small mb-0">React and ASP.NET Core</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3">
            <h5 className="fw-bold text-dark">Database Systems</h5>
            <p className="text-muted small mb-0">Database design and SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;