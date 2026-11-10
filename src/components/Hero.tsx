'use client'

import { useState, useEffect } from 'react'
import BookingModal from './BookingModal'
import {
  Package, Sparkles, CheckCircle2, ArrowRight, Loader2,
  Truck, ShieldCheck, Star, Calendar, Zap, Shirt,
  Droplets, Wind, Menu, X, Waves
} from 'lucide-react'



// ─── Types ───────────────────────────────────────────────────────────────────
interface FormData {
  customer_name: string
  phone: string
  location: string
  service: string
  pickup_date: string
  notes: string
  type: string
}

// ─── Tracking Card ───────────────────────────────────────────────────────────
function TrackingCard() {
  const [activeStep, setActiveStep] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setProgress(65), 400)
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3)
    }, 4000)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [])


  const steps = [
    { label: 'Order Received', time: '10:30 AM · May 24', Icon: Package },
    { label: 'Cleaning in Progress', time: '12:15 PM · May 24', Icon: Waves },
    { label: 'Ready for Pickup', time: '...', Icon: Truck },
  ]

  

  return (
    <div className="relative w-full max-w-sm md:max-w-md mx-auto">
      <div className="absolute -inset-4 rounded-3xl opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 40%,#bfdbfe 0%,transparent 70%)', filter: 'blur(24px)' }} />

      <div className="relative bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.14), 0 2px 8px rgba(0,0,0,0.06)' }}>

        {/* Header band */}
        <div className="px-6 pt-5 pb-4" style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)' }}>
          <p className="text-xs text-blue-200 mb-0.5">Tracking ID</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-white">#XP-8820</p>
            <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center">
              <Shirt size={22} className="text-white" />
            </div>
          </div>
        </div>

        <div className="p-7 md:p-8">
          {/* Steps */}
          <div className="space-y-4 mb-5">
            {steps.map(({ label, time, Icon }, i) => {
              const active = i === activeStep
              const done = i < activeStep
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: done
                          ? 'linear-gradient(135deg,#dbeafe,#bfdbfe)'
                          : active ? '#2563eb' : '#f1f5f9'
                      }}>
                      <Icon size={15} style={{ color: done ? '#2563eb' : active ? 'white' : '#94a3b8' }} />
                    </div>
                    {done && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                        <CheckCircle2 size={9} className="text-white" strokeWidth={3} />
                      </div>
                    )}
                    {active && (
                      <span className="absolute inset-0 rounded-full animate-ping opacity-25"
                        style={{ background: '#2563eb' }} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold truncate ${active ? 'text-slate-800' : done ? 'text-slate-600' : 'text-slate-400'}`}>{label}</p>
                    <p className="text-xs text-slate-400 truncate">{active ? 'In progress...' : time}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progress */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-semibold text-slate-500">Ready Today</p>
              <p className="text-xs font-bold text-blue-600">{progress}%</p>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#2563eb,#38bdf8)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Bubble Decoration ───────────────────────────────────────────────────────
// ─── Bubble Decoration ───────────────────────────────────────────────────────
function Bubble({
  size,
  top,
  left,
  right,
  opacity = 0.25,
  delay = 0,
}: {
  size: number
  top?: string
  left?: string
  right?: string
  opacity?: number
  delay?: number
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none z-20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        right,
        opacity,

        /* STRONGER bubble appearance */
        background:
          'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',

        border: '2px solid rgba(255,255,255,0.7)',

        boxShadow: `
          inset 0 4px 10px rgba(255,255,255,0.7),
          0 8px 24px rgba(37,99,235,0.18)
        `,

        backdropFilter: 'blur(12px)',

        animation: `floatBubble ${4 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  )
}

// ─── Hero (Main Export) ──────────────────────────────────────────────────────
export default function Hero() {
  
  const [openBooking, setOpenBooking] = useState(false)

  useEffect(() => {
  if (openBooking) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
  }
}, [openBooking])
  
  

  const features = [
    { Icon: ShieldCheck, label: 'Premium Quality', sub: 'Top standard care', color: '#2563eb', bg: '#eff6ff' },
    { Icon: Zap, label: 'Fast Turnaround', sub: 'Same-day service', color: '#0284c7', bg: '#f0f9ff' },
    { Icon: Star, label: 'Trusted Service', sub: 'Reliable & secure', color: '#0891b2', bg: '#ecfeff' },
  ]

  return (
    <>
      
      <div className="min-h-screen overflow-x-hidden"
        style={{ background: '#f8faff', fontFamily: "'DM Sans','Plus Jakarta Sans',system-ui,sans-serif" }}>

        

        {/* ── HERO ── */}
        <main className="relative overflow-visible max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-40 md:pt-28 md:pb-44 min-h-screen flex items-center">

          {/* Background glow blobs */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none -z-10" style={{ height: '700px' }}>
            <div className="absolute rounded-full"
              style={{ width: 600, height: 600, top: -200, left: -100, background: 'radial-gradient(circle,rgba(219,234,254,0.6) 0%,transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute rounded-full"
              style={{ width: 400, height: 400, top: 50, right: -50, background: 'radial-gradient(circle,rgba(186,230,253,0.4) 0%,transparent 70%)', filter: 'blur(32px)' }} />
          </div>

          {/* Floating bubbles */}
          <Bubble size={56} top="8%" left="38%" opacity={0.18} delay={0} />
          <Bubble size={36} top="22%" left="52%" opacity={0.14} delay={1} />
          <Bubble size={44} top="60%" left="10%" opacity={0.12} delay={2} />
          <Bubble size={28} top="15%" right="30%" opacity={0.16} delay={0.5} />

          <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">

            {/* ── LEFT ── */}
            <div className="relative z-10">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 fade-up"
                style={{
                  background: 'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
                  border: '1px solid rgba(147,197,253,0.5)',
                  color: '#2563eb',
                  backdropFilter: 'blur(8px)',
                }}>
                <Sparkles size={11} />
                Experience the comfort of Clean Fresh Clothes.
              </div>

              {/* Headline */}
              <h1 className="leading-none mb-4 fade-up delay-1" style={{ fontFamily: "'Syne',sans-serif" }}>
                <span className="block text-6xl md:text-7xl font-black tracking-tight leading-[0.9]" style={{ color: '#0f172a' }}>EXPRESS</span>
                <span className="block text-6xl md:text-7xl font-black tracking-tight leading-[0.9]" style={{ color: '#0f172a' }}>DRYCLEANERS</span>
                <span className="block text-5xl md:text-6xl font-black mt-2 leading-none" style={{ color: '#0f172a' }}>
                  &amp; <em style={{ fontFamily: "'DM Sans',sans-serif", fontStyle: 'italic', color: '#2563eb', fontWeight: 700 }}>Laundromat</em>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-10 fade-up delay-2">
                Premium garment care with fast turnaround. From daily laundry to delicate fabrics — handled with precision.
                We also sell detergents, toilet cleaners, fabric softeners, stain removers and laundry products.
              </p>

              {/* CTA Buttons */}
              {!openBooking && (
              <div className="flex flex-wrap gap-3 mb-12 fade-up delay-3">
                <button onClick={() => setOpenBooking(true)}
                  className="btn-primary flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 24px rgba(37,99,235,0.3)' }}>
                  <Calendar size={18} /> Book Pickup <ArrowRight size={16} />
                </button>

                <a href="https://wa.me/254722389764" target="_blank" rel="noreferrer"
                  className="btn-wa flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', boxShadow: '0 6px 24px rgba(34,197,94,0.22)' }}>
                  {/* WhatsApp SVG icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              )}

              {/* Feature pills */}
              {!openBooking && (
              <div className="flex flex-wrap gap-4 fade-up delay-4">
                {features.map(({ Icon, label, sub, color, bg }) => (
                  <div key={label}
                    className="feature-card flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white transition-all duration-300 cursor-default"
                    style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.07)', border: '1px solid rgba(226,232,240,0.8)' }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700 leading-tight">{label}</p>
                      <p className="text-xs text-slate-400 leading-tight">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            
            )}

            </div>

            {/* ── RIGHT: Tracking Card ── */}
            <div className="relative flex justify-center lg:justify-end scale-in delay-2">
              {/* Decorative rings */}
              <div className="absolute -top-6 -right-6 w-56 h-56 rounded-full opacity-10 pointer-events-none"
                style={{ border: '1.5px solid #2563eb' }} />
              <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none"
                style={{ border: '1.5px solid #93c5fd' }} />

              <TrackingCard />

              {/* Floating mini-badges */}
              <div className="absolute -left-2 top-1/4 bg-white rounded-2xl px-3 py-2 hidden lg:flex items-center gap-2"
                style={{ boxShadow: '0 8px 24px rgba(37,99,235,0.12)', border: '1px solid rgba(226,232,240,0.8)' }}>
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#dbeafe' }}>
                  <Droplets size={12} style={{ color: '#2563eb' }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-700">Eco-Friendly</p>
                  <p className="text-[9px] text-slate-400">Green chemicals</p>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-white rounded-2xl px-3 py-2 hidden lg:flex items-center gap-2"
                style={{ boxShadow: '0 8px 24px rgba(37,99,235,0.12)', border: '1px solid rgba(226,232,240,0.8)' }}>
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#f0fdf4' }}>
                  <Wind size={12} style={{ color: '#16a34a' }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-700">Fresh Scent</p>
                  <p className="text-[9px] text-slate-400">Every wash</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── STATS STRIP ── */}
<div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-full max-w-4xl px-3">
  <div
    className="grid grid-cols-4 divide-x divide-slate-100 bg-white rounded-3xl px-3 py-7"
    style={{
      boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
      border: '1px solid rgba(226,232,240,0.8)'
    }}
  >
    {[
      { val: '2.5k+', label: 'Clients Served' },
      { val: '4.3★', label: 'Customer Rating' },
      { val: '8+', label: 'Years Experience' },
      { val: 'Thika', label: 'Location' },
    ].map(({ val, label }) => (
      <div key={label} className="text-center px-6">
        <p
          className="text-2xl md:text-3xl font-black"
          style={{
            color: '#1e40af',
            fontFamily: "'Syne',sans-serif"
          }}
        >
          {val}
        </p>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          {label}
        </p>
      </div>
    ))}
  </div>
</div>
        </main>
      </div>

      {/* ── BOOKING MODAL ── */}
      {openBooking && <BookingModal onClose={() => setOpenBooking(false)} />}
    </>
  )
}