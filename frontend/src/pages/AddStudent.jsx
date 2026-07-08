import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/StudentService";
import LoadingSpinner from "../components/LoadingSpinner";

export default function AddStudent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: 1,
    section: "",
    cgpa: "",
    status: "Active",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "year"
          ? Number(value)
          : name === "cgpa"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await createStudent(form);

      setMessage("Student added successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        department: "",
        year: 1,
        section: "",
        cgpa: "",
        status: "Active",
      });

      setTimeout(() => {
        navigate("/students");
      }, 1000);
    } catch (err) {
      setError(err.message || "Failed to add student.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container py-4">
      <h2 className="mb-3">Add Student</h2>

      {message && (
        <div className="alert alert-success">{message}</div>
      )}

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="card p-4 shadow">

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Year</label>
          <select
            className="form-select"
            name="year"
            value={form.year}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Section</label>
          <input
            type="text"
            className="form-control"
            name="section"
            value={form.section}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">CGPA</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="cgpa"
            value={form.cgpa}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div>
          <button type="submit" className="btn btn-primary me-2">
            Add Student
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/students")}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}