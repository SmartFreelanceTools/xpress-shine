'use client'

import Link from 'next/link'
import { Check, ChevronRight } from 'lucide-react'
import { ServiceItem } from './services'

const colorMap = {
  blue: {
    badgeBg: '#eff6ff', badgeText: '#1d4ed8', badgeBorder: 'rgba(191,219,254,0.70)', tagline: '#2563eb', accentBg: '#eff6ff', dot: '#3b82f6',
    pillBg: '#f0f6ff', pillBorder: 'rgba(191,219,254,0.60)', pillText: '#1d4ed8', check: '#3b82f6', iconRing: 'rgba(191,219,254,0.50)', iconShadow: 'rgba(37,99,235,0.12)',
    cta: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)', ctaShadow: 'rgba(37,99,235,0.32)', number: 'rgba(37,99,235,0.055)',
  },
  cyan: {
    badgeBg: '#ecfeff', badgeText: '#0e7490', badgeBorder: 'rgba(165,243,252,0.70)', tagline: '#0891b2', accentBg: '#ecfeff', dot: '#06b6d4',
    pillBg: '#f0feff', pillBorder: 'rgba(165,243,252,0.60)', pillText: '#0e7490', check: '#06b6d4', iconRing: 'rgba(165,243,252,0.50)', iconShadow: 'rgba(6,182,212,0.12)',
    cta: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)', ctaShadow: 'rgba(6,182,212,0.30)', number: 'rgba(6,182,212,0.055)',
  },
  red: {
    badgeBg: '#fff1f2', badgeText: '#be123c', badgeBorder: 'rgba(254,205,211,0.70)', tagline: '#dc2626', accentBg: '#fff1f2', dot: '#ef4444',
    pillBg: '#fff5f5', pillBorder: 'rgba(254,205,211,0.60)', pillText: '#be123c', check: '#ef4444', iconRing: 'rgba(254,205,211,0.50)', iconShadow: 'rgba(239,68,68,0.12)',
    cta: 'linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)', ctaShadow: 'rgba(239,68,68,0.28)', number: 'rgba(239,68,68,0.055)',
  },
}

export default function ServiceCard({ s, index }: { s: ServiceItem; index: number }) {
  const c = colorMap[s.color]
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      style={{
        position: 'relative',
        borderRadius: 28,
        backgroundColor: '#ffffff',
        border: '1px solid rgba(226,232,240,0.75)',
        boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{ position: 'absolute', top: -10, right: 14, fontSize: 96, fontWeight: 900, lineHeight: 1, color: c.number, letterSpacing: '-0.06em', userSelect: 'none', pointerEvents: 'none' }}
      >
        {number}
      </div>

      <div style={{ padding: '22px 20px 20px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 11px', borderRadius: 99, backgroundColor: c.badgeBg, border: `1px solid ${c.badgeBorder}` }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: c.dot, display: 'block' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: c.badgeText, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1 }}>{s.badge}</span>
          </div>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: c.tagline, letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1 }}>{s.tagline}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
          <div
            style={{
              width: 64, height: 64, borderRadius: 20, backgroundColor: c.accentBg, border: `1px solid ${c.iconRing}`,
              boxShadow: `0 4px 16px ${c.iconShadow}, inset 0 1px 0 rgba(255,255,255,0.9)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0, lineHeight: 1,
            }}
          >
            {s.icon}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0 }}>{s.name}</h2>
        </div>

        <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.6, margin: '0 0 16px' }}>{s.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
          {s.features.map((f) => (
            <div key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '6px 11px 6px 8px', borderRadius: 99, backgroundColor: c.pillBg, border: `1px solid ${c.pillBorder}` }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: c.accentBg, border: `1.5px solid ${c.check}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Check size={8} strokeWidth={3} style={{ color: c.check }} />
              </div>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: c.pillText, lineHeight: 1 }}>{f}</span>
            </div>
          ))}
        </div>

        <div style={{ height: 1, backgroundColor: 'rgba(226,232,240,0.70)', marginBottom: 16 }} />

        <Link
          href={`/app/book?service=${encodeURIComponent(s.name)}`}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderRadius: 18,
            background: c.cta, boxShadow: `0 6px 20px ${c.ctaShadow}, inset 0 1px 0 rgba(255,255,255,0.15)`,
            border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none', WebkitTapHighlightColor: 'transparent',
          }}
        >
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>Book {s.name}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', margin: '2px 0 0', lineHeight: 1 }}>Fast pickup available</p>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ChevronRight size={17} strokeWidth={2.5} style={{ color: '#ffffff' }} />
          </div>
        </Link>
      </div>
    </article>
  )
}
