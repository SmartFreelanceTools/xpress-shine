import { Star } from 'lucide-react'

export default function Stars({ rating, reviews, size = 13 }: { rating: number; reviews?: number; size?: number }) {
  if (!rating) return null
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, rating - i))
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star size={size} className="absolute inset-0 text-slate-200" fill="#e2e8f0" strokeWidth={0} />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star size={size} fill="#f59e0b" className="text-amber-500" strokeWidth={0} />
              </span>
            </span>
          )
        })}
      </div>
      <span className="text-[12px] font-extrabold text-slate-900">{rating.toFixed(1)}</span>
      {reviews ? <span className="text-[11px] text-slate-400">({reviews})</span> : null}
    </div>
  )
}
