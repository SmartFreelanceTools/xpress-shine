'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function BookingForm() {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    location: '',
    service: '',
    pickup_date: '',
    notes: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

async function handleSubmit(e) {
  e.preventDefault()

  setLoading(true)

  const { error } = await supabase
    .from('bookings')
    .insert([
      {
        customer_name: formData.customer_name,
        phone: formData.phone,
        location: formData.location,
        service: formData.service,
        pickup_date: formData.pickup_date,
        notes: formData.notes,
        status: 'pending',
      }
    ])

  setLoading(false)

  if (error) {
    alert(error.message)
  } else {

    // YOUR WHATSAPP NUMBER
    // use country code without +
    const adminNumber = '254722389764'

    // AUTO MESSAGE
    const whatsappMessage = `
🧺 *NEW EXPRESS BOOKING*

👤 Name: ${formData.customer_name}

📞 Phone: ${formData.phone}

📍 Location: ${formData.location}

🧼 Service: ${formData.service}

📅 Pickup Date: ${formData.pickup_date}

📝 Notes: ${formData.notes || 'No notes'}

`.trim()

    // ENCODE MESSAGE
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // WHATSAPP LINK
    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodedMessage}`

    // OPEN WHATSAPP
    window.open(whatsappURL, '_blank')

    alert('Booking submitted successfully ✅')

    // RESET FORM
    setFormData({
      customer_name: '',
      phone: '',
      location: '',
      service: '',
      pickup_date: '',
      notes: '',
    })
  }
}

  return (
    <section
      id="booking"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#ecfeff]"
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#2563eb]/15 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] bg-[#0CC143]/10 blur-[120px] rounded-full" />

        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-cyan-300/10 blur-[100px] rounded-full" />

      </div>

      <div className="relative max-w-3xl mx-auto px-6">

        {/* CARD */}
        <div
          className="
            rounded-[40px]
            border border-white/50
            bg-white/70
            backdrop-blur-3xl
            p-8 sm:p-12
            shadow-[0_25px_80px_rgba(37,99,235,0.12)]
          "
        >

          {/* TITLE */}
          <div className="text-center mb-10">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white/70 mb-5 shadow-sm">

              <span className="w-2 h-2 rounded-full bg-[#0CC143] animate-pulse" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#2563eb] font-semibold">
                Booking Available
              </span>

            </div>

            <h2 className="text-slate-900 text-4xl sm:text-5xl font-bold tracking-tight">
              Schedule Pickup
            </h2>

            <p className="text-slate-500 mt-4 max-w-lg mx-auto">
              Fast pickup and premium garment care from Express Drycleaners & Laundromat.
            </p>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>

              <label className="block text-slate-600 text-sm mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="customer_name"
                required
                value={formData.customer_name}
                onChange={handleChange}
                placeholder="John Doe"
                className="
                  w-full h-14 px-5 rounded-2xl
                  bg-white/80
                  border border-blue-100
                  text-slate-900
                  outline-none
                  focus:border-[#2563eb]
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              />

            </div>

            {/* PHONE */}
            <div>

              <label className="block text-slate-600 text-sm mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="0712345678"
                className="
                  w-full h-14 px-5 rounded-2xl
                  bg-white/80
                  border border-blue-100
                  text-slate-900
                  outline-none
                  focus:border-[#2563eb]
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              />

            </div>

            {/* LOCATION */}
            <div>

              <label className="block text-slate-600 text-sm mb-2 font-medium">
                Pickup Location
              </label>

              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="Thika, Ngoingwa..."
                className="
                  w-full h-14 px-5 rounded-2xl
                  bg-white/80
                  border border-blue-100
                  text-slate-900
                  outline-none
                  focus:border-[#2563eb]
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              />

            </div>

            {/* SERVICE */}
            <div>

              <label className="block text-slate-600 text-sm mb-2 font-medium">
                Service
              </label>

              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="
                  w-full h-14 px-5 rounded-2xl
                  bg-white/80
                  border border-blue-100
                  text-slate-900
                  outline-none
                  focus:border-[#2563eb]
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              >
                <option value="">Select Service</option>
                <option value="Dry Cleaning">Dry Cleaning</option>
                <option value="Laundry">Laundry</option>
                <option value="Ironing">Ironing</option>
                <option value="Carpet Cleaning">Carpet Cleaning</option>
              </select>

            </div>

            {/* DATE */}
            <div>

              <label className="block text-slate-600 text-sm mb-2 font-medium">
                Pickup Date
              </label>

              <input
                type="date"
                name="pickup_date"
                required
                value={formData.pickup_date}
                onChange={handleChange}
                className="
                  w-full h-14 px-5 rounded-2xl
                  bg-white/80
                  border border-blue-100
                  text-slate-900
                  outline-none
                  focus:border-[#2563eb]
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              />

            </div>

            {/* NOTES */}
            <div>

              <label className="block text-slate-600 text-sm mb-2 font-medium">
                Additional Notes
              </label>

              <textarea
                name="notes"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special instructions..."
                className="
                  w-full px-5 py-4 rounded-2xl
                  bg-white/80
                  border border-blue-100
                  text-slate-900
                  outline-none
                  resize-none
                  focus:border-[#2563eb]
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full h-14 rounded-2xl
                bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#38bdf8]
                text-white
                uppercase
                tracking-[0.25em]
                text-sm
                font-medium
                transition-all duration-300
                hover:scale-[1.01]
                hover:shadow-[0_20px_40px_rgba(37,99,235,0.30)]
                disabled:opacity-50
              "
            >
              {loading ? 'Submitting...' : 'Book Pickup'}
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}