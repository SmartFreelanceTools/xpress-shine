import Link from 'next/link'
import { Shirt, ShoppingBag, MapPin, Phone, Calendar, MessageCircle, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react'
import AppHeader from '../../components/app/AppHeader'

export const metadata = { title: 'Express Laundry', robots: { index: false } }

const stats = [
  { Icon: ShieldCheck, value: '8+', label: 'Years Experience', accent: '#2563eb', bg: '#eff6ff', ring: 'rgba(191,219,254,0.60)' },
  { Icon: Zap, value: '2.5k+', label: 'Happy Clients', accent: '#0891b2', bg: '#ecfeff', ring: 'rgba(165,243,252,0.60)' },
  { Icon: Star, value: '4.3★', label: 'Rating', accent: '#7c3aed', bg: '#f5f3ff', ring: 'rgba(196,181,253,0.60)' },
]

const tiles = [
  { href: '/app/services', label: 'Services', sub: 'Wash, dry clean, iron', Icon: Shirt },
  { href: '/app/shop', label: 'Shop', sub: 'Cleaning products', Icon: ShoppingBag },
  { href: 'tel:+254722389764', label: 'Call us', sub: '+254 722 389 764', Icon: Phone },
  { href: '/app/more', label: 'Find us', sub: 'Thika, Ngoingwa', Icon: MapPin },
]

const steps = [
  ['1', 'Book', 'Pick a service'],
  ['2', 'We collect', 'From your door'],
  ['3', 'Delivered', 'Fresh and folded'],
]

export default function AppHome() {
  return (
    <>
      <AppHeader />
      <div className="space-y-6 px-4 pb-4 pt-6">
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
              boxShadow: '0 16px 48px rgba(37,99,235,0.38), 0 4px 12px rgba(37,99,235,0.20)',
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
            style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 4px 20px rgba(15,23,42,0.07), 0 1px 4px rgba(15,23,42,0.04)' }}
          >
            <span className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-[15px] text-white"
                style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', boxShadow: '0 4px 14px rgba(22,163,74,0.28)' }}
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
                <Icon size={16} strokeWidth={2} style={{ color: accent }} />
              </span>
              <span className="text-center">
                <span className="block text-lg font-black leading-none tracking-[-0.03em] text-slate-900">{value}</span>
                <span className="mt-1 block text-[10.5px] font-semibold text-slate-500">{label}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">Quick links</p>
          <div className="grid grid-cols-2 gap-3">
            {tiles.map(({ href, label, sub, Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col gap-2 rounded-[20px] bg-white p-4 active:scale-[0.98]"
                style={{ border: '1px solid rgba(191,219,254,0.7)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-[#eff6ff] text-[#2563eb]">
                  <Icon size={19} />
                </span>
                <span className="text-[15px] font-extrabold tracking-[-0.01em] text-slate-900">{label}</span>
                <span className="-mt-1.5 text-xs text-slate-500">{sub}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="rounded-[24px] bg-white p-4" style={{ border: '1px solid rgba(226,232,240,0.8)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">How it works</p>
          <div className="flex items-start justify-between">
            {steps.map(([n, t, s]) => (
              <div key={n} className="flex flex-1 flex-col items-center text-center">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 16px rgba(37,99,235,0.30)' }}
                >
                  {n}
                </span>
                <span className="mt-2 text-[13px] font-extrabold text-slate-900">{t}</span>
                <span className="text-[11px] text-slate-500">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-3 rounded-[20px] bg-white p-4" style={{ border: '1px solid rgba(226,232,240,0.8)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}>
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <div>
            <p className="text-sm font-extrabold text-slate-900">Open today</p>
            <p className="text-xs text-slate-500">Mon – Sat: 7AM – 8PM</p>
          </div>
        </div>
      </div>
    </>
  )
}
