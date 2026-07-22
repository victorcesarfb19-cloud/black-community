'use client';

import { motion } from 'framer-motion';

const Library = () => {
  const categories = [
    { name: 'Cursos Completos', count: '45+', icon: '📚' },
    { name: 'Templates', count: '120+', icon: '📋' },
    { name: 'Ferramentas IA', count: '30+', icon: '🤖' },
    { name: 'Workflows', count: '50+', icon: '⚙️' },
    { name: 'E-books', count: '25+', icon: '📖' },
    { name: 'Recursos Premium', count: '100+', icon: '⭐' },
  ];

  return (
    <section id="library" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">📚 Biblioteca Exclusiva</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter max-w-2xl mx-auto">Acesso a centenas de recursos premium organizados e prontos para uso imediato.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <motion.div key={idx} className="glass rounded-2xl p-8 text-center group hover:bg-dark-800/30 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="text-xl font-poppins font-700 mb-2">{cat.name}</h3>
              <p className="text-3xl font-poppins font-800 text-blue-light">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;