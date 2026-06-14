import type { TokenTechnique } from '../../types';

interface TokenTechCardProps {
  technique: TokenTechnique;
  isOpen: boolean;
  onClick: () => void;
}

export function TokenTechCard({ technique, isOpen, onClick }: TokenTechCardProps) {
  return (
    <div className={`tok-tech-card ${technique.colorClass} ${isOpen ? 'active' : ''}`.trim()} onClick={onClick}>
      <div className="ttc-head">
        <div className="ttc-icon">{technique.icon}</div>
        <div className="ttc-info">
          <div className="ttc-name">{technique.name}</div>
          <div className="ttc-saving">{technique.saving}</div>
        </div>
        <div className="ttc-toggle">+</div>
      </div>
      <div className="ttc-desc">{technique.description}</div>
      <div className={`ttc-detail ${isOpen ? 'open' : ''}`.trim()}>
        <div className="ttc-detail-inner">{technique.detail}</div>
      </div>
    </div>
  );
}
