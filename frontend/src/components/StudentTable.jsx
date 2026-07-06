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
      <table className="table table-hover mb-0">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>

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