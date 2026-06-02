'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  
  const [active, setActive] = useState('home')


  /* BOOKING POPUP */
  const [bookingOpen, setBookingOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const isPopupOpen = bookingOpen
  const [done, setDone] = useState(false)
  const [ref, setRef] = useState('')

  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    location: '',
    service: '',
    pickup_date: '',
    notes: '',
    type: '',
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
  if (bookingOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
  }
}, [bookingOpen])

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ]

async function handleBooking(e: any) {
  e.preventDefault()

  setLoading(true)

  const bookingData = {
    customer_name: formData.customer_name,
    phone: formData.phone,
    location: formData.location,
    service: formData.service,
    pickup_date: formData.pickup_date,
    notes: formData.notes,
    status: 'Pending',
    type: formData.type,
  }

  const { error } = await supabase
    .from('bookings')
    .insert([bookingData])

  setLoading(false)

  if (error) {
    alert(error.message)
    return
  }

  // WhatsApp Message
  const message = `
NEW XPRESS BOOKING

👤 Name: ${formData.customer_name}
📞 Phone: ${formData.phone}
📍 Location: ${formData.location}
🧼 Service: ${formData.service}
📅 Pickup Date: ${formData.pickup_date}

📝 Notes:
${formData.notes || 'No notes'}
`

  const whatsappNumber = '254722389764'

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  // Open WhatsApp
  window.open(whatsappURL, '_blank')

  // Success
  alert('Booking submitted successfully!')

  // Reset form
  setFormData({
    customer_name: '',
    phone: '',
    location: '',
    service: '',
    pickup_date: '',
    notes: '',
    type: '',
  })

  // Close popup
  setBookingOpen(false)
}

  return (
    <>
<nav
className={`
hidden lg:block
fixed top-0 left-0 right-0
max-w-7xl mx-auto mt-4 rounded-[28px]
transition-all duration-500

${bookingOpen
   ? 'hidden'
   : 'block'}

z-[100]

${
 scrolled
 ? 'py-2.5 bg-white/70 backdrop-blur-2xl border-b border-blue-100'
 : 'py-5 bg-transparent'
}
`}
>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ───────── LOGO ───────── */}
          <a href="#home" className="flex items-center gap-4 group">

  {/* PREMIUM LOGO */}
  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-[22px] bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

    {/* Logo Box */}
    <div
      className="
        relative w-[60px] h-[60px]
        rounded-[22px]
        bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#38bdf8]
        flex items-center justify-center
        shadow-[0_10px_30px_rgba(37,99,235,0.35)]
        transition-all duration-500
        group-hover:scale-105
        group-hover:-rotate-3
      "
    >

      {/* Shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-[22px]" />

      <span
        className="
          relative z-10
          text-white
          text-[28px]
          font-black
          tracking-[-0.08em]
        "
      >
        X
      </span>
    </div>
  </div>

  {/* Brand */}
<div className="hidden sm:flex flex-col leading-tight">

  <div className="flex items-baseline gap-2">

    <span className="text-slate-900 text-[18px] sm:text-[20px] font-black tracking-[-0.04em]">
      EXPRESS
    </span>

    <span className="text-[#2563eb] text-[18px] sm:text-[20px] font-black tracking-[-0.04em]">
      DRYCLEANERS
    </span>

    <span className="text-slate-900 text-[18px] sm:text-[20px] font-black tracking-[-0.04em]">
      &
    </span>

    <span className="text-sky-500 text-[18px] sm:text-[20px] font-black tracking-[-0.04em]">
      LAUNDROMAT
    </span>

  </div>

  <span className="mt-0.5 text-[9px] uppercase tracking-[0.3em] text-slate-400 font-medium">
    Premium Care • Pickup & Delivery
  </span>

</div>
</a>

          {/* ───────── DESKTOP NAV ───────── */}
          <div className="hidden lg:flex items-center gap-5">

            {/* NAV LINKS */}
            <div
              className="
                flex items-center gap-1
                px-2 py-2
                rounded-full
                bg-white/70
