'use client'

import { useState, useEffect } from 'react'
import { X, ArrowUpRight, ShoppingCart, Star, ChevronRight, Sparkles } from 'lucide-react'
import { supabase } from '@/lib/supabase'

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



// ── Star Rating ────────────────────────────────────────────────────────────────
function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={11}
            className={star <= Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
          />
        ))}
      </div>
      <span className="text-[12px] font-semibold text-slate-700">
    {rating.toFixed(1)}
  </span>

  <span className="text-[11px] text-slate-400">
    ({reviews} {reviews === 1 ? 'review' : 'reviews'})
  </span>

    </div>
  )
}

// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const whatsappUrl = `https://wa.me/254722389764?text=Hi! I'd like to order: ${encodeURIComponent(product.name)} at ${product.price}`

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col">

      {/* Image */}
      <div className={`relative overflow-hidden bg-gray-50 ${compact ? 'h-48' : 'h-64'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const t = e.currentTarget
            t.style.display = 'none'
            const parent = t.parentElement
            if (parent && !parent.querySelector('.img-fallback')) {
              const fb = document.createElement('div')
              fb.className = 'img-fallback absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100'
              fb.innerHTML = `<span class="text-5xl">🧴</span>`
              parent.appendChild(fb)
            }
          }}
        />

        {/* Tag pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border border-gray-200/60">
            {product.tag}
          </span>
        </div>

        {/* Discount badge */}
        {product.oldPrice && (
          <div className="absolute top-3 right-3">
            <span className="inline-block bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <StarRating rating={product.rating} reviews={product.reviews} />

        <h3 className="mt-2 text-[15px] font-bold text-gray-900 leading-snug tracking-tight">
          {product.name}
        </h3>

        {!compact && (
          <p className="mt-1.5 text-[13px] text-gray-500 leading-relaxed flex-1">
  {product.description}
</p>
        )}

        {/* Price row */}
<div className="mt-4 flex items-end gap-2">

  {/* New Price */}
  <div
  className="flex items-start px-3 py-2 rounded-2xl"
  style={{
    background: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
    border: '1px solid rgba(147,197,253,0.35)',
  }}
>
  <span className="text-[11px] font-bold text-blue-600 mt-1 mr-1">
    KSh
  </span>

  <span className="text-[24px] leading-none font-black tracking-tight text-gray-900">
    {product.price}
  </span>
</div>

  {/* Old Price */}
  {product.oldPrice && (
    <div className="flex items-center gap-1 pb-1">
      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
        
      </span>

      <span className="text-[13px] text-gray-400 line-through font-medium">
        KSh {product.oldPrice}
      </span>
    </div>
  )}

</div>

        {/* CTA */}
        <a
          href="https://wa.me/254722389764"
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold transition-all duration-200 hover:bg-blue-600 hover:gap-3 group/btn"
          style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 24px rgba(37,99,235,0.3)' }}
        >
          <ShoppingCart size={14} className="shrink-0" />
          Order on WhatsApp
          <ArrowUpRight size={13} className="opacity-0 group-hover/btn:opacity-100 transition-opacity shrink-0" />
        </a>
      </div>
    </div>
  )
}

// ── Gallery Modal ─────────────────────────────────────────────────────────────
function GalleryModal({
  open,
  onClose,
  products,
}: {
  open: boolean
  onClose: () => void
  products: Product[]
}) {

  // LOCK BODY SCROLL
  useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }

  return () => {
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }
}, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999999] isolate">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL CONTAINER */}
      <div
  className="
    relative
    w-full
    h-full
    flex
    items-start
    justify-center
    pt-24
    sm:pt-28
    px-0
    sm:px-6
    animate-in fade-in zoom-in-95 duration-300
  "
>

        {/* MODAL */}
        <div
  className="
    relative
    z-10
    w-full
    max-w-7xl
    bg-white
    rounded-t-[28px]
    sm:rounded-[34px]
    overflow-hidden
    shadow-[0_30px_90px_rgba(0,0,0,0.25)]
    h-[82vh]
    sm:h-[78vh]
    flex
    flex-col
    animate-in
    fade-in
    zoom-in-95
    duration-300
  "
>
          

          {/* HEADER */}
          <div
            className="
              sticky
              top-0
              z-20
              bg-white/95
              backdrop-blur-xl
              border-b
              border-gray-100
              px-6
              py-5
              flex
              items-center
              justify-between
            "
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={13} className="text-blue-500" />

                <span className="text-[11px] font-bold text-blue-500 uppercase tracking-widest">
                  Full Collection
                </span>
              </div>

              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                All Products
              </h2>
            </div>

            {/* CLOSE BUTTON */}
            <button
  onClick={onClose}
  className="
    absolute
    top-5
    right-5
    z-50
    w-12
    h-12
    rounded-full
    bg-white
    border
    border-gray-200
    flex
    items-center
    justify-center
    shadow-2xl
    hover:scale-105
    transition-all
    text-black
  "
>
  <X size={22} strokeWidth={2.5} className="text-black" />
</button>
          </div>

          {/* SCROLLABLE CONTENT */}
<div className="flex-1 overflow-y-auto px-4 py-4">

  {products.length > 0 ? (

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      xl:grid-cols-4
      gap-3
    ">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </div>

  ) : (

    <div className="flex items-center justify-center min-h-[45vh]">

      <div
        className="
          relative
          overflow-hidden
          max-w-md
          w-full
          rounded-[28px]
          border
          border-slate-100
          bg-white
          px-6
          py-10
          text-center
          shadow-[0_15px_50px_rgba(0,0,0,0.08)]
        "
      >

        {/* Glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at top,rgba(59,130,246,.12),transparent 60%)'
          }}
        />

        {/* Icon */}
        <div className="relative z-10 flex justify-center">

          <div
            className="
              w-20
              h-20
              rounded-full
              flex
              items-center
              justify-center
              bg-blue-50
              border
              border-blue-100
            "
          >
            <span className="text-4xl">🧴</span>
          </div>

        </div>

        {/* Text */}
        <div className="relative z-10 mt-6">

          <span className="
            inline-flex
            px-3
            py-1
            rounded-full
            bg-blue-50
            text-blue-600
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
          ">
            Collection Empty
          </span>

          <h2 className="mt-4 text-2xl font-black text-slate-900">
            No Products Yet
          </h2>

          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            New products will appear here once added.
          </p>

          <button
            onClick={onClose}
            className="
              mt-6
              px-6
              py-2.5
              rounded-xl
              text-sm
              font-semibold
              text-white
              transition
              hover:scale-105
            "
            style={{
              background:
                'linear-gradient(135deg,#2563eb,#1d4ed8)',
              boxShadow:
                '0 8px 20px rgba(37,99,235,.25)'
            }}
          >
            Browse Later
          </button>

        </div>

      </div>
    </div>

  )}



          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Products() {
  const [showGallery, setShowGallery] = useState(false)

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  fetchProducts()
}, [])

async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (!error && data) {
    setProducts(data)
  }

  setLoading(false)
}

  // Show first 12 on the main grid
  const visibleProducts = products.slice(0, 16)

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

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
<div className="text-center max-w-3xl mx-auto mb-24">

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
        Premium Products
      </span>
    </div>

  </div>

  {/* TITLE */}
  <h2
    className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-6"
    style={{
      color: '#0f172a',
      fontFamily: "'Syne',sans-serif",
    }}
  >
    All Detergents &
    <span className="block text-blue-600 mt-2">
      Care Products
    </span>
  </h2>

  {/* DESCRIPTION */}
  <p className="text-slate-500 text-lg leading-relaxed">
    Premium laundry and cleaning products including detergents, fabric softeners,
  toilet cleaners, bleach, white restorer, shower gels, and household essentials
  delivered across Kenya.
  </p>

  {/* VIEW ALL BUTTON */}
  <div className="flex justify-center mt-10">

    <button
      onClick={() => setShowGallery(true)}
      className="
        inline-flex
        items-center
        gap-2
        px-6
        py-3
        rounded-2xl
        text-sm
        font-bold
        transition-all
        duration-300
      "
      style={{
        background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
        color: 'white',
        boxShadow: '0 10px 30px rgba(37,99,235,0.25)',
      }}
    >
      View All Products
      <ChevronRight size={16} />
    </button>

  </div>

</div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        



        {/* View all — mobile */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            onClick={() => setShowGallery(true)}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-700 border border-gray-200 px-5 py-3 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all"
          >
            More Products {products.length} products
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Count strip */}
        <p className="hidden sm:block mt-6 text-center text-[12px] text-gray-400">
          Showing {visibleProducts.length} of {products.length} products {' '}
          <button
            onClick={() => setShowGallery(true)}
            className="text-blue-500 font-semibold hover:underline"
          >
            
          </button>
        </p>
      </div>

<GalleryModal
  open={showGallery}
  onClose={() => setShowGallery(false)}
  products={products.slice(16)}
/>
    </section>
  )
}