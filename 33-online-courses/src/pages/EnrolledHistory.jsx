export default function EnrolledHistory({ enrolled }) {
  return (
    <div>
      <h2>Enrollment History</h2>
      {enrolled.length === 0 ? (
        <p>You haven’t enrolled in any courses yet.</p>
      ) : (
        enrolled.map(course => (
          <div key={course.id} style={{ borderBottom: '1px solid gray', margin: '1rem 0' }}>
            <h3>{course.name}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
          </div>
        ))
      )}
    </div>
  );
}