border border-blue-100
shadow-[0_8px_30px_rgba(37,99,235,0.08)]
                backdrop-blur-2xl
              "
            >
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActive(link.id)}
                  className={`
                    relative px-5 py-3 rounded-full
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    font-medium
                    transition-all duration-300
                    ${
                      active === link.id
                        ? 'text-[#2563eb] bg-blue-50'
                        : 'text-slate-500 hover:text-[#2563eb]'
                    }
                  `}
                >
                  {active === link.id && (
                    <div className="absolute inset-0 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50" />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <button
            id="open-booking"
              onClick={() => setBookingOpen(true)}
              className="
                group relative overflow-hidden
                px-8 py-4
                rounded-2xl
                bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#38bdf8]
                text-white
                border border-white/20
                shadow-[0_15px_40px_rgba(37,99,235,0.30)]
                transition-all duration-500
                hover:scale-[1.03]
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.40)]
              "
            >

              {/* LIGHT EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

              <div className="relative z-10 flex items-center gap-3">

                {/* WHATSAPP ICON */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.15 1.59 5.96L0 24l6.34-1.66a11.88 11.88 0 005.72 1.46h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.17-1.24-6.15-3.43-8.44z" />
                </svg>

                <span className="text-[10px] uppercase tracking-[0.28em] font-medium">
                  Book Now
                </span>
              </div>
            </button>
          </div>

          
        </div>

        


            
          
        

        {/* FONTS */}
        <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }

  /* PREMIUM DATE INPUT */
  input[type='date'] {
    color-scheme: light;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    opacity: 1;
    cursor: pointer;
    filter:
      invert(34%)
      sepia(96%)
      saturate(1352%)
      hue-rotate(208deg)
      brightness(96%)
      contrast(96%);
  }

  input[type='date']::-webkit-datetime-edit {
    color: #0f172a;
  }
