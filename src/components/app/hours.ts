// Shop hours: Mon – Sat, 7:00 AM – 8:00 PM (Nairobi time)
const OPEN = 7 * 60
const CLOSE = 20 * 60

export type ShopStatus = { open: boolean; title: string; sub: string }

export function getShopStatus(now: Date = new Date()): ShopStatus {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Nairobi',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const dayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
  const day = dayMap[get('weekday')] ?? 1
  const mins = (Number(get('hour')) % 24) * 60 + Number(get('minute'))

  const workday = day >= 1 && day <= 6
  if (workday && mins >= OPEN && mins < CLOSE) {
    const left = CLOSE - mins
    return {
      open: true,
      title: 'Open now',
      sub: left <= 60 ? 'Closing soon · 8:00 PM' : 'Closes at 8:00 PM',
    }
  }
  if (workday && mins < OPEN) return { open: false, title: 'Closed now', sub: 'Opens today at 7:00 AM' }
  if (day >= 1 && day <= 5) return { open: false, title: 'Closed now', sub: 'Opens tomorrow at 7:00 AM' }
  if (day === 6) return { open: false, title: 'Closed now', sub: 'Opens Monday at 7:00 AM' }
  return { open: false, title: 'Closed today', sub: 'Opens tomorrow at 7:00 AM' }
}
