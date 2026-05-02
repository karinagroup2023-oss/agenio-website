import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const now = Date.now()
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { target: 500, suffix: '+', label: 'выпускников' },
  { target: 5, suffix: '/5', label: 'рейтинг на 2GIS' },
  { target: 157, suffix: '', label: 'отзывов' },
  { target: 10, suffix: ' лет', label: 'сети центров' },
]

const cards = [
  { emoji: '🎓', text: 'Ученики поступают в РФМШ' },
  { emoji: '🏅', text: 'Победители городских олимпиад' },
  { emoji: '🌍', text: 'Сеть в 30+ городах мира' },
  { emoji: '📅', text: 'Занятия в выходные дни' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-[#0f2666]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-yellow-400 font-semibold uppercase tracking-widest text-sm mb-2"
          >
            Результаты
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-white"
          >
            Достижения наших учеников
          </motion.h2>
        </div>

        {/* Animated counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-black text-5xl text-yellow-400 mb-2">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-3">{card.emoji}</div>
              <p className="text-white font-semibold leading-snug">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
