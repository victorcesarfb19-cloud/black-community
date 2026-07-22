'use client';

import { motion } from 'framer-motion';

const Timeline = () => {
  const steps = [
    { number: '01', title: 'Acesso Imediato', desc: 'Ganhe acesso instant ao Discord e biblioteca digital' },
    { number: '02', title: 'Explore Recursos', desc: 'Navegue por cursos, templates e ferramentas' },
    { number: '03', title: 'Comece a Aprender', desc: 'Inicie seu primeiro curso e acelere seu crescimento' },
    { number: '04', title: 'Aplique & Cresça', desc: 'Coloque em prática e veja resultados reais' },
  ];

  return (
    <section id="timeline" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">Como Funciona</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter max-w-2xl mx-auto">4 passos simples para começar sua jornada de crescimento.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div key={idx} className="flex gap-6 sm:gap-8 mb-8 sm:mb-12" initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: idx * 0.15 }}>
              <div className="flex flex-col items-center">
                <motion.div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-primary to-blue-light flex items-center justify-center font-poppins font-800 text-dark-950 text-xl sm:text-2xl mb-4" whileHover={{ scale: 1.1 }}>
                  {step.number}
                </motion.div>
                {idx < steps.length - 1 && <div className="hidden sm:block w-1 h-20 bg-gradient-to-b from-blue-light to-transparent" />}
              </div>
              <motion.div className="glass rounded-2xl p-6 sm:p-8 flex-1 hover:bg-dark-800/30" whileHover={{ scale: 1.02 }}>
                <h3 className="text-lg sm:text-xl font-poppins font-700 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 font-inter">{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;