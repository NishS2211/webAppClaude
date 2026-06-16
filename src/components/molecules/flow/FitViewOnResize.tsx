import { useEffect, type RefObject } from 'react';
import { useReactFlow, type FitViewOptions } from '@xyflow/react';

interface FitViewOnResizeProps {
  containerRef: RefObject<HTMLDivElement | null>;
  options?: FitViewOptions;
}

/** Keeps a React Flow canvas fitted to its container, including the initial
 * 0x0 -> real-size transition while a `.reveal` wrapper animates in. */
export function FitViewOnResize({ containerRef, options }: FitViewOnResizeProps) {
  const { fitView } = useReactFlow();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const run = () => fitView(options);
    run();

    const ro = new ResizeObserver(() => run());
    ro.observe(el);
    return () => ro.disconnect();
  }, [containerRef, fitView, options]);

  return null;
}