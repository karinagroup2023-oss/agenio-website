import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'

const testimonials = [
  {
    name: 'Айгерим С.',
    role: 'мама Алины, 8 лет',
    course: 'Программирование',
    text: 'Дочь занимается уже 4 месяца. Шахноза Ахмеджановна — потрясающий педагог! Дочка каждый раз бежит на занятие с удовольствием. Видеозаписи очень удобны — всегда знаю, что изучили.',
    avatar: 'А',
    gradient: 'from-pink-400 to-pink-600',
  },
  {
    name: 'Дмитрий К.',
    role: 'папа Максима, 11 лет',
    course: 'Робототехника',
    text: 'Результат виден уже через 2 месяца! Сын стал призёром городской олимпиады. Рекомендую всем, кто хочет дать ребёнку старт в IT.',
    avatar: 'Д',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Зарина Н.',
    role: 'мама Тимура, 7 лет',
    course: 'Шахматы',
    text: 'Ибрагим — настоящий профессионал. Тимур за полгода обыгрывает меня и папу. Атмосфера в центре тёплая, дети чувствуют себя комфортно.',
    avatar: 'З',
    gradient: 'from-amber-400 to-amber-600',
  },
  {
    name: 'Светлана М.',
    role: 'мама Дианы, 6 лет',
    course: 'Подготовка к школе',
    text: 'Прошли подготовку к школе — результат превзошёл ожидания. Диана пошла в первый класс уверенно, читает и считает лучше всех в классе.',
    avatar: 'С',
    gradient: 'from-green-400 to-green-600',
  },
  {
    name: 'Ержан А.',
    role: 'папа Арлана, 13 лет',
    course: 'Python',
    text: 'Сын хотел создавать игры — теперь создаёт! Уже написал несколько небольших проектов. Педагоги объясняют терпеливо и понятно.',
    avatar: 'Е',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Наталья В.',
    role: 'мама Кости, 9 лет',
    course: 'Рисование',
    text: 'Удивительно тёплая атмосфера! Снеки включены, видеозаписи отправляют после занятий — это очень удобно для мам. Костя обожает рисование.',
    avatar: 'Н',
    gradient: 'from-rose-400 to-rose-600',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2"
          >
            Отзывы
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-4"
          >
            Отзывы родителей
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Что говорят родители, чьи дети уже учатся у нас
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{t.text}</p>

              {/* Course badge */}
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full mb-4 w-fit">
                {t.course}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link to 2GIS */}
        <div className="text-center">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://2gis.kz/astana/firm/70000001053552176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
          >
            Смотреть все 142 отзыва на 2GIS <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
