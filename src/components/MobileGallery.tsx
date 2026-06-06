'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Camera, ArrowRight, Sparkles, Grid3X3, ImageIcon, ChevronRight } from 'lucide-react'
import Image from 'next/image'

type GalleryImage = {
  id: string
  image_url: string
  title: string
  subtitle: string
  category: string
}

// ══════════════════════════════════════════════
// SKELETON CARD
// ══════════════════════════════════════════════
function SkeletonCard() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 32,
        border: '1px solid rgba(226,232,240,0.75)',
        boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: 260,
          background: 'linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)',
          backgroundSize: '200% 100%',
          animation: 'mobilegallery-shimmer 1.4s ease-in-out infinite',
        }}
      />
      <div style={{ padding: '16px 18px 20px' }}>
        <div style={{ width: 64, height: 10, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 10 }} />
        <div style={{ width: '70%', height: 14, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 8 }} />
        <div style={{ width: '90%', height: 10, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 5 }} />
        <div style={{ width: '55%', height: 10, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 16 }} />
        <div
          style={{
            height: 48, borderRadius: 16,
            background: 'linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)',
            backgroundSize: '200% 100%',
            animation: 'mobilegallery-shimmer 1.4s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════
// GALLERY CARD
// ══════════════════════════════════════════════
function GalleryCard({ img, index }: { img: GalleryImage; index: number }) {
  // Accent palette rotates across cards
  const accents = [
    {
      dot: '#3b82f6',
      catBg: '#eff6ff',
      catText: '#1d4ed8',
      catBorder: 'rgba(191,219,254,0.65)',
      ctaBg: 'linear-gradient(135deg,#3b82f6 0%,#2563eb 55%,#1d4ed8 100%)',
      ctaShadow: 'rgba(37,99,235,0.30)',
      numberColor: 'rgba(37,99,235,0.08)',
    },
    {
      dot: '#06b6d4',
      catBg: '#ecfeff',
      catText: '#0e7490',
      catBorder: 'rgba(165,243,252,0.65)',
      ctaBg: 'linear-gradient(135deg,#06b6d4 0%,#0891b2 55%,#0e7490 100%)',
      ctaShadow: 'rgba(6,182,212,0.26)',
      numberColor: 'rgba(6,182,212,0.07)',
    },
    {
      dot: '#8b5cf6',
      catBg: '#f5f3ff',
      catText: '#6d28d9',
      catBorder: 'rgba(196,181,253,0.65)',
      ctaBg: 'linear-gradient(135deg,#8b5cf6 0%,#7c3aed 55%,#6d28d9 100%)',
      ctaShadow: 'rgba(139,92,246,0.26)',
      numberColor: 'rgba(139,92,246,0.07)',
    },
  ]
  const a = accents[index % accents.length]
  const numStr = String(index + 1).padStart(2, '0')

  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 32,
        border: 'none',
        boxShadow: '0 20px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.05)',
        overflow: 'hidden',
        position: 'relative',
        WebkitTapHighlightColor: 'transparent',
        transition: 'transform 160ms ease, box-shadow 160ms ease',
      }}
      onTouchStart={e => {
        e.currentTarget.style.transform = 'scale(0.982)'
        e.currentTarget.style.boxShadow = '0 1px 8px rgba(15,23,42,0.04)'
      }}
      onTouchEnd={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)'
      }}
    >

      {/* ── IMAGE BLOCK ── */}
      <div
  style={{
    height: 260,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f8fafc',
  }}
