import { useTelegram } from '../hooks/useTelegram'
import { useMainButton } from '../hooks/useMainButton'
import { COURSES } from '../data/courses'

export default function HomeScreen({ onEnroll, onCourses }) {
  const { user, hapticLight, openLink } = useTelegram()

  useMainButton({
    text: 'Записаться на пробный урок',
    onClick: onEnroll,
  })

  return (
    <div className="screen" style={{ padding: '0 0 16px' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
        padding: '20px 16px 24px',
        color: 'white',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 28 }}>⚡</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Академия Гениев</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>Астана · Agenio</div>
          </div>
        </div>
        {user && (
          <div style={{ fontSize: 14, opacity: 0.9, marginTop: 4 }}>
            Привет, {user.first_name}! 👋
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--bg-secondary)', margin: '0 0 16px' }}>
        {[
          { value: '6', label: 'направлений' },
          { value: '5–18', label: 'лет' },
          { value: '5.0 ★', label: 'рейтинг 2GIS' },
          { value: '157', label: 'отзывов' },
        ].map(s => (
          <div key={s.label} style={{ background: 'var(--bg)', padding: '14px 16px' }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#1E3A8A' }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-hint)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Courses horizontal scroll */}
      <div style={{ padding: '0 16px 8px' }}>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10, color: 'var(--text)' }}>Наши курсы</div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
          {COURSES.map(c => (
            <button
              key={c.id}
              onClick={() => { hapticLight(); onCourses(c.id) }}
              style={{
                flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 6, padding: '12px 14px', borderRadius: 12,
                background: 'var(--bg-secondary)', border: 'none', cursor: 'pointer',
                minWidth: 72,
              }}
            >
              <span style={{ fontSize: 26 }}>{c.icon}</span>
              <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--text)', textAlign: 'center', lineHeight: 1.2 }}>{c.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contact buttons */}
      <div style={{ padding: '8px 16px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          onClick={() => openLink('https://wa.me/77787981078?text=Здравствуйте! Хочу узнать подробнее о курсах.')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '14px', borderRadius: 12, border: 'none', cursor: 'pointer',
            background: '#22C55E', color: 'white', fontWeight: 600, fontSize: 15,
          }}
        >
          💬 Написать в WhatsApp
        </button>
        <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-hint)' }}>
          ★★★★★ 5.0 · 157 отзывов на 2GIS · Первое занятие бесплатно
        </div>
      </div>
    </div>
  )
}
