import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ id, name, program, semester, email, phone, onRemove }) {
  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card shadow-sm h-100 text-start">
        <div className="card-body">
          <h3 className="card-title fw-bold mb-2 text-dark">{name}</h3>
          <p className="card-text mb-1 text-secondary">{program}</p>
          <p className="card-text mb-1 text-secondary">Semester {semester}</p>
          <p className="card-text mb-3 text-secondary">Profile Views: {views}</p>

          <div className="d-flex gap-2 mb-2">
            <button
              className="btn btn-primary btn-sm px-2"
              onClick={() => setViews(views + 1)}
            >
              View Profile
            </button>

            <button
              className="btn btn-secondary btn-sm px-2"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          </div>

          {showDetails && (
            <div className="mt-2 small pt-2 border-top">
              <p className="mb-1"><strong>Email:</strong> {email || 'student@example.com'}</p>
              <p className="mb-0"><strong>Phone:</strong> {phone || '0300-1234567'}</p>
            </div>
          )}

          <div className="mt-3 d-flex justify-content-between align-items-center">
            <Link
              to={`/students/${id}`}
              className="btn btn-outline-primary btn-sm"
            >
              Open Student Profile
            </Link>

            {onRemove && (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onRemove(id)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
