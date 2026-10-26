import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Students from './Pages/Students';
import StudentManager from './pages/StudentManager';
import Courses from './Pages/Courses';
import Reports from './pages/Reports';
import StudentProfile from './pages/StudentProfile';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-white">
        <Navbar />
        
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/manager" element={<StudentManager />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/students/:id" element={<StudentProfile />} />
          </Routes>
        </div>

        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;