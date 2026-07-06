export default function StudentCard({ student, onView, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="d-flex align-items-start justify-content-between">
          <div>
            <h5 className="card-title mb-1">{student.name}</h5>
            <p className="text-muted mb-2">{student.email}</p>
            <p className="mb-1">Department: {student.department || 'N/A'}</p>
            <p className="mb-1">Year: {student.year || 'N/A'}</p>
            <p className="mb-0">Phone: {student.phoneNumber || 'N/A'}</p>
          </div>
          <div className="btn-group btn-group-sm">
            <button type="button" className="btn btn-outline-primary" onClick={() => onView(student.id)}>
              View
            </button>
            <button type="button" className="btn btn-outline-success" onClick={() => onEdit(student.id)}>
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger" onClick={() => onDelete(student.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
