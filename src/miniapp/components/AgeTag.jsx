export default function AgeTag({ age }) {
  return (
    <span style={{
      display: 'inline-block',
      background: 'var(--bg-secondary)',
      color: 'var(--text-hint)',
      fontSize: 11, fontWeight: 500,
      padding: '3px 8px', borderRadius: 20,
    }}>
      {age}
    </span>
  )
}
