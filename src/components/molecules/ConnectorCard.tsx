import type { CSSProperties } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import type { Connector } from '../../types';

interface ConnectorCardProps {
  connector: Connector;
  isActive: boolean;
  onClick: () => void;
}

export function ConnectorCard({ connector, isActive, onClick }: ConnectorCardProps) {
  const statusStyle = connector.statusColor ? ({ color: connector.statusColor } as CSSProperties) : undefined;
  const dotStyle = connector.statusColor ? ({ background: connector.statusColor } as CSSProperties) : undefined;

  return (
    <div className={`conn-card ${connector.colorClass} ${isActive ? 'active' : ''}`.trim()} onClick={onClick}>
      <div className="conn-head">
        <div className="conn-logo" style={{ background: connector.logoBg }}>{connector.logo}</div>
        <div className="conn-head-info">
          <div className="conn-name">{connector.name}</div>
          <div className="conn-status" style={statusStyle}>
            <div className="conn-status-dot" style={dotStyle} />
            {connector.status}
          </div>
        </div>
      </div>
      <div className="conn-desc">{connector.description}</div>
      <div className="conn-tags">
        {connector.tags.map((tag) => (
          <span className="conn-tag" key={tag}>{tag}</span>
        ))}
      </div>
      <button className="conn-expand" type="button">
        See setup & examples
        <LuChevronDown />
      </button>
    </div>
  );
}
