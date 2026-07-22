'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs = [
    { q: 'Como faço para acessar a comunidade?', a: 'Após o pagamento, você receberá um email com link de acesso imediato ao Discord e à plataforma.' },
    { q: 'Posso cancelar minha inscrição?', a: 'Oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos seu dinheiro integral.' },
    { q: 'Qual é a duração do acesso?', a: 'Acesso vitalício! Você terá direito a todo conteúdo atual e futuro adicionado à plataforma.' },
    { q: 'Há suporte disponível?', a: 'Sim! Temos um time de especialistas na comunidade para responder suas dúvidas 24/7.' },
    { q: 'Posso compartilhar minha conta?', a: 'Não. Cada acesso é pessoal e intransferível conforme os termos de serviço.' },
  ];

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">❓ Perguntas Frequentes</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter">Tire suas dúvidas sobre a BLACK COMMUNITY.</p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div key={idx} className="glass rounded-2xl overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <motion.button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-dark-800/30 transition-all"
              >
                <span className="text-left text-base sm:text-lg font-poppins font-700">{faq.q}</span>
                <motion.span animate={{ rotate: expanded === idx ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-2xl text-blue-light flex-shrink-0 ml-4">
                  ▼
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="border-t border-white/10">
                    <div className="p-6 sm:p-8 text-sm sm:text-base text-gray-400 font-inter">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;