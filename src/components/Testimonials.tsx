'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: 'Carlos Silva', role: 'Empreendedor Digital', text: 'Transformou completamente meu negócio. Os templates e cursos salvaram meses de trabalho.', avatar: '👨' },
    { name: 'Maria Santos', role: 'Marketeira', text: 'A comunidade é incrívelmente ativa. Aprendo algo novo todo dia com os especialistas.', avatar: '👩' },
    { name: 'João Costa', role: 'Desenvolvedor', text: 'As ferramentas de automação multiplicaram minha produtividade. Recomendo demais!', avatar: '👨' },
  ];

  return (
    <section id="testimonials" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">⭐ Depoimentos</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter max-w-2xl mx-auto">O que nossos membros estão dizendo.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test, idx) => (
            <motion.div key={idx} className="glass rounded-2xl p-6 sm:p-8 group hover:bg-dark-800/30" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8 }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl">{test.avatar}</div>
                <div>
                  <h4 className="font-poppins font-700 text-base sm:text-lg">{test.name}</h4>
                  <p className="text-sm text-gray-400 font-inter">{test.role}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-inter italic">'{test.text}'</p>
              <div className="mt-4 sm:mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-blue-light">⭐</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;