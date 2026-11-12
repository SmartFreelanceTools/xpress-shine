'use client'

import { useEffect, useState } from 'react'
import { Phone, MessageCircle, MapPin, Globe, Clock, ChevronRight, ShieldCheck } from 'lucide-react'
import { getShopStatus, ShopStatus } from './hours'

const card = { border: '1px solid rgba(226,232,240,0.8)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }

const DAYS = [
  { d: 'Monday', t: '7:00 AM – 8:30 PM' },
  { d: 'Tuesday', t: '7:00 AM – 8:30 PM' },
  { d: 'Wednesday', t: '7:00 AM – 8:30 PM' },
  { d: 'Thursday', t: '7:00 AM – 8:30 PM' },
  { d: 'Friday', t: '7:00 AM – 8:30 PM' },
  { d: 'Saturday', t: '7:00 AM – 8:30 PM' },
  { d: 'Sunday', t: 'Closed' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="px-1 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">{children}</p>
}

export default function MoreClient() {
  const [status, setStatus] = useState<ShopStatus | null>(null)
  const [today, setToday] = useState('')

  useEffect(() => {
    const tick = () => {
      setStatus(getShopStatus())
      setToday(new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Nairobi', weekday: 'long' }).format(new Date()))
    }
    tick()
    const t = setInterval(tick, 60000)
    return () => clearInterval(t)
  }, [])

  const rows = [
    { Icon: Phone, label: 'Call us', sub: '+254 722 389 764', href: 'tel:+254722389764', c: '#2563eb', bg: '#eff6ff', ring: 'rgba(191,219,254,0.7)' },
    { Icon: MapPin, label: 'Find us', sub: 'Thika, Ngoingwa · Get directions', href: 'https://maps.google.com/?q=Express+Dry+Cleaners+Thika+Ngoingwa', ext: true, c: '#dc2626', bg: '#fef2f2', ring: 'rgba(254,205,211,0.8)' },
    { Icon: Globe, label: 'Full website', sub: 'Gallery, reviews and more', href: '/', c: '#0891b2', bg: '#ecfeff', ring: 'rgba(165,243,252,0.8)' },
  ]

  return (
    <div className="space-y-5 px-4 py-5">
      {/* Status hero */}
      <div
        className="relative overflow-hidden rounded-[26px] p-5 text-white"
        style={{ background: 'linear-gradient(135deg,#1d4ed8 0%,#2563eb 55%,#0ea5e9 100%)', boxShadow: '0 12px 30px rgba(37,99,235,0.28)' }}
      >
        <span aria-hidden className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
        <span aria-hidden className="absolute -bottom-12 right-12 h-28 w-28 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3">
          <img src="/logo-icon.png" alt="" width={52} height={52} className="h-[52px] w-[52px] rounded-full object-cover" style={{ border: '2px solid rgba(255,255,255,0.5)' }} />
          <div>
            <p className="text-[16px] font-black leading-tight tracking-[-0.02em]">Express Dry Cleaners</p>
            <p className="text-[12px] text-sky-100">&amp; Laundromat · Thika</p>
          </div>
        </div>
        <div className="relative mt-4 flex items-center gap-2 rounded-2xl bg-white/15 px-3.5 py-2.5" style={{ border: '1px solid rgba(255,255,255,0.22)' }}>
          <span className={`h-2.5 w-2.5 flex-none rounded-full ${status?.open ? 'bg-green-400' : 'bg-slate-300'}`} />
          <p className="text-[13px] font-bold">
            {status ? `${status.title} · ${status.sub}` : 'Mon – Sat: 7AM – 8:30PM'}
          </p>
        </div>
      </div>

      {/* WhatsApp primary */}
      <a
        href="https://wa.me/254722389764"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between rounded-[22px] p-4 text-white active:opacity-90"
        style={{ background: 'linear-gradient(135deg,#25d366 0%,#16a34a 60%,#128c7e 100%)', boxShadow: '0 10px 26px rgba(22,163,74,0.30)' }}
      >
        <span className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20" style={{ border: '1px solid rgba(255,255,255,0.28)' }}>
            <MessageCircle size={24} />
          </span>
          <span>
            <span className="block text-[16px] font-black leading-tight">Chat on WhatsApp</span>
            <span className="block text-[12px] text-green-50">Quick replies, order in seconds</span>
          </span>
        </span>
        <ChevronRight size={20} />
      </a>

      {/* Contact rows */}
      <div className="space-y-2.5">
        <SectionLabel>Get in touch</SectionLabel>
        {rows.map(({ Icon, label, sub, href, ext, c, bg, ring }) => (
          <a
            key={label}
            href={href}
            {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="flex items-center gap-3 rounded-[20px] bg-white p-3.5 active:opacity-90"
            style={card}
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px]" style={{ background: bg, border: `1px solid ${ring}` }}>
              <Icon size={20} style={{ color: c }} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-extrabold text-slate-900">{label}</span>
              <span className="block truncate text-xs text-slate-500">{sub}</span>
            </span>
            <ChevronRight size={18} className="text-slate-300" />
          </a>
        ))}
      </div>

      {/* Opening hours */}
      <div className="space-y-2.5">
        <SectionLabel>Opening hours</SectionLabel>
        <div className="rounded-[22px] bg-white p-2" style={card}>
          {DAYS.map(({ d, t }) => {
            const isToday = d === today
            const closed = t === 'Closed'
            return (
              <div
                key={d}
                className="flex items-center justify-between rounded-2xl px-3.5 py-2.5"
                style={isToday ? { background: '#eff6ff', border: '1px solid rgba(191,219,254,0.8)' } : { border: '1px solid transparent' }}
              >
                <span className={`flex items-center gap-2 text-[13.5px] ${isToday ? 'font-extrabold text-[#1d4ed8]' : 'font-semibold text-slate-700'}`}>
                  {isToday && <Clock size={14} />}
                  {d}
                  {isToday && <span className="rounded-full bg-[#2563eb] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">Today</span>}
                </span>
                <span className={`text-[13px] ${closed ? 'font-bold text-red-500' : isToday ? 'font-extrabold text-[#1d4ed8]' : 'text-slate-500'}`}>{t}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trust footer */}
      <div className="flex flex-col items-center gap-1.5 pb-2 pt-1 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eff6ff] text-[#2563eb]">
          <ShieldCheck size={17} />
        </span>
        <p className="text-[12px] font-bold text-slate-700">Premium care for every fabric</p>
        <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} Express Dry Cleaners &amp; Laundromat, Thika, Kenya</p>
      </div>
    </div>
  )
}
