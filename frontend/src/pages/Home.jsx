import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStudents } from '../services/StudentService';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        setError(err.message || 'Unable to load dashboard metrics.');
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between mb-4">
        <div>
          <h1 className="mb-2">StudentSync Dashboard</h1>
          <p className="text-secondary mb-0">Manage student records, view details, and keep your dashboard up to date.</p>
        </div>
        <Link className="btn btn-primary mt-3 mt-md-0" to="/add-student">
          <i className="bi bi-plus-lg me-2" /> Add Student
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className="display-6 mb-0">{students.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <h5 className="card-title">Active Students</h5>
              <p className="display-6 mb-0">{students.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <h5 className="card-title">Get Started</h5>
              <p className="mb-3 text-muted">Use the student list to review all records or add a student instantly.</p>
              <Link className="btn btn-outline-primary" to="/students">
                View Students
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
