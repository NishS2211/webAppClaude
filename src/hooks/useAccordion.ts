import { useState } from 'react';

/**
 * Single-open accordion: clicking an open item closes it,
 * clicking another item closes the previous one and opens the new one.
 */
export function useAccordion(initial: string | null = null) {
  const [active, setActive] = useState<string | null>(initial);

  const toggle = (id: string) => {
    setActive((prev) => (prev === id ? null : id));
  };

  const isOpen = (id: string) => active === id;

  return { active, toggle, isOpen };
}