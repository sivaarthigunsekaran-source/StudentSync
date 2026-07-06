const API_BASE = 'http://localhost:8080/students';

async function request(path = '', options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Request failed');
  }

  return response.status === 204 ? null : response.json();
}

export async function getStudents() {
  return request();
}

export async function getStudent(id) {
  return request(`/${id}`);
}

export async function createStudent(data) {
  return request('', { method: 'POST', body: JSON.stringify(data) });
}

export async function updateStudent(id, data) {
  return request(`/${id}`, { method: 'PUT', body: JSON.stringify(data) });
}

export async function deleteStudent(id) {
  return request(`/${id}`, { method: 'DELETE' });
}
