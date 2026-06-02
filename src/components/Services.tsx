'use client'

import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  Waves,
  Wind,
  Droplets,
} from 'lucide-react'

type ServiceColor = 'blue' | 'cyan' | 'red'

const services = [
  {
    icon: '🧺',
    title: 'Washing',
    tagline: 'Deep Clean Care',
    description:
      'Premium washing with careful fabric handling, stain treatment, and gentle cycle protection.',
    color: 'blue' as ServiceColor,
    features: ['Color sorting', 'Gentle cycles', 'Fabric care'],
    badge: 'Popular',
    number: '01',
  },
  {
    icon: '👔',
    title: 'Dry Cleaning',
    tagline: 'Luxury Finish',
    description:
      'Professional cleaning for suits, delicate garments, and premium wear with refined finishing.',
    color: 'cyan' as ServiceColor,
    features: ['Suits', 'Wedding wear', 'Silk care'],
    badge: 'Premium',
    number: '02',
  },
  {
    icon: '🔥',
    title: 'Ironing',
    tagline: 'Crisp Finish',
    description:
      'Smooth steam pressing for a clean, sharp and elegant appearance.',
    color: 'red' as ServiceColor,
    features: ['Steam press', 'Collars', 'Uniforms'],
    badge: 'Fast',
    number: '03',
  },
  {
    icon: '⚡',
    title: 'Express Laundry',
    tagline: 'Same-Day Care',
    description:
      'Quick turnaround laundry service with reliable premium finishing.',
    color: 'blue' as ServiceColor,
    features: ['4–6 hrs', 'Priority', 'Same day'],
    badge: 'Express',
    number: '04',
  },
  {
    icon: '🛋️',
    title: 'Sofa Cleaning',
    tagline: 'Fresh Upholstery',
    description:
      'Deep upholstery cleaning that restores freshness and removes hidden dust.',
    color: 'cyan' as ServiceColor,
    features: ['Stain care', 'Odor removal', 'Fabric refresh'],
    badge: 'Home',
    number: '05',
  },
  {
    icon: '🛏️',
    title: 'Mattress Cleaning',
    tagline: 'Healthy Sleep',
    description:
      'Hygienic mattress deep cleaning for a cleaner and healthier sleep environment.',
    color: 'blue' as ServiceColor,
    features: ['Dust removal', 'Sanitization', 'Deep clean'],
    badge: 'Care',
    number: '06',
  },
  {
    icon: '🪟',
    title: 'Curtain Care',
    tagline: 'Elegant Refresh',
    description:
      'Gentle curtain cleaning that preserves fabric quality and freshness.',
    color: 'red' as ServiceColor,
    features: ['Steam care', 'Dust removal', 'Safe wash'],
    badge: 'Premium',
    number: '07',
  },
  {
    icon: '🧼',
    title: 'Carpet Cleaning',
    tagline: 'Deep Clean',
    description:
      'Professional carpet cleaning for homes and offices with deep extraction.',
    color: 'cyan' as ServiceColor,
    features: ['Deep wash', 'Fast dry', 'Odor removal'],
    badge: 'Value',
    number: '08',
  },
  {
    icon: '✨',
    title: 'Upholstery',
    tagline: 'Fabric Care',
    description:
      'Soft, safe cleaning for chairs, cushions and fabric furniture.',
    color: 'blue' as ServiceColor,
    features: ['Fabric safe', 'Stain care', 'Fresh finish'],
    badge: 'Luxury',
    number: '09',
  },
]

const colorMap = {
  blue: {
    glow: '',
    badge: '',
    iconBg: '',
    iconColor: '',
    line: '',
  },
  cyan: {
    glow: '',
    badge: '',
    iconBg: '',
    iconColor: '',
    line: '',
  },
  red: {
    glow: '',
    badge: '',
    iconBg: '',
    iconColor: '',
    line: '',
  },
} as const

