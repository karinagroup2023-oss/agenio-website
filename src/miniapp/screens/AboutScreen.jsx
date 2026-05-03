import ContactItem from '../components/ContactItem'
import { CONTACTS } from '../data/contacts'
import { useMainButton } from '../hooks/useMainButton'
import { useTelegram } from '../hooks/useTelegram'

export default function AboutScreen({ onEnroll }) {
  const { openLink, openTelegramLink } = useTelegram()
  useMainButton({ text: 'Записаться', onClick: onEnroll })

  return (
    <div className="screen">
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)', padding: '24px 16px', textAlign: 'center', color: 'white' }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>⚡</div>
        <div style={{ fontWeight: 800, fontSize: 20 }}>Академия Гениев</div>
        <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>Детский центр развития в Астане</div>
        <div style={{ marginTop: 12, fontSize: 14, background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '6px 16px', display: 'inline-block' }}>
          ★★★★★ 5.0 · 157 отзывов
        </div>
      </div>

      {/* About text */}
      <div style={{ padding: '16px 16px', fontSize: 14, color: 'var(--text-hint)', lineHeight: 1.6 }}>
        Готовим детей 5–18 лет к профессиям будущего. Программирование, робототехника, шахматы, рисование и математика. Видеозапись каждого урока отправляется родителям.
      </div>

      {/* Contacts */}
      <div style={{ borderTop: '1px solid var(--bg-secondary)', borderBottom: '1px solid var(--bg-secondary)' }}>
        <ContactItem icon="📞" label="Телефон" value={CONTACTS.phone} onClick={() => window.open(`tel:${CONTACTS.phone}`)} />
        <ContactItem icon="💬" label="WhatsApp" value="Написать сейчас" onClick={() => openLink(CONTACTS.whatsapp)} />
        <ContactItem icon="✈️" label="Telegram бот" value="@geniuses_bot" onClick={() => openTelegramLink(CONTACTS.telegram)} />
        <ContactItem icon="📸" label="Instagram" value="@agenio_nursultan" onClick={() => openLink(CONTACTS.instagram)} />
        <ContactItem icon="🌐" label="Сайт" value="agenio-website.vercel.app" onClick={() => openLink(CONTACTS.website)} />
        <ContactItem icon="📍" label="Адрес" value={CONTACTS.address} onClick={() => openLink('https://2gis.kz/astana/firm/70000001053552176')} />
        <ContactItem icon="🕐" label="Часы работы" value={CONTACTS.hours} onClick={() => {}} />
      </div>
    </div>
  )
}
