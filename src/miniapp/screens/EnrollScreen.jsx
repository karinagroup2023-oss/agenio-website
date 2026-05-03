import { useState } from 'react'
import { COURSES } from '../data/courses'
import { useMainButton } from '../hooks/useMainButton'
import { useTelegram } from '../hooks/useTelegram'

const TIME_SLOTS = ['🌅 Утро (9–12)', '☀️ День (12–16)', '🌆 Вечер (16–19)']

export default function EnrollScreen({ initialCourse = '' }) {
  const [form, setForm] = useState({ name: '', phone: '', courseId: initialCourse, timeSlot: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const { hapticSuccess, hapticError, openLink } = useTelegram()

  const isValid = form.name.length > 1 && form.phone.length >= 10

  const handleSubmit = async () => {
    if (!isValid || loading) return
    setLoading(true)

    const course = COURSES.find(c => c.id === form.courseId)
    const payload = {
      name: form.name,
      phone: form.phone,
      course: course ? course.title : 'не указан',
      timeSlot: form.timeSlot || 'не указано',
    }

    try {
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch { hapticError() }

    const msg = `Здравствуйте! Хочу записаться на пробный урок.%0AИмя: ${encodeURIComponent(form.name)}%0AТелефон: ${encodeURIComponent(form.phone)}%0AКурс: ${encodeURIComponent(payload.course)}%0AВремя: ${encodeURIComponent(payload.timeSlot)}`
    openLink(`https://wa.me/77787981078?text=${msg}`)

    hapticSuccess()
    setLoading(false)
    setDone(true)
  }

  useMainButton({ text: loading ? 'Отправляем...' : 'Записаться', onClick: handleSubmit, active: isValid && !loading && !done })

  if (done) {
    return (
      <div className="screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Заявка отправлена!</div>
        <div style={{ color: 'var(--text-hint)', fontSize: 14, lineHeight: 1.6 }}>
          Мы свяжемся с вами в ближайшее время для подтверждения записи.
        </div>
        <button
          onClick={() => setDone(false)}
          style={{ marginTop: 24, padding: '12px 24px', borderRadius: 10, border: 'none', background: 'var(--bg-secondary)', color: 'var(--text)', fontWeight: 500, cursor: 'pointer' }}
        >
          Записать ещё раз
        </button>
      </div>
    )
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px', borderRadius: 10,
    border: '1px solid var(--bg-secondary)', background: 'var(--bg)',
    color: 'var(--text)', fontSize: 15, outline: 'none',
    fontFamily: 'inherit',
  }
  const labelStyle = { fontSize: 13, fontWeight: 500, color: 'var(--text-hint)', marginBottom: 6, display: 'block' }

  return (
    <div className="screen">
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>Запись на пробный урок</div>
        <div style={{ fontSize: 13, color: 'var(--text-hint)' }}>Первое занятие — бесплатно. Заполните форму и мы свяжемся с вами.</div>

        <div>
          <label style={labelStyle}>Имя ребёнка *</label>
          <input style={inputStyle} placeholder="Введите имя" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        </div>

        <div>
          <label style={labelStyle}>Телефон (WhatsApp) *</label>
          <input style={inputStyle} type="tel" placeholder="+7 ___ ___ __ __" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        </div>

        <div>
          <label style={labelStyle}>Курс</label>
          <select style={{...inputStyle, appearance: 'none'}} value={form.courseId} onChange={e => setForm({...form, courseId: e.target.value})}>
            <option value="">Выберите курс</option>
            {COURSES.map(c => <option key={c.id} value={c.id}>{c.icon} {c.title} ({c.age})</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Удобное время</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TIME_SLOTS.map(t => (
              <button key={t} onClick={() => setForm({...form, timeSlot: t})}
                style={{
                  padding: '11px 14px', borderRadius: 10, border: `2px solid ${form.timeSlot === t ? '#1E3A8A' : 'var(--bg-secondary)'}`,
                  background: form.timeSlot === t ? '#EFF6FF' : 'var(--bg)',
                  color: form.timeSlot === t ? '#1E3A8A' : 'var(--text)',
                  fontWeight: form.timeSlot === t ? 600 : 400,
                  cursor: 'pointer', textAlign: 'left', fontSize: 14, fontFamily: 'inherit',
                }}>{t}</button>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 11, color: 'var(--text-hint)', textAlign: 'center' }}>
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </div>
      </div>
    </div>
  )
}
