import AgeTag from '../components/AgeTag'
import { useBackButton } from '../hooks/useBackButton'
import { useMainButton } from '../hooks/useMainButton'

export default function CourseDetailScreen({ course, onBack, onEnroll }) {
  useBackButton(onBack)
  useMainButton({ text: `Записаться — ${course.title}`, onClick: onEnroll })

  return (
    <div className="screen">
      {/* Hero */}
      <div style={{
        background: course.color, padding: '24px 16px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <span style={{ fontSize: 48 }}>{course.icon}</span>
        <div>
          <div style={{ fontWeight: 800, fontSize: 22, color: 'white' }}>{course.title}</div>
          <AgeTag age={course.age} />
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Details grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { label: '⏱ Длительность', value: course.duration },
            { label: '📅 Расписание', value: course.schedule },
            { label: '💰 Стоимость', value: course.price },
            { label: '👥 Возраст', value: course.age },
          ].map(i => (
            <div key={i.label} style={{ background: 'var(--bg-secondary)', padding: 12, borderRadius: 10 }}>
              <div style={{ fontSize: 11, color: 'var(--text-hint)', marginBottom: 4 }}>{i.label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{i.value}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div>
          <div style={{ fontWeight: 600, marginBottom: 8, color: 'var(--text)' }}>О курсе</div>
          <div style={{ fontSize: 14, color: 'var(--text-hint)', lineHeight: 1.6 }}>{course.description}</div>
        </div>

        {/* Skills */}
        <div>
          <div style={{ fontWeight: 600, marginBottom: 8, color: 'var(--text)' }}>Что изучаем</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {course.skills.map(s => (
              <span key={s} style={{
                background: course.color + '22', color: course.color,
                padding: '5px 12px', borderRadius: 20, fontSize: 13, fontWeight: 500,
              }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
