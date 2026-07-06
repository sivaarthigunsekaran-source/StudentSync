export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-3">
      <input
        type="search"
        className="form-control"
        placeholder="Search students by name or email..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
