import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Программы', href: '#programs' },
  { label: 'О нас', href: '#why-us' },
  { label: 'Педагоги', href: '#teachers' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#location' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#1E3A8A] text-white transition-shadow duration-300 ${
        scrolled ? 'shadow-xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="bg-[#F59E0B] rounded-lg p-1">
              <Zap size={20} className="text-white" fill="white" />
            </span>
            <div className="leading-tight">
              <span className="font-display font-900 text-xl tracking-wide">Agenio</span>
              <span className="block text-xs text-blue-200 font-medium leading-none">Академия Гениев</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-blue-100 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center bg-[#F97316] hover:bg-orange-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Пробный урок
            </a>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a3278] border-t border-blue-700 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-blue-100 hover:text-white py-2 px-3 rounded-lg hover:bg-blue-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-2 text-center bg-[#F97316] hover:bg-orange-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Пробный урок — бесплатно
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
