import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import CourseDetailScreen from './CourseDetailScreen'
import { COURSES } from '../data/courses'
import { useTelegram } from '../hooks/useTelegram'
import { useMainButton } from '../hooks/useMainButton'

const FILTERS = ['Все', '5–7 лет', '7–12 лет', '12–18 лет']

export default function CoursesScreen({ onEnroll }) {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('Все')
  const { hapticMedium, selectionChanged } = useTelegram()

  useMainButton({ text: 'Записаться', onClick: onEnroll, visible: !selected })

  if (selected) {
    return <CourseDetailScreen course={selected} onBack={() => setSelected(null)} onEnroll={() => onEnroll(selected)} />
  }

  const filtered = filter === 'Все' ? COURSES : COURSES.filter(c => c.ageGroup.includes(filter))

  return (
    <div className="screen">
      <div style={{ padding: '16px 16px 12px', fontWeight: 700, fontSize: 18 }}>Наши курсы</div>

      {/* Age filter */}
      <div style={{ display: 'flex', gap: 8, padding: '0 16px 12px', overflowX: 'auto' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => { selectionChanged(); setFilter(f) }}
            style={{
              flexShrink: 0, padding: '6px 14px', borderRadius: 20, border: 'none',
              cursor: 'pointer', fontSize: 13, fontWeight: 500,
              background: filter === f ? '#1E3A8A' : 'var(--bg-secondary)',
              color: filter === f ? 'white' : 'var(--text)',
              transition: 'all 0.15s',
            }}
          >{f}</button>
        ))}
      </div>

      {/* Course list */}
      <div style={{ background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', gap: 1 }}>
        {filtered.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => { hapticMedium(); setSelected(course) }}
          />
        ))}
      </div>
    </div>
  )
}
