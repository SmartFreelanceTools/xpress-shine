'use client'

import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase'
import ItemChooser, { ItemMode, PickedProduct } from './ItemChooser'
import { X, ChevronLeft, ChevronRight, CalendarDays, MapPin, User, Phone, Sparkles, StickyNote, ShieldCheck, Truck, Clock, CheckCircle2 } from 'lucide-react'

const SERVICES = [
  'Fabric Renewal', 'Dry Cleaning', 'Steam Ironing', 'Same-Day Laundry', 'Sofa Cleaning',
  'Mattress Sanitization', 'Curtain Cleaning', 'Carpet Cleaning', 'Pickup & Delivery', 'Sneaker Cleaning',
]
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

const field =
  'w-full rounded-2xl border border-blue-100 bg-white px-4 py-3.5 text-[15px] text-slate-900 shadow-[0_2px_12px_rgba(15,23,42,0.04)] outline-none placeholder:text-slate-400 transition focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]'

function parseYmd(s: string): [number, number, number] {
  const p = s.split('-').map(Number)
  return [p[0] ?? 2026, p[1] ?? 1, p[2] ?? 1]
}
const pad = (n: number) => String(n).padStart(2, '0')
const ymd = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`
const nairobiToday = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Nairobi' }).format(new Date())

function addDays(s: string, n: number) {
  const [y, m, d] = parseYmd(s)
  const dt = new Date(Date.UTC(y, m - 1, d + n))
  return ymd(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate())
}
function prettyDate(s: string) {
  if (!s) return ''
  const [y, m, d] = parseYmd(s)
  const wd = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'UTC' })
  return `${wd}, ${d} ${MONTHS[m - 1]} ${y}`
}
function localDigits(input: string) {
  let d = input.replace(/\D/g, '')
  if (d.startsWith('254')) d = d.slice(3)
  if (d.startsWith('0')) d = d.slice(1)
  return d.slice(0, 9)
}

function KenyaFlag() {
  return (
    <svg width="26" height="18" viewBox="0 0 26 18" className="rounded-[3px]" style={{ boxShadow: '0 0 0 1px rgba(15,23,42,0.12)' }} aria-hidden>
      <rect width="26" height="6" fill="#111111" />
      <rect y="6" width="26" height="6" fill="#bb0000" />
      <rect y="12" width="26" height="6" fill="#006600" />
      <rect y="5.2" width="26" height="1.2" fill="#ffffff" />
      <rect y="11.6" width="26" height="1.2" fill="#ffffff" />
      <ellipse cx="13" cy="9" rx="2.6" ry="4.6" fill="#bb0000" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="13" y1="4.2" x2="13" y2="13.8" stroke="#ffffff" strokeWidth="0.5" />
    </svg>
  )
}

function Label({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-600">
      <Icon size={13} /> {children}
    </p>
  )
}

function Calendar({ value, onPick, min }: { value: string; onPick: (v: string) => void; min: string }) {
  const [my, mm] = parseYmd(value || min)
  const [view, setView] = useState({ y: my, m: mm - 1 })
  const cells = useMemo(() => {
    const first = new Date(Date.UTC(view.y, view.m, 1)).getUTCDay()
    const lead = (first + 6) % 7
    const days = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate()
    return [...Array(lead).fill(0), ...Array.from({ length: days }, (_, i) => i + 1)] as number[]
  }, [view])
  const [minY, minM] = parseYmd(min)
  const atMin = view.y === minY && view.m === minM - 1
  const go = (delta: number) => {
    const d = new Date(Date.UTC(view.y, view.m + delta, 1))
    setView({ y: d.getUTCFullYear(), m: d.getUTCMonth() })
  }
  return (
    <div className="mt-3 rounded-[22px] bg-white p-4" style={{ border: '1px solid rgba(191,219,254,0.8)', boxShadow: '0 12px 32px rgba(37,99,235,0.10)' }}>
      <div className="mb-3 flex items-center justify-between">
        <button type="button" onClick={() => go(-1)} disabled={atMin} aria-label="Previous month" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb] disabled:opacity-30">
          <ChevronLeft size={18} />
        </button>
        <p className="text-[15px] font-black text-slate-900">{MONTHS[view.m]} {view.y}</p>
        <button type="button" onClick={() => go(1)} aria-label="Next month" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]">
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-1 text-[11px] font-bold text-slate-400">{w}</span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`b${i}`} />
          const s = ymd(view.y, view.m, d)
          const disabled = s < min
          const selected = s === value
          return (
            <button
              key={s}
              type="button"
              disabled={disabled}
              onClick={() => onPick(s)}
              className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold transition ${selected ? 'text-white' : disabled ? 'text-slate-300' : 'text-slate-800 hover:bg-blue-50'}`}
              style={selected ? { background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 14px rgba(37,99,235,0.35)' } : s === min ? { border: '1.5px solid #93c5fd' } : undefined}
            >
              {d}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-2 text-[13px] font-bold transition ${on ? 'text-white' : 'bg-[#f1f5f9] text-slate-700 hover:bg-blue-50'}`}
      style={on ? { background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 14px rgba(37,99,235,0.30)' } : undefined}
    >
      {children}
    </button>
  )
}

export default function BookingModal({ onClose, service: presetService = '' }: { onClose: () => void; service?: string }) {
  const today = nairobiToday()
  const [form, setForm] = useState({ first_name: '', last_name: '', phone: '', location: '', service: presetService, pickup_date: '', notes: '' })
  const [mode, setMode] = useState<ItemMode>('service')
  const [picked, setPicked] = useState<PickedProduct[]>([])
  const [calOpen, setCalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const set = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })
  const phoneLocal = localDigits(form.phone)
  const phoneValid = /^[17]\d{8}$/.test(phoneLocal)

  const submit = async (e: any) => {
    e.preventDefault()
    setError('')
    if (!phoneValid) return setError('Enter a valid Kenyan number, e.g. 0712 345 678 or 0112 345 678.')
    const isProduct = mode === 'product'
    if (isProduct ? picked.length === 0 : !form.service) return setError(isProduct ? 'Please choose at least one product.' : 'Please choose a service.')
    if (!form.pickup_date) return setError('Please choose a pickup date.')
    setLoading(true)
    const customer_name = `${form.first_name.trim()} ${form.last_name.trim()}`.trim()
    const phone = `+254${phoneLocal}`
    const itemText = isProduct ? picked.map((p) => p.name).join(', ') : form.service
    const dbService = isProduct ? `Product: ${itemText}` : form.service
    const { error: dbError } = await supabase.from('bookings').insert([
      { customer_name, phone, location: form.location, service: dbService, pickup_date: form.pickup_date, notes: form.notes, status: 'Pending', type: 'website' },
    ])
    setLoading(false)
    if (dbError) return setError(dbError.message)
    setDone(true)
    // Email the owner. The booking is already saved, so a failure here must never block the customer.
    fetch('/api/notify-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customer_name, phone, location: form.location, service: itemText, item_type: isProduct ? 'product' : 'service', items: isProduct ? picked : [], pickup_date: form.pickup_date, notes: form.notes, type: 'website' }),
      keepalive: true,
    }).catch(() => {})
  }

  const dateLabel = form.pickup_date
    ? `${form.pickup_date === today ? 'Today · ' : form.pickup_date === addDays(today, 1) ? 'Tomorrow · ' : ''}${prettyDate(form.pickup_date)}`
    : 'Choose a date from the calendar'

  // Same "Booking received" screen as the mobile app, shown as a small popup that always fits the screen.
  if (done) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" onClick={onClose}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-[28px] bg-[#f8faff] px-6 py-10 text-center"
          style={{ boxShadow: '0 30px 90px rgba(15,23,42,0.35)' }}
        >
          <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-500">
            <X size={18} />
          </button>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eff6ff] text-3xl text-[#2563eb]">✓</div>
          <h2 className="mt-4 text-xl font-black text-slate-900">Booking received</h2>
          <p className="mt-1 text-sm text-slate-500">We will contact you shortly to confirm your pickup.</p>
          <button
            onClick={() => { setDone(false); setPicked([]); setMode('service'); setForm({ ...form, notes: '' }) }}
            className="mt-6 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] px-6 py-3 text-sm font-bold text-white"
          >
            Make another booking
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[94dvh] w-full flex-col overflow-hidden rounded-t-[28px] bg-[#f8faff] sm:max-h-[90dvh] sm:max-w-3xl sm:rounded-[32px] lg:max-w-5xl lg:flex-row"
        style={{ boxShadow: '0 30px 90px rgba(15,23,42,0.35)' }}
      >
        {/* Brand panel (laptop) */}
        <aside className="relative hidden w-[340px] flex-none flex-col justify-between overflow-hidden p-8 text-white lg:flex" style={{ background: 'linear-gradient(160deg,#1d4ed8 0%,#2563eb 50%,#0ea5e9 100%)' }}>
          <span aria-hidden className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10" />
          <span aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />
          <div className="relative">
            <img src="/logo-icon.png" alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" style={{ border: '2px solid rgba(255,255,255,0.5)' }} />
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.28em] text-sky-100">Express Dry Cleaners</p>
            <h2 className="mt-2 text-[28px] font-black leading-[1.1] tracking-[-0.02em]">Book your pickup in a minute</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-sky-50/90">Tell us what needs cleaning and when. We collect, clean and bring it back fresh.</p>
          </div>
          <ul className="relative space-y-3.5 text-[13.5px]">
            {[{ I: Truck, t: 'Pickup from your door' }, { I: ShieldCheck, t: 'Careful fabric handling' }, { I: Clock, t: 'Mon – Sat · 7AM – 8:30PM' }].map(({ I, t }) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15" style={{ border: '1px solid rgba(255,255,255,0.22)' }}><I size={17} /></span>
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Form side */}
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-3 px-5 pb-3 pt-5 sm:px-7 sm:pt-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">Book pickup</p>
              <h3 className="text-[22px] font-black leading-tight tracking-[-0.02em] text-slate-900 sm:text-[26px]">Tell us where and when</h3>
            </div>
            <button type="button" onClick={onClose} aria-label="Close" className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-500 shadow-sm transition hover:bg-[#2563eb] hover:text-white">
              <X size={20} />
            </button>
          </div>

          {done ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-14 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eff6ff] text-[#2563eb]"><CheckCircle2 size={34} /></span>
              <h4 className="mt-4 text-xl font-black text-slate-900">Booking received</h4>
              <p className="mt-1 max-w-sm text-sm text-slate-500">Thank you! Your booking has been sent to our team. We will contact you shortly to confirm your pickup.</p>
              <button onClick={onClose} className="mt-6 rounded-2xl px-8 py-3 text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 10px 24px rgba(37,99,235,0.28)' }}>Done</button>
            </div>
          ) : (
            <form onSubmit={submit} className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 pb-6 pt-2 sm:px-7">
              <div>
                <Label icon={User}>Your name</Label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input name="first_name" value={form.first_name} onChange={set} placeholder="First name" autoComplete="given-name" required className={field} />
                  <input name="last_name" value={form.last_name} onChange={set} placeholder="Last name" autoComplete="family-name" required className={field} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label icon={Phone}>Phone number</Label>
                  <div className="flex items-stretch overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] focus-within:border-[#2563eb] focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]">
                    <div className="flex flex-none items-center gap-2 border-r border-blue-100 bg-[#f8fafc] px-3.5">
                      <KenyaFlag />
                      <span className="text-[15px] font-extrabold text-slate-900">+254</span>
                    </div>
                    <input name="phone" type="tel" inputMode="tel" autoComplete="tel-national" value={form.phone} onChange={set} placeholder="07XX or 01XX XXX XXX" required className="min-w-0 flex-1 bg-transparent px-3.5 py-3.5 text-[15px] text-slate-900 outline-none placeholder:text-slate-400" />
                  </div>
                  <p className={`mt-1.5 text-[12px] ${form.phone && !phoneValid ? 'text-red-500' : 'text-slate-400'}`}>
                    {form.phone && phoneValid ? `We will use +254 ${phoneLocal.slice(0, 3)} ${phoneLocal.slice(3, 6)} ${phoneLocal.slice(6)}` : 'Start with 07 or 01.'}
                  </p>
                </div>
                <div>
                  <Label icon={MapPin}>Pickup location</Label>
                  <input name="location" value={form.location} onChange={set} placeholder="Estate, street or landmark" required className={field} />
                </div>
              </div>

              <div>
                <Label icon={Sparkles}>Service or product</Label>
                <ItemChooser services={SERVICES} mode={mode} onMode={setMode} service={form.service} onService={(v) => setForm({ ...form, service: v })} picked={picked} onPicked={setPicked} />
              </div>

              <div>
                <Label icon={CalendarDays}>Pickup date</Label>
                <div className="mb-3 flex gap-2">
                  {[{ l: 'Today', v: today }, { l: 'Tomorrow', v: addDays(today, 1) }].map(({ l, v }) => {
                    const on = form.pickup_date === v
                    return (
                      <button key={l} type="button" onClick={() => { setForm({ ...form, pickup_date: v }); setCalOpen(false) }}
                        className={`flex-1 rounded-2xl py-2.5 text-[13px] font-bold transition ${on ? 'text-white' : 'bg-[#f1f5f9] text-slate-700 hover:bg-blue-50'}`}
                        style={on ? { background: 'linear-gradient(135deg,#2563eb,#1d4ed8)' } : undefined}>{l}</button>
                    )
                  })}
                </div>
                <button type="button" onClick={() => setCalOpen((o) => !o)} className="flex w-full items-center justify-between rounded-2xl border border-blue-100 bg-white px-4 py-3.5 text-left shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                  <span className={`text-[15px] ${form.pickup_date ? 'font-bold text-slate-900' : 'text-slate-400'}`}>{dateLabel}</span>
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]"><CalendarDays size={18} /></span>
                </button>
                {calOpen && <Calendar value={form.pickup_date} min={today} onPick={(v) => { setForm({ ...form, pickup_date: v }); setCalOpen(false) }} />}
              </div>

              <div>
                <Label icon={StickyNote}>Notes (optional)</Label>
                <textarea name="notes" value={form.notes} onChange={set} placeholder="Anything we should know?" rows={3} className={field} />
              </div>

              {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-600">{error}</p>}

              <button type="submit" disabled={loading} className="w-full rounded-[22px] bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#172554] py-4 text-[15px] font-bold text-white shadow-[0_16px_40px_rgba(37,99,235,0.35)] transition hover:scale-[1.01] disabled:opacity-60">
                {loading ? 'Sending...' : 'Confirm booking'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
