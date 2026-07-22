'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const WelcomeModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div className="glass rounded-3xl p-8 sm:p-12 max-w-md text-center" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl sm:text-3xl font-poppins font-800 mb-4">🎉 Bem-vindo(a)!</h2>
          <p className="text-gray-300 font-inter mb-6 sm:mb-8">Você está a um passo de transformar sua vida digital. Clique no botão abaixo para começar.</p>
          <motion.button className="w-full px-6 py-3 bg-gradient-to-r from-blue-primary to-blue-light text-dark-950 font-poppins font-700 rounded-lg mb-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Explorar Agora
          </motion.button>
          <button onClick={onClose} className="w-full px-6 py-3 border border-gray-400 text-gray-300 font-inter rounded-lg hover:bg-dark-800/30 transition-all">
            Talvez Depois
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeModal;