import { Zap, Camera, Phone, MapPin } from 'lucide-react'

const programs = [
  'Робототехника',
  'Программирование',
  'Шахматы',
  'Рисование',
  'Математика',
  'Подготовка к школе',
]

const info = [
  { label: 'О нас', href: '#why-us' },
  { label: 'Педагоги', href: '#teachers' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#location' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-400 rounded-lg p-1.5">
                <Zap size={18} className="text-white" fill="white" />
              </span>
              <div>
                <span className="font-display font-black text-lg">Agenio</span>
                <span className="block text-xs text-blue-200 font-medium leading-none">Академия Гениев</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Детский центр развития в Астане. Программирование, робототехника и шахматы для детей 5–18 лет.
            </p>
            <a
              href="https://instagram.com/agenio_nursultan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm"
            >
              <Camera size={18} />
              @agenio_nursultan
            </a>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white mb-4">Программы</h4>
            <ul className="space-y-2">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Информация</h4>
            <ul className="space-y-2">
              {info.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5 text-yellow-400" />
                <span>пр. Мангилик Ел, 29/2, 4 этаж, каб. 14, район Есиль, Астана</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Phone size={16} className="shrink-0 text-yellow-400" />
                <a href="tel:+77787981078" className="hover:text-white transition-colors">
                  +7-778-798-1078
                </a>
              </div>
              <div className="text-blue-200 text-sm">
                Пн–Вс: с 09:00 до 20:00
              </div>
            </div>

            <a
              href="#cta"
              className="inline-flex items-center mt-5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              Пробный урок — бесплатно
            </a>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">
            © 2024–2025 Академия Гениев Астана. Все права защищены.
          </p>
          <p className="text-blue-400 text-xs">
            Детский центр развития Agenio — Астана, Казахстан
          </p>
        </div>
      </div>
    </footer>
  )
}
