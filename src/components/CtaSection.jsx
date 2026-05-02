import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Send } from 'lucide-react'

const courses = [
  'Робототехника',
  'Программирование',
  'Шахматы',
  'Рисование',
  'Математика',
  'Подготовка к школе',
]

export default function CtaSection() {
  const [form, setForm] = useState({ name: '', phone: '', course: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Здравствуйте! Хочу записаться на пробный урок.%0AИмя: ${encodeURIComponent(form.name)}%0AТелефон: ${encodeURIComponent(form.phone)}%0AКурс: ${encodeURIComponent(form.course || 'не указан')}`
    window.open(`https://wa.me/77787981078?text=${text}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-yellow-400 text-sm font-bold">🎁 Специальное предложение</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl text-white mb-6 leading-tight"
            >
              Первое занятие —{' '}
              <span className="text-yellow-400">бесплатно</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-blue-100 text-lg leading-relaxed mb-8"
            >
              Убедитесь, что ваш ребёнок влюбится в программирование.
              Без обязательств — просто попробуйте и посмотрите на реакцию вашего ребёнка.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+77787981078"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-xl transition-colors"
              >
                <Phone size={18} />
                <span className="font-semibold">+7-778-798-1078</span>
              </a>
              <a
                href="https://wa.me/77787981078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl transition-colors font-semibold"
              >
                <MessageCircle size={18} />
                Написать в WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-black text-2xl text-gray-900 mb-2">
                  Заявка принята!
                </h3>
                <p className="text-gray-500">
                  Мы свяжемся с вами в течение 30 минут для подтверждения записи.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-black text-2xl text-gray-900 mb-2">
                  Записаться на пробный урок
                </h3>
                <p className="text-gray-400 text-sm mb-6">Заполните форму — мы перезвоним в течение 30 минут</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Имя ребёнка</label>
                    <input
                      type="text"
                      required
                      placeholder="Введите имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Номер телефона</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Курс</label>
                    <select
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Выберите курс</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-base shadow-lg shadow-orange-500/30"
                  >
                    Записаться на пробный урок <Send size={18} />
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
