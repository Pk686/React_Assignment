// StudentDashboard.js
import React, { useContext } from 'react';
import { CourseContext } from './CourseProvider';

const StudentDashboard = () => {
  const { courses, markAsCompleted } = useContext(CourseContext);

  const enrolledCourses = courses.filter(
    (course) => course.enrollmentStatus === 'In Progress' || course.enrollmentStatus === 'Open'
  );

  return (
    <div className="student-dashboard">
      <h2>Your Courses</h2>
      <div className="enrolled-courses">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.name} className="thumbnail" />
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate || 'Not Available'}</p>
            <p>Status: {course.enrollmentStatus}</p>

            {/* Progress Bar */}
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${course.progress || 50}%` }} // Replace with actual progress value if available
                ></div>
              </div>
              <p>{course.progress || 50}% Completed</p>
            </div>

            <div className="button-group">
              <button onClick={() => markAsCompleted(course.id)} className="complete-button">
                Mark as Completed
              </button>
              <button onClick={() => window.location.href = `/`} className="go-back-button">
                Go Back
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
