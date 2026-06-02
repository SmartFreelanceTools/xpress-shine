'use client'

import { Sparkles, Quote, MapPin, BadgeCheck } from 'lucide-react'

const testimonials = [
  {
    name: 'Amara Odhiambo',
    role: 'Marketing Manager',
    location: 'Ngoingwa, Thika',
    rating: 5,
    review:
      "Xpress Drycleaners is genuinely the best laundry service I've used. Fast turnaround, careful handling, and very professional packaging.",
    avatar: 'AO',
    tag: 'Dry Cleaning',
    accent: {
      avatarBg:    'linear-gradient(145deg,#4f76f6 0%,#4169E1 55%,#3454c4 100%)',
      avatarShadow:'rgba(65,105,225,0.32)',
      tagBg:       '#eff6ff',
      tagText:     '#1d4ed8',
      tagBorder:   'rgba(191,219,254,0.65)',
      tagDot:      '#3b82f6',
      quoteBg:     '#eff6ff',
      quoteColor:  '#3b82f6',
      starFill:    '#3b82f6',
      watermark:   'rgba(65,105,225,0.045)',
      borderHover: 'rgba(191,219,254,0.65)',
    },
  },
  {
    name: 'David Kamau',
    role: 'Business Owner',
    location: 'Kilimani, Nairobi',
    rating: 5,
    review:
      "My shirts always come back perfectly pressed. The WhatsApp booking system makes everything effortless and reliable.",
    avatar: 'DK',
    tag: 'Weekly Service',
    accent: {
      avatarBg:    'linear-gradient(145deg,#f06b5d 0%,#E34234 55%,#c73528 100%)',
      avatarShadow:'rgba(227,66,52,0.30)',
      tagBg:       '#fff1f2',
      tagText:     '#be123c',
      tagBorder:   'rgba(254,205,211,0.65)',
      tagDot:      '#f43f5e',
      quoteBg:     '#fff1f2',
      quoteColor:  '#f43f5e',
      starFill:    '#f59e0b',
      watermark:   'rgba(227,66,52,0.040)',
      borderHover: 'rgba(254,205,211,0.65)',
    },
  },
  {
    name: 'Grace Wanjiku',
    role: 'Healthcare Professional',
    location: 'Thika Road, Nairobi',
    rating: 5,
    review:
      "Always clean, fresh, and on time. The same-day service has been a lifesaver during my busy schedule.",
    avatar: 'GW',
    tag: 'Express Care',
    accent: {
      avatarBg:    'linear-gradient(145deg,#22d3ee 0%,#00CED1 50%,#0891b2 100%)',
      avatarShadow:'rgba(0,206,209,0.30)',
      tagBg:       '#ecfeff',
      tagText:     '#0e7490',
      tagBorder:   'rgba(165,243,252,0.65)',
      tagDot:      '#06b6d4',
      quoteBg:     '#ecfeff',
      quoteColor:  '#06b6d4',
      starFill:    '#06b6d4',
      watermark:   'rgba(0,206,209,0.045)',
      borderHover: 'rgba(165,243,252,0.65)',
    },
  },
]

// ── Premium star renderer ──
function Stars({ count, fill }: { count: number; fill: string }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          style={{ flexShrink: 0 }}
        >
          <path
            fill={i < count ? fill : '#e2e8f0'}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  )
}