>
  <Image
    src={img.image_url}
    alt={img.title}
    fill
    sizes="(max-width: 768px) 100vw, 400px"
    style={{
  objectFit: 'cover',
}}
    loading={index < 2 ? 'eager' : 'lazy'}
    priority={index < 2}
  />

 
  

        {/* Bottom scrim for legibility */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 80,
            background: 'linear-gradient(to top, rgba(15,23,42,0.30) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Category pill — top left */}
        <div
          style={{
            position: 'absolute',
            top: 12, left: 12,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            padding: '4px 10px',
            borderRadius: 99,
            
            boxShadow: '0 2px 8px rgba(15,23,42,0.08)',
          }}
        >
          <span
            style={{
              width: 5, height: 5,
              borderRadius: '50%',
              
              display: 'block', flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 9.5, fontWeight: 700,
              
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            {img.category}
          </span>
        </div>

        {/* Index badge — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 12, right: 12,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '4px 9px',
            borderRadius: 8,
            backgroundColor: 'rgba(15,23,42,0.55)',
            border: '1px solid rgba(255,255,255,0.14)',
          }}
        >
          <ImageIcon size={9} strokeWidth={2} style={{ color: 'rgba(255,255,255,0.75)' }} />
          <span
            style={{
              fontSize: 10, fontWeight: 700,
              color: 'rgba(255,255,255,0.90)',
              letterSpacing: '0.05em',
              lineHeight: 1,
            }}
          >
            #{numStr}
          </span>
        </div>
      </div>

      {/* ── CONTENT BLOCK ── */}
      <div style={{ padding: '16px 18px 18px', position: 'relative' }}>

        {/* Oversized watermark number */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: -8, right: 14,
            fontSize: 80,
            fontWeight: 900,
            lineHeight: 1,
            
            letterSpacing: '-0.06em',
            fontFamily: "'Syne', sans-serif",
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {numStr}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <h3
            style={{
              margin: '0 0 5px',
              fontSize: 16,
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
            }}
          >
            {img.title}
          </h3>

          {/* Subtitle */}
          <p
            style={{
              margin: '0 0 14px',
              fontSize: 12.5,
              color: '#64748b',
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            {img.subtitle}
          </p>

          {/* Thin divider */}
          <div
            style={{
              height: 1,
              backgroundColor: 'rgba(226,232,240,0.70)',
              marginBottom: 14,
            }}
          />

          {/* CTA */}
          <button
  style={{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    borderRadius: 18,

    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    boxShadow: '0 12px 30px rgba(37,99,235,0.35)',

    border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Gloss sheen */}
            <span
              aria-hidden
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '50%',
                borderRadius: '16px 16px 0 0',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
              <Camera size={14} strokeWidth={2.2} style={{ color: '#fff', flexShrink: 0 }} />
              <span
                style={{
                  fontSize: 13.5, fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.01em',
                  textShadow: '0 1px 3px rgba(0,0,0,0.12)',
                }}
              >
                See Transformation
              </span>
            </div>

            <div
              style={{
                width: 28, height: 28,
                borderRadius: 9,
                backgroundColor: 'rgba(255,255,255,0.16)',
                border: '1px solid rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, position: 'relative',
              }}
            >
              <ArrowRight size={13} strokeWidth={2.6} style={{ color: '#fff' }} />
            </div>
          </button>
        </div>
      </div>
    </article>
  )
}

// ══════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════
export default function MobileGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const { data } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) setImages(data)
    setLoading(false)
  }

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        /* ── background unchanged ── */
        background: '#f8faff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >

      {/* ── BACKGROUND GLOW — unchanged ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[250px] h-[250px] bg-blue-200/30 blur-[80px] top-[-80px] left-[-60px]" />
        <div className="absolute w-[220px] h-[220px] bg-cyan-200/20 blur-[90px] bottom-[-80px] right-[-40px]" />
      </div>

      <div className="relative z-10" style={{ padding: '0 20px' }}>

        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
        <div
  style={{
    marginBottom: 28,
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
              Gallery
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
    textAlign: 'center',
  }}
>
            Laundry
            <span
              style={{
                display: 'block',
                color: '#2563eb',
              }}
            >
              Gallery
            </span>
          </h2>

          {/* Accent rule */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '12px 0 10px' }}>
            <div style={{ width: 52, height: 3, borderRadius: 999, background: 'linear-gradient(90deg,#2563eb,#38bdf8)' }} />
            <div style={{ width: 8,  height: 3, borderRadius: 999, background: '#bfdbfe' }} />
            <div style={{ width: 4,  height: 3, borderRadius: 999, background: '#dbeafe' }} />
          </div>

          <p
  style={{
    margin: 0,
    fontSize: 13.5,
    color: '#64748b',
    fontWeight: 400,
    lineHeight: 1.6,
    textAlign: 'center',
    maxWidth: 320,
  }}
>
  Real results from our premium cleaning services
</p>
        </div>

        {/* ══════════════════════════════════════
            COUNT STRIP
        ══════════════════════════════════════ */}
        {!loading && images.length > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '5px 11px',
                borderRadius: 99,
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226,232,240,0.80)',
                boxShadow: '0 1px 4px rgba(15,23,42,0.05)',
              }}
            >
              <Grid3X3 size={11} strokeWidth={2} style={{ color: '#64748b' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#475569', lineHeight: 1 }}>
                Curated Gallery • {images.length} Photos
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                padding: '5px 11px',
                borderRadius: 99,
                backgroundColor: '#eff6ff',
                border: '1px solid rgba(191,219,254,0.55)',
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#3b82f6', display: 'block' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#2563eb', lineHeight: 1 }}>
                Premium Work
              </span>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            CARD LIST
        ══════════════════════════════════════ */}
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {images.slice(0, 8).map((img, i) => (
              <GalleryCard key={img.id} img={img} index={i} />
            ))}
          </div>
        )}

        

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes mobilegallery-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

    </section>
  )
}