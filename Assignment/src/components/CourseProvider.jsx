// CourseProvider.js
import React, { createContext, useState } from 'react';
import { courseData } from './courseData';

// Create the context
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(courseData);

  const markAsCompleted = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, enrollmentStatus: 'Completed' } : course
      )
    );
  };

  return (
    <CourseContext.Provider value={{ courses, markAsCompleted }}>
      {children}
    </CourseContext.Provider>
  );
};
