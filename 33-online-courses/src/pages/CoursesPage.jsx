import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const handleEnroll = (course) => {
    if (!enrolled.find(c => c.id === course.id)) {
      setEnrolled([...enrolled, course]);
    }
  };

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.length === 0 && <p>Loading...</p>}
      {courses.map(course => (
        <div key={course.id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h3>{course.name}</h3>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p>{course.description}</p>
          <button onClick={() => handleEnroll(course)}>
            {enrolled.find(c => c.id === course.id) ? "Enrolled" : "Enroll"}
          </button>
        </div>
      ))}
    </div>
  );
}
