import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Video, Users, Heart } from 'lucide-react'

const facts = [
  {
    icon: <Video size={22} className="text-amber-600" />,
    title: 'Видеозапись каждого урока',
    description: 'Родители всегда в курсе',
  },
  {
    icon: <Users size={22} className="text-amber-600" />,
    title: 'Малые группы',
    description: 'Не более 8 детей',
  },
  {
    icon: <Heart size={22} className="text-amber-600" />,
    title: 'Тёплая атмосфера',
    description: 'Дети обожают приходить',
  },
]

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2"
          >
            Наш центр
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-4"
          >
            Как проходят наши занятия
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Мы записываем видео с каждого занятия и отправляем родителям — будьте всегда в курсе успехов вашего ребёнка
          </motion.p>
        </div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-3xl overflow-hidden aspect-video shadow-2xl cursor-pointer group">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-8 left-8 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPlaying(true)}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 group-hover:bg-yellow-400 transition-colors"
              >
                <Play size={32} className="text-blue-800 ml-1" fill="currentColor" />
              </motion.button>
              <p className="text-white font-bold text-xl">Посмотреть видео о центре</p>
              <p className="text-blue-200 text-sm mt-1">Занятия по робототехнике в Agenio Астана</p>
            </div>

            {/* Decorative icons */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white text-xs font-medium">Запись занятия</span>
            </div>

            <div className="absolute bottom-6 left-6 flex gap-3">
              {['🤖', '💻', '♟️'].map((emoji, i) => (
                <div key={i} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-lg">
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Facts */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-amber-100"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                {fact.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{fact.title}</h4>
                <p className="text-gray-500 text-xs mt-0.5">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
