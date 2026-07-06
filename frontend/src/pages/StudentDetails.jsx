import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent } from '../services/StudentService';
import LoadingSpinner from '../components/LoadingSpinner';

export default function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadStudent() {
      try {
        const data = await getStudent(id);
        setStudent(data);
      } catch (err) {
        setError(err.message || 'Unable to load student details.');
      } finally {
        setLoading(false);
      }
    }

    loadStudent();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="container py-4">
        <div className="alert alert-warning">Student not found.</div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between mb-4 gap-3">
        <div>
          <h2>{student.name}</h2>
          <p className="text-secondary mb-0">
            Student profile information.
          </p>
        </div>

        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate('/students')}
        >
          Back to List
        </button>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title mb-3">Student Details</h5>

              <dl className="row">
                <dt className="col-5 text-muted">Name</dt>
                <dd className="col-7">{student.name}</dd>

                <dt className="col-5 text-muted">Email</dt>
                <dd className="col-7">{student.email}</dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title mb-3">Quick Actions</h5>

              <button
                className="btn btn-primary w-100 mb-3"
                onClick={() => navigate(`/edit-student/${id}`)}
              >
                Edit Student
              </button>

              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => navigate('/students')}
              >
                Back to Students
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}