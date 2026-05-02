import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Code2, Crown, Palette, Hash, BookOpen, ArrowRight } from 'lucide-react'

const programs = [
  {
    id: 1,
    name: 'Робототехника',
    icon: <Bot size={28} className="text-white" />,
    age: '5–16 лет',
    ageGroup: ['5–7 лет', '7–12 лет'],
    description: 'LEGO WeDo и Mindstorms EV3. Дети собирают и программируют настоящих роботов, участвуют в соревнованиях.',
    color: 'from-blue-500 to-blue-700',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    id: 2,
    name: 'Программирование',
    icon: <Code2 size={28} className="text-white" />,
    age: '7–18 лет',
    ageGroup: ['7–12 лет', '12–18 лет'],
    description: 'Scratch, Python, Java. Создаём игры, приложения и сайты. Готовим к олимпиадам по информатике.',
    color: 'from-purple-500 to-purple-700',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    id: 3,
    name: 'Шахматы',
    icon: <Crown size={28} className="text-white" />,
    age: '5–15 лет',
    ageGroup: ['5–7 лет', '7–12 лет'],
    description: 'Развиваем логическое мышление и стратегическое планирование. Воспитываем будущих чемпионов.',
    color: 'from-amber-500 to-amber-700',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    id: 4,
    name: 'Рисование',
    icon: <Palette size={28} className="text-white" />,
    age: '5–12 лет',
    ageGroup: ['5–7 лет', '7–12 лет'],
    description: 'Художественная школа: акварель, масло, цифровой арт. Раскрываем творческий потенциал.',
    color: 'from-pink-500 to-pink-700',
    badge: 'bg-pink-100 text-pink-700',
  },
  {
    id: 5,
    name: 'Математика',
    icon: <Hash size={28} className="text-white" />,
    age: '5–12 лет',
    ageGroup: ['5–7 лет', '7–12 лет'],
    description: 'Логика, счёт и математические олимпиады. Готовим к победам на городских и республиканских турнирах.',
    color: 'from-green-500 to-green-700',
    badge: 'bg-green-100 text-green-700',
  },
  {
    id: 6,
    name: 'Подготовка к школе',
    icon: <BookOpen size={28} className="text-white" />,
    age: '4–7 лет',
    ageGroup: ['5–7 лет'],
    description: 'Чтение, письмо, счёт. Ребёнок идёт в первый класс уверенным и хорошо подготовленным.',
    color: 'from-orange-400 to-orange-600',
    badge: 'bg-orange-100 text-orange-700',
  },
]

const filters = ['Все', '5–7 лет', '7–12 лет', '12–18 лет']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Programs() {
  const [active, setActive] = useState('Все')

  const filtered =
    active === 'Все'
      ? programs
      : programs.filter((p) => p.ageGroup.includes(active))

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2"
          >
            Обучение
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-4"
          >
            Наши программы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            6 направлений для детей от 4 до 18 лет. Выберите подходящий курс по возрасту.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                active === f
                  ? 'bg-[#1E3A8A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((program) => (
              <motion.div
                key={program.id}
                variants={cardAnim}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-white flex flex-col"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${program.color} p-6 flex items-center gap-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{program.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white`}>
                      {program.age}
                    </span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                    {program.description}
                  </p>
                  <a
                    href="#cta"
                    className="flex items-center justify-center gap-2 w-full border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold text-sm py-2.5 rounded-xl transition-colors"
                  >
                    Записаться <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
