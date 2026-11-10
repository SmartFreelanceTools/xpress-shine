'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Calendar, MessageCircle, ArrowRight, ShieldCheck, Zap, Star, MapPin, Clock, CalendarCheck, Truck, PackageCheck } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import AppHeader from './AppHeader'
import Stars from './Stars'
import { Product, ratingOf } from './product'
import { getShopStatus, ShopStatus } from './hours'

const stats = [
  { Icon: ShieldCheck, value: '8+', label: 'Years Experience', accent: '#2563eb', bg: '#eff6ff', ring: 'rgba(191,219,254,0.60)' },
  { Icon: Zap, value: '2.5k+', label: 'Happy Clients', accent: '#0891b2', bg: '#ecfeff', ring: 'rgba(165,243,252,0.60)' },
  { Icon: Star, value: '4.3★', label: 'Rating', accent: '#f59e0b', bg: '#fffbeb', ring: 'rgba(253,230,138,0.70)' },
]

const steps = [
  { n: '01', Icon: CalendarCheck, t: 'Book in a minute', s: 'Choose your service and a pickup time that suits you.', c: '#2563eb', bg: '#eff6ff' },
  { n: '02', Icon: Truck, t: 'We collect', s: 'We pick up from your door and treat every item with care.', c: '#0891b2', bg: '#ecfeff' },
  { n: '03', Icon: PackageCheck, t: 'Delivered fresh', s: 'Cleaned, pressed and folded, then returned to you.', c: '#059669', bg: '#ecfdf5' },
]

const card = { border: '1px solid rgba(226,232,240,0.8)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">{children}</p>
}

