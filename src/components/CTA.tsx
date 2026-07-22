'use client';

import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/10 to-blue-light/10" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">Pronto Para Transformar Sua Vida?</h2>
            <p className="text-base sm:text-lg text-gray-300 font-inter max-w-2xl mx-auto mb-8 sm:mb-12">Junte-se a milhares de empreendedores e profissionais que já estão crescendo dentro da BLACK COMMUNITY.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-2xl mx-auto">
              {[{ text: '45+ Cursos', icon: '📚' }, { text: 'Comunidade 24/7', icon: '👥' }, { text: 'Acesso Vitalício', icon: '♾️' }].map((item, idx) => (
                <motion.div key={idx} className="glass rounded-lg p-4 sm:p-6" whileHover={{ y: -4 }}>
                  <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                  <p className="font-poppins font-700 text-sm sm:text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-primary to-blue-light text-dark-950 font-poppins font-800 text-lg rounded-lg shadow-glow-md hover:shadow-glow-lg transition-all inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GARANTIR MEU ACESSO AGORA
            </motion.button>

            <p className="text-xs sm:text-sm text-gray-400 font-inter mt-6 sm:mt-8">✓ Garantia 30 dias ou dinheiro de volta • ✓ Acesso imediato • ✓ Sem cartão de crédito necessário</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;