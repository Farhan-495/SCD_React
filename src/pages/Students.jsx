import React, { useState } from 'react';
import StudentForm from '../components/StudentForm';
import StudentCard from '../components/StudentCard';

function Students() {
  const [students, setStudents] = useState([
    { id: 101, name: 'Jane Doe', program: 'Computer Science', semester: 2, email: 'jane@example.com', phone: '0300-1111111' },
    { id: 102, name: 'Mary Doe', program: 'Software Engineering', semester: 4, email: 'mary@example.com', phone: '0300-2222222' },
    { id: 103, name: 'Gant Doe', program: 'Computer Science', semester: 3, email: 'gant@example.com', phone: '0300-3333333' },
    { id: 104, name: 'Amm Doe', program: 'Information Technology', semester: 2, email: 'amm@example.com', phone: '0300-4444444' }
  ]);

  function handleAddStudent(newStudent) {
    setStudents([
      ...students,
      { id: Date.now(), ...newStudent }
    ]);
  }

  function handleRemoveStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div className="container py-4 text-start">
      <StudentForm onAddStudent={handleAddStudent} />

      <h2 className="fw-normal text-dark mb-4">Student List</h2>
      <div className="row">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            program={student.program}
            semester={student.semester}
            email={student.email}
            phone={student.phone}
            onRemove={handleRemoveStudent}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;