export default function HomeClient() {
  const [status, setStatus] = useState<ShopStatus | null>(null)
  const [popular, setPopular] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setStatus(getShopStatus())
    const t = setInterval(() => setStatus(getShopStatus()), 60000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(40)
      .then(({ data }) => {
        const list = ((data as Product[]) || []).slice()
        list.sort((a, b) => {
          const ra = ratingOf(a)
          const rb = ratingOf(b)
          return rb.rating - ra.rating || rb.reviews - ra.reviews
        })
        setPopular(list.slice(0, 8))
        setLoading(false)
      })
  }, [])

  return (
    <>
      <AppHeader />
      <div className="space-y-7 px-4 pb-4 pt-6">
        <div>
          <p className="text-sm font-medium text-slate-500">Welcome</p>
          <h1 className="text-[28px] font-black leading-[1.1] tracking-[-0.03em] text-slate-900">
            What can we clean <span className="text-[#2563eb]">today?</span>
          </h1>
        </div>

        {/* CTA cards — same design as the website */}
        <div className="flex flex-col gap-2.5">
          <Link
            href="/app/book"
            className="relative flex h-[66px] items-center justify-between overflow-hidden rounded-[22px] pl-3.5 pr-4 text-white active:scale-[0.99]"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #172554 100%)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 10px 26px rgba(37,99,235,0.24), 0 2px 6px rgba(37,99,235,0.14)',
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-0 h-1/2 rounded-t-[22px]"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 100%)' }}
            />
            <span className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-white/20 bg-white/15">
                <Calendar size={19} strokeWidth={2} />
              </span>
              <span>
                <span className="block text-[15px] font-extrabold leading-tight tracking-[-0.01em]">Book Pickup</span>
                <span className="mt-0.5 block text-[11px] opacity-75">Schedule collection in seconds</span>
              </span>
            </span>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/15">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
          </Link>

          <a
            href="https://wa.me/254722389764"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[66px] items-center justify-between rounded-[22px] bg-white pl-3.5 pr-4 active:scale-[0.99]"
            style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 4px 16px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)' }}
          >
            <span className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-[15px] text-white"
                style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', boxShadow: '0 4px 12px rgba(22,163,74,0.22)' }}
              >
                <MessageCircle size={19} strokeWidth={2} />
              </span>
              <span>
                <span className="block text-[15px] font-extrabold leading-tight tracking-[-0.01em] text-slate-900">Chat on WhatsApp</span>
                <span className="mt-0.5 block text-[11px] text-slate-400">Quick help &amp; order updates</span>
              </span>
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-green-600/20 bg-[#f0fdf4]">
              <ArrowRight size={16} strokeWidth={2.5} className="text-green-600" />
            </span>
          </a>
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map(({ Icon, value, label, accent, bg, ring }) => (
            <div
              key={label}
              className="relative flex flex-col items-center gap-2 overflow-hidden rounded-[20px] bg-white px-2 pb-3.5 pt-4"
              style={{ border: `1px solid ${ring}`, boxShadow: '0 2px 12px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)' }}
            >
              <span aria-hidden className="absolute -right-4 -top-4 h-[52px] w-[52px] rounded-full opacity-70" style={{ background: bg }} />
              <span className="relative flex h-[38px] w-[38px] items-center justify-center rounded-[13px]" style={{ background: bg, border: `1px solid ${ring}` }}>
                <Icon size={16} strokeWidth={2} style={{ color: accent }} fill={label === 'Rating' ? accent : 'none'} />
              </span>
              <span className="text-center">
                <span className="block text-lg font-black leading-none tracking-[-0.03em] text-slate-900">{value.endsWith('★') ? (<>{value.slice(0, -1)}<span style={{ color: '#f59e0b' }}>★</span></>) : value}</span>
                <span className="mt-1 block text-[10.5px] font-semibold text-slate-500">{label}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Popular products */}
        {(loading || popular.length > 0) && (
          <div>
            <div className="mb-3 flex items-end justify-between">
              <div>
                <SectionLabel>Popular products</SectionLabel>
                <h2 className="mt-1 text-[19px] font-black tracking-[-0.02em] text-slate-900">Customer favourites</h2>
              </div>
              <Link href="/app/shop" className="flex items-center gap-1 pb-0.5 text-[13px] font-bold text-[#1d4ed8]">
                See all <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
              {loading &&
                [0, 1, 2].map((i) => <div key={i} className="h-60 w-40 flex-none animate-pulse rounded-[20px] bg-blue-100/60" />)}

              {popular.map((p) => {
                const { rating, reviews } = ratingOf(p)
                return (
                  <Link
                    key={p.id}
                    href={`/app/shop/${p.id}`}
                    className="w-40 flex-none overflow-hidden rounded-[20px] bg-white active:scale-[0.98]"
                    style={{ border: '1px solid rgba(191,219,254,0.7)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}
                  >
                    <div className="relative aspect-square w-full bg-slate-50">
                      <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                      {p.tag ? (
                        <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.07em] text-[#1d4ed8] shadow">
                          {p.tag}
                        </span>
                      ) : null}
                    </div>
                    <div className="space-y-1 p-3">
                      <p className="line-clamp-2 text-[13px] font-extrabold leading-snug text-slate-900">{p.name}</p>
                      <Stars rating={rating} reviews={reviews} size={12} />
                      <p className="text-[15px] font-black text-[#1e40af]">KSh {p.price}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* How it works */}
        <div className="relative overflow-hidden rounded-[26px] bg-white p-5" style={card}>
          <span aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full" style={{ background: 'radial-gradient(circle,rgba(186,230,253,0.55),rgba(186,230,253,0))' }} />
          <SectionLabel>How it works</SectionLabel>
          <h2 className="relative mt-1 text-[19px] font-black leading-tight tracking-[-0.02em] text-slate-900">Laundry, done in 3 easy steps</h2>
          <div className="relative mt-5">
            <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-[2px] rounded-full" style={{ background: 'linear-gradient(180deg,#bfdbfe,#a5f3fc,#a7f3d0)' }} />
            <div className="flex flex-col gap-4">
              {steps.map(({ n, Icon, t, s: sub, c, bg }) => (
                <div key={n} className="relative flex items-center gap-4">
                  <span
                    className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white"
                    style={{ border: `1.5px solid ${c}33`, boxShadow: '0 6px 16px rgba(15,23,42,0.08)', background: bg }}
                  >
                    <Icon size={20} strokeWidth={2.1} style={{ color: c }} />
                  </span>
                  <div className="min-w-0 flex-1 rounded-2xl px-3.5 py-3" style={{ background: '#f8fafc', border: '1px solid rgba(226,232,240,0.8)' }}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] font-extrabold text-slate-900">{t}</span>
                      <span className="text-[11px] font-black tracking-wider" style={{ color: c }}>{n}</span>
                    </div>
                    <p className="mt-0.5 text-[12px] leading-snug text-slate-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visit us */}
        <div className="rounded-[24px] bg-white p-4" style={card}>
          <SectionLabel>Visit us</SectionLabel>
          <div className="mt-3 space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-blue-100 bg-[#eff6ff] text-[#2563eb]">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-900">Thika, Ngoingwa</p>
                <p className="text-xs text-slate-500">Express Dry Cleaners &amp; Laundromat</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-blue-100 bg-[#eff6ff] text-[#2563eb]">
                <Clock size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                  {status ? (
                    <>
                      <span className={`h-2.5 w-2.5 rounded-full ${status.open ? 'bg-green-500' : 'bg-slate-400'}`} />
                      {status.title}
                    </>
                  ) : (
                    'Opening hours'
                  )}
                </p>
                <p className="text-xs text-slate-500">{status ? status.sub : 'Mon – Sat: 7AM – 8PM'}</p>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">Mon – Sat</span>
            </div>
            <a
              href="https://maps.google.com/?q=Express+Dry+Cleaners+Thika+Ngoingwa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-[#2563eb] text-sm font-bold text-[#1d4ed8]"
            >
              <MapPin size={16} /> Get directions
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
