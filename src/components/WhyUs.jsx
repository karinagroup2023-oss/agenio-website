import { motion } from 'framer-motion'
import { Video, Users, Trophy, Package, Calendar } from 'lucide-react'

const advantages = [
  {
    icon: <Video size={22} className="text-blue-600" />,
    title: 'Видеозапись каждого урока',
    description: 'Отправляем родителям после каждого занятия — всегда знайте, что изучает ваш ребёнок.',
  },
  {
    icon: <Users size={22} className="text-blue-600" />,
    title: 'Малые группы до 8 детей',
    description: 'Каждый ребёнок получает персональное внимание педагога, а не теряется в толпе.',
  },
  {
    icon: <Trophy size={22} className="text-blue-600" />,
    title: 'Результат за 2 месяца',
    description: 'Ученики побеждают в олимпиадах и поступают в Республиканскую физико-математическую школу.',
  },
  {
    icon: <Package size={22} className="text-blue-600" />,
    title: 'Все материалы включены',
    description: 'Ничего не нужно покупать дополнительно — роботы, конструкторы, канцелярия — всё есть у нас.',
  },
  {
    icon: <Calendar size={22} className="text-blue-600" />,
    title: 'Занятия в выходные',
    description: 'Удобное расписание для занятых семей: занятия проходят в том числе в субботу и воскресенье.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2"
            >
              Наши преимущества
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-8"
            >
              Почему родители выбирают Agenio
            </motion.h2>

            <div className="space-y-6">
              {advantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="#cta"
                className="inline-flex items-center bg-[#F97316] hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-500/20"
              >
                Записаться на пробный урок
              </a>
            </motion.div>
          </div>

          {/* Right: Decorative SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 shadow-2xl text-white">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-yellow-400 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <h3 className="font-display font-black text-2xl">Академия Гениев</h3>
                  <p className="text-blue-200 text-sm mt-1">Сеть детских центров развития</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: '🤖', label: 'Робототехника' },
                    { emoji: '💻', label: 'Программирование' },
                    { emoji: '♟️', label: 'Шахматы' },
                    { emoji: '🎨', label: 'Рисование' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm border border-white/10"
                    >
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <div className="text-xs font-medium text-blue-100">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-yellow-400 rounded-2xl p-4 text-gray-900">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">⭐</span>
                    ))}
                  </div>
                  <p className="text-sm font-bold">"Лучший выбор для детей в Астане"</p>
                  <p className="text-xs text-gray-600 mt-0.5">— 157 довольных родителей на 2GIS</p>
                </div>
              </div>

              {/* Floating decorations */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100"
              >
                <div className="text-2xl">📹</div>
                <div className="text-xs font-bold text-gray-700 mt-0.5">Видео каждого<br />урока</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-2xl p-3 shadow-xl"
              >
                <div className="text-2xl">👥</div>
                <div className="text-xs font-bold text-gray-800 mt-0.5">До 8 детей<br />в группе</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
