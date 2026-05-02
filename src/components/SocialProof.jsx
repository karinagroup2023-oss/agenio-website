import { motion } from 'framer-motion'
import { Star, GraduationCap, Video, Trophy } from 'lucide-react'

const items = [
  {
    icon: <Star size={28} className="text-yellow-400 fill-yellow-400" />,
    value: '157 оценок',
    label: '5/5 на 2GIS',
  },
  {
    icon: <GraduationCap size={28} className="text-yellow-400" />,
    value: 'РФМШ',
    label: 'Поступают наши ученики',
  },
  {
    icon: <Video size={28} className="text-yellow-400" />,
    value: 'Видеозапись',
    label: 'каждого занятия',
  },
  {
    icon: <Trophy size={28} className="text-yellow-400" />,
    value: '10+ лет',
    label: 'Сеть «Академия Гениев»',
  },
]

export default function SocialProof() {
  return (
    <section className="bg-[#1E3A8A] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">{item.value}</div>
                <div className="text-blue-200 text-sm">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
