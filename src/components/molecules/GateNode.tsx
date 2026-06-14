import { LuShieldCheck, LuCheck, LuPencil, LuRotateCcw } from 'react-icons/lu';

export function GateNode() {
  return (
    <div className="vf-gate-node">
      <div className="vf-num"><LuShieldCheck size={18} /></div>
      <div className="vf-info">
        <div className="vf-name">Manual Validation Gate</div>
        <div className="vf-sub">Quality · Architecture · Performance · Standards</div>
        <div className="vf-decision-row">
          <div className="vf-dec vf-dec-y"><LuCheck size={12} /> Accept</div>
          <div className="vf-dec vf-dec-y"><LuPencil size={12} /> Modify</div>
          <div className="vf-dec vf-dec-n"><LuRotateCcw size={12} /> Reject &amp; re-scope</div>
        </div>
      </div>
    </div>
  );
}
