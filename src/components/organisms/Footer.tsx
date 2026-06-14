import './Footer.css';

export function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-brand"><span>AI</span>Dev Workflow</div>
        <div className="footer-sub">Internal team session · Nishchay Singh · React Native Developer · Trigent</div>
      </div>
      <div className="footer-right">
        Built with the same workflow it documents.<br />
        medium.com/@nishchayk302
      </div>
    </footer>
  );
}