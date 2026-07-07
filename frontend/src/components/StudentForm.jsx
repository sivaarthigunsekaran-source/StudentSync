export default function StudentForm({ student, onChange, onSubmit, submitLabel }) {
  return (
    <form onSubmit={onSubmit} className="card p-4 shadow-sm">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={student.name || ""}
            onChange={onChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={student.email || ""}
            onChange={onChange}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="col-12 text-end">
          <button
            type="submit"
            className="btn btn-primary px-4"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
}