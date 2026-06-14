import { LuRocket } from 'react-icons/lu';

export function ProductionBanner() {
  return (
    <div className="vf-production">
      <span className="vf-production-icon"><LuRocket /></span>
      <div>
        <div className="vf-production-title">Production-ready code</div>
        <div className="vf-production-sub">App Store / Play Store / Customer hands</div>
      </div>
    </div>
  );
}
