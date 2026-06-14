import './Nav.css';

export function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#">
        <div className="nav-mark">
          <svg viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="nav-title"><em>AI</em>Dev Workflow</span>
      </a>
      <div className="nav-pill">Internal Team Session · 2026</div>
    </nav>
  );
}