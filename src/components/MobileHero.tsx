'use client'

import { useState } from 'react'
import {
  Calendar,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Shirt,
  MessageCircle,
  CheckCircle2,
  Clock,
  Circle,
} from 'lucide-react'

// MobileHero is self-contained — no BookingModal, no Supabase, no desktop Hero code.
// CTAs trigger a simple local state OR delegate via the #open-booking button pattern.

export default function MobileHero() {
  const [openBooking, setOpenBooking] = useState(false)

  return (
    <section
      className="lg:hidden relative overflow-hidden flex flex-col"
      style={{
        minHeight: '100svh',
        /* ── background unchanged ── */
        background: '#f8fafc',
        paddingTop: 'calc(env(safe-area-inset-top, 0px) + 72px)',
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 48px)',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >

      {/* ─────────────────────────────────────────────
          AMBIENT BACKGROUND GLOWS — unchanged
      ───────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 420,
            height: 420,
            top: -140,
            left: -120,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 300,
            height: 300,
            top: 120,
            right: -80,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 70%)',
            filter: 'blur(26px)',
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────
          CONTENT WRAPPER
      ───────────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col flex-1"
        style={{ padding: '0 20px' }}
      >

        {/* ══════════════════════════════════════
            SECTION 1 — BADGE
        ══════════════════════════════════════ */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '5px 12px 5px 7px',
            borderRadius: 99,
            backgroundColor: '#ffffff',
            border: '1px solid rgba(191,219,254,0.65)',
            boxShadow: '0 1px 6px rgba(37,99,235,0.08), 0 1px 2px rgba(15,23,42,0.04)',
            width: 'fit-content',
            marginBottom: 24,
          }}
        >
          {/* Live pulsing dot */}
          <span
            style={{
              position: 'relative',
              width: 8,
              height: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: 'absolute',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'mobilehero-pulse 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                backgroundColor: '#16a34a',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </span>
          <Sparkles size={13} style={{ color: '#2563eb', flexShrink: 0 }} />
          <span
  style={{
    fontSize: 11.5,
    fontWeight: 700,
    color: '#1e40af',
    letterSpacing: '-0.01em',
    lineHeight: 1.2,
  }}
>
  Experience the comfort of Clean Fresh Clothes.
</span>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — HEADLINE
        ══════════════════════════════════════ */}
        <div style={{ marginBottom: 8 }}>
          <h1
            style={{
              margin: 0,
              padding: 0,
              lineHeight: 0.88,
              letterSpacing: '-0.05em',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(40px, 11vw, 54px)',
                fontWeight: 900,
                color: '#0f172a',
              }}
            >
              EXPRESS
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(40px, 11vw, 54px)',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.06em',
              }}
            >
              DRYCLEANERS
            </span>
            {/* Italic accent line */}
            <span
              style={{
                display: 'block',
                marginTop: 6,
                fontSize: 'clamp(22px, 6vw, 30px)',
                fontWeight: 800,
                color: '#2563eb',
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              &amp; Laundromat
            </span>
          </h1>
        </div>

        {/* Accent rule — three-dot graduated bar */}
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 18,
          }}
        >
          <div style={{ width: 72, height: 3, borderRadius: 999, background: 'linear-gradient(90deg,#2563eb 0%,#38bdf8 100%)' }} />
          <div style={{ width: 10, height: 3, borderRadius: 999, background: '#bfdbfe' }} />
          <div style={{ width: 5,  height: 3, borderRadius: 999, background: '#dbeafe' }} />
        </div>

        {/* ── SUBHEADING ── */}
        <p
          style={{
            margin: '0 0 28px',
            fontSize: 14.5,
            color: '#475569',
            lineHeight: 1.75,
            maxWidth: 320,
            fontWeight: 450,
          }}
        >
          Premium garment care with fast turnaround. 
          From daily laundry to delicate fabrics — 
          handled with precision and delivered fresh 
          across Thika and Nairobi.
        </p>
        

        {/* ══════════════════════════════════════
            SECTION 3 — CTA BUTTONS
        ══════════════════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>

          {/* PRIMARY — Book Pickup */}
          <button
            onClick={() => {
              setOpenBooking(true)
              const bookBtn = document.getElementById('open-booking')
              if (bookBtn) bookBtn.click()
            }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: 66,
              borderRadius: 22,
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #172554 100%)',
              border: '1px solid rgba(255,255,255,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px 0 14px',
              color: '#fff',
              boxShadow: '0 16px 48px rgba(37,99,235,0.38), 0 4px 12px rgba(37,99,235,0.20)',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {/* Gloss top sheen */}
            <span
              aria-hidden
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '50%',
                borderRadius: '22px 22px 0 0',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 13, position: 'relative' }}>
              <div
                style={{
                  width: 44, height: 44,
                  borderRadius: 15,
                  backgroundColor: 'rgba(255,255,255,0.16)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Calendar size={19} strokeWidth={2} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  Book Pickup
                </div>
                <div style={{ fontSize: 11, opacity: 0.72, marginTop: 1, fontWeight: 400 }}>
                  Schedule collection in seconds
                </div>
              </div>
            </div>

            <div
              style={{
                width: 36, height: 36,
                borderRadius: 12,
                backgroundColor: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, position: 'relative',
              }}
            >
              <ArrowRight size={16} strokeWidth={2.5} />
            </div>
          </button>

          {/* SECONDARY — WhatsApp */}
          <a
            href="https://wa.me/254722389764"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: 66,
              borderRadius: 22,
              backgroundColor: '#ffffff',
              border: '1px solid rgba(15,23,42,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px 0 14px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(15,23,42,0.07), 0 1px 4px rgba(15,23,42,0.04)',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
              <div
                style={{
                  width: 44, height: 44,
                  borderRadius: 15,
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  boxShadow: '0 4px 14px rgba(22,163,74,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', flexShrink: 0,
                }}
              >
                <MessageCircle size={19} strokeWidth={2} />
              </div>
              <div>
                <div style={{ color: '#0f172a', fontWeight: 800, fontSize: 15, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  WhatsApp Concierge
                </div>
                <div style={{ color: '#94a3b8', fontSize: 11, marginTop: 1, fontWeight: 400 }}>
                  Instant support &amp; order updates
                </div>
              </div>
            </div>

            <div
              style={{
                width: 36, height: 36,
                borderRadius: 12,
                backgroundColor: '#f0fdf4',
                border: '1px solid rgba(22,163,74,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ArrowRight size={16} strokeWidth={2.5} style={{ color: '#16a34a' }} />
            </div>
          </a>
        </div>

        {/* ══════════════════════════════════════
            SECTION 4 — TRUST METRICS
        ══════════════════════════════════════ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 8,
            marginBottom: 24,
          }}
        >
          {[
            { Icon: ShieldCheck, value: '8+', label: 'Years Experience',  accent: '#2563eb', bg: '#eff6ff', ring: 'rgba(191,219,254,0.60)' },
            { Icon: Zap,         value: '10K+', label: 'Happy Clients',  accent: '#0891b2', bg: '#ecfeff', ring: 'rgba(165,243,252,0.60)' },
            { Icon: Star,        value: '4.9★', label: 'Rating', accent: '#7c3aed', bg: '#f5f3ff', ring: 'rgba(196,181,253,0.60)' },
          ].map(({ Icon, value, label, accent, bg, ring }) => (
            <div
              key={label}
              style={{
                borderRadius: 20,
                backgroundColor: '#ffffff',
                border: `1px solid ${ring}`,
                padding: '16px 8px 14px',
                boxShadow: '0 2px 12px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 9,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner tint */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -16, right: -16,
                  width: 52, height: 52,
                  borderRadius: '50%',
                  backgroundColor: bg,
                  opacity: 0.7,
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  width: 38, height: 38,
                  borderRadius: 13,
                  backgroundColor: bg,
                  border: `1px solid ${ring}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, position: 'relative',
                }}
              >
                <Icon size={16} style={{ color: accent }} strokeWidth={2} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 18, fontWeight: 900,
                    color: '#0f172a', lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    marginTop: 4, fontSize: 10.5,
                    color: '#64748b', fontWeight: 600,
                    letterSpacing: '0.01em',
                  }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════
            SECTION 5 — LIVE TRACKING CARD
        ══════════════════════════════════════ */}
        <div
          style={{
            borderRadius: 28,
            backgroundColor: '#ffffff',
            border: '1px solid rgba(226,232,240,0.80)',
            boxShadow: '0 8px 32px rgba(37,99,235,0.09), 0 2px 8px rgba(15,23,42,0.05)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >

          {/* ── Card Header — blue gradient banner ── */}
          <div
            style={{
              padding: '18px 20px 20px',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: -40, right: -40,
                width: 130, height: 130,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              <div>
                {/* Live chip */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    padding: '3px 9px',
                    borderRadius: 99,
                    backgroundColor: 'rgba(255,255,255,0.14)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    marginBottom: 7,
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#4ade80', display: 'block' }} />
                  <span
                    style={{
                      fontSize: 9.5, fontWeight: 700,
                      color: 'rgba(255,255,255,0.85)',
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Live Tracking
                  </span>
                </div>

                <p style={{ margin: 0, fontSize: 10.5, color: '#bfdbfe', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Tracking ID
                </p>
                <h3
                  style={{
                    margin: '3px 0 0',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: 24,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  #XP-8820
                </h3>
              </div>

              <div
                style={{
                  width: 54, height: 54,
                  borderRadius: 18,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.20)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Shirt size={24} strokeWidth={1.8} color="#ffffff" />
              </div>
            </div>

            {/* ETA chip */}
            <div
              style={{
                marginTop: 14,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 12px',
                borderRadius: 10,
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.16)',
              }}
            >
              <Clock size={11} strokeWidth={2} style={{ color: 'rgba(255,255,255,0.80)' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em' }}>
                Estimated completion · Today 6:30 PM
              </span>
            </div>
          </div>

          {/* ── Card Body ── */}
          <div style={{ padding: '20px 20px 22px' }}>

            <p style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
              XP-2481 Ready for Processing
            </p>
            <p style={{ fontSize: 12.5, color: '#64748b', fontWeight: 400, margin: '0 0 18px', lineHeight: 1.55 }}>
              Your garments are currently being prepared by our care team.
            </p>

            {/* ── Progress bar ── */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#64748b', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Progress
                </span>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#2563eb', letterSpacing: '0.02em' }}>
                  65%
                </span>
              </div>
              <div style={{ height: 7, borderRadius: 999, backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
                <div style={{ width: '65%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 7 }}>
                {['Collected', 'Cleaning', 'Ready', 'Delivered'].map((step, i) => (
                  <span
                    key={step}
                    style={{
                      fontSize: 9.5,
                      fontWeight: i < 2 ? 700 : 500,
                      color: i < 2 ? '#3b82f6' : '#cbd5e1',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Divider ── */}
            <div style={{ height: 1, backgroundColor: 'rgba(226,232,240,0.80)', margin: '0 0 18px' }} />

            {/* ── Step list with timeline connector ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { Icon: CheckCircle2, label: 'Order Received',       time: '10:30 AM',     status: 'done'    },
                { Icon: Shirt,        label: 'Cleaning in Progress', time: 'In progress...', status: 'active'  },
                { Icon: Circle,       label: 'Ready for Pickup',     time: 'Pending',      status: 'pending' },
              ].map((step, i, arr) => {
                const isDone    = step.status === 'done'
                const isActive  = step.status === 'active'
                const isPending = step.status === 'pending'
                const isLast    = i === arr.length - 1

                return (
                  <div key={step.label} style={{ display: 'flex', gap: 14, position: 'relative' }}>

                    {/* Timeline column */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 38 }}>
                      <div
                        style={{
                          width: 38, height: 38,
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: isDone ? '#eff6ff' : isActive ? '#2563eb' : '#f8fafc',
                          border: isDone
                            ? '1.5px solid rgba(191,219,254,0.80)'
                            : isActive
                            ? '1.5px solid rgba(255,255,255,0.15)'
                            : '1.5px solid rgba(226,232,240,0.80)',
                          boxShadow: isActive ? '0 4px 14px rgba(37,99,235,0.28)' : 'none',
                        }}
                      >
                        <step.Icon
                          size={16}
                          strokeWidth={isActive ? 2.2 : 1.9}
                          style={{ color: isDone ? '#3b82f6' : isActive ? '#ffffff' : '#cbd5e1' }}
                        />
                      </div>

                      {/* Connector */}
                      {!isLast && (
                        <div
                          style={{
                            width: 2,
                            flex: 1,
                            minHeight: 14,
                            backgroundColor: isDone ? '#bfdbfe' : 'rgba(226,232,240,0.80)',
                            borderRadius: 999,
                            marginTop: 4,
                            marginBottom: 4,
                          }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div style={{ paddingTop: 9, paddingBottom: isLast ? 0 : 18, flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 13.5, fontWeight: 700,
                          color: isPending ? '#94a3b8' : '#0f172a',
                          letterSpacing: '-0.01em', lineHeight: 1.2,
                        }}
                      >
                        {step.label}
                      </div>
                      <div
                        style={{
                          marginTop: 3, fontSize: 11.5,
                          color: isActive ? '#3b82f6' : '#94a3b8',
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {step.time}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        

      </div>

      {/* ─── Keyframe for badge dot pulse ─── */}
      <style>{`
        @keyframes mobilehero-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(2.4); opacity: 0; }
        }
      `}</style>

    </section>
  )
}