'use client'

import {
  Calendar,
  MapPin,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Book a Service',
    description:
      'Choose your service online or WhatsApp. Quick and effortless booking in under 2 minutes.',
    icon: Calendar,
    accent: {
      dot:         '#3b82f6',
      iconBg:      '#eff6ff',
      iconBorder:  'rgba(191,219,254,0.65)',
      iconColor:   '#2563eb',
      iconShadow:  'rgba(37,99,235,0.18)',
      numBg:       'linear-gradient(145deg,#3b82f6 0%,#2563eb 55%,#1d4ed8 100%)',
      numShadow:   'rgba(37,99,235,0.36)',
      lineFill:    '#bfdbfe',
      pillBg:      '#eff6ff',
      pillText:    '#1d4ed8',
      pillBorder:  'rgba(191,219,254,0.65)',
      watermark:   'rgba(37,99,235,0.055)',
      ctaBg:       'linear-gradient(135deg,#3b82f6 0%,#2563eb 55%,#1d4ed8 100%)',
      ctaShadow:   'rgba(37,99,235,0.32)',
      tag:         'Online & WhatsApp',
    },
  },
  {
    number: '02',
    title: 'Pickup at Your Door',
    description:
      'We come to you, collect your clothes safely, and label everything professionally.',
    icon: MapPin,
    accent: {
      dot:         '#06b6d4',
      iconBg:      '#ecfeff',
      iconBorder:  'rgba(165,243,252,0.65)',
      iconColor:   '#0891b2',
      iconShadow:  'rgba(6,182,212,0.18)',
      numBg:       'linear-gradient(145deg,#22d3ee 0%,#06b6d4 50%,#0891b2 100%)',
      numShadow:   'rgba(6,182,212,0.32)',
      lineFill:    '#a5f3fc',
      pillBg:      '#ecfeff',
      pillText:    '#0e7490',
      pillBorder:  'rgba(165,243,252,0.65)',
      watermark:   'rgba(6,182,212,0.055)',
      ctaBg:       'linear-gradient(135deg,#06b6d4 0%,#0891b2 55%,#0e7490 100%)',
      ctaShadow:   'rgba(6,182,212,0.28)',
      tag:         'Free Pickup',
    },
  },
  {
    number: '03',
    title: 'Clean & Deliver',
    description:
      'We wash, press, and deliver your clothes fresh, clean, and on time.',
    icon: CheckCircle,
    accent: {
      dot:         '#10b981',
      iconBg:      '#ecfdf5',
      iconBorder:  'rgba(110,231,183,0.65)',
      iconColor:   '#059669',
      iconShadow:  'rgba(16,185,129,0.18)',
      numBg:       'linear-gradient(145deg,#34d399 0%,#10b981 50%,#059669 100%)',
      numShadow:   'rgba(16,185,129,0.30)',
      lineFill:    'transparent',         // last step — no line
      pillBg:      '#ecfdf5',
      pillText:    '#065f46',
      pillBorder:  'rgba(110,231,183,0.65)',
      watermark:   'rgba(16,185,129,0.055)',
      ctaBg:       'linear-gradient(135deg,#34d399 0%,#10b981 55%,#059669 100%)',
      ctaShadow:   'rgba(16,185,129,0.28)',
      tag:         'Same-Day Ready',
    },
  },
]

