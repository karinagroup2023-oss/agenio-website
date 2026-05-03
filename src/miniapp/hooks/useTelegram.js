export function useTelegram() {
  const tg = window.Telegram?.WebApp
  return {
    tg,
    user: tg?.initDataUnsafe?.user,
    colorScheme: tg?.colorScheme || 'light',
    isInTelegram: !!tg?.initData,
    hapticLight: () => tg?.HapticFeedback?.impactOccurred('light'),
    hapticMedium: () => tg?.HapticFeedback?.impactOccurred('medium'),
    hapticSuccess: () => tg?.HapticFeedback?.notificationOccurred('success'),
    hapticError: () => tg?.HapticFeedback?.notificationOccurred('error'),
    selectionChanged: () => tg?.HapticFeedback?.selectionChanged(),
    openLink: (url) => tg?.openLink(url) || window.open(url, '_blank'),
    openTelegramLink: (url) => tg?.openTelegramLink(url) || window.open(url, '_blank'),
    close: () => tg?.close(),
  }
}
