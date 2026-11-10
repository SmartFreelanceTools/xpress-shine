'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import AppHeader from '../../../components/app/AppHeader'

type Product = { id: number; name: string; description: string; image: string; price: string; oldPrice?: string; tag?: string }

const PAGE = 12

export default function AppShop() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [shown, setShown] = useState(PAGE)

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setProducts(data as Product[])
        setLoading(false)
      })
  }, [])

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return products
    return products.filter((p) => (p.name + ' ' + (p.description || '')).toLowerCase().includes(s))
  }, [products, q])

  const list = filtered.slice(0, shown)

  return (
    <>
      <AppHeader title="Shop" />
      <div className="px-4 py-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setShown(PAGE) }}
            placeholder="Search products"
            className="w-full rounded-2xl border border-blue-100 bg-white py-3 pl-10 pr-4 text-[15px] text-[#0b2c6e] outline-none placeholder:text-slate-400 focus:border-sky-400"
            style={{ userSelect: 'text' }}
          />
        </div>

        {!loading && (
          <p className="mt-3 text-xs text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>
        )}

        <div className="mt-3 grid grid-cols-2 gap-3">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-60 animate-pulse rounded-2xl bg-blue-100/60" />
            ))}

          {list.map((p) => (
            <div key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
              <div className="aspect-square w-full bg-slate-50">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-3">
                <p className="line-clamp-2 text-[13px] font-bold leading-snug text-[#0b2c6e]">{p.name}</p>
                <p className="text-sm font-extrabold text-[#0b2c6e]">
                  KSh {p.price}
                  {p.oldPrice && <span className="ml-1.5 text-xs font-medium text-slate-400 line-through">KSh {p.oldPrice}</span>}
                </p>
                <a
                  href={`https://wa.me/254722389764?text=${encodeURIComponent(`Hi! I want ${p.name} - KSh ${p.price}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto rounded-xl bg-[#0b2c6e] py-2 text-center text-xs font-bold text-white"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {!loading && filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-slate-500">No products found.</p>
        )}

        {!loading && shown < filtered.length && (
          <button
            onClick={() => setShown((n) => n + PAGE)}
            className="mt-5 w-full rounded-2xl border border-[#0b2c6e] py-3 text-sm font-bold text-[#0b2c6e]"
          >
            Show more ({filtered.length - shown} left)
          </button>
        )}
      </div>
    </>
  )
}
