'use client'

import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Search, X, Check, ShoppingBag, Sparkles } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export type PickedProduct = { id: string; name: string; price?: string }
export type ItemMode = 'service' | 'product'

type DbProduct = { id: number | string; name: string; price?: string | number | null; image?: string | null; tag?: string | null; description?: string | null }

const money = (v: unknown) => {
  const s = String(v ?? '').trim()
  if (!s) return ''
  return /^[0-9][0-9,.\s]*$/.test(s) ? `KSh ${s}` : s
}

/* ───────── Popup that lists EVERY product straight from the database ───────── */
function ProductPicker({ selected, onDone, onClose }: { selected: PickedProduct[]; onDone: (p: PickedProduct[]) => void; onClose: () => void }) {
  const [products, setProducts] = useState<DbProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')
  const [q, setQ] = useState('')
  const [local, setLocal] = useState<PickedProduct[]>(selected)

  // Always loads the live product list, so a product added in admin shows up here automatically.
  useEffect(() => {
    let alive = true
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!alive) return
        if (error) setErr('Could not load products. Please try again.')
        else setProducts((data || []) as DbProduct[])
        setLoading(false)
      })
    return () => { alive = false }
  }, [])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Capture phase so Escape closes only this popup, not the booking form behind it.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose() }
    }
    window.addEventListener('keydown', onKey, true)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey, true)
    }
  }, [onClose])

  const filtered = useMemo(() => {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean)
    if (!words.length) return products
    return products.filter((p) => {
      const hay = `${p.name} ${p.tag || ''} ${p.description || ''}`.toLowerCase()
      return words.every((w) => hay.includes(w))
    })
  }, [products, q])

  const isOn = (id: string) => local.some((p) => p.id === id)
  const toggle = (p: DbProduct) => {
    const id = String(p.id)
    setLocal((cur) => (cur.some((x) => x.id === id) ? cur.filter((x) => x.id !== id) : [...cur, { id, name: p.name, price: money(p.price) }]))
  }

  return createPortal(
    <div className="fixed inset-0 z-[2500] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[88dvh] w-full flex-col overflow-hidden rounded-t-[28px] bg-[#f8faff] sm:max-w-xl sm:rounded-[28px]"
        style={{ boxShadow: '0 30px 90px rgba(15,23,42,0.35)' }}
      >
        <div className="flex items-start justify-between gap-3 px-5 pb-2 pt-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">Our products</p>
            <h3 className="text-[20px] font-black leading-tight tracking-[-0.02em] text-slate-900">Choose what you want</h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-500">
            <X size={18} />
          </button>
        </div>

        <div className="px-5 pb-3">
          <div className="relative">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
              autoComplete="off"
              className="w-full rounded-2xl border border-blue-100 bg-white py-3 pl-10 pr-4 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#2563eb]"
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto px-5 pb-3">
          {loading && <p className="py-10 text-center text-sm text-slate-400">Loading products…</p>}
          {!loading && err && <p className="rounded-2xl bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-600">{err}</p>}
          {!loading && !err && filtered.length === 0 && <p className="py-10 text-center text-sm text-slate-400">{products.length ? 'No products match your search.' : 'No products available yet.'}</p>}
          {filtered.map((p) => {
            const on = isOn(String(p.id))
            return (
              <button
                key={String(p.id)}
                type="button"
                onClick={() => toggle(p)}
                className={`flex w-full items-center gap-3 rounded-2xl border bg-white p-2.5 text-left transition ${on ? 'border-[#2563eb] shadow-[0_0_0_3px_rgba(37,99,235,0.12)]' : 'border-blue-100'}`}
              >
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt="" loading="lazy" className="h-14 w-14 flex-none rounded-xl bg-slate-100 object-cover" onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = 'hidden')} />
                ) : (
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]"><ShoppingBag size={20} /></span>
                )}
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14.5px] font-bold text-slate-900">{p.name}</span>
                  {money(p.price) && <span className="block text-[13px] font-semibold text-[#2563eb]">{money(p.price)}</span>}
                </span>
                <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border ${on ? 'border-[#2563eb] bg-[#2563eb] text-white' : 'border-slate-200 text-transparent'}`}>
                  <Check size={15} />
                </span>
              </button>
            )
          })}
        </div>

        <div className="border-t border-blue-100 bg-white px-5 py-4" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)' }}>
          <button
            type="button"
            onClick={() => { onDone(local); onClose() }}
            className="w-full rounded-[18px] py-3.5 text-[15px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 10px 24px rgba(37,99,235,0.28)' }}
          >
            {local.length ? `Done · ${local.length} selected` : 'Done'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

/* ───────── The Service / Product switch used inside both booking forms ───────── */
export default function ItemChooser({
  services, mode, onMode, service, onService, picked, onPicked,
}: {
  services: string[]
  mode: ItemMode
  onMode: (m: ItemMode) => void
  service: string
  onService: (s: string) => void
  picked: PickedProduct[]
  onPicked: (p: PickedProduct[]) => void
}) {
  const [open, setOpen] = useState(false)
  const grad = { background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 14px rgba(37,99,235,0.30)' }

  return (
    <div>
      <div className="mb-3 grid grid-cols-2 gap-1 rounded-2xl bg-[#f1f5f9] p-1">
        {([['service', 'Service', Sparkles], ['product', 'Product', ShoppingBag]] as const).map(([m, label, Icon]) => (
          <button
            key={m}
            type="button"
            onClick={() => onMode(m)}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[13px] font-bold transition ${mode === m ? 'bg-white text-[#2563eb] shadow-sm' : 'text-slate-500'}`}
          >
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      {mode === 'service' ? (
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const on = service === s
            return (
              <button key={s} type="button" onClick={() => onService(s)} className={`rounded-full px-3.5 py-2 text-[13px] font-bold transition ${on ? 'text-white' : 'bg-[#f1f5f9] text-slate-700 hover:bg-blue-50'}`} style={on ? grad : undefined}>
                {s}
              </button>
            )
          })}
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-between rounded-2xl border border-blue-100 bg-white px-4 py-3.5 text-left shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
          >
            <span className={`text-[15px] ${picked.length ? 'font-bold text-slate-900' : 'text-slate-400'}`}>
              {picked.length ? `${picked.length} product${picked.length > 1 ? 's' : ''} selected` : 'Browse and choose products'}
            </span>
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]"><ShoppingBag size={18} /></span>
          </button>
          {picked.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {picked.map((p) => (
                <span key={p.id} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-bold text-white" style={grad}>
                  {p.name}
                  <button type="button" aria-label={`Remove ${p.name}`} onClick={() => onPicked(picked.filter((x) => x.id !== p.id))} className="rounded-full bg-white/25 p-0.5">
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {open && <ProductPicker selected={picked} onDone={onPicked} onClose={() => setOpen(false)} />}
    </div>
  )
}
