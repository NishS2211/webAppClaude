/** Research → Plan → Annotate → Implement cycle diagram for Phase 3. */
export function Phase3Diagram() {
  return (
    <svg viewBox="0 0 720 180" style={{ width: '100%', overflow: 'visible' }}>
      <defs>
        <marker id="ah-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#10b981" />
        </marker>
        <marker id="ah-rose" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f43f5e" />
        </marker>
      </defs>

      {/* Node 1: Research */}
      <rect x="10" y="40" width="120" height="60" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
      <text x="70" y="65" fontFamily="Inter" fontSize="11" fontWeight="800" fill="#065f46" textAnchor="middle">RESEARCH</text>
      <text x="70" y="80" fontFamily="Inter" fontSize="9.5" fill="#475569" textAnchor="middle">Claude reads</text>
      <text x="70" y="92" fontFamily="Inter" fontSize="9.5" fill="#475569" textAnchor="middle">→ README.md</text>

      {/* Arrow 1 */}
      <line x1="130" y1="70" x2="170" y2="70" stroke="#10b981" strokeWidth="1.6" markerEnd="url(#ah-green)" />

      {/* Node 2: Plan */}
      <rect x="170" y="40" width="120" height="60" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
      <text x="230" y="65" fontFamily="Inter" fontSize="11" fontWeight="800" fill="#065f46" textAnchor="middle">PLAN</text>
      <text x="230" y="80" fontFamily="Inter" fontSize="9.5" fill="#475569" textAnchor="middle">Claude writes</text>
      <text x="230" y="92" fontFamily="Inter" fontSize="9.5" fill="#475569" textAnchor="middle">→ plan.md</text>

      {/* Arrow 2 */}
      <line x1="290" y1="70" x2="330" y2="70" stroke="#10b981" strokeWidth="1.6" markerEnd="url(#ah-green)" />

      {/* Node 3: Annotate (developer) */}
      <rect x="330" y="40" width="120" height="60" rx="10" fill="#0a0f1e" stroke="#f59e0b" strokeWidth="2" />
      <text x="390" y="65" fontFamily="Inter" fontSize="11" fontWeight="800" fill="#fde68a" textAnchor="middle">ANNOTATE</text>
      <text x="390" y="80" fontFamily="Inter" fontSize="9.5" fill="#94a3b8" textAnchor="middle">You inject domain</text>
      <text x="390" y="92" fontFamily="Inter" fontSize="9.5" fill="#94a3b8" textAnchor="middle">knowledge inline</text>

      {/* Arrow 3 */}
      <line x1="450" y1="70" x2="490" y2="70" stroke="#10b981" strokeWidth="1.6" markerEnd="url(#ah-green)" />

      {/* Decision */}
      <polygon points="550,40 600,70 550,100 500,70" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="550" y="68" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#92400e" textAnchor="middle">Plan</text>
      <text x="550" y="80" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#92400e" textAnchor="middle">OK?</text>

      {/* Yes arrow to Implement */}
      <line x1="600" y1="70" x2="630" y2="70" stroke="#10b981" strokeWidth="2" markerEnd="url(#ah-green)" />
      <text x="615" y="62" fontFamily="Inter" fontSize="9" fontWeight="800" fill="#10b981" textAnchor="middle">YES</text>

      {/* Implement */}
      <rect x="630" y="40" width="80" height="60" rx="10" fill="#10b981" stroke="#065f46" strokeWidth="1.5" />
      <text x="670" y="68" fontFamily="Inter" fontSize="11" fontWeight="800" fill="#fff" textAnchor="middle">CODE</text>
      <text x="670" y="84" fontFamily="Inter" fontSize="9" fill="#a7f3d0" textAnchor="middle">it all</text>

      {/* No arrow loop back */}
      <path
        d="M 550,100 Q 550,150 390,150 Q 230,150 230,140 Q 230,130 280,108"
        fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#ah-rose)"
      />
      <text x="390" y="166" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#f43f5e" textAnchor="middle">NO → loop back · 1-6 cycles</text>
    </svg>
  );
}