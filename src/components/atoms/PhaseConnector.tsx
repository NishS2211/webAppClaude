interface PhaseConnectorProps {
  color: string;
  height?: number;
}

/** The short vertical line linking one phase node to the next. */
export function PhaseConnector({ color, height }: PhaseConnectorProps) {
  return (
    <div
      className="vf-connector"
      style={{ background: color, ...(height ? { height: `${height}px` } : {}) }}
    />
  );
}