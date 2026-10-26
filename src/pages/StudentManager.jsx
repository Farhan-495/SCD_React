import React, { useState } from 'react';

function StudentManager() {
  const [studentName, setStudentName] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');

  const [students, setStudents] = useState([
    { id: 1, name: 'Ali', department: 'Computer Science', semester: 5 },
    { id: 2, name: 'Sara', department: 'Software Engineering', semester: 6 }
  ]);

  function handleAddStudent(e) {
    e.preventDefault();
    if (!studentName || !department || !semester) return;

    setStudents([
      ...students,
      { id: Date.now(), name: studentName, department, semester }
    ]);
    setStudentName('');
    setDepartment('');
    setSemester('');
  }

  function handleRemoveStudent(id) {
    setStudents(students.filter((s) => s.id !== id));
  }

  return (
    <div className="container py-4 text-start">
      <h1 className="fw-normal text-dark mb-4">Student Manager</h1>

      <form onSubmit={handleAddStudent} className="mb-5">
        <div className="mb-3">
          <label className="form-label text-secondary small">Student Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter student name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-secondary small">Department</label>
          <select
            className="form-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Information Technology">Information Technology</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label text-secondary small">Semester</label>
          <select
            className="form-select"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary px-3">
          Add Student
        </button>
      </form>

      <h2 className="fw-normal text-dark mb-4">Students</h2>
      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-6 mb-3">
            <div className="card shadow-sm border p-3 rounded-3">
              <h4 className="fw-bold text-dark mb-2">{student.name}</h4>
              <p className="mb-1"><strong>Department:</strong> {student.department}</p>
              <p className="mb-3"><strong>Semester:</strong> {student.semester}</p>
              <div>
                <button
                  className="btn btn-danger btn-sm px-3"
                  onClick={() => handleRemoveStudent(student.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentManager;