import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const teachers = [
  {
    initials: 'Ш',
    name: 'Шахноза Ахмеджановна',
    subject: 'Педагог по программированию',
    quote: 'Индивидуальный подход к каждому ребёнку — мой главный принцип. Каждый ученик уникален и заслуживает особого внимания.',
    gradient: 'from-purple-400 to-purple-700',
    courses: ['Scratch', 'Python', 'Java'],
  },
  {
    initials: 'И',
    name: 'Ибрагим',
    subject: 'Тренер по шахматам',
    quote: 'Опытный наставник, воспитывающий будущих чемпионов. Шахматы развивают не только логику, но и характер.',
    gradient: 'from-amber-400 to-amber-700',
    courses: ['Шахматы', 'Стратегия', 'Олимпиады'],
  },
  {
    initials: 'А',
    name: 'Команда Академии',
    subject: 'Преподаватели робототехники и ИЗО',
    quote: 'Мы создаём атмосферу, где дети не боятся экспериментировать и творить. Наша цель — зажечь искру интереса к знаниям.',
    gradient: 'from-blue-400 to-blue-700',
    courses: ['LEGO WeDo', 'Mindstorms', 'Рисование'],
  },
]

export default function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2"
          >
            Команда
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-4"
          >
            Наши педагоги
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            Профессионалы с любовью к детям и своему делу
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Avatar */}
              <div className={`bg-gradient-to-br ${teacher.gradient} h-40 flex items-center justify-center relative`}>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/40">
                  <span className="text-4xl font-display font-black text-white">{teacher.initials}</span>
                </div>
                {/* Decorative dots */}
                <div className="absolute top-4 right-6 w-4 h-4 bg-white/20 rounded-full" />
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-white/20 rounded-full" />
                <div className="absolute top-10 left-16 w-3 h-3 bg-white/20 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-0.5">{teacher.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-4">{teacher.subject}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {teacher.courses.map((course) => (
                    <span
                      key={course}
                      className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                <div className="relative">
                  <Quote size={20} className="text-blue-200 mb-2" />
                  <p className="text-gray-500 text-sm leading-relaxed italic">{teacher.quote}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
