'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import AppHeader from '../../../components/app/AppHeader'
import AppPageTitle from '../../../components/app/AppPageTitle'

const SERVICES = ['Washing', 'Dry Cleaning', 'Ironing', 'Express Laundry', 'Sofa Cleaning', 'Mattress Cleaning', 'Curtain Care', 'Carpet Cleaning']

const field =
  'w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 text-[15px] text-slate-900 shadow-[0_2px_12px_rgba(15,23,42,0.04)] outline-none placeholder:text-slate-400 focus:border-[#2563eb]'

function BookForm() {
  const params = useSearchParams()
  const preset = params.get('service') || ''
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    location: '',
    service: SERVICES.includes(preset) ? preset : '',
    pickup_date: '',
    notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const set = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('bookings').insert([{ ...form, status: 'Pending', type: 'app' }])
    setLoading(false)
    if (error) {
      alert(error.message)
      return
    }
    setDone(true)
    const msg = `NEW EXPRESS BOOKING\n\nName: ${form.customer_name}\nPhone: ${form.phone}\nLocation: ${form.location}\nService: ${form.service}\nPickup date: ${form.pickup_date || 'Not set'}\nNotes: ${form.notes || 'None'}`
    window.open(`https://wa.me/254722389764?text=${encodeURIComponent(msg)}`, '_blank')
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

  return (
    <form onSubmit={submit} className="space-y-3 px-4 py-5">
      <input name="customer_name" value={form.customer_name} onChange={set} placeholder="Full name" required className={field} />
      <input name="phone" type="tel" value={form.phone} onChange={set} placeholder="Phone number" required className={field} />
      <input name="location" value={form.location} onChange={set} placeholder="Pickup location" required className={field} />
      <select name="service" value={form.service} onChange={set} required className={field}>
        <option value="">Select service</option>
        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <input name="pickup_date" type="date" value={form.pickup_date} onChange={set} className={field} />
      <textarea name="notes" value={form.notes} onChange={set} placeholder="Notes (optional)" rows={3} className={field} />
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
