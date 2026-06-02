'use client'

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa'
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

export default function MobileFooter() {
  const year = new Date().getFullYear()

  const links = [
    'Home',
    'Services',
    'Products',
    'How It Works',
    'Gallery',
    'Contact',
  ]

  const socials = [
    {
      href: 'https://wa.me/254722389764',
      Icon: FaWhatsapp,
      label: 'WhatsApp',
      color: '#25D366',
      bg: '#f0fdf4',
      border: 'rgba(134,239,172,0.50)',
      shadow: 'rgba(37,211,102,0.18)',
    },
    {
      href: 'https://instagram.com/YOUR_USERNAME',
      Icon: FaInstagram,
      label: 'Instagram',
      color: '#E1306C',
      bg: '#fff0f5',
      border: 'rgba(253,164,175,0.50)',
      shadow: 'rgba(225,48,108,0.16)',
    },
    {
      href: 'https://facebook.com/YOUR_PAGE',
      Icon: FaFacebookF,
      label: 'Facebook',
      color: '#1877F2',
      bg: '#eff6ff',
      border: 'rgba(147,197,253,0.50)',
      shadow: 'rgba(24,119,242,0.16)',
    },
    {
      href: 'https://tiktok.com/@YOUR_USERNAME',
      Icon: FaTiktok,
      label: 'TikTok',
      color: '#0f172a',
      bg: '#f8fafc',
      border: 'rgba(148,163,184,0.40)',
      shadow: 'rgba(15,23,42,0.12)',
    },
  ]

  const contactRows = [
    {
      Icon: Phone,
      label: 'Phone',
      lines: ['+254 714 066 855', '+254 722 389 764'],
      accent: '#2563eb',
      bg: '#eff6ff',
      border: 'rgba(191,219,254,0.55)',
    },
    {
      Icon: MapPin,
      label: 'Location',
      lines: ['Ngoingwa, Thika'],
      accent: '#0891b2',
      bg: '#ecfeff',
      border: 'rgba(165,243,252,0.55)',
    },
    {
      Icon: Clock,
      label: 'Working Hours',
      lines: ['Mon – Sat  •  7AM – 8PM'],
      accent: '#7c3aed',
      bg: '#f5f3ff',
      border: 'rgba(196,181,253,0.55)',
    },
  ]

  return (
    <footer
      style={{
        /* ── background unchanged ── */
        background: '#f8faff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        WebkitFontSmoothing: 'antialiased',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ── TOP GRADIENT LINE — unchanged ── */}
      <div
  style={{
    height: 3,
    background: 'linear-gradient(90deg,#2563eb,#38bdf8)',
  }}
/>

      {/* ── SHARED BACKGROUND GLOWS — unchanged ── */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            width: 300, height: 300,
            top: -250, left: -120,
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(219,234,254,.7) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 250, height: 250,
            top: 80, right: -100,
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(186,230,253,.45) 0%,transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 220, height: 220,
            bottom: -120, left: '30%',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(191,219,254,.35) 0%,transparent 70%)',
            filter: 'blur(45px)',
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '36px 20px 0',
        }}
      >

        {/* ══════════════════════════════════════
            SECTION 1 — BRAND BLOCK
        ══════════════════════════════════════ */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 22,
            border: '1px solid rgba(226,232,240,0.75)',
            boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
            padding: '24px 20px 22px',
            marginBottom: 14,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner glow */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: -40, right: -40,
              width: 140, height: 140,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(59,130,246,0.08) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Logo + wordmark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>

            {/* Premium logo badge */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              {/* Outer glow */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: 22,
                  background: 'rgba(37,99,235,0.14)',
                  filter: 'blur(10px)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  width: 58, height: 58,
                  borderRadius: 20,
                  background: 'linear-gradient(145deg,#3b82f6 0%,#2563eb 45%,#1d4ed8 80%,#38bdf8 100%)',
                  boxShadow: '0 8px 24px rgba(37,99,235,0.36), inset 0 1px 0 rgba(255,255,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {/* Shine overlay */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute', inset: 0, borderRadius: 20,
                    background: 'linear-gradient(135deg,rgba(255,255,255,0.22) 0%,transparent 55%)',
                    pointerEvents: 'none',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    color: '#fff',
                    fontSize: 26,
                    fontWeight: 900,
                    letterSpacing: '-0.06em',
                    lineHeight: 1,
                    textShadow: '0 2px 6px rgba(0,0,0,0.25)',
                  }}
                >
                  X
                </span>
              </div>
            </div>

            {/* Wordmark */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: '#0f172a',
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                  }}
                >
                  EXPRESS
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: '#2563eb',
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                  }}
                >
                  SHINE
                </span>
              </div>
              <span
                style={{
                  display: 'block',
                  marginTop: 5,
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: '#94a3b8',
                  letterSpacing: '0.30em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                Premium Laundry Care
              </span>
            </div>
          </div>

          {/* Accent rule */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
            <div style={{ width: 44, height: 3, borderRadius: 999, background: 'linear-gradient(90deg,#2563eb,#38bdf8)' }} />
            <div style={{ width: 7,  height: 3, borderRadius: 999, background: '#bfdbfe' }} />
            <div style={{ width: 4,  height: 3, borderRadius: 999, background: '#dbeafe' }} />
          </div>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontSize: 13.5,
              color: '#64748b',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            EXPRESS SHINE offers premium laundry, dry cleaning, pickup and delivery
            services in Thika with elegant care, fast turnaround and professional finishing.
          </p>

          {/* Service badge chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 16 }}>
            {['Same-Day Service', 'Thika Based', 'Mon–Sat 7AM–8PM'].map((chip) => (
              <div
                key={chip}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  padding: '5px 11px',
                  borderRadius: 99,
                  backgroundColor: '#eff6ff',
                  border: '1px solid rgba(191,219,254,0.65)',
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#3b82f6', display: 'block', flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: '#1d4ed8', lineHeight: 1, letterSpacing: '0.02em' }}>
                  {chip}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — SOCIAL ICONS
        ══════════════════════════════════════ */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 22,
            border: '1px solid rgba(226,232,240,0.75)',
            boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
            padding: '20px 20px 22px',
            marginBottom: 14,
          }}
        >
          {/* Section label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              marginBottom: 18,
            }}
          >
            <Sparkles size={12} style={{ color: '#2563eb' }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#94a3b8',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              Follow Us
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
            {socials.map(({ href, Icon, label, color, bg, border, shadow }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 6px 12px',
                  borderRadius: 20,
                  backgroundColor: bg,
                  border: `1px solid ${border}`,
                  boxShadow: `0 3px 12px ${shadow}`,
                  textDecoration: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'transform 160ms ease',
                }}
                onTouchStart={e => { e.currentTarget.style.transform = 'scale(0.94)' }}
                onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                <Icon style={{ color, fontSize: 22 }} />
                <span
                  style={{
                    fontSize: 9.5,
                    fontWeight: 700,
                    color: '#475569',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                    textAlign: 'center',
                  }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        

        {/* ══════════════════════════════════════
            SECTION 4 — CONTACT INFO
        ══════════════════════════════════════ */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 22,
            border: '1px solid rgba(226,232,240,0.75)',
            boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
            padding: '20px 20px 22px',
            marginBottom: 14,
          }}
        >
          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 16 }}>
            <div style={{ width: 3, height: 14, borderRadius: 999, background: 'linear-gradient(180deg,#06b6d4,#0891b2)' }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#94a3b8',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              Contact
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {contactRows.map(({ Icon, label, lines, accent, bg, border }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 13,
                  padding: '13px 14px',
                  borderRadius: 18,
                  backgroundColor: '#f8fafc',
                  border: '1px solid rgba(226,232,240,0.70)',
                }}
              >
                {/* Icon badge */}
                <div
                  style={{
                    width: 40, height: 40,
                    borderRadius: 13,
                    backgroundColor: bg,
                    border: `1px solid ${border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 2px 8px ${border}`,
                  }}
                >
                  <Icon size={16} strokeWidth={2} style={{ color: accent }} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: '#94a3b8',
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      marginBottom: 3,
                      lineHeight: 1,
                    }}
                  >
                    {label}
                  </div>
                  {lines.map((line) => (
                    <div
                      key={line}
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#0f172a',
                        lineHeight: 1.4,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 5 — WHATSAPP CTA CARD
        ══════════════════════════════════════ */}
        <div
          style={{
            borderRadius: 22,
            background: 'linear-gradient(135deg,#2563eb 0%,#1d4ed8 55%,#172554 100%)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 12px 40px rgba(37,99,235,0.32), 0 4px 12px rgba(37,99,235,0.18)',
            padding: '22px 20px',
            marginBottom: 14,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gloss sheen */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '50%',
              borderRadius: '28px 28px 0 0',
              background: 'linear-gradient(180deg,rgba(255,255,255,0.10) 0%,transparent 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Corner radial */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: -40, right: -40,
              width: 130, height: 130,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(255,255,255,0.10) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <p
            style={{
              margin: '0 0 5px',
              fontSize: 10,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.65)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              position: 'relative',
            }}
          >
            Get in Touch
          </p>
          <h3
            style={{
              margin: '0 0 14px',
              fontSize: 19,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              position: 'relative',
              textShadow: '0 1px 4px rgba(0,0,0,0.15)',
            }}
          >
            Ready to Book? Chat with us instantly.
          </h3>

          <a
            href="https://wa.me/254722389764"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '13px 14px',
              borderRadius: 16,
              backgroundColor: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.20)',
              textDecoration: 'none',
              position: 'relative',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <FaWhatsapp style={{ color: '#4ade80', fontSize: 20 }} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.01em',
                  textShadow: '0 1px 3px rgba(0,0,0,0.12)',
                }}
              >
                WhatsApp Us Now
              </span>
            </div>
            <div
              style={{
                width: 30, height: 30,
                borderRadius: 10,
                backgroundColor: 'rgba(255,255,255,0.16)',
                border: '1px solid rgba(255,255,255,0.20)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ArrowUpRight size={14} strokeWidth={2.6} style={{ color: '#fff' }} />
            </div>
          </a>
        </div>

        {/* ══════════════════════════════════════
            BOTTOM BAR
        ══════════════════════════════════════ */}
        <div
          style={{
            borderTop: '1px solid rgba(226,232,240,0.70)',
            padding: '20px 0 28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 11,
              color: '#94a3b8',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textAlign: 'center',
              lineHeight: 1,
            }}
          >
            © {year} EXPRESS SHINE. All rights reserved.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              color: '#cbd5e1',
              fontWeight: 400,
              letterSpacing: '0.03em',
              textAlign: 'center',
              lineHeight: 1,
            }}
          >
            Designed with premium care in Thika.
          </p>
        </div>

      </div>
    </footer>
  )
}