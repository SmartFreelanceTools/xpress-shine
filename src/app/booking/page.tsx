'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function BookingPage() {
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    location: '',
    service: '',
    pickup_date: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from('bookings').insert([form])

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert('Booking received successfully ✔')
      setForm({
        customer_name: '',
        phone: '',
        location: '',
        service: '',
        pickup_date: ''
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#020B1C] flex items-center justify-center px-6">

      <div className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl">

        <h1 className="text-white text-3xl font-semibold mb-8">
          Book Pickup Service
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="customer_name"
            placeholder="Full Name"
            value={form.customer_name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 outline-none"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 outline-none"
            required
          />

          <input
            name="location"
            placeholder="Pickup Location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 outline-none"
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 outline-none"
            required
          >
            <option value="">Select Service</option>
            <option value="Washing">Washing</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
            <option value="Ironing">Ironing</option>
            <option value="Express Laundry">Express Laundry</option>
          </select>

          <input
            type="date"
            name="pickup_date"
            value={form.pickup_date}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4169E1] hover:bg-[#2f54d3] text-white font-medium py-4 rounded-xl transition"
          >
            {loading ? 'Submitting...' : 'Book Pickup'}
          </button>

        </form>
      </div>
    </div>
  )
}