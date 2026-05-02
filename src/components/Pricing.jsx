import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Пробный урок',
    price: 'Бесплатно',
    unit: '',
    description: 'Без обязательств',
    highlight: false,
    features: [
      'Любой курс на выбор',
      'Любой возраст',
      'Полноценное занятие',
      'Знакомство с педагогом',
      'Тур по центру',
    ],
    cta: 'Записаться',
    ctaStyle: 'border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white',
  },
  {
    name: 'Стандарт',
    price: 'от 25 000',
    unit: 'тг/мес',
    description: 'Самый популярный',
    highlight: true,
    features: [
      '8 занятий в месяц',
      'Малая группа (до 8 детей)',
      'Все материалы включены',
      'Видеозапись каждого урока',
      'Прогресс-отчёт ежемесячно',
    ],
    cta: 'Начать обучение',
    ctaStyle: 'bg-[#F97316] hover:bg-orange-600 text-white',
  },
  {
    name: 'Интенсив',
    price: 'от 40 000',
    unit: 'тг/мес',
    description: 'Максимальный прогресс',
    highlight: false,
    features: [
      '12 занятий в месяц',
      'Малая группа (до 6 детей)',
      'Все материалы включены',
      'Видеозапись каждого урока',
      'Подготовка к олимпиадам',
    ],
    cta: 'Записаться',
    ctaStyle: 'border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2"
          >
            Стоимость
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-4"
          >
            Цены на занятия
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Прозрачные цены без скрытых платежей
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                plan.highlight
                  ? 'bg-[#1E3A8A] text-white shadow-2xl shadow-blue-900/30 scale-105'
                  : 'bg-white border border-gray-200 shadow-md text-gray-900'
              }`}
            >
              {plan.highlight && (
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold text-center py-2 tracking-widest uppercase">
                  Популярный выбор
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-7">
                  <span className={`font-display font-black text-4xl ${plan.highlight ? 'text-yellow-400' : 'text-[#1E3A8A]'}`}>
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className={`text-sm ml-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                      {plan.unit}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlight ? 'bg-yellow-400' : 'bg-blue-100'
                      }`}>
                        <Check size={12} className={plan.highlight ? 'text-blue-900' : 'text-blue-600'} />
                      </div>
                      <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`w-full text-center font-bold py-3 rounded-xl transition-colors ${plan.ctaStyle} ${
                    plan.highlight ? '!bg-yellow-400 !text-gray-900 hover:!bg-yellow-300 !border-0' : ''
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          Уточняйте актуальные цены по телефону{' '}
          <a href="tel:+77787981078" className="text-blue-600 font-medium">+7-778-798-1078</a>
        </motion.p>
      </div>
    </section>
  )
}
