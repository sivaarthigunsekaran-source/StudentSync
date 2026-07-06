export default function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-auto border-top">
      <div className="container">
        <small>© {new Date().getFullYear()} StudentSync. Built with Bootstrap and React.</small>
      </div>
    </footer>
  );
}