export default function MobileHowItWorks() {
  return (
    <section
      style={{
        /* ── background unchanged ── */
        background: '#f8faff',
        position: 'relative',
        overflow: 'hidden',
        padding: '56px 20px 48px',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >

      {/* ══════════════════════════════════════
          SECTION HEADER
      ══════════════════════════════════════ */}
      <div
  style={{
    marginBottom: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
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
          <span
            style={{
              width: 6, height: 6,
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#3b82f6,#06b6d4)',
              display: 'block', flexShrink: 0,
            }}
          />
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
            The Express Experience
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
    lineHeight: 1.1,
    textAlign: 'center',
  }}
>
  How It <span style={{ color: '#2563eb' }}>Works</span>
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
    maxWidth: 300,
    textAlign: 'center',
  }}
>
  Three simple steps to clean, fresh clothing delivered to your door.
</p>
      </div>

      {/* ══════════════════════════════════════
          STEPS — TIMELINE LAYOUT
      ══════════════════════════════════════ */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
        {steps.map((step, i) => {
          const Icon = step.icon
          const a = step.accent
          const isLast = i === steps.length - 1

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 16,
                position: 'relative',
              }}
            >

              {/* ── LEFT COLUMN: number badge + connector ── */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0,
                  width: 52,
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    position: 'relative',
                    width: 52, height: 52,
                    borderRadius: '50%',
                    background: a.numBg,
                    boxShadow: `0 8px 24px ${a.numShadow}, 0 2px 8px ${a.numShadow}, inset 0 1px 0 rgba(255,255,255,0.28)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(255,255,255,0.20)',
                  }}
                >
                  {/* Gloss arc on badge */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: '48%',
                      borderRadius: '50% 50% 0 0',
                      background: 'linear-gradient(180deg,rgba(255,255,255,0.22) 0%,transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 900,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      position: 'relative',
                      textShadow: '0 1px 4px rgba(0,0,0,0.20)',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Connector line */}
                {!isLast && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 20,
                      marginTop: 6,
                      marginBottom: 6,
                      borderRadius: 999,
                      
                      opacity: 0.55,
                    }}
                  />
                )}
              </div>

              {/* ── RIGHT COLUMN: card ── */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  paddingBottom: isLast ? 0 : 16,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    backgroundColor: '#ffffff',
                    borderRadius: 24,
                    border: '1px solid rgba(226,232,240,0.75)',
                    boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
                    padding: '18px 16px 18px',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    transition: 'transform 160ms ease, box-shadow 160ms ease',
                  }}
                  
                >

                  {/* Watermark number behind content */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      top: -10, right: 10,
                      fontSize: 80,
                      fontWeight: 900,
                      lineHeight: 1,
                      color: a.watermark,
                      letterSpacing: '-0.06em',
                      fontFamily: "'Syne',sans-serif",
                      userSelect: 'none',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content — relative so it floats above watermark */}
                  <div style={{ position: 'relative', zIndex: 1 }}>

                    {/* Icon + title row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>

                      {/* Icon badge */}
                      <div
                        style={{
                          width: 42, height: 42,
                          borderRadius: 14,
                          backgroundColor: a.iconBg,
                          border: `1px solid ${a.iconBorder}`,
                          boxShadow: `0 4px 14px ${a.iconShadow}, inset 0 1px 0 rgba(255,255,255,0.90)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={17} strokeWidth={2} style={{ color: a.iconColor }} />
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          margin: 0,
                          fontSize: 15.5,
                          fontWeight: 800,
                          color: '#0f172a',
                          letterSpacing: '-0.025em',
                          lineHeight: 1.2,
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        margin: '0 0 14px',
                        fontSize: 12.5,
                        color: '#64748b',
                        lineHeight: 1.60,
                        fontWeight: 400,
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Thin divider */}
                    <div
                      style={{
                        height: 1,
                        backgroundColor: 'rgba(226,232,240,0.70)',
                        marginBottom: 12,
                      }}
                    />

                    {/* Tag pill + arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          padding: '5px 11px',
                          borderRadius: 99,
                          backgroundColor: a.pillBg,
                          border: `1px solid ${a.pillBorder}`,
                        }}
                      >
                        <span
                          style={{
                            width: 5, height: 5,
                            borderRadius: '50%',
                            backgroundColor: a.dot,
                            display: 'block', flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 10.5,
                            fontWeight: 700,
                            color: a.pillText,
                            letterSpacing: '0.04em',
                            lineHeight: 1,
                          }}
                        >
                          {a.tag}
                        </span>
                      </div>

                      <div
                        style={{
                          width: 26, height: 26,
                          borderRadius: 8,
                          backgroundColor: a.iconBg,
                          border: `1px solid ${a.iconBorder}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ChevronRight size={13} strokeWidth={2.5} style={{ color: a.iconColor }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )
        })}
      </div>

      {/* ══════════════════════════════════════
          CTA BUTTON
      ══════════════════════════════════════ */}
      <div style={{ marginTop: 28 }}>
        <a
          href="https://wa.me/254722389764"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 18px 0 16px',
            height: 62,
            borderRadius: 20,
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
              borderRadius: '20px 20px 0 0',
              background: 'linear-gradient(180deg,rgba(255,255,255,0.12) 0%,transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Left: icon + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
            <div
              style={{
                width: 40, height: 40,
                borderRadius: 13,
                backgroundColor: 'rgba(255,255,255,0.16)',
                border: '1px solid rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Z" />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  textShadow: '0 1px 3px rgba(0,0,0,0.14)',
                }}
              >
                Request Pickup
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.72)', marginTop: 1, fontWeight: 400 }}>
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
            <ArrowRight size={16} strokeWidth={2.5} style={{ color: '#ffffff' }} />
          </div>
        </a>
      </div>

    </section>
  )
}