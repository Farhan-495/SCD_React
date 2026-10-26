import React from 'react';
import Welcome from '../Components/welcome';

function Home() {
  return (
    <div className="container py-4 text-start">
      <Welcome />
      <h1 className="fw-bold text-dark">Welcome to Student Portal</h1>
      <p className="lead text-secondary">
        Manage students, courses, and view student profile records easily.
      </p>
    </div>
  );
}

export default Home;