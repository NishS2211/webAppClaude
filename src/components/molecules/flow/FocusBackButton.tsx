import { motion } from 'framer-motion';
import { LuArrowLeft } from 'react-icons/lu';
import './FocusBackButton.css';

interface FocusBackButtonProps {
  onBack: () => void;
  label?: string;
}

export function FocusBackButton({ onBack, label = 'Back to overview' }: FocusBackButtonProps) {
  return (
    <motion.button
      type="button"
      className="focus-back-btn"
      onClick={onBack}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <LuArrowLeft size={14} />
      {label}
    </motion.button>
  );
}