export default function MobileTestimonials() {
  return (
    <section
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

      {/* ── BACKGROUND GLOW — unchanged ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            width: 300, height: 300,
            top: -80, left: -50,
            borderRadius: '50%',
            background: 'rgba(191,219,254,0.30)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 250, height: 250,
            bottom: -80, right: -40,
            borderRadius: '50%',
            background: 'rgba(186,230,253,0.20)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
        <div
  style={{
    marginBottom: 32,
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
            <span
              style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: '#00CED1',
                display: 'block', flexShrink: 0,
                boxShadow: '0 0 0 2px rgba(0,206,209,0.22)',
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
              Customer Feedback
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
            What Clients
            <span style={{ display: 'block', color: '#2563eb' }}>Say</span>
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
    maxWidth: 280,
    textAlign: 'center',
  }}
>
  Trusted laundry care across Nairobi & Thika
</p>
        </div>

        {/* ── AGGREGATE RATING STRIP ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 16px',
            borderRadius: 18,
            backgroundColor: '#ffffff',
            border: '1px solid rgba(226,232,240,0.75)',
            boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
            marginBottom: 24,
          }}
        >
          {/* Big rating number */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingRight: 12,
              borderRight: '1px solid rgba(226,232,240,0.80)',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1,
                letterSpacing: '-0.05em',
              }}
            >
              4.9
            </span>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em', marginTop: 2 }}>
              out of 5
            </span>
          </div>

          {/* Stars + label */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 3, marginBottom: 5 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="15" height="15" viewBox="0 0 20 20">
                  <path
                    fill="#f59e0b"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>
            <p style={{ margin: 0, fontSize: 12, color: '#475569', fontWeight: 500, lineHeight: 1.3 }}>
              Based on {testimonials.length} verified reviews
            </p>
          </div>

          {/* Verified badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34, height: 34,
                borderRadius: 11,
                backgroundColor: '#eff6ff',
                border: '1px solid rgba(191,219,254,0.65)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <BadgeCheck size={17} strokeWidth={2} style={{ color: '#2563eb' }} />
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#64748b', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Verified
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════
            TESTIMONIAL CARDS
        ══════════════════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {testimonials.map((t, i) => {
            const a = t.accent

            return (
              <article
                key={i}
                style={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  borderRadius: 26,
                  border: '1px solid rgba(226,232,240,0.75)',
                  boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
                  padding: '20px 18px 20px',
                  overflow: 'hidden',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'transform 160ms ease, box-shadow 160ms ease',
                }}
                onTouchStart={e => {
                  e.currentTarget.style.transform = 'scale(0.984)'
                  e.currentTarget.style.boxShadow = '0 1px 8px rgba(15,23,42,0.04)'
                }}
                onTouchEnd={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)'
                }}
              >

                {/* Watermark initial */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: -8, right: 10,
                    fontSize: 88,
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
                  {t.avatar}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>

                  {/* ── TOP ROW: stars + tag ── */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 14,
                    }}
                  >
                    <Stars count={t.rating} fill={a.starFill} />

                    {/* Tag pill */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '4px 10px',
                        borderRadius: 99,
                        backgroundColor: a.tagBg,
                        border: `1px solid ${a.tagBorder}`,
                      }}
                    >
                      <span
                        style={{
                          width: 5, height: 5,
                          borderRadius: '50%',
                          backgroundColor: a.tagDot,
                          display: 'block', flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: a.tagText,
                          letterSpacing: '0.07em',
                          textTransform: 'uppercase',
                          lineHeight: 1,
                        }}
                      >
                        {t.tag}
                      </span>
                    </div>
                  </div>

                  {/* ── QUOTE BLOCK ── */}
                  <div
                    style={{
                      position: 'relative',
                      padding: '12px 14px 12px 42px',
                      borderRadius: 16,
                      backgroundColor: a.quoteBg,
                      border: `1px solid ${a.tagBorder}`,
                      marginBottom: 18,
                    }}
                  >
                    {/* Opening quote mark */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 10, left: 12,
                        width: 22, height: 22,
                        borderRadius: 7,
                        backgroundColor: '#ffffff',
                        border: `1px solid ${a.tagBorder}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Quote size={11} strokeWidth={2} style={{ color: a.quoteColor }} />
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: '#334155',
                        lineHeight: 1.65,
                        fontWeight: 450,
                        fontStyle: 'italic',
                      }}
                    >
                      {t.review}
                    </p>
                  </div>

                  {/* ── THIN DIVIDER ── */}
                  <div
                    style={{
                      height: 1,
                      backgroundColor: 'rgba(226,232,240,0.70)',
                      marginBottom: 14,
                    }}
                  />

                  {/* ── AUTHOR ROW ── */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>

                    {/* Avatar badge */}
                    <div
                      style={{
                        width: 44, height: 44,
                        borderRadius: 15,
                        background: a.avatarBg,
                        boxShadow: `0 6px 18px ${a.avatarShadow}, inset 0 1px 0 rgba(255,255,255,0.25)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.18)',
                      }}
                    >
                      {/* Gloss arc */}
                      <div
                        aria-hidden
                        style={{
                          position: 'absolute',
                          top: 0, left: 0, right: 0,
                          height: '46%',
                          borderRadius: '15px 15px 0 0',
                          background: 'linear-gradient(180deg,rgba(255,255,255,0.22) 0%,transparent 100%)',
                          pointerEvents: 'none',
                        }}
                      />
                      <span
                        style={{
                          position: 'relative',
                          fontSize: 12,
                          fontWeight: 800,
                          color: '#ffffff',
                          letterSpacing: '0.02em',
                          textShadow: '0 1px 4px rgba(0,0,0,0.20)',
                          lineHeight: 1,
                        }}
                      >
                        {t.avatar}
                      </span>
                    </div>

                    {/* Name + role + location */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 5,
                          marginBottom: 2,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13.5,
                            fontWeight: 800,
                            color: '#0f172a',
                            letterSpacing: '-0.02em',
                            lineHeight: 1,
                          }}
                        >
                          {t.name}
                        </span>
                        {/* Verified checkmark */}
                        <BadgeCheck size={13} strokeWidth={2} style={{ color: a.quoteColor, flexShrink: 0 }} />
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span
                          style={{
                            fontSize: 11,
                            color: '#64748b',
                            fontWeight: 500,
                            lineHeight: 1,
                          }}
                        >
                          {t.role}
                        </span>
                        <span style={{ fontSize: 10, color: '#cbd5e1', lineHeight: 1 }}>•</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          <MapPin size={9} strokeWidth={2} style={{ color: '#94a3b8', flexShrink: 0 }} />
                          <span
                            style={{
                              fontSize: 11,
                              color: '#94a3b8',
                              fontWeight: 400,
                              lineHeight: 1,
                            }}
                          >
                            {t.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            )
          })}
        </div>

        {/* ══════════════════════════════════════
            BOTTOM TRUST BAR
        ══════════════════════════════════════ */}
        <div
          style={{
            marginTop: 24,
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 8,
          }}
        >
          {[
            { value: '10K+', label: 'Happy Clients',  accent: '#2563eb', bg: '#eff6ff', border: 'rgba(191,219,254,0.60)' },
            { value: '4.9★', label: 'Avg Rating',     accent: '#f59e0b', bg: '#fffbeb', border: 'rgba(253,230,138,0.60)' },
            { value: '100%', label: 'Satisfaction',   accent: '#10b981', bg: '#ecfdf5', border: 'rgba(110,231,183,0.60)' },
          ].map(({ value, label, accent, bg, border }) => (
            <div
              key={label}
              style={{
                borderRadius: 18,
                backgroundColor: '#ffffff',
                border: `1px solid ${border}`,
                padding: '14px 8px 13px',
                boxShadow: '0 2px 10px rgba(15,23,42,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner tint */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -14, right: -14,
                  width: 44, height: 44,
                  borderRadius: '50%',
                  backgroundColor: bg,
                  opacity: 0.8,
                  pointerEvents: 'none',
                }}
              />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 900,
                  color: '#0f172a',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  position: 'relative',
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: '#64748b',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  textAlign: 'center',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}