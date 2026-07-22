'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={mousePosition}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-deep rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-light" />
          <span className="text-xs sm:text-sm font-inter font-600 text-blue-light tracking-widest">COMUNIDADE PRIVADA EXCLUSIVA</span>
          <div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-light" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-800 leading-tight mb-6"
          variants={itemVariants}
        >
          <span className="block text-white mb-2">Seu Próximo</span>
          <span className="block bg-gradient-to-r from-blue-light via-blue-primary to-blue-light bg-clip-text text-transparent">Nível Começa Aqui</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 font-inter font-500"
          variants={itemVariants}
        >
          Tenha acesso imediato à comunidade privada e descubra uma nova forma de aprender, organizar e acelerar seus projetos digitais.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <motion.button
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-primary to-blue-light text-dark-950 font-poppins font-800 text-lg rounded-lg shadow-glow-md hover:shadow-glow-lg transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            LIBERAR MEU ACESSO
          </motion.button>
          <motion.button
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-blue-primary/50 text-blue-light font-poppins font-700 text-lg rounded-lg hover:border-blue-primary hover:bg-blue-primary/10 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            SABER MAIS
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '✓', text: 'Acesso Imediato' },
              { icon: '✓', text: 'Comunidade Privada' },
              { icon: '✓', text: 'Atualizações Frequentes' },
              { icon: '✓', text: 'Suporte 24/7' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                whileHover={{ x: 4 }}
              >
                <span className="text-blue-light font-bold text-lg">{item.icon}</span>
                <span className="text-sm sm:text-base text-gray-300 font-inter">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;