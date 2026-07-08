export default function StudentForm({
  student,
  onChange,
  onSubmit,
  submitLabel,
}) {
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
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={student.phone || ""}
            onChange={onChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={student.department || ""}
            onChange={onChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={student.year || ""}
            onChange={onChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Section</label>
          <input
            type="text"
            className="form-control"
            name="section"
            value={student.section || ""}
            onChange={onChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">CGPA</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="cgpa"
            value={student.cgpa || ""}
            onChange={onChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={student.status || ""}
            onChange={onChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">
            {submitLabel}
          </button>
        </div>

      </div>
    </form>
  );
}