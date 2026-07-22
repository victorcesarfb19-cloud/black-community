'use client';

import { motion } from 'framer-motion';

const Tools = () => {
  const tools = [
    { name: 'ChatGPT Premium', desc: 'IA avançada para conteúdo', icon: '🤖' },
    { name: 'Canva Pro', desc: 'Design profissional', icon: '🎨' },
    { name: 'Zapier', desc: 'Automação de workflows', icon: '⚙️' },
    { name: 'Notion', desc: 'Organização completa', icon: '📝' },
    { name: 'Buffer', desc: 'Gestão de redes sociais', icon: '📱' },
    { name: 'Figma', desc: 'Prototipagem e design', icon: '✏️' },
  ];

  return (
    <section id="tools" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">🔧 Ferramentas Premium</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter max-w-2xl mx-auto">Acesso a softwares premium para potencializar sua produtividade.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tools.map((tool, idx) => (
            <motion.div key={idx} className="glass rounded-2xl p-6 sm:p-8 group hover:bg-dark-800/30" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8 }}>
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <h3 className="text-lg sm:text-xl font-poppins font-700 mb-2">{tool.name}</h3>
              <p className="text-sm sm:text-base text-gray-400 font-inter">{tool.desc}</p>
              <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-primary to-blue-light group-hover:w-8 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;