import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteStudent, getStudents } from '../services/StudentService';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import StudentTable from '../components/StudentTable';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        setError(err.message || 'Unable to load students.');
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(term) ||
        student.email.toLowerCase().includes(term)
    );
  }, [searchTerm, students]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Delete this student permanently?');
    if (!confirmed) return;

    try {
      await deleteStudent(id);
      setStudents((current) => current.filter((student) => student.id !== id));
      setMessage('Student deleted successfully.');
      setError(null);
    } catch (err) {
      setError(err.message || 'Unable to delete the student.');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between mb-4 gap-3">
        <div>
          <h2>Students</h2>
          <p className="text-secondary mb-0">Browse all students or search the list by name and email.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/add-student')}>
          <i className="bi bi-person-plus me-2" /> Add Student
        </button>
      </div>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <StudentTable
        students={filteredStudents}
        onView={(id) => navigate(`/student/${id}`)}
        onEdit={(id) => navigate(`/edit-student/${id}`)}
        onDelete={handleDelete}
      />
    </div>
  );
}
