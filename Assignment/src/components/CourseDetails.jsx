// CourseDetails.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from './CourseProvider';
import { useNavigate } from 'react-router-dom';
import './courseDetails.css'

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useContext(CourseContext);
  const [showSyllabus, setShowSyllabus] = useState(false);
  const navigate = useNavigate();

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) return <div>Course not found</div>;

  return (
    <div className="course-details-container">
      <div className="course-details-card">
        <h2>{course.name}</h2>
        <img src={course.thumbnail || '/images/about.png'} alt={course.name} 
        className="thumbnail" />
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Status:</strong> {course.enrollmentStatus}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Schedule:</strong> {course.schedule}</p>
        <p><strong>Location:</strong> {course.location}</p>
        <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>

        <div className='button-course'>
        <button onClick={() => setShowSyllabus(!showSyllabus)} className="syllabus-button">
          {showSyllabus ? 'Hide Syllabus' : 'Show Syllabus'}
        </button>
        <button onClick={() =>  navigate('/')} className="syllabus-button">
          Go back
        </button>
        </div>

        {showSyllabus && (
          <ul className="syllabus-list">
            {course.syllabus.map((item, index) => (
              <li key={index}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
