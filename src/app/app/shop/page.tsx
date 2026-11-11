'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { useProducts } from '@/lib/productCache'
import ProductImage from '../../../components/app/ProductImage'
import AppHeader from '../../../components/app/AppHeader'
import AppPageTitle from '../../../components/app/AppPageTitle'
import Stars from '../../../components/app/Stars'
import { discountPercent, ratingOf } from '../../../components/app/product'

const PAGE = 12

export default function AppShop() {
  const { products, loading } = useProducts()
  const [q, setQ] = useState('')
  const [shown, setShown] = useState(PAGE)

  const filtered = useMemo(() => {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean)
    if (!words.length) return products
    return products.filter((p) => {
      const hay = `${p.name} ${p.description || ''} ${p.tag || ''}`.toLowerCase()
      return words.every((w) => hay.includes(w))
    })
  }, [products, q])

  const list = filtered.slice(0, shown)

  return (
    <>
      <AppHeader />
      <AppPageTitle title="Shop" sub="Cleaning products, delivered across Kenya" />

      {/* Search stays at the top and filters while you type */}
      <div
        className="sticky z-20 px-4 pb-2 pt-3"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 70px)', background: 'linear-gradient(180deg,#f8faff 85%,rgba(248,250,255,0))' }}
      >
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setShown(PAGE) }}
            placeholder="Search products"
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            className="w-full rounded-2xl border border-blue-100 bg-white py-3 pl-11 pr-11 text-[16px] text-slate-900 shadow-[0_2px_12px_rgba(15,23,42,0.06)] outline-none placeholder:text-slate-400 focus:border-[#2563eb] [&::-webkit-search-cancel-button]:hidden"
            style={{ userSelect: 'text', WebkitUserSelect: 'text' }}
          />
          {q && (
            <button
              onClick={() => { setQ(''); setShown(PAGE) }}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-500"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      <div className="px-4 pb-4">
        {!loading && (
          <p className="mb-3 mt-1 text-xs font-semibold text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            {q.trim() ? ` for “${q.trim()}”` : ''}
          </p>
        )}

        <div className="grid grid-cols-2 gap-3">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-[20px] bg-blue-100/60" />
            ))}

          {list.map((p, idx) => {
            const { rating, reviews } = ratingOf(p)
            const off = discountPercent(p)
            return (
              <div
                key={p.id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-blue-100/70 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
              >
                <Link href={`/app/shop/${p.id}`} className="flex flex-1 flex-col">
                  <div className="relative aspect-square w-full bg-slate-50">
                    <ProductImage src={p.image} alt={p.name} sizes="(max-width: 480px) 46vw, 230px" priority={idx < 4} />
                    {p.tag ? (
                      <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.07em] text-[#1d4ed8] shadow">
                        {p.tag}
                      </span>
                    ) : null}
                    {off > 0 && (
                      <span className="absolute right-2 top-2 rounded-full bg-green-600 px-2 py-1 text-[10px] font-extrabold text-white">
                        -{off}%
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-3 pb-2">
                    <p className="line-clamp-2 text-[13px] font-extrabold leading-snug text-slate-900">{p.name}</p>
                    <Stars rating={rating} reviews={reviews} />
                    <p className="mt-0.5 text-[15px] font-black text-[#1e40af]">
                      KSh {p.price}
                      {p.oldPrice ? (
                        <span className="ml-1.5 text-[11px] font-medium text-slate-400 line-through">KSh {p.oldPrice}</span>
                      ) : null}
                    </p>
                  </div>
                </Link>
                <a
                  href={`https://wa.me/254722389764?text=${encodeURIComponent(`Hi! I want ${p.name} - KSh ${p.price}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3 mb-3 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] py-2.5 text-center text-xs font-bold text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]"
                >
                  Order on WhatsApp
                </a>
              </div>
            )
          })}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="font-extrabold text-slate-900">No products found</p>
            <p className="mt-1 text-sm text-slate-500">Try another word, or ask us on WhatsApp.</p>
          </div>
        )}

        {!loading && shown < filtered.length && (
          <button
            onClick={() => setShown((n) => n + PAGE)}
            className="mt-5 w-full rounded-2xl border border-[#2563eb] bg-white py-3 text-sm font-bold text-[#1d4ed8]"
          >
            Show more ({filtered.length - shown} left)
          </button>
        )}
      </div>
    </>
  )
}
