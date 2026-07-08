export default function StudentTable({ students, onEdit, onDelete, onView }) {
  if (!students.length) {
    return (
      <div className="alert alert-warning rounded-3">
        No students found. Try adding a new student or adjust the search.
      </div>
    );
  }

  return (
    <div className="table-responsive shadow-sm rounded bg-white">
      <table className="table table-hover mb-0 align-middle">
        <thead className="table-dark">
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Year</th>
            <th>Section</th>
            <th>CGPA</th>
            <th>Status</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.department}</td>
              <td>{student.year}</td>
              <td>{student.section}</td>
              <td>{student.cgpa}</td>

              <td>
                <span
                  className={`badge ${
                    student.status === "Active"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {student.status}
                </span>
              </td>

              <td className="text-end">
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => onView(student.id)}
                >
                  <i className="bi bi-eye"></i>
                </button>

                <button
                  className="btn btn-sm btn-outline-success me-2"
                  onClick={() => onEdit(student.id)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(student.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}