export default function Services() {
  return (
    <section
      className="relative -mt-24 overflow-hidden pt-40 pb-32 z-10"
      style={{
        background: '#f8faff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >
      {/* HERO BACKGROUND STYLE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

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

        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            left: '30%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.35) 0%,transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* FLOATING BUBBLES */}
      <div
        className="absolute top-20 left-[10%] w-16 h-16 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.5))',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.7)',
        }}
      />

      <div
        className="absolute top-[40%] right-[8%] w-10 h-10 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.5))',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.7)',
        }}
      />

      <div
        className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full opacity-10 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.5))',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.7)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP BADGE */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
              border: '1px solid rgba(147,197,253,0.5)',
              color: '#2563eb',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Sparkles size={13} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Premium Cleaning Solutions
            </span>
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          <h2
            className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-6"
            style={{
              color: '#0f172a',
              fontFamily: "'Syne',sans-serif",
            }}
          >
            Our Premium
            <span className="block text-blue-600 mt-2">
              Services
            </span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed">
            Experience premium laundry and cleaning services designed
            for modern homes, busy professionals and delicate fabrics —
            all delivered with exceptional care and attention.
          </p>
        </div>

        {/* FEATURE STRIP */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">

          {[
            {
              Icon: ShieldCheck,
              label: 'Premium Quality',
              sub: 'Careful fabric handling',
              bg: '#eff6ff',
              color: '#2563eb',
            },

            {
              Icon: Zap,
              label: 'Fast Delivery',
              sub: 'Same-day available',
              bg: '#f0f9ff',
              color: '#0891b2',
            },

            {
              Icon: Star,
              label: 'Trusted Service',
              sub: 'Reliable & secure',
              bg: '#fef2f2',
              color: '#dc2626',
            },
          ].map(({ Icon, label, sub, bg, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white"
              style={{
                boxShadow: '0 4px 20px rgba(37,99,235,0.06)',
                border: '1px solid rgba(226,232,240,0.8)',
              }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ background: bg }}
              >
                <Icon size={18} style={{ color }} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-700">
                  {label}
                </p>

                <p className="text-xs text-slate-400">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((s, i) => {
            const c = colorMap[s.color as keyof typeof colorMap]

            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[32px] p-8 bg-white transition-all duration-500 hover:-translate-y-3"
                style={{
                  boxShadow: '0 10px 40px rgba(37,99,235,0.08)',
                  border: '1px solid rgba(226,232,240,0.8)',
                }}
              >

                {/* HOVER GLOW */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${c.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* NUMBER */}
                <div className="absolute top-5 right-6 text-6xl font-black text-slate-100">
                  {s.number}
                </div>

                {/* BADGE */}
                <div
                  className={`inline-flex px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r ${c.badge}`}
                >
                  {s.badge}
                </div>

                {/* ICON */}
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mt-7 mb-6"
                  style={{
                    background: `linear-gradient(135deg,var(--tw-gradient-stops))`,
                  }}
                >
                  <div
                    className={`w-full h-full rounded-3xl flex items-center justify-center bg-gradient-to-br ${c.iconBg}`}
                  >
                    {s.icon}
                  </div>
                </div>

                {/* TAGLINE */}
                <div
                  className="text-[11px] uppercase tracking-[0.25em] font-bold mb-2"
                  style={{ color: c.line }}
                >
                  {s.tagline}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-slate-800 mb-4">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {s.description}
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.features.map((f, j) => (
                    <div
                      key={j}
                      className="px-3 py-1.5 rounded-xl text-[11px] font-semibold"
                      style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        color: '#475569',
                      }}
                    >
                      {f}
                    </div>
                  ))}
                </div>

                {/* BOTTOM CTA */}
<div className="space-y-3">

  {/* BOOK BUTTON */}
  <a
    href="https://wa.me/254722389764"
    target="_blank"
    rel="noreferrer"
    className="group/btn flex items-center justify-between px-5 py-4 rounded-2xl transition-all"
    style={{
      background:
        'linear-gradient(135deg,#2563eb,#1d4ed8)',
      boxShadow:
        '0 6px 20px rgba(37,99,235,0.18)',
    }}
  >
    <div>
      <p className="text-white text-sm font-bold">
        Book Service
      </p>

      <p className="text-blue-100 text-xs">
        Fast pickup available
      </p>
    </div>

    <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
      <ArrowRight size={18} className="text-white" />
    </div>
  </a>

  {/* SMALL VIEW ALL BUTTON */}
  <button
    className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-3
      rounded-2xl
      border
      border-slate-200
      bg-slate-50/80
      text-slate-700
      text-sm
      font-semibold
      transition-all
      hover:bg-white
      hover:border-blue-200
      hover:text-blue-600
    "
  >
    View All Details

    <ArrowRight
      size={16}
      className="transition-transform group-hover:translate-x-1"
    />
  </button>

</div>

                {/* FLOATING MINI ICON */}
                <div
                  className="absolute bottom-5 right-5 w-10 h-10 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  {i % 3 === 0 && (
                    <Waves size={16} className="text-blue-500" />
                  )}

                  {i % 3 === 1 && (
                    <Wind size={16} className="text-cyan-500" />
                  )}

                  {i % 3 === 2 && (
                    <Droplets size={16} className="text-red-500" />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}