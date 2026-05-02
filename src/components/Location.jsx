import { motion } from 'framer-motion'
import { MapPin, Phone, Camera, Clock, Navigation } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2"
          >
            Как нас найти
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-gray-900"
          >
            Наш адрес
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-[450px] bg-gray-200"
          >
            <iframe
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A51.108451%2C%22lon%22%3A71.430774%2C%22zoom%22%3A16%7D%2C%22theme%22%3A%22dark%22%2C%22hideZoomControl%22%3Afalse%7D"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта Академии Гениев в Астане"
              allowFullScreen
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Адрес</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    пр. Мангилик Ел, 29/2, 4 этаж, каб. 14<br />
                    район Есиль, Астана, Казахстан
                  </p>
                  <p className="text-blue-500 text-xs mt-1 font-medium">
                    <Navigation size={12} className="inline mr-1" />
                    ТРЦ «Хан Шатыр», 4 этаж
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Телефон</h3>
                  <a
                    href="tel:+77787981078"
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    +7-778-798-1078
                  </a>
                  <p className="text-gray-400 text-xs mt-0.5">Звонок и WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center shrink-0">
                  <Camera size={22} className="text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/agenio_nursultan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    @agenio_nursultan
                  </a>
                  <p className="text-gray-400 text-xs mt-0.5">Фото и видео с занятий</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Режим работы</h3>
                  <p className="text-gray-600 text-sm">
                    Понедельник – Воскресенье
                  </p>
                  <p className="text-blue-600 font-bold">с 09:00 до 20:00</p>
                  <p className="text-gray-400 text-xs mt-0.5">Работаем в выходные дни</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#cta"
              className="flex items-center justify-center gap-2 w-full bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg"
            >
              <MapPin size={18} />
              Записаться и приехать к нам
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
