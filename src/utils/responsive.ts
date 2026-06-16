/**
 * Responsive Design Engine
 *
 * Converts design-time px values into fluid CSS clamp() expressions.
 * All values are calibrated to hit their maximum at 1280px viewport width.
 *
 * Usage:
 *   responsiveFont(32)   → "clamp(18px, 2.50vw, 32px)"
 *   responsiveWidth(300) → "clamp(195px, 23.44vw, 300px)"
 *   spacing(40)          → "clamp(17px, 3.13vw, 40px)"
 *   cardWidth(350)       → "min(100%, 350px)"
 */

const DESKTOP_VP = 12.8; // 1280 / 100 — vw multiplier that reaches max at 1280px

/** Fluid font-size. Scales from minPx (mobile) to maxPx (1280px desktop). */
export function responsiveFont(maxPx: number, minPx?: number): string {
  const min = minPx ?? Math.max(10, Math.round(maxPx * 0.55));
  const vw = (maxPx / DESKTOP_VP).toFixed(2);
  return `clamp(${min}px, ${vw}vw, ${maxPx}px)`;
}

/**
 * Fluid container / element width.
 * Stays fluid between minPx floor and maxPx ceiling, never exceeds maxPx.
 */
export function responsiveWidth(maxPx: number, minPx?: number): string {
  const min = minPx ?? Math.max(120, Math.round(maxPx * 0.65));
  const vw = (maxPx / DESKTOP_VP).toFixed(2);
  return `clamp(${min}px, ${vw}vw, ${maxPx}px)`;
}

/**
 * Fluid spacing — use for padding, gap, margin.
 * Scales from ~42% of maxPx on mobile to maxPx on desktop.
 */
export function spacing(maxPx: number, minPx?: number): string {
  const min = minPx ?? Math.max(4, Math.round(maxPx * 0.42));
  const vw = (maxPx / DESKTOP_VP).toFixed(2);
  return `clamp(${min}px, ${vw}vw, ${maxPx}px)`;
}

/**
 * Card / block width.
 * Fills 100% on mobile, capped at maxPx on desktop — never overflows.
 */
export function cardWidth(maxPx: number): string {
  return `min(100%, ${maxPx}px)`;
}

// ── Inline-style helpers (return CSSProperties objects) ──────────────

export const r = {
  font:  (maxPx: number, minPx?: number) => ({ fontSize:  responsiveFont(maxPx, minPx) }),
  width: (maxPx: number, minPx?: number) => ({ width:     responsiveWidth(maxPx, minPx) }),
  pad:   (maxPx: number, minPx?: number) => ({ padding:   spacing(maxPx, minPx) }),
  gap:   (maxPx: number, minPx?: number) => ({ gap:       spacing(maxPx, minPx) }),
  card:  (maxPx: number)                 => ({ width:     cardWidth(maxPx) }),
} as const;