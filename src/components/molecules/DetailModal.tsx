import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuX } from 'react-icons/lu';
import type { ReactNode } from 'react';
import './DetailModal.css';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  colorClass?: string;
  children: ReactNode;
}

export function DetailModal({ isOpen, onClose, colorClass, children }: DetailModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dm-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className={`dm-panel ${colorClass ?? ''}`.trim()}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="dm-close" type="button" onClick={onClose} aria-label="Close">
              <LuX size={18} />
            </button>
            <div className="dm-content">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

interface DetailModalHeaderProps {
  icon?: ReactNode;
  iconBg?: string;
  title: ReactNode;
  tagline?: ReactNode;
}

export function DetailModalHeader({ icon, iconBg, title, tagline }: DetailModalHeaderProps) {
  return (
    <div className="dm-header">
      {icon && (
        <div className="dm-header-icon" style={iconBg ? { background: iconBg } : undefined}>
          {icon}
        </div>
      )}
      <div>
        <div className="dm-header-title">{title}</div>
        {tagline && <div className="dm-header-tagline">{tagline}</div>}
      </div>
    </div>
  );
}