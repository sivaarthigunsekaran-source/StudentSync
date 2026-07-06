import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../services/StudentService';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AddStudent() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createStudent({ name: form.name, email: form.email });
      setMessage('Student created successfully.');
      setForm({ name: '', email: '' });
      setTimeout(() => navigate('/students'), 700);
    } catch (err) {
      setError(err.message || 'Unable to create student.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2>Add Student</h2>
        <p className="text-secondary">Add a new student with name and email.</p>
      </div>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Full name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email address"
            required
          />
        </div>

        <div className="text-end">
          <button className="btn btn-secondary me-2" type="button" onClick={() => navigate('/students')}>
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Create Student
          </button>
        </div>
      </form>
    </div>
  );
}
