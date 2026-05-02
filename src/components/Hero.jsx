import { motion } from 'framer-motion'
import { MessageCircle, Star, ChevronRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center overflow-hidden pt-16"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Rating badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">5/5 · 157 отзывов на 2GIS</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Готовим детей к профессиям{' '}
              <span className="text-yellow-400">будущего</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Программирование, робототехника и шахматы для детей 5–18 лет в Астане.
              <span className="text-yellow-300 font-semibold"> Первое занятие — бесплатно.</span>
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-base px-6 py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/30"
              >
                Записаться на бесплатный урок
                <ChevronRight size={18} />
              </a>
              <a
                href="https://wa.me/77787981078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold text-base px-6 py-4 rounded-xl transition-colors border border-white/50"
              >
                <MessageCircle size={20} className="text-green-500" />
                Написать в WhatsApp
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10"
            >
              {[
                { value: '500+', label: 'учеников' },
                { value: '10 лет', label: 'сеть центров' },
                { value: 'РФМШ', label: 'поступают выпускники' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-black text-yellow-400">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main circle */}
              <div className="w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-full mx-auto flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <div className="w-52 h-52 bg-gradient-to-br from-yellow-400/30 to-blue-500/30 rounded-full flex items-center justify-center border border-white/10">
                  <svg viewBox="0 0 200 200" className="w-36 h-36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Robot body */}
                    <rect x="60" y="90" width="80" height="70" rx="10" fill="#FCD34D" />
                    {/* Robot head */}
                    <rect x="65" y="55" width="70" height="45" rx="10" fill="#FCD34D" />
                    {/* Eyes */}
                    <circle cx="85" cy="75" r="8" fill="#1E3A8A" />
                    <circle cx="115" cy="75" r="8" fill="#1E3A8A" />
                    <circle cx="87" cy="73" r="3" fill="white" />
                    <circle cx="117" cy="73" r="3" fill="white" />
                    {/* Mouth */}
                    <rect x="80" y="88" width="40" height="5" rx="2.5" fill="#1E3A8A" />
                    {/* Antenna */}
                    <line x1="100" y1="55" x2="100" y2="35" stroke="#F59E0B" strokeWidth="3" />
                    <circle cx="100" cy="30" r="7" fill="#F59E0B" />
                    {/* Arms */}
                    <rect x="25" y="95" width="35" height="14" rx="7" fill="#2563EB" />
                    <rect x="140" y="95" width="35" height="14" rx="7" fill="#2563EB" />
                    {/* Legs */}
                    <rect x="70" y="158" width="22" height="30" rx="8" fill="#2563EB" />
                    <rect x="108" y="158" width="22" height="30" rx="8" fill="#2563EB" />
                    {/* Chest panel */}
                    <rect x="80" y="105" width="40" height="30" rx="5" fill="#2563EB" />
                    <circle cx="90" cy="120" r="5" fill="#FCD34D" />
                    <circle cx="110" cy="120" r="5" fill="#F97316" />
                  </svg>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute -top-4 right-8 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              >
                <span className="text-lg">🤖</span>
                <span className="text-xs font-bold text-gray-800">Робототехника</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-4 -left-4 bg-yellow-400 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              >
                <span className="text-lg">♟️</span>
                <span className="text-xs font-bold text-gray-800">Шахматы</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-16 -right-4 bg-blue-500 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              >
                <span className="text-lg">💻</span>
                <span className="text-xs font-bold text-white">Python</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
