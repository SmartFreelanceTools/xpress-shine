'use client'

import { useEffect, useState } from 'react'
import { Sparkles, ChevronRight, Star, ShoppingBag, ArrowRight, Package } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'

type Product = {
  id: number
  name: string
  description: string
  image: string
  price: string
  oldPrice?: string
  tag: string
  rating: number
  reviews: number
}

// ══════════════════════════════════════════════
// MOBILE PRODUCT CARD — 2026 Premium SaaS
// ══════════════════════════════════════════════
function MobileProductCard({ product, index }: { product: Product; index: number }) {
  const whatsappUrl = `https://wa.me/254722389764?text=Hi! I want ${product.name} - KSh ${product.price}`

  // Discount percentage
  

  // Accent colors rotate across cards for visual variety
  const accents = [
    { dot: '#3b82f6', tagBg: '#eff6ff', tagText: '#1d4ed8', tagBorder: 'rgba(191,219,254,0.65)', ctaBg: 'linear-gradient(135deg,#3b82f6 0%,#2563eb 55%,#1d4ed8 100%)', ctaShadow: 'rgba(37,99,235,0.32)' },
    { dot: '#06b6d4', tagBg: '#ecfeff', tagText: '#0e7490', tagBorder: 'rgba(165,243,252,0.65)', ctaBg: 'linear-gradient(135deg,#06b6d4 0%,#0891b2 55%,#0e7490 100%)', ctaShadow: 'rgba(6,182,212,0.28)' },
    { dot: '#8b5cf6', tagBg: '#f5f3ff', tagText: '#6d28d9', tagBorder: 'rgba(196,181,253,0.65)', ctaBg: 'linear-gradient(135deg,#8b5cf6 0%,#7c3aed 55%,#6d28d9 100%)', ctaShadow: 'rgba(139,92,246,0.28)' },
  ]
  const a = accents[index % accents.length]

  return (
    <article
      style={{
        minWidth: '80%',
        maxWidth: 300,
        backgroundColor: '#ffffff',
        borderRadius: 28,
        border: '1px solid rgba(226,232,240,0.75)',
        boxShadow: '0 2px 16px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        flexShrink: 0,
        position: 'relative',
        WebkitTapHighlightColor: 'transparent',
        transition: 'transform 160ms ease, box-shadow 160ms ease',
      }}
      
    >

      {/* ── IMAGE BLOCK ── */}
      <div
        style={{
          height: 290,
          backgroundColor: '#f8fafc',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
  src={product.image}
  alt={product.name}
  fill
  sizes="300px"
  style={{
    objectFit: 'cover',
  }}
  priority={index < 2} // only first 2 load fast
  loading={index < 2 ? 'eager' : 'lazy'}
/>

        {/* Gradient scrim — bottom fade */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 64,
            background: 'linear-gradient(to top, rgba(15,23,42,0.18) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Tag pill — top left */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '4px 10px',
            borderRadius: 99,
            
            boxShadow: '0 2px 8px rgba(15,23,42,0.08)',
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              
              display: 'block',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 700,
              
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            {product.tag}
          </span>
        </div>

        
      </div>

      {/* ── CONTENT BLOCK ── */}
      <div style={{ padding: '16px 16px 18px' }}>

        {/* Rating row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            marginBottom: 8,
          }}
        >
          {/* Stars */}
          <div style={{ display: 'flex', gap: 1.5 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                strokeWidth={0}
                style={{
                  fill: i < Math.round(product.rating) ? '#f59e0b' : '#e2e8f0',
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1,
            }}
          >
            {product.rating.toFixed(1)}
          </span>
          <span
            style={{
              fontSize: 10.5,
              fontWeight: 400,
              color: '#94a3b8',
              lineHeight: 1,
            }}
          >
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <h3
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          style={{
            margin: '6px 0 0',
            fontSize: 12,
            color: '#64748b',
            lineHeight: 1.55,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontWeight: 400,
          }}
        >
          {product.description}
        </p>

        {/* ── Price row ── */}
        <div
          style={{
            marginTop: 14,
            display: 'flex',
            alignItems: 'flex-end',
            gap: 7,
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            KSh {product.price}
          </span>

          {product.oldPrice && (
            <span
              style={{
                fontSize: 11.5,
                color: '#94a3b8',
                textDecoration: 'line-through',
                lineHeight: 1,
                paddingBottom: 1,
                fontWeight: 400,
              }}
            >
              KSh {product.oldPrice}
            </span>
          )}
        </div>

        {/* ── Thin divider ── */}
        <div
          style={{
            height: 1,
            backgroundColor: 'rgba(226,232,240,0.70)',
            margin: '14px 0',
          }}
        />

        {/* ── CTA ── */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '13px 14px',
            borderRadius: 17,
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            boxShadow: '0 12px 30px rgba(37,99,235,0.35)',
            minHeight: 56,
            
            border: '1px solid rgba(255,255,255,0.12)',
            textDecoration: 'none',
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
              borderRadius: '17px 17px 0 0',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
            <ShoppingBag size={14} strokeWidth={2.2} style={{ color: '#fff', flexShrink: 0 }} />
            <div>
  <div
    style={{
      fontSize: 14,
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-0.01em',
    }}
  >
    Order Now
  </div>

  <div
    style={{
      fontSize: 10,
      color: 'rgba(255,255,255,0.75)',
      marginTop: 1,
    }}
  >
    WhatsApp Checkout
  </div>
</div>
          </div>

          <div
  style={{
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.22)',
    border: '1px solid rgba(255,255,255,0.24)',
    backdropFilter: 'blur(8px)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }}
>
  <ArrowRight
    size={14}
    strokeWidth={2.8}
    style={{ color: '#fff' }}
  />
</div>
        </a>

      </div>
    </article>
  )
}

// ══════════════════════════════════════════════
// SKELETON CARD — shown while loading
// ══════════════════════════════════════════════
function SkeletonCard() {
  return (
    <div
      style={{
        minWidth: '80%',
        maxWidth: 300,
        backgroundColor: '#ffffff',
        borderRadius: 28,
        border: '1px solid rgba(226,232,240,0.75)',
        boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: 290,
          background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
          backgroundSize: '200% 100%',
          animation: 'mobileproducts-shimmer 1.4s ease-in-out infinite',
        }}
      />
      <div style={{ padding: '16px 16px 18px' }}>
        {/* Rating */}
        <div style={{ width: 80, height: 10, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 10 }} />
        {/* Name */}
        <div style={{ width: '75%', height: 14, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 8 }} />
        {/* Desc line 1 */}
        <div style={{ width: '100%', height: 10, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 5 }} />
        {/* Desc line 2 */}
        <div style={{ width: '60%', height: 10, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 14 }} />
        {/* Price */}
        <div style={{ width: '45%', height: 18, borderRadius: 6, backgroundColor: '#f1f5f9', marginBottom: 14 }} />
        {/* Divider */}
        <div style={{ height: 1, backgroundColor: 'rgba(226,232,240,0.70)', marginBottom: 14 }} />
        {/* CTA */}
        <div
          style={{
            height: 48, borderRadius: 17,
            background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
            backgroundSize: '200% 100%',
            animation: 'mobileproducts-shimmer 1.4s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════
export default function MobileProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) setProducts(data)
    setLoading(false)
  }

  return (
    <section
      className="lg:hidden relative py-16 overflow-hidden"
      style={{
        /* ── background unchanged ── */
        background: '#f8faff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >

      {/* ── BACKGROUND GLOW — unchanged ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[280px] h-[280px] top-[-100px] left-[-80px] bg-blue-100 blur-3xl rounded-full" />
        <div className="absolute w-[220px] h-[220px] bottom-[0px] right-[-60px] bg-cyan-100 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">

        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
        <div
  style={{
    padding: '0 20px',
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
              marginBottom: 16,
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
              Premium Products
            </span>
          </div>

          {/* Headline */}
<h2
  style={{
    margin: '0 0 8px',
    fontSize: 'clamp(28px, 8vw, 36px)',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '-0.04em',
    lineHeight: 1.05,
    textAlign: 'center',
  }}
>
  All{' '}
  <span style={{ color: '#2563eb' }}>Cleaning Products</span>
</h2>

          {/* Accent rule */}
          <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 10,
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
    fontWeight: 400,
    lineHeight: 1.6,
    textAlign: 'center',
    maxWidth: 320,
  }}
>
  Premium laundry and cleaning products including detergents, fabric softeners,
  toilet cleaners, bleach, white restorer, shower gels, and household essentials
  delivered across Kenya.
</p>
        </div>

        {/* ══════════════════════════════════════
            COUNT STRIP
        ══════════════════════════════════════ */}
        {!loading && products.length > 0 && (
          <div
            style={{
              padding: '0 20px',
              marginBottom: 18,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
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
              <Package size={11} strokeWidth={2} style={{ color: '#64748b' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#475569', lineHeight: 1 }}>
                {products.length} Products
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                padding: '5px 11px',
                borderRadius: 99,
                backgroundColor: '#f0fdf4',
                border: '1px solid rgba(134,239,172,0.50)',
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#22c55e', display: 'block' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#16a34a', lineHeight: 1 }}>
                In Stock
              </span>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            HORIZONTAL SCROLL TRACK
        ══════════════════════════════════════ */}
        <div
          style={{
            display: 'flex',
            gap: 14,
            overflowX: 'auto',
            scrollSnapType: 'none',
            scrollBehavior: 'smooth',
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 6,
            /* Hide scrollbar across browsers */
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          /* Hide webkit scrollbar via className */
          className="[&::-webkit-scrollbar]:hidden"
        >
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : products.map((p, i) => (
                <MobileProductCard key={p.id} product={p} index={i} />
              ))}
        </div>

        {/* ══════════════════════════════════════
            SCROLL INDICATOR DOTS
        ══════════════════════════════════════ */}
        {!loading && products.length > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              marginTop: 16,
            }}
          >
            {Array.from({ length: Math.min(products.length, 5) }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === 0 ? 18 : 5,
                  height: 5,
                  borderRadius: 999,
                  backgroundColor: i === 0 ? '#2563eb' : '#cbd5e1',
                  transition: 'all 200ms ease',
                }}
              />
            ))}
          </div>
        )}

        {/* ══════════════════════════════════════
            VIEW ALL FOOTER
        ══════════════════════════════════════ */}
        <div
          style={{
            padding: '20px 20px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '11px 20px',
              borderRadius: 14,
              backgroundColor: '#ffffff',
              border: '1px solid rgba(191,219,254,0.70)',
              boxShadow: '0 2px 10px rgba(37,99,235,0.07), 0 1px 3px rgba(15,23,42,0.04)',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: '#2563eb',
                letterSpacing: '0.01em',
              }}
            >
              View All Products
            </span>
            <div
              style={{
                width: 22, height: 22,
                borderRadius: 7,
                backgroundColor: '#eff6ff',
                border: '1px solid rgba(191,219,254,0.60)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ChevronRight size={12} strokeWidth={2.6} style={{ color: '#3b82f6' }} />
            </div>
          </button>
        </div>

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes mobileproducts-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

    </section>
  )
}