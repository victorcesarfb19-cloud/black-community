'use client';

import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    { icon: '⚡', title: 'Acesso Imediato', desc: 'Comece agora mesmo sem esperas' },
    { icon: '🔄', title: 'Atualizações Contínuas', desc: 'Novos conteúdos toda semana' },
    { icon: '💬', title: 'Comunidade Ativa', desc: 'Discord exclusivo com especialistas' },
    { icon: '🎯', title: 'Suporte 24/7', desc: 'Help sempre disponível' },
    { icon: '🚀', title: 'Bônus Exclusivos', desc: 'Ferramentas e recursos adicionais' },
    { icon: '♾️', title: 'Acesso Vitalício', desc: 'Uma vez pago, acesso para sempre' },
  ];

  return (
    <section id="benefits" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">Por Que BLACK COMMUNITY?</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter max-w-2xl mx-auto">Benefícios que fazem toda diferença na sua trajetória.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div key={idx} className="glass rounded-2xl p-6 sm:p-8 text-center group hover:bg-dark-800/30" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-poppins font-700 mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 font-inter">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;