'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Biblioteca', href: '#library' },
    { label: 'Cursos', href: '#courses' },
    { label: 'Ferramentas', href: '#tools' },
    { label: 'Como Funciona', href: '#timeline' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div className="flex items-center gap-2 font-poppins font-800 text-xl sm:text-2xl" whileHover={{ scale: 1.05 }}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-primary to-blue-light rounded-lg" />
            <span className="bg-gradient-to-r from-blue-light to-blue-primary bg-clip-text text-transparent">BLACK</span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-inter font-600 text-gray-300 hover:text-blue-light cursor-pointer transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <motion.button className="hidden sm:flex px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-primary to-blue-light text-dark-950 font-poppins font-700 rounded-lg hover:shadow-glow-md transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Entrar</motion.button>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span className="h-0.5 w-full bg-white rounded-full" animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }} />
              <motion.span className="h-0.5 w-full bg-white rounded-full" animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="h-0.5 w-full bg-white rounded-full" animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }} />
            </div>
          </button>
        </div>

        {isOpen && (
          <motion.div className="lg:hidden pb-4 border-t border-white/10" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="block px-4 py-3 text-sm font-inter font-600 text-gray-300 hover:text-blue-light cursor-pointer" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <button className="w-full mx-4 mt-4 px-4 py-2 bg-gradient-to-r from-blue-primary to-blue-light text-dark-950 font-poppins font-700 rounded-lg">Entrar</button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;