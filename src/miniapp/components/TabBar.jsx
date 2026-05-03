import { Home, BookOpen, CalendarPlus, Info } from 'lucide-react'
import { useTelegram } from '../hooks/useTelegram'

const TABS = [
  { id: 'home', label: 'Главная', Icon: Home },
  { id: 'courses', label: 'Курсы', Icon: BookOpen },
  { id: 'enroll', label: 'Запись', Icon: CalendarPlus },
  { id: 'about', label: 'О нас', Icon: Info },
]

export default function TabBar({ active, onChange }) {
  const { selectionChanged } = useTelegram()
  return (
    <nav style={{
      display: 'flex',
      height: 'var(--tab-height)',
      background: 'var(--bg)',
      borderTop: '1px solid var(--bg-secondary)',
      flexShrink: 0,
    }}>
      {TABS.map(({ id, label, Icon }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => { selectionChanged(); onChange(id) }}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 2,
              background: 'none', border: 'none', cursor: 'pointer',
              color: isActive ? 'var(--button)' : 'var(--text-hint)',
              transition: 'color 0.15s',
            }}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
            <span style={{ fontSize: 10, fontWeight: isActive ? 600 : 400 }}>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
