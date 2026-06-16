import { useEffect, useRef, useState } from 'react';

/**
 * Tracks viewport visibility via IntersectionObserver.
 * repeat=false (default): fires once and disconnects.
 * repeat=true: stays active — visible toggles true/false as the element enters/exits.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.1, repeat = false) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.disconnect();
          } else if (repeat) {
            setVisible(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, repeat]);

  return { ref, visible };
}