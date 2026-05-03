import { useEffect } from 'react'
import { useTelegram } from './useTelegram'

export function useBackButton(onBack) {
  const { tg } = useTelegram()

  useEffect(() => {
    if (!tg?.BackButton) return
    tg.BackButton.show()
    tg.BackButton.onClick(onBack)
    return () => {
      tg.BackButton.offClick(onBack)
      tg.BackButton.hide()
    }
  }, [onBack])
}
