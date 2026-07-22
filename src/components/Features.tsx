'use client';

import { motion } from 'framer-motion';

interface UseInViewReturn {
  ref: React.RefObject<HTMLDivElement>;
  inView: boolean;
}

const useInView = (options?: any): UseInViewReturn => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

const Features = () => {
  const { ref, inView } = useInView();

  const features = [
    { icon: '📚', title: 'Biblioteca Digital', description: 'Organize e acesse centenas de recursos de alta qualidade em um só lugar.' },
    { icon: '🎓', title: 'Cursos Exclusivos', description: 'Conteúdo premium de especialistas em marketing, negócios e tecnologia.' },
    { icon: '🔧', title: 'Ferramentas Premium', description: 'Acesso a softwares e plataformas que multiplicam sua produtividade.' },
    { icon: '🤖', title: 'IA Integrada', description: 'Automação inteligente para todas as suas tarefas e projetos.' },
    { icon: '📋', title: 'Templates Prontos', description: 'Modelos profissionais para marketing, vendas e operações.' },
    { icon: '⚡', title: 'Automações', description: 'Workflows prontos para economizar tempo e aumentar resultados.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">Tudo que você precisa em um só lugar</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter max-w-2xl mx-auto">Uma plataforma completa com recursos exclusivos para acelerar seu crescimento digital.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {features.map((feature, index) => (
            <motion.div key={index} className="group glass rounded-2xl p-6 sm:p-8 hover:bg-dark-800/30 transition-all glow-effect" variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-poppins font-700 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 font-inter leading-relaxed">{feature.description}</p>
              <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-primary to-blue-light group-hover:w-8 transition-all" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
export default Features;