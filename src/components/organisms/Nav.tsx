import { LuMoon, LuSun } from 'react-icons/lu';
import { useTheme } from '../../hooks/useTheme';
import './Nav.css';

export function Nav() {
  const { theme, toggle } = useTheme();

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
      <div className="nav-right">
        <div className="nav-pill">Internal Team Session · 2026</div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <LuSun /> : <LuMoon />}
        </button>
      </div>
    </nav>
  );
}