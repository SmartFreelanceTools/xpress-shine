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
  Check,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    icon: '🧺',
    title: 'Washing',
    tagline: 'Deep Clean Care',
    description:
      'Premium washing with careful fabric handling, stain treatment, and gentle cycle protection.',
    color: 'blue',
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
    color: 'cyan',
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
    color: 'red',
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
    color: 'blue',
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
    color: 'cyan',
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
    color: 'blue',
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
    color: 'red',
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
    color: 'cyan',
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
    color: 'blue',
    features: ['Fabric safe', 'Stain care', 'Fresh finish'],
    badge: 'Luxury',
    number: '09',
  },
]

const colorMap = {
  blue: {
    glow: 'rgba(37,99,235,0.18)',
    badge: 'from-blue-500 to-blue-600',
    iconBg: 'from-blue-50 to-blue-100',
    iconColor: '#2563eb',
    line: '#2563eb',
    // Mobile-specific tokens
    mobileBadgeBg: '#eff6ff',
    mobileBadgeText: '#1d4ed8',
    mobileBadgeBorder: 'rgba(191,219,254,0.70)',
    mobileTaglineColor: '#2563eb',
    mobileAccentBg: '#eff6ff',
    mobileAccentDot: '#3b82f6',
    mobilePillBg: '#f0f6ff',
    mobilePillBorder: 'rgba(191,219,254,0.60)',
    mobilePillText: '#1d4ed8',
    mobileCheckColor: '#3b82f6',
    mobileIconRing: 'rgba(191,219,254,0.50)',
    mobileIconShadow: 'rgba(37,99,235,0.12)',
    mobileCtaBg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
    mobileCtaShadow: 'rgba(37,99,235,0.32)',
    mobileNumberColor: 'rgba(37,99,235,0.055)',
  },
  cyan: {
    glow: 'rgba(6,182,212,0.18)',
    badge: 'from-cyan-500 to-cyan-600',
    iconBg: 'from-cyan-50 to-cyan-100',
    iconColor: '#0891b2',
    line: '#06b6d4',
    // Mobile-specific tokens
    mobileBadgeBg: '#ecfeff',
    mobileBadgeText: '#0e7490',
    mobileBadgeBorder: 'rgba(165,243,252,0.70)',
    mobileTaglineColor: '#0891b2',
    mobileAccentBg: '#ecfeff',
    mobileAccentDot: '#06b6d4',
    mobilePillBg: '#f0feff',
    mobilePillBorder: 'rgba(165,243,252,0.60)',
    mobilePillText: '#0e7490',
    mobileCheckColor: '#06b6d4',
    mobileIconRing: 'rgba(165,243,252,0.50)',
    mobileIconShadow: 'rgba(6,182,212,0.12)',
    mobileCtaBg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)',
    mobileCtaShadow: 'rgba(6,182,212,0.30)',
    mobileNumberColor: 'rgba(6,182,212,0.055)',
  },
  red: {
    glow: 'rgba(239,68,68,0.18)',
    badge: 'from-red-500 to-red-600',
    iconBg: 'from-red-50 to-red-100',
    iconColor: '#dc2626',
    line: '#ef4444',
    // Mobile-specific tokens
    mobileBadgeBg: '#fff1f2',
    mobileBadgeText: '#be123c',
    mobileBadgeBorder: 'rgba(254,205,211,0.70)',
    mobileTaglineColor: '#dc2626',
    mobileAccentBg: '#fff1f2',
    mobileAccentDot: '#ef4444',
    mobilePillBg: '#fff5f5',
    mobilePillBorder: 'rgba(254,205,211,0.60)',
    mobilePillText: '#be123c',
    mobileCheckColor: '#ef4444',
    mobileIconRing: 'rgba(254,205,211,0.50)',
    mobileIconShadow: 'rgba(239,68,68,0.12)',
    mobileCtaBg: 'linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)',
    mobileCtaShadow: 'rgba(239,68,68,0.28)',
    mobileNumberColor: 'rgba(239,68,68,0.055)',
  },
}

export default function Services() {
  return (
    <section
      className="lg:hidden relative overflow-hidden pt-12 pb-20 bg-[#f8faff]">
      {/* ─── SHARED BACKGROUND (unchanged) ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700, top: -250, left: -120,
            background: 'radial-gradient(circle,rgba(219,234,254,0.7) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500, top: 80, right: -100,
            background: 'radial-gradient(circle,rgba(186,230,253,0.45) 0%,transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400, height: 400, bottom: -100, left: '30%',
            background: 'radial-gradient(circle,rgba(191,219,254,0.35) 0%,transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* ─── FLOATING BUBBLES (unchanged) ─── */}
      <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full opacity-20 animate-pulse"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.5))', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.7)' }}
      />
      <div className="absolute top-[40%] right-[8%] w-10 h-10 rounded-full opacity-20 animate-pulse"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.5))', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.7)' }}
      />
      <div className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full opacity-10 animate-pulse"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.5))', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.7)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* ─── SHARED HEADER (badge + title + subtitle) ─── */}
        <div className="flex justify-center mb-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
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

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            className="text-4xl font-black tracking-tight leading-none mb-4"
            style={{ color: '#0f172a', fontFamily: "'Syne',sans-serif" }}
          >
            Our Premium
            <span className="block text-blue-600 mt-2">Services</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-md mx-auto">
            Experience premium laundry and cleaning services tailored for modern homes, busy professionals, and delicate fabrics with exceptional care.
          </p>
        </div>

        {/* ─── FEATURE STRIP (unchanged desktop, unchanged mobile layout) ─── */}
        <div className="flex flex-col gap-3 mb-6 max-w-md mx-auto">
          {[
            { Icon: ShieldCheck, label: 'Premium Quality', sub: 'Careful fabric handling', bg: '#eff6ff', color: '#2563eb' },
            { Icon: Zap,         label: 'Fast Delivery',   sub: 'Same-day available',     bg: '#f0f9ff', color: '#0891b2' },
            { Icon: Star,        label: 'Trusted Service', sub: 'Reliable & secure',      bg: '#fef2f2', color: '#dc2626' },
          ].map(({ Icon, label, sub, bg, color }) => (
            <div
  key={label}
  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white"
  style={{
    boxShadow: '0 4px 16px rgba(37,99,235,0.05)',
    border: '1px solid rgba(226,232,240,0.8)',
  }}
>
  <div
    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
    style={{ background: bg }}
  >
    <Icon size={16} style={{ color }} />
  </div>

  <div className="min-w-0">
    <p className="text-sm font-bold text-slate-800 leading-none">
      {label}
    </p>
    <p className="text-[11px] text-slate-500 mt-1">
      {sub}
    </p>
  </div>
</div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════
            MOBILE SERVICES LIST  — sm:hidden
            2026 Apple / Linear / Stripe aesthetic
            No glassmorphism · No blur · Solid premium cards
        ════════════════════════════════════════════════════ */}
        <div className="sm:hidden flex flex-col gap-5">
          {services.map((s, i) => {
            const c = colorMap[s.color as keyof typeof colorMap]

            return (
              <article
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: 28,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(226,232,240,0.75)',
                  boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
                  overflow: 'hidden',
                  /* Subtle press feedback via CSS — no JS needed */
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'transform 180ms cubic-bezier(0.4,0,0.2,1), box-shadow 180ms ease',
                }}
                /* Active press effect */
                onTouchStart={e => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(0.985)'
                  el.style.boxShadow = '0 1px 8px rgba(15,23,42,0.05), 0 1px 3px rgba(15,23,42,0.03)'
                }}
                onTouchEnd={e => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(1)'
                  el.style.boxShadow = '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)'
                }}
              >

                {/* ── OVERSIZED WATERMARK NUMBER ── */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: 14,
                    fontSize: 96,
                    fontWeight: 900,
                    lineHeight: 1,
                    color: c.mobileNumberColor,
                    letterSpacing: '-0.06em',
                    fontFamily: "'Syne', sans-serif",
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                >
                  {s.number}
                </div>

                {/* ── CARD BODY ── */}
                <div style={{ padding: '22px 20px 20px', position: 'relative', zIndex: 1 }}>

                  {/* ── ROW 1: Badge + Tagline ── */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>

                    {/* Badge pill */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '5px 11px',
                        borderRadius: 99,
                        backgroundColor: c.mobileBadgeBg,
                        border: `1px solid ${c.mobileBadgeBorder}`,
                        boxShadow: '0 1px 4px rgba(15,23,42,0.04)',
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          backgroundColor: c.mobileAccentDot,
                          display: 'block',
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: c.mobileBadgeText,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          lineHeight: 1,
                        }}
                      >
                        {s.badge}
                      </span>
                    </div>

                    {/* Tagline */}
                    <span
                      style={{
                        fontSize: 10.5,
                        fontWeight: 600,
                        color: c.mobileTaglineColor,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                      }}
                    >
                      {s.tagline}
                    </span>
                  </div>

                  {/* ── ROW 2: Icon block + Title stack ── */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>

                    {/* Premium icon container */}
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 20,
                        backgroundColor: c.mobileAccentBg,
                        border: `1px solid ${c.mobileIconRing}`,
                        boxShadow: `0 4px 16px ${c.mobileIconShadow}, inset 0 1px 0 rgba(255,255,255,0.9)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 28,
                        flexShrink: 0,
                        lineHeight: 1,
                      }}
                    >
                      {s.icon}
                    </div>

                    {/* Title + description */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontSize: 22,
                          fontWeight: 800,
                          color: '#0f172a',
                          letterSpacing: '-0.025em',
                          lineHeight: 1.1,
                          margin: 0,
                          fontFamily: "'Syne', 'DM Sans', sans-serif",
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  {/* ── DESCRIPTION ── */}
                  <p
                    style={{
                      fontSize: 13.5,
                      color: '#64748b',
                      lineHeight: 1.6,
                      margin: '0 0 16px',
                      fontWeight: 400,
                    }}
                  >
                    {s.description}
                  </p>

                  {/* ── FEATURE PILLS with check indicators ── */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 7,
                      marginBottom: 20,
                    }}
                  >
                    {s.features.map((f, j) => (
                      <div
                        key={j}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          padding: '6px 11px 6px 8px',
                          borderRadius: 99,
                          backgroundColor: c.mobilePillBg,
                          border: `1px solid ${c.mobilePillBorder}`,
                        }}
                      >
                        {/* Check dot */}
                        <div
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: '50%',
                            backgroundColor: c.mobileAccentBg,
                            border: `1.5px solid ${c.mobileCheckColor}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Check
                            size={8}
                            strokeWidth={3}
                            style={{ color: c.mobileCheckColor }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: 11.5,
                            fontWeight: 600,
                            color: c.mobilePillText,
                            lineHeight: 1,
                            letterSpacing: '0.01em',
                          }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ── THIN DIVIDER ── */}
                  <div
                    style={{
                      height: 1,
                      backgroundColor: 'rgba(226,232,240,0.70)',
                      marginBottom: 16,
                    }}
                  />

                  {/* ── SINGLE PRIMARY CTA ── */}
                  <a
                    href="https://wa.me/254722389764"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      borderRadius: 18,
                      background: c.mobileCtaBg,
                      boxShadow: `0 6px 20px ${c.mobileCtaShadow}, inset 0 1px 0 rgba(255,255,255,0.15)`,
                      border: '1px solid rgba(255,255,255,0.12)',
                      textDecoration: 'none',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {/* Left: label stack */}
                    <div>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: '#ffffff',
                          margin: 0,
                          letterSpacing: '0.01em',
                          lineHeight: 1.2,
                          textShadow: '0 1px 3px rgba(0,0,0,0.15)',
                        }}
                      >
                        Book {s.title}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: 'rgba(255,255,255,0.75)',
                          margin: '2px 0 0',
                          lineHeight: 1,
                          fontWeight: 400,
                        }}
                      >
                        Fast pickup available
                      </p>
                    </div>

                    {/* Right: arrow badge */}
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 12,
                        backgroundColor: 'rgba(255,255,255,0.16)',
                        border: '1px solid rgba(255,255,255,0.20)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <ChevronRight size={17} strokeWidth={2.5} style={{ color: '#ffffff' }} />
                    </div>
                  </a>

                </div>
              </article>
            )
          })}
        </div>

        {/* ════════════════════════════════════════════════════
            DESKTOP SERVICES GRID  — hidden sm:grid (unchanged)
        ════════════════════════════════════════════════════ */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  style={{ background: `radial-gradient(circle at top right, ${c.glow} 0%, transparent 70%)` }}
                />

                {/* NUMBER */}
                <div className="absolute top-5 right-6 text-6xl font-black text-slate-100">
                  {s.number}
                </div>

                {/* BADGE */}
                <div className={`inline-flex px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r ${c.badge}`}>
                  {s.badge}
                </div>

                {/* ICON */}
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mt-7 mb-6"
                  style={{ background: `linear-gradient(135deg,var(--tw-gradient-stops))` }}
                >
                  <div className={`w-full h-full rounded-3xl flex items-center justify-center bg-gradient-to-br ${c.iconBg}`}>
                    {s.icon}
                  </div>
                </div>

                {/* TAGLINE */}
                <div className="text-[11px] uppercase tracking-[0.25em] font-bold mb-2" style={{ color: c.line }}>
                  {s.tagline}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-slate-800 mb-4">{s.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.description}</p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.features.map((f, j) => (
                    <div
                      key={j}
                      className="px-3 py-1.5 rounded-xl text-[11px] font-semibold"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569' }}
                    >
                      {f}
                    </div>
                  ))}
                </div>

                {/* BOTTOM CTA */}
                <div className="space-y-3">
                  <a
                    href="https://wa.me/254722389764"
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn flex items-center justify-between px-5 py-4 rounded-2xl transition-all"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 20px rgba(37,99,235,0.18)' }}
                  >
                    <div>
                      <p className="text-white text-sm font-bold">Book Service</p>
                      <p className="text-blue-100 text-xs">Fast pickup available</p>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                      <ArrowRight size={18} className="text-white" />
                    </div>
                  </a>

                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm font-semibold transition-all hover:bg-white hover:border-blue-200 hover:text-blue-600">
                    View All Details
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* FLOATING MINI ICON */}
                <div
                  className="absolute bottom-5 right-5 w-10 h-10 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                >
                  {i % 3 === 0 && <Waves size={16} className="text-blue-500" />}
                  {i % 3 === 1 && <Wind size={16} className="text-cyan-500" />}
                  {i % 3 === 2 && <Droplets size={16} className="text-red-500" />}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}