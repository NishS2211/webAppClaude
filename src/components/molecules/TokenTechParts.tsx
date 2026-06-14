import type { ReactNode } from 'react';

export function TipList({ tips }: { tips: ReactNode[] }) {
  return (
    <div className="ttc-tips">
      {tips.map((tip, i) => (
        <div className="ttc-tip" key={i}>{tip}</div>
      ))}
    </div>
  );
}

interface ComparisonBoxesProps {
  bad: ReactNode;
  good: ReactNode;
}

export function ComparisonBoxes({ bad, good }: ComparisonBoxesProps) {
  return (
    <div className="ttc-vs">
      <div className="ttc-vs-box bad">{bad}</div>
      <div className="ttc-vs-box good">{good}</div>
    </div>
  );
}
