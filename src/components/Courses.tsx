'use client';

import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    { title: 'Marketing Digital Avançado', duration: '8 semanas', level: 'Avançado', students: '1200+' },
    { title: 'Automação com IA', duration: '6 semanas', level: 'Intermediário', students: '980+' },
    { title: 'Copywriting para Vendas', duration: '4 semanas', level: 'Básico', students: '2100+' },
    { title: 'Growth Hacking', duration: '8 semanas', level: 'Avançado', students: '750+' },
    { title: 'Personal Branding', duration: '5 semanas', level: 'Intermediário', students: '1500+' },
    { title: 'Mentalidade Empreendedora', duration: '6 semanas', level: 'Básico', students: '3200+' },
  ];

  return (
    <section id="courses" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-800 mb-4 sm:mb-6">🎓 Cursos Premium</h2>
          <p className="text-gray-400 text-base sm:text-lg font-inter max-w-2xl mx-auto">Aprenda com especialistas reconhecidos no mercado digital.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, idx) => (
            <motion.div key={idx} className="glass rounded-2xl p-6 sm:p-8 group hover:bg-dark-800/30 transition-all glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8 }}>
              <h3 className="text-lg sm:text-xl font-poppins font-700 mb-3 sm:mb-4 group-hover:text-blue-light transition-colors">{course.title}</h3>
              <div className="space-y-2 mb-4 sm:mb-6 text-sm sm:text-base text-gray-400">
                <p>⏱️ {course.duration}</p>
                <p>📊 Nível: {course.level}</p>
                <p>👥 {course.students} alunos</p>
              </div>
              <motion.button className="w-full py-2 sm:py-3 border border-blue-light/50 text-blue-light font-poppins font-600 rounded-lg hover:bg-blue-primary/10 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Acessar Curso</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;