`}</style>
      </nav>

      {/* ───────────────── BOOKING POPUP ───────────────── */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 pt-10">

          <div
  className="
    w-full
    max-w-[92vw]
    sm:max-w-xl
    lg:max-w-2xl

    max-h-[85dvh]
    overflow-y-auto

    rounded-[24px]
    sm:rounded-[30px]

    bg-gradient-to-br
    from-[#eff6ff]
    via-white
    to-[#ecfeff]

    border border-white/50

    p-4
    sm:p-6
    lg:p-7

    mt-16 sm:mt-10

    shadow-[0_25px_80px_rgba(37,99,235,0.18)]

    relative
    overflow-hidden
    backdrop-blur-3xl
  "
>

            {/* GLOW */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100/40 via-cyan-50/20 to-sky-100/40 pointer-events-none" />

            {/* CLOSE */}
            {/* CLOSE BUTTON */}
<button
  type="button"
  onClick={() => setBookingOpen(false)}
  className="
    absolute top-4 right-4
    sm:top-5 sm:right-5

    z-50

    w-11 h-11
    rounded-2xl

    flex items-center justify-center

    bg-white/80
    backdrop-blur-xl

    border border-white/60

    text-slate-500
    hover:text-white

    shadow-[0_8px_25px_rgba(37,99,235,0.12)]

    transition-all
    duration-300

    hover:bg-gradient-to-br
    hover:from-[#2563eb]
    hover:to-[#38bdf8]

    hover:scale-105
    active:scale-95
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>

            <div className="relative z-20">

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tight">
                Book Pickup Service
              </h2>

              <p className="text-slate-500 mb-5 sm:mb-8 text-sm sm:text-base">
                Schedule your premium laundry pickup in seconds.
              </p>

              <form
  onSubmit={handleBooking}
  className="grid md:grid-cols-2 gap-3 sm:gap-5"
>

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.customer_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      customer_name: e.target.value,
                    })
                  }
                  className="bg-white/80 border border-blue-100 rounded-2xl px-4 sm:px-5
py-3.5 sm:py-4 w-full text-slate-800 outline-none backdrop-blur-xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="bg-white/80 border border-blue-100 rounded-2xl px-4 sm:px-5
py-3.5 sm:py-4 w-full text-slate-800 outline-none backdrop-blur-xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all"
                />

                <input
                  type="text"
                  placeholder="Location"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                  className="bg-white/80 border border-blue-100 rounded-2xl px-4 sm:px-5
py-3.5 sm:py-4 w-full text-slate-800 outline-none backdrop-blur-xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all"
                />

<select
  required
  value={formData.service}
  onChange={(e) =>
    setFormData({
      ...formData,
      service: e.target.value,
    })
  }
  className="
bg-white/80
border border-blue-100
rounded-2xl
px-4 sm:px-5
py-3.5 sm:py-4
w-full
text-slate-800
outline-none
backdrop-blur-xl
focus:border-[#2563eb]
focus:ring-4
focus:ring-blue-100
transition-all
"
>
  <option value="" className="bg-white text-slate-800">
    Select Service or Product
  </option>

  {/* HEADER - SERVICES */}
  

<option disabled>─── PREMIUM SERVICES ───</option>

<option value="Fabric Renewal">Fabric Renewal</option>
<option value="Dry Cleaning">Dry Cleaning</option>
<option value="Steam Ironing">Steam Ironing</option>
<option value="Same-Day Laundry">Same-Day Laundry</option>
<option value="Sofa Cleaning">Sofa Cleaning</option>
<option value="Mattress Sanitization">Mattress Sanitization</option>
<option value="Curtain Cleaning">Curtain Cleaning</option>
<option value="Carpet Cleaning">Carpet Cleaning</option>
<option value="Pickup & Delivery">Pickup & Delivery</option>
<option value="Sneaker Cleaning">Sneaker Cleaning</option>


<option disabled>─── PRODUCTS ───</option>

<option value="Oxygen Bright Bleach">Oxygen Bright Bleach</option>
<option value="Floor Luxe Cleaner">Floor Luxe Cleaner</option>
<option value="Triple Action Bleach">Triple Action Bleach</option>
<option value="Toilet Max Cleaner">Toilet Max Cleaner</option>
<option value="Fabric Softener">Fabric Softener</option>
<option value="Dishwashing Liquid">Dishwashing Liquid</option>
<option value="Machine Wash Powder">Machine Wash Powder</option>
<option value="Multipurpose Detergent">Multipurpose Detergent</option>
<option value="White Restorer">White Restorer</option>
</select>

                {/* DATE INPUT */}
<div className="md:col-span-2 relative">
  
  {/* LABEL */}
  <label className="absolute -top-2 left-3 text-[11px] bg-white px-2 text-[#2563eb] font-medium z-10">
    Pickup Date
  </label>

  {/* CALENDAR ICON */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#2563eb] pointer-events-none z-10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>

  <input
    type="date"
    required
    min={new Date().toISOString().split('T')[0]}
    value={formData.pickup_date}
    onChange={(e) =>
      setFormData({
        ...formData,
        pickup_date: e.target.value,
      })
    }
    className="
      w-full
      bg-white/90
      border border-blue-100
      rounded-2xl

      pl-12 pr-4 py-3.5 sm:py-4

      text-slate-800
      text-sm sm:text-base

      outline-none
      backdrop-blur-xl

      focus:border-[#2563eb]
      focus:ring-4
      focus:ring-blue-100

      transition-all
    "
  />
</div>

                <textarea
                  placeholder="Extra Notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notes: e.target.value,
                    })
                  }
                  className="
md:col-span-2
bg-white/80
border border-blue-100
rounded-2xl
px-4 sm:px-5
py-3.5 sm:py-4
w-full
text-slate-800
outline-none
backdrop-blur-xl
focus:border-[#2563eb]
focus:ring-4
focus:ring-blue-100
transition-all
"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    md:col-span-2
                    bg-gradient-to-r
                    from-[#2563eb]
                    via-[#1d4ed8]
                    to-[#38bdf8]
                    hover:scale-[1.01]
                    transition-all
                    duration-300
                    text-white
                    rounded-2xl
                    py-5
                    uppercase
                    tracking-[0.25em]
                    text-[11px]
                    font-medium
                    shadow-[0_20px_50px_rgba(37,99,235,0.25)]
                  "
                >
                  {loading ? 'Sending Booking...' : 'Confirm Booking'}
                </button>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}