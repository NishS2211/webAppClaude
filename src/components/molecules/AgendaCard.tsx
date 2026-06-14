import type { CSSProperties } from 'react';
import type { AgendaItem } from '../../types';
import './AgendaCard.css';

interface AgendaCardProps {
  item: AgendaItem;
}

export function AgendaCard({ item }: AgendaCardProps) {
  const style = {
    '--ag-c1': item.colorStart,
    '--ag-c2': item.colorEnd,
  } as CSSProperties;

  return (
    <a className="ag-item" href={item.href} style={style}>
      <div className="ag-num">{item.num}<span></span></div>
      <span className="ag-icon">{item.icon}</span>
      <div className="ag-name">{item.name}</div>
      <div className="ag-tag">{item.tag}</div>
    </a>
  );
}