'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5585987654321?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20BLACK%20COMMUNITY"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-glow-lg cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl sm:text-3xl">💬</span>
    </motion.a>
  );
};

export default WhatsAppButton;