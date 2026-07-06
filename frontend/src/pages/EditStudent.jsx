import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent, updateStudent } from '../services/StudentService';
import LoadingSpinner from '../components/LoadingSpinner';
import StudentForm from '../components/StudentForm';

export default function EditStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadStudent() {
      try {
        const data = await getStudent(id);
        setStudent(data);
      } catch (err) {
        setError(err.message || 'Unable to load student.');
      } finally {
        setLoading(false);
      }
    }

    loadStudent();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((current) => ({
      ...current,
      [name]: name === 'year' ? (value === '' ? '' : Number(value)) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await updateStudent(id, student);
      setMessage('Student updated successfully.');
      setTimeout(() => navigate('/students'), 800);
    } catch (err) {
      setError(err.message || 'Unable to update student.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!student) {
    return <div className="container py-4"> <div className="alert alert-warning">Student not found.</div> </div>;
  }

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2>Edit Student</h2>
        <p className="text-secondary">Update student details and save your changes.</p>
      </div>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <StudentForm
        student={student}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel={saving ? 'Saving…' : 'Update Student'}
      />
    </div>
  );
}
