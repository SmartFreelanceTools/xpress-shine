'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import BookingModal from './BookingModal'

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
NEW EXPRESS BOOKING

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
    <img src="/logo-icon.png" alt="Express Dry Cleaners logo" width={60} height={60} className="relative w-[60px] h-[60px] rounded-full object-cover shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-500 group-hover:scale-105" />
  </div>

  {/* Brand */}
<div className="hidden sm:flex flex-col leading-none">

  <div className="flex items-center gap-1.5">

    <span className="text-slate-900 text-[20px] sm:text-[22px] font-black tracking-[-0.04em]">
      EXPRESS
    </span>

    <span className="text-[#2563eb] text-[20px] sm:text-[22px] font-black tracking-[-0.04em]">
      DRYCLEANERS
    </span>

  </div>

  <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-slate-400 font-semibold">
    & LAUNDROMAT
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

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </>
  )
}