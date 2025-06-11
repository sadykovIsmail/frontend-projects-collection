export default function CoursesPage() {
  const courses = [
    { id: 1, title: "React Basics", description: "Learn React from scratch." },
    { id: 2, title: "JavaScript Essentials", description: "Master JS fundamentals." },
  ];

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.map(course => (
        <div key={course.id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button>Enroll</button>
        </div>
      ))}
    </div>
  );
}
