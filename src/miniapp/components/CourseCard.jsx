import { ChevronRight } from 'lucide-react'

export default function CourseCard({ course, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        width: '100%', padding: '14px 16px',
        background: 'var(--bg)', border: 'none', cursor: 'pointer',
        borderLeft: `4px solid ${course.color}`,
        marginBottom: 1,
        textAlign: 'left',
      }}
    >
      <span style={{ fontSize: 28 }}>{course.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>{course.title}</div>
        <div style={{ fontSize: 12, color: 'var(--text-hint)', marginTop: 2 }}>
          {course.age} · {course.price}
        </div>
      </div>
      <ChevronRight size={18} color="var(--text-hint)" />
    </button>
  )
}
