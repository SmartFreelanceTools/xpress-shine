'use client'

import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Sparkles,
  Navigation,
  Copy,
  CheckCheck,
} from 'lucide-react'
import { useState } from 'react'

export default function MobileMapSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('Thika, Njomoko, Kenya').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactRows = [
    {
      Icon: MapPin,
      label: 'Location',
      value: 'Thika, Njomoko, Kenya',
      sub: 'Tap to copy address',
      accent: '#2563eb',
      bg: '#eff6ff',
      border: 'rgba(191,219,254,0.65)',
      shadow: 'rgba(37,99,235,0.12)',
      action: handleCopy,
      actionIcon: copied ? CheckCheck : Copy,
      actionColor: copied ? '#10b981' : '#94a3b8',
    },
    {
      Icon: Phone,
      label: 'Phone',
      value: '+254 722 389 764',
      sub: 'Tap to call',
      accent: '#0891b2',
      bg: '#ecfeff',
      border: 'rgba(165,243,252,0.65)',
      shadow: 'rgba(6,182,212,0.12)',
      href: 'tel:+254722389764',
    },
    {
      Icon: Clock,
      label: 'Working Hours',
      value: 'Mon – Sat: 7AM – 8PM',
      sub: 'Open today',
      accent: '#7c3aed',
      bg: '#f5f3ff',
      border: 'rgba(196,181,253,0.65)',
      shadow: 'rgba(124,58,237,0.10)',
    },
  ]

  return (
    <section
      id="contact"
      style={{
        /* ── background unchanged ── */
        background: '#f8faff',
        position: 'relative',
        overflow: 'hidden',
        padding: '56px 20px 52px',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >

      {/* ── BACKGROUND GLOWS — unchanged ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            width: 400, height: 400,
            top: -160, left: -80,
            borderRadius: '50%',
            background: 'rgba(191,219,254,0.40)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 300, height: 300,
            top: 160, right: -80,
            borderRadius: '50%',
            background: 'rgba(186,230,253,0.40)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 300, height: 300,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: 'rgba(186,230,253,0.30)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
        <div
  style={{
    marginBottom: 28,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 12px 5px 8px',
              borderRadius: 99,
              backgroundColor: '#ffffff',
              border: '1px solid rgba(191,219,254,0.65)',
              boxShadow: '0 1px 6px rgba(37,99,235,0.08)',
              marginBottom: 18,
            }}
          >
            {/* Live dot */}
            <span style={{ position: 'relative', width: 8, height: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span
                style={{
                  position: 'absolute',
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  animation: 'mobilemap-pulse 2s ease-in-out infinite',
                }}
              />
              <span style={{ position: 'relative', zIndex: 1, width: 5, height: 5, borderRadius: '50%', backgroundColor: '#16a34a', display: 'block' }} />
            </span>
            <Sparkles size={11} style={{ color: '#2563eb', flexShrink: 0 }} />
            <span
              style={{
                fontSize: 10.5, fontWeight: 700,
                color: '#1d4ed8',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              Visit Us
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(30px, 9vw, 40px)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
            }}
          >
            Our
            <span style={{ display: 'block', color: '#2563eb' }}>Location</span>
          </h2>

          {/* Accent rule */}
          <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    margin: '12px 0 10px',
  }}
>
            <div style={{ width: 52, height: 3, borderRadius: 999, background: 'linear-gradient(90deg,#2563eb,#38bdf8)' }} />
            <div style={{ width: 8,  height: 3, borderRadius: 999, background: '#bfdbfe' }} />
            <div style={{ width: 4,  height: 3, borderRadius: 999, background: '#dbeafe' }} />
          </div>

          <p
  style={{
    margin: 0,
    fontSize: 13.5,
    color: '#64748b',
    lineHeight: 1.65,
    fontWeight: 400,
    maxWidth: 320,
    textAlign: 'center',
  }}
>
            Find us in Thika, Njomoko — or request pickup directly on WhatsApp.
          </p>
        </div>

        {/* ══════════════════════════════════════
            MAP CARD
        ══════════════════════════════════════ */}
        <div
          style={{
            borderRadius: 28,
            overflow: 'hidden',
            border: '1px solid rgba(226,232,240,0.75)',
            boxShadow: '0 4px 24px rgba(15,23,42,0.08), 0 1px 6px rgba(15,23,42,0.05)',
            marginBottom: 14,
            position: 'relative',
          }}
        >
          {/* Map iframe */}
          <iframe
            src="https://www.google.com/maps?q=Express+Dry+Cleaners+%26+Laundromat+Thika+Njomoko&output=embed"
            style={{
              width: '100%',
              height: 240,
              display: 'block',
              border: 'none',
            }}
            loading="lazy"
            title="Express Drycleaners Location"
          />

          {/* Overlay pill — "Open in Maps" */}
          <a
            href="https://maps.google.com/?q=Express+Dry+Cleaners+Thika+Njomoko"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              bottom: 12, right: 12,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 12px',
              borderRadius: 12,
              backgroundColor: '#ffffff',
              border: '1px solid rgba(191,219,254,0.70)',
              boxShadow: '0 4px 16px rgba(15,23,42,0.14)',
              textDecoration: 'none',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <Navigation size={12} strokeWidth={2.2} style={{ color: '#2563eb', flexShrink: 0 }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#1d4ed8',
                letterSpacing: '0.04em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Open in Maps
            </span>
          </a>
        </div>

        {/* ══════════════════════════════════════
            BRAND INFO CARD
        ══════════════════════════════════════ */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 28,
            border: '1px solid rgba(226,232,240,0.75)',
            boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
            padding: '22px 20px 20px',
            marginBottom: 14,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner radial */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: -30, right: -30,
              width: 110, height: 110,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(59,130,246,0.07) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Logo badge + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 14, position: 'relative' }}>
            <div
              style={{
                width: 50, height: 50,
                borderRadius: 17,
                background: 'linear-gradient(145deg,#3b82f6 0%,#2563eb 50%,#1d4ed8 100%)',
                boxShadow: '0 6px 20px rgba(37,99,235,0.36), inset 0 1px 0 rgba(255,255,255,0.24)',
                border: '1px solid rgba(255,255,255,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '48%', borderRadius: '17px 17px 0 0',
                  background: 'linear-gradient(180deg,rgba(255,255,255,0.20) 0%,transparent 100%)',
                  pointerEvents: 'none',
                }}
              />
              <span style={{ position: 'relative', color: '#fff', fontSize: 22, fontWeight: 900, letterSpacing: '-0.04em', textShadow: '0 1px 4px rgba(0,0,0,0.22)' }}>
                X
              </span>
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: 17,
                  fontWeight: 900,
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                }}
              >
                Express Drycleaners
              </h3>
              <p style={{ margin: '3px 0 0', fontSize: 12, color: '#64748b', fontWeight: 400, lineHeight: 1 }}>
                Clean. Fast. Reliable garment care.
              </p>
            </div>
          </div>

          {/* Accent rule */}
          <div
            style={{
              height: 1,
              background: 'linear-gradient(to right,transparent,rgba(191,219,254,0.60),transparent)',
              marginBottom: 16,
            }}
          />

          {/* Status chip */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 11px',
              borderRadius: 99,
              backgroundColor: '#f0fdf4',
              border: '1px solid rgba(134,239,172,0.55)',
              marginBottom: 4,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22c55e', display: 'block', flexShrink: 0 }} />
            <span style={{ fontSize: 10.5, fontWeight: 700, color: '#16a34a', letterSpacing: '0.06em', lineHeight: 1 }}>
              Open Now  ·  Closes 8:00 PM
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CONTACT DETAIL ROWS
        ══════════════════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
          {contactRows.map(({ Icon, label, value, sub, accent, bg, border, shadow, href, action, actionIcon: ActionIcon, actionColor }) => {

            const inner = (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 13,
                  padding: '14px 14px',
                  borderRadius: 22,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(226,232,240,0.75)',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.05), 0 1px 3px rgba(15,23,42,0.03)',
                  position: 'relative',
                  overflow: 'hidden',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: href || action ? 'pointer' : 'default',
                  textDecoration: 'none',
                  transition: 'transform 160ms ease',
                }}
                
                onClick={action}
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

                {/* Icon badge */}
                <div
                  style={{
                    width: 44, height: 44,
                    borderRadius: 15,
                    backgroundColor: bg,
                    border: `1px solid ${border}`,
                    boxShadow: `0 4px 14px ${shadow}, inset 0 1px 0 rgba(255,255,255,0.90)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <Icon size={17} strokeWidth={2} style={{ color: accent }} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: '#94a3b8',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: '#0f172a',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.25,
                    }}
                  >
                    {value}
                  </div>
                  {sub && (
                    <div style={{ fontSize: 10.5, color: '#94a3b8', fontWeight: 400, marginTop: 2, lineHeight: 1 }}>
                      {sub}
                    </div>
                  )}
                </div>

                {/* Right action icon */}
                {(ActionIcon || (href || action)) && (
                  <div
                    style={{
                      width: 30, height: 30,
                      borderRadius: 10,
                      backgroundColor: bg,
                      border: `1px solid ${border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {ActionIcon
                      ? <ActionIcon size={13} strokeWidth={2.2} style={{ color: actionColor }} />
                      : <ArrowRight size={13} strokeWidth={2.5} style={{ color: accent }} />
                    }
                  </div>
                )}
              </div>
            )

            return href ? (
              <a key={label} href={href} style={{ textDecoration: 'none', display: 'block' }}>
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            )
          })}
        </div>

        {/* ══════════════════════════════════════
            WHATSAPP CTA
        ══════════════════════════════════════ */}
        <a
          href="https://wa.me/254722389764?text=Hello%20I%20want%20pickup%20from%20Thika%20Njomoko"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 18px 0 16px',
            height: 64,
            borderRadius: 22,
            background: 'linear-gradient(135deg,#22c55e 0%,#16a34a 55%,#15803d 100%)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 12px 36px rgba(22,163,74,0.34), 0 4px 12px rgba(22,163,74,0.18), inset 0 1px 0 rgba(255,255,255,0.18)',
            textDecoration: 'none',
            WebkitTapHighlightColor: 'transparent',
            transition: 'transform 160ms ease',
          }}
          onTouchStart={e => { e.currentTarget.style.transform = 'scale(0.975)' }}
          onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          {/* Gloss sheen */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '50%',
              borderRadius: '22px 22px 0 0',
              background: 'linear-gradient(180deg,rgba(255,255,255,0.12) 0%,transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Left: WA icon + labels */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, position: 'relative' }}>
            <div
              style={{
                width: 42, height: 42,
                borderRadius: 14,
                backgroundColor: 'rgba(255,255,255,0.16)',
                border: '1px solid rgba(255,255,255,0.20)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em', textShadow: '0 1px 3px rgba(0,0,0,0.14)' }}>
                Request Pickup
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.72)', marginTop: 2, fontWeight: 400 }}>
                Instant response on WhatsApp
              </div>
            </div>
          </div>

          {/* Right: arrow badge */}
          <div
            style={{
              width: 36, height: 36,
              borderRadius: 12,
              backgroundColor: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, position: 'relative',
            }}
          >
            <ArrowRight size={16} strokeWidth={2.5} style={{ color: '#fff' }} />
          </div>
        </a>

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes mobilemap-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(2.4); opacity: 0; }
        }
      `}</style>

    </section>
  )
}