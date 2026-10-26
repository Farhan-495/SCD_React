import React, { useState } from 'react';

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    semester: '',
    gender: '',
    address: '',
    terms: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    setError('');
    setSuccess('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Form Validations
    if (!formData.name) {
      setError("Please enter the name.");
      return;
    }
    if (formData.name.length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }
    if (!formData.email) {
      setError("Please enter the email.");
      return;
    }
    if (!formData.phone) {
      setError("Please enter the phone number.");
      return;
    }
    if (!formData.program) {
      setError("Please select the program.");
      return;
    }
    if (!formData.semester) {
      setError("Please select the semester.");
      return;
    }
    if (!formData.gender) {
      setError("Please select the gender.");
      return;
    }
    if (!formData.address) {
      setError("Please enter the address.");
      return;
    }
    if (!formData.terms) {
      setError("Please accept the terms and conditions.");
      return;
    }

    // Call Parent Handler if provided
    if (onAddStudent) {
      onAddStudent({ name: formData.name, program: formData.program, semester: formData.semester });
    }

    console.log("Student Registered:", formData);
    setSuccess("Student registered successfully!");

    // Reset Form
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      semester: '',
      gender: '',
      address: '',
      terms: false
    });
  }

  return (
    <div className="card shadow-sm text-start mb-4">
      <div className="card-body p-4">
        <h3 className="mb-4 fw-bold text-dark">Student Registration</h3>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label text-secondary small">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label text-secondary small">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label className="form-label text-secondary small">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Program / Department */}
          <div className="mb-3">
            <label className="form-label text-secondary small">Program / Department</label>
            <select
              name="program"
              className="form-select"
              value={formData.program}
              onChange={handleChange}
            >
              <option value="">Select Program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Information Technology">Information Technology</option>
            </select>
          </div>

          {/* Semester */}
          <div className="mb-3">
            <label className="form-label text-secondary small">Semester</label>
            <select
              name="semester"
              className="form-select"
              value={formData.semester}
              onChange={handleChange}
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label text-secondary small d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <label className="form-check-label small" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <label className="form-check-label small" htmlFor="female">Female</label>
            </div>
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label text-secondary small">Address</label>
            <textarea
              name="address"
              className="form-control"
              rows="3"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Terms & Conditions */}
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="form-check-input"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label className="form-check-label small text-secondary" htmlFor="terms">
                I agree to the terms and conditions.
              </label>
            </div>
          </div>

          {/* Alerts */}
          {error && <div className="alert alert-danger py-2">{error}</div>}
          {success && <div className="alert alert-success py-2">{success}</div>}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary px-4">
            Register Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;