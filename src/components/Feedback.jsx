import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Feedback({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bgColor = type === 'success' ? 'bg-teal-600' : 'bg-red-600';
  const textColor = 'text-white';

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed top-5 right-5 z-50 px-6 py-3 rounded shadow-lg ${bgColor} ${textColor} font-semibold cursor-pointer select-none`}
          onClick={onClose}
          role="alert"
          aria-live="assertive"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
