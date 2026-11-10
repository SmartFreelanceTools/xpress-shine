export type Product = {
  id: number | string
  name: string
  description?: string
  image: string
  price: string
  oldPrice?: string | null
  tag?: string | null
  rating?: number | string | null
  reviews?: number | string | null
}

const num = (v: unknown) => Number(String(v ?? '').replace(/[^0-9.]/g, '')) || 0

export function discountPercent(p: Product): number {
  const now = num(p.price)
  const old = num(p.oldPrice)
  if (!old || !now || old <= now) return 0
  return Math.round(((old - now) / old) * 100)
}

export function ratingOf(p: Product): { rating: number; reviews: number } {
  return { rating: Math.min(5, Math.max(0, Number(p.rating) || 0)), reviews: Number(p.reviews) || 0 }
}
