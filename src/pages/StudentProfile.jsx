import React from 'react';
import { useParams, Link } from 'react-router-dom';

function StudentProfile() {
  const { id, } = useParams();

  return (
    <div className="container py-4 text-start">
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h1 className="fw-bold">Student Profile</h1>
          <hr />
          <p><strong>Student ID:</strong> {id}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Program:</strong> Computer Science</p>
          <p><strong>Semester:</strong> 2</p>
          <p><strong>Email:</strong> student@example.com</p>

          <Link to="/students" className="btn btn-secondary mt-2">
            Back to Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;