export default function ContactItem({ icon, label, value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        width: '100%', padding: '14px 16px',
        background: 'var(--bg)', border: 'none', cursor: 'pointer',
        textAlign: 'left', borderBottom: '1px solid var(--bg-secondary)',
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 12, color: 'var(--text-hint)' }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-link)' }}>{value}</div>
      </div>
    </button>
  )
}
