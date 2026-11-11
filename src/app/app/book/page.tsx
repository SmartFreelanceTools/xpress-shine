'use client'

import { Suspense, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight, CalendarDays, MapPin, User, Phone, Sparkles, StickyNote } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import ItemChooser, { ItemMode, PickedProduct } from '../../../components/ItemChooser'
import AppHeader from '../../../components/app/AppHeader'
import AppPageTitle from '../../../components/app/AppPageTitle'

const SERVICES = ['Washing', 'Dry Cleaning', 'Ironing', 'Express Laundry', 'Sofa Cleaning', 'Mattress Cleaning', 'Curtain Care', 'Carpet Cleaning', 'Upholstery']

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

const field =
  'w-full rounded-2xl border border-blue-100 bg-white px-4 py-3.5 text-[15px] text-slate-900 shadow-[0_2px_12px_rgba(15,23,42,0.04)] outline-none placeholder:text-slate-400 focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]'

const card = { border: '1px solid rgba(226,232,240,0.8)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }

function parseYmd(s: string): [number, number, number] {
  const p = s.split('-').map(Number)
  return [p[0] ?? 2026, p[1] ?? 1, p[2] ?? 1]
}

const pad = (n: number) => String(n).padStart(2, '0')
const ymd = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`

// Today's date in Nairobi as YYYY-MM-DD
function nairobiToday() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Nairobi' }).format(new Date())
}

function prettyDate(s: string) {
  if (!s) return ''
  const [y, m, d] = parseYmd(s)
  const wd = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'UTC' })
  return `${wd}, ${d} ${MONTHS[m - 1]} ${y}`
}

function addDays(s: string, n: number) {
  const [y, m, d] = parseYmd(s)
  const dt = new Date(Date.UTC(y, m - 1, d + n))
  return ymd(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate())
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

// Normalise what the customer typed to the 9 digits after +254
function localDigits(input: string) {
  let d = input.replace(/\D/g, '')
  if (d.startsWith('254')) d = d.slice(3)
  if (d.startsWith('0')) d = d.slice(1)
  return d.slice(0, 9)
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
    const first = new Date(Date.UTC(view.y, view.m, 1)).getUTCDay() // 0 = Sun
    const lead = (first + 6) % 7 // Monday first
    const days = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate()
    return [...Array(lead).fill(0), ...Array.from({ length: days }, (_, i) => i + 1)]
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
          const isToday = s === min
          return (
            <button
              key={s}
              type="button"
              disabled={disabled}
              onClick={() => onPick(s)}
              className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold transition ${
                selected ? 'text-white' : disabled ? 'text-slate-300' : 'text-slate-800 active:bg-blue-50'
              }`}
              style={
                selected
                  ? { background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 14px rgba(37,99,235,0.35)' }
                  : isToday
                  ? { border: '1.5px solid #93c5fd' }
                  : undefined
              }
            >
              {d}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function BookForm() {
  const params = useSearchParams()
  const preset = params.get('service') || ''
  const today = nairobiToday()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    location: '',
    service: SERVICES.includes(preset) ? preset : '',
    pickup_date: '',
    notes: '',
  })
  const [mode, setMode] = useState<ItemMode>('service')
  const [picked, setPicked] = useState<PickedProduct[]>([])
  const [calOpen, setCalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const set = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })
  const phoneLocal = localDigits(form.phone)
  const phoneValid = /^[17]\d{8}$/.test(phoneLocal)

  const submit = async (e: any) => {
    e.preventDefault()
    setError('')
    if (!phoneValid) {
      setError('Enter a valid Kenyan number, e.g. 0712 345 678 or 0112 345 678.')
      return
    }
    const isProduct = mode === 'product'
    if (isProduct ? picked.length === 0 : !form.service) {
      setError(isProduct ? 'Please choose at least one product.' : 'Please choose a service.')
      return
    }
    setLoading(true)
    const customer_name = `${form.first_name.trim()} ${form.last_name.trim()}`.trim()
    const phone = `+254${phoneLocal}`
    const itemText = isProduct ? picked.map((p) => p.name).join(', ') : form.service
    const dbService = isProduct ? `Product: ${itemText}` : form.service
    const { error: dbError } = await supabase.from('bookings').insert([
      { customer_name, phone, location: form.location, service: dbService, pickup_date: form.pickup_date, notes: form.notes, status: 'Pending', type: 'app' },
    ])
    setLoading(false)
    if (dbError) {
      setError(dbError.message)
      return
    }
    setDone(true)
    // Email the owner. The booking is already saved, so a failure here must never block the customer.
    fetch('/api/notify-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customer_name, phone, location: form.location, service: itemText, item_type: isProduct ? 'product' : 'service', items: isProduct ? picked : [], pickup_date: form.pickup_date, notes: form.notes, type: 'app' }),
      keepalive: true,
    }).catch(() => {})
  }

  if (done) {
    return (
      <div className="px-4 py-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eff6ff] text-3xl text-[#2563eb]">✓</div>
        <h2 className="mt-4 text-xl font-black text-slate-900">Booking received</h2>
        <p className="mt-1 text-sm text-slate-500">We will contact you shortly to confirm your pickup.</p>
        <button
          onClick={() => { setDone(false); setForm({ ...form, notes: '' }) }}
          className="mt-6 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] px-6 py-3 text-sm font-bold text-white"
        >
          Make another booking
        </button>
      </div>
    )
  }

  const pretty = (s: string) => (s === today ? 'Today' : s === addDays(today, 1) ? 'Tomorrow' : '')

  return (
    <form onSubmit={submit} className="space-y-4 px-4 py-5">
      {/* Name */}
      <div className="rounded-[24px] bg-white p-4" style={card}>
        <Label icon={User}>Your name</Label>
        <div className="grid grid-cols-2 gap-3">
          <input name="first_name" value={form.first_name} onChange={set} placeholder="First name" autoComplete="given-name" required className={field} />
          <input name="last_name" value={form.last_name} onChange={set} placeholder="Last name" autoComplete="family-name" required className={field} />
        </div>
      </div>

      {/* Phone */}
      <div className="rounded-[24px] bg-white p-4" style={card}>
        <Label icon={Phone}>Phone number</Label>
        <div className="flex items-stretch overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] focus-within:border-[#2563eb] focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]">
          <div className="flex flex-none items-center gap-2 border-r border-blue-100 bg-[#f8fafc] px-3.5">
            <KenyaFlag />
            <span className="text-[15px] font-extrabold text-slate-900">+254</span>
          </div>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            value={form.phone}
            onChange={set}
            placeholder="07XX or 01XX XXX XXX"
            required
            className="min-w-0 flex-1 bg-transparent px-3.5 py-3.5 text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
          />
        </div>
        <p className={`mt-2 text-[12px] ${form.phone && !phoneValid ? 'text-red-500' : 'text-slate-400'}`}>
          {form.phone && phoneValid ? `We will use +254 ${phoneLocal.slice(0, 3)} ${phoneLocal.slice(3, 6)} ${phoneLocal.slice(6)}` : 'Type your number starting with 07 or 01.'}
        </p>
      </div>

      {/* Location */}
      <div className="rounded-[24px] bg-white p-4" style={card}>
        <Label icon={MapPin}>Pickup location</Label>
        <input name="location" value={form.location} onChange={set} placeholder="Estate, street or landmark" required className={field} />
      </div>

      {/* Service */}
      <div className="rounded-[24px] bg-white p-4" style={card}>
        <Label icon={Sparkles}>Service or product</Label>
        <ItemChooser services={SERVICES} mode={mode} onMode={setMode} service={form.service} onService={(v) => setForm({ ...form, service: v })} picked={picked} onPicked={setPicked} />
      </div>

      {/* Date */}
      <div className="rounded-[24px] bg-white p-4" style={card}>
        <Label icon={CalendarDays}>Pickup date</Label>
        <div className="mb-3 flex gap-2">
          {[{ l: 'Today', v: today }, { l: 'Tomorrow', v: addDays(today, 1) }].map(({ l, v }) => {
            const on = form.pickup_date === v
            return (
              <button
                key={l}
                type="button"
                onClick={() => { setForm({ ...form, pickup_date: v }); setCalOpen(false) }}
                className={`flex-1 rounded-2xl py-2.5 text-[13px] font-bold ${on ? 'text-white' : 'bg-[#f1f5f9] text-slate-700'}`}
                style={on ? { background: 'linear-gradient(135deg,#2563eb,#1d4ed8)' } : undefined}
              >
                {l}
              </button>
            )
          })}
        </div>
        <button
          type="button"
          onClick={() => setCalOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-2xl border border-blue-100 bg-white px-4 py-3.5 text-left shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
        >
          <span className={`text-[15px] ${form.pickup_date ? 'font-bold text-slate-900' : 'text-slate-400'}`}>
            {form.pickup_date ? `${pretty(form.pickup_date) ? pretty(form.pickup_date) + ' · ' : ''}${prettyDate(form.pickup_date)}` : 'Choose a date from the calendar'}
          </span>
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]">
            <CalendarDays size={18} />
          </span>
        </button>
        {calOpen && <Calendar value={form.pickup_date} min={today} onPick={(v) => { setForm({ ...form, pickup_date: v }); setCalOpen(false) }} />}
      </div>

      {/* Notes */}
      <div className="rounded-[24px] bg-white p-4" style={card}>
        <Label icon={StickyNote}>Notes (optional)</Label>
        <textarea name="notes" value={form.notes} onChange={set} placeholder="Anything we should know?" rows={3} className={field} />
      </div>

      {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-600">{error}</p>}

      <button type="submit" disabled={loading} className="w-full rounded-[22px] bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#172554] py-4 shadow-[0_16px_40px_rgba(37,99,235,0.35)] text-[15px] font-bold text-white disabled:opacity-60">
        {loading ? 'Sending...' : 'Book pickup'}
      </button>
    </form>
  )
}

export default function AppBook() {
  return (
    <>
      <AppHeader />
      <AppPageTitle title="Book a pickup" sub="Tell us where and when. We will confirm shortly." />
      <Suspense fallback={null}>
        <BookForm />
      </Suspense>
    </>
  )
}
