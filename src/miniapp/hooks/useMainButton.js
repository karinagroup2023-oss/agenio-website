import { useEffect } from 'react'
import { useTelegram } from './useTelegram'

export function useMainButton({ text, onClick, active = true, visible = true }) {
  const { tg } = useTelegram()
  const btn = tg?.MainButton

  useEffect(() => {
    if (!btn) return
    btn.setText(text)
    if (visible) {
      btn.show()
      active ? btn.enable() : btn.disable()
    } else {
      btn.hide()
    }
    btn.onClick(onClick)
    return () => {
      btn.offClick(onClick)
      btn.hide()
    }
  }, [text, active, visible, onClick])
}
