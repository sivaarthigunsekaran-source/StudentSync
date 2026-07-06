import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container py-5">
      <div className="text-center py-5">
        <h1 className="display-4">404</h1>
        <p className="lead text-secondary">The page you are looking for cannot be found.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
}
