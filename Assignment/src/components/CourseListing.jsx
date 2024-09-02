// CourseList.js
import React, { useContext, useState, useEffect } from 'react';
import { CourseContext } from './CourseProvider';

const CourseList = () => {
    const { courses } = useContext(CourseContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [likes, setLikes] = useState({});

    // WebSocket connection setup
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080'); // WebSocket server URL

        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onmessage = (event) => {
            const updatedLikes = JSON.parse(event.data);
            setLikes(updatedLikes);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Clean up the WebSocket connection when the component unmounts
        return () => {
            ws.close();
        };
    }, []);

    // Filter courses based on search query
    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="course-list">
            <h2>Course Listing</h2>
            <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />
            <div className="course-container">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="course-card">
                        <h3>{course.name}</h3>
                        <img src={course.thumbnail || '/images/about.png'} alt={course.name}
                            className="thumbnail" />
                        <p>Instructor: {course.instructor}</p>
                        <p>Likes: {likes[course.id] || 0}</p> {/* Display likes */}
                        <div className='button-group'>
                            <button onClick={() => window.location.href = `/courses/${course.id}`}>
                                View Details
                            </button>
                            <button onClick={() => window.location.href = `/dashboard`}>
                                Dashboard
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
