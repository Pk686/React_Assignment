import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import {CourseProvider} from './components/CourseProvider';
import './index.css';

function App() {
  return (
    <CourseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;