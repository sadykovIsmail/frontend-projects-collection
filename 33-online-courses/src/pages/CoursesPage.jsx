import { useEffect, useState } from "react";

export default function CoursesPage({ enrolled, setEnrolled }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setCourses(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  const handleEnroll = (course) => {
    if (!enrolled.find(c => c.id === course.id)) {
      setEnrolled([...enrolled, course]);
    }
  };

  if (loading) return <p>Loading courses…</p>;

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.map(course => (
        <div key={course.id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h3>{course.title}</h3>
          <img src={course.thumbnail} alt={course.title} width="150" />
          <p>{course.description}</p>
          <button onClick={() => handleEnroll(course)}>
            {enrolled.find(c => c.id === course.id) ? "Enrolled" : "Enroll"}
          </button>
        </div>
      ))}
    </div>
  );
}
