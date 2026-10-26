import React from 'react';

function Reports() {
  return (
    <div className="container py-4 text-start">
      <h1 className="fw-bold text-dark mb-4">Reports</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm p-3 border-start border-4 border-primary">
            <h6 className="text-muted">Total Students</h6>
            <h3 className="fw-bold text-dark">4 Registered</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;