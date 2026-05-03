import { useCallback } from 'react'

export function useTelegram() {
  const tg = window.Telegram?.WebApp
  const isInTelegram = !!tg?.initData

  const expand = useCallback(() => tg?.expand(), [tg])
  const ready = useCallback(() => tg?.ready(), [tg])

  function hapticSuccess() {
    tg?.HapticFeedback?.notificationOccurred('success')
  }

  function hapticError() {
    tg?.HapticFeedback?.notificationOccurred('error')
  }

  function closeApp() {
    tg?.close()
  }

  return { tg, isInTelegram, expand, ready, hapticSuccess, hapticError, closeApp }
}
