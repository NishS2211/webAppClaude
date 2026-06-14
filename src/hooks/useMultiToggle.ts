import { useState } from 'react';

/**
 * Independent expand/collapse toggles — any number of items can be open at once.
 */
export function useMultiToggle() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isOpen = (id: string) => openIds.has(id);

  return { isOpen, toggle };
}