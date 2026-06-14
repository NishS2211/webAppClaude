import { LuBot, LuShieldCheck, LuPackage, LuSearch, LuFileText, LuCode, LuFlaskConical, LuSettings2, LuCheck, LuPencil, LuRotateCcw } from 'react-icons/lu';
import './TrustChain.css';

/** The AI → Human Gate → Production trust-chain visual. */
export function TrustChain() {
  return (
    <div className="ptc-canvas">
      <div className="ptc-line"></div>

      <div className="ptc-stage ptc-ai">
        <div className="ptc-stage-name">AI</div>
        <div className="ptc-stage-box"><LuBot /></div>
      </div>

      <div className="ptc-skills">
        <div className="ptc-skill"><span className="ptc-skill-dot"></span><LuSearch size={12} /> Research codebase</div>
        <div className="ptc-skill"><span className="ptc-skill-dot"></span><LuFileText size={12} /> Write plans &amp; docs</div>
        <div className="ptc-skill"><span className="ptc-skill-dot"></span><LuCode size={12} /> Generate code</div>
        <div className="ptc-skill"><span className="ptc-skill-dot"></span><LuFlaskConical size={12} /> Suggest test cases</div>
        <div className="ptc-skill"><span className="ptc-skill-dot"></span><LuSettings2 size={12} /> CI/CD configs</div>
      </div>

      <div className="ptc-particle"></div>

      <div className="ptc-stage ptc-gate">
        <div className="ptc-stage-name" style={{ color: 'var(--brand)' }}>HUMAN GATE</div>
        <div className="ptc-stage-box">
          <LuShieldCheck />
        </div>
      </div>

      <div className="ptc-decision">
        <div className="ptc-dec-chip ptc-dec-yes"><LuCheck size={12} /> Accept</div>
        <div className="ptc-dec-chip ptc-dec-yes"><LuPencil size={12} /> Modify</div>
        <div className="ptc-dec-chip ptc-dec-no"><LuRotateCcw size={12} /> Reject</div>
      </div>

      <div className="ptc-stage ptc-prod">
        <div className="ptc-stage-name" style={{ color: 'var(--green)' }}>PRODUCTION</div>
        <div className="ptc-stage-box"><LuPackage /></div>
      </div>
    </div>
  );
}
