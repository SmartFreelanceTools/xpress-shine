'use client'
import { useState } from 'react'

export default function Contact() {
  const [service, setService] = useState('Laundry')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')

  const sendWhatsApp = () => {
    const message = `
Hello EXPRESS DryCleaners & Laundromat 👋

I would like to book a service:

📦 Service: ${service}
📍 Location: ${location}
⏰ Preferred Time: ${time}

Please confirm availability.
    `

    const url = `https://wa.me/254722389764?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      style={{
        background: '#f8faff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >

      {/* SAME PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* TOP LEFT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -250,
            left: -120,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.7) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: 80,
            right: -100,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.45) 0%,transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* BOTTOM GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 450,
            height: 450,
            bottom: -120,
            left: '30%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.35) 0%,transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

      </div>

      {/* FLOATING BUBBLES */}

      <div
        className="absolute top-20 left-[8%] w-16 h-16 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border:'1px solid rgba(255,255,255,0.7)',
          backdropFilter:'blur(12px)',
        }}
      />

      <div
        className="absolute top-[35%] right-[10%] w-10 h-10 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border:'1px solid rgba(255,255,255,0.7)',
          backdropFilter:'blur(12px)',
        }}
      />

      <div
        className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full opacity-10 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border:'1px solid rgba(255,255,255,0.7)',
          backdropFilter:'blur(12px)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">

        {/* HEADER */}

        <div className="text-center mb-12">

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
              border:'1px solid rgba(147,197,253,0.5)',
              color:'#2563eb'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#4169E1] animate-pulse" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Book Service
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl font-black tracking-tight"
            style={{
              color:'#0f172a',
              fontFamily:"'Syne',sans-serif"
            }}
          >
            BOOK A
            <span className="block text-blue-600">
              SERVICE
            </span>
          </h2>

          <p className="text-slate-500 mt-4 text-lg">
            Fast booking via WhatsApp in under 60 seconds
          </p>

        </div>

        {/* FORM CARD */}

        <div
          className="relative rounded-[32px] bg-white p-10 space-y-6"
          style={{
            boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
            border:'1px solid rgba(226,232,240,0.8)',
          }}
        >

          {/* top accent line */}

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-b-full"
            style={{
              background:
                'linear-gradient(to right,#E34234,#2563eb,#00CED1)',
            }}
          />

          {/* SERVICE */}

          <div>
            <label className="text-sm font-semibold text-slate-600">
              Select Service
            </label>

            <select
              className="w-full mt-2 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-blue-500 transition"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>Laundry</option>
              <option>Dry Cleaning</option>
              <option>Ironing</option>
              <option>Express Service</option>
            </select>
          </div>

          {/* LOCATION */}

          <div>
            <label className="text-sm font-semibold text-slate-600">
              Your Location
            </label>

            <input
              className="w-full mt-2 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              placeholder="e.g. Njomoko, Thika..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* TIME */}

          <div>
            <label className="text-sm font-semibold text-slate-600">
              Pickup Time
            </label>

            <input
              type="time"
              className="w-full mt-2 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-blue-500 transition"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* BUTTON */}

          <button
            onClick={sendWhatsApp}
            className="w-full py-4 rounded-xl text-white font-bold transition-all hover:scale-[1.02]"
            style={{
              background:'linear-gradient(135deg,#25D366,#1fb857)',
              boxShadow:'0 6px 20px rgba(37,211,102,0.25)'
            }}
          >
            🚀 Book via WhatsApp
          </button>

          {/* FOOTNOTE */}

          <p className="text-center text-xs text-slate-400">
            No login required • Instant response • Free pickup available
          </p>

        </div>

      </div>

    </section>
  )
}