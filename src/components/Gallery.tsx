'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  Sparkles,
  Camera,
  ArrowRight,
  Star,
  ShieldCheck,
  ChevronRight,
  X,
} from 'lucide-react'

type GalleryImage = {
  id: string
  image_url: string
  title: string
  subtitle: string
  category: string
}


const categoryStyles: Record<
  string,
  {
    bg: string
    text: string
  }
> = {
  Uploaded: {
    bg: 'bg-slate-100',
    text: 'text-slate-700',
  },

  Washing: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
  },

  Ironing: {
    bg: 'bg-amber-100',
    text: 'text-amber-700',
  },

  Logistics: {
    bg: 'bg-violet-100',
    text: 'text-violet-700',
  },

  Premium: {
    bg: 'bg-cyan-100',
    text: 'text-cyan-700',
  },
}

function GalleryModal({
  open,
  onClose,
  images,
}: {
  open: boolean
  onClose: () => void
  images: GalleryImage[]
}) {

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
    <div
  className="
    fixed
    inset-0
    z-[999]
    flex
    items-start
    justify-center
    pt-24
    sm:pt-28
    px-4
    animate-in fade-in zoom-in-95 duration-300
  "
>

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

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
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={14} className="text-blue-600" />

              <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600">
                Full Collection
              </span>
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              Laundry Gallery
            </h2>
          </div>

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
    border-slate-200
    flex
    items-center
    justify-center
    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
    hover:scale-105
    hover:bg-slate-50
    transition-all
  "
>
  <X
    size={22}
    strokeWidth={2.8}
    className="text-slate-900"
  />
</button>
        </div>

        {/* SCROLL AREA */}
        <div className="overflow-y-auto p-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {images.map((img, index) => (
              <div
                key={img.id}
                className="
                  group
                  rounded-[30px]
                  overflow-hidden
                  bg-white
                  border
                  border-slate-100
                  shadow-lg
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden">

                  <img
                    src={img.image_url}
                    alt={img.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-white/5" />

                  <div className="absolute top-5 right-5 text-3xl font-black text-white/40">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-xl font-black text-slate-800">
                    {img.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {img.subtitle}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                      {img.category}
                    </span>

                    <button
                      className="
                        w-11
                        h-11
                        rounded-2xl
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                        text-white
                      "
                    >
                      <ArrowRight size={17} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [showGallery, setShowGallery] = useState(false)
  

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setImages(data)
    }

    setLoading(false)
  }

  

  return (
    <section
      className="relative -mt-24 overflow-hidden pt-40 pb-32 z-10"
      style={{
        background: '#f8faff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >
      {/* ───────────────── BACKGROUND ───────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* BIG BLOBS */}
        <div className="absolute w-[750px] h-[750px] -top-52 -left-52 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute w-[650px] h-[650px] top-10 -right-52 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="absolute w-[500px] h-[500px] bottom-[-120px] left-[30%] rounded-full bg-sky-200/30 blur-3xl" />

        {/* FLOATING BUBBLES */}
        <div className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-white/40 blur-md animate-pulse" />

        <div className="absolute top-[35%] right-[10%] w-12 h-12 rounded-full bg-cyan-200/40 blur-sm animate-pulse" />

        <div className="absolute bottom-20 left-[18%] w-16 h-16 rounded-full bg-blue-100/50 blur-sm animate-pulse" />

        {/* GRID TEXTURE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ───────────────── TOP BADGE ───────────────── */}
        <div className="flex justify-center mb-6">

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-xl"
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
              border: '1px solid rgba(147,197,253,0.4)',
            }}
          >
            <Sparkles size={14} className="text-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Premium Laundry Gallery
            </span>
          </div>
        </div>

        {/* ───────────────── HEADER ───────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-none"
            style={{
              fontFamily: "'Syne',sans-serif",
              color: '#0f172a',
            }}
          >
            Laundry
            <span className="block text-blue-600 mt-2">
              & Home Care
            </span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed mt-8">
            Discover premium laundry care, sparkling home essentials, luxury fabric softeners, powerful detergents, dishwashing solutions and professional cleaning products designed for modern homes and businesses.
          </p>

          {/* VIEW ALL BUTTON */}
<div className="flex justify-center mt-8">

  <button
    onClick={() => setShowGallery(true)}
    className="
      group
      inline-flex
      items-center
      gap-2
      px-6
      py-3
      rounded-xl
      text-white
      font-semibold
      text-sm
      transition-all
      duration-300
      hover:scale-105
    "
    style={{
      background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
      boxShadow: '0 10px 25px rgba(37,99,235,0.22)',
    }}
  >
    <span>View Full Gallery</span>

    <div className="
      w-7 h-7
      rounded-lg
      bg-white/15
      flex
      items-center
      justify-center
      group-hover:translate-x-1
      transition-transform
    ">
      <ChevronRight size={16} />
    </div>

  </button>
</div>

  
        </div>

        

        {/* ───────────────── FEATURE STRIP ───────────────── */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">

          {[
            {
              icon: Camera,
              label: 'Real Gallery',
              sub: 'Authentic uploads',
              color: 'text-blue-600',
              bg: 'bg-blue-50',
            },

            {
              icon: ShieldCheck,
              label: 'Premium Care',
              sub: 'Luxury finishing',
              color: 'text-cyan-600',
              bg: 'bg-cyan-50',
            },

            {
              icon: Star,
              label: 'Trusted Quality',
              sub: 'Professional service',
              color: 'text-amber-600',
              bg: 'bg-amber-50',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50"
              style={{
                boxShadow: '0 10px 30px rgba(37,99,235,0.06)',
              }}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg}`}
              >
                <item.icon size={18} className={item.color} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  {item.label}
                </p>

                <p className="text-xs text-slate-500">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        

        {/* ───────────────── LOADING ───────────────── */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-[450px] rounded-[32px] bg-white/60 animate-pulse"
              />
            ))}

          </div>
        ) : images.length === 0 ? (

          <div className="text-center py-24">

            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 mb-6">
              <Camera size={34} className="text-blue-600" />
            </div>

            <h3 className="text-2xl font-black text-slate-800 mb-3">
              No Gallery Images Yet
            </h3>

            <p className="text-slate-500">
              Upload premium laundry images from the admin dashboard.
            </p>

          </div>

        ) : (

  <>
  
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {images.slice(0, 9).map((img, index) => {
              const style =
                categoryStyles[img.category] || categoryStyles.Uploaded

                

              return (
                <div
                  key={img.id}
                  className="group relative overflow-hidden rounded-[34px] bg-white/80 backdrop-blur-xl border border-white/60 transition-all duration-500 hover:-translate-y-3"
                  style={{
                    boxShadow:
                      '0 15px 50px rgba(37,99,235,0.08)',
                  }}
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_70%)]" />

                  {/* NUMBER */}
                  <div className="absolute top-5 right-6 text-4xl font-black text-white/50 z-20">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[340px]">

                    <img
                      src={img.image_url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* LIGHT OVERLAY */}
                    <div className="absolute inset-0 bg-white/5" />

                    {/* CATEGORY */}
                    <div className="absolute top-5 left-5">

                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl border border-white/30 ${style?.bg ?? ''} ${style?.text ?? ''}`}
                      >
                        <span className="w-2 h-2 rounded-full bg-current" />
                        {img.category}
                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="relative p-6">

                    <h3 className="text-2xl font-black text-slate-800 mb-2">
                      {img.title}
                    </h3>

                    {img.subtitle && (
                      <p className="text-slate-500 leading-relaxed text-sm mb-6">
                        {img.subtitle}
                      </p>
                    )}

                    {/* BUTTON */}
                    <button
                      className="group/btn w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all"
                      style={{
                        background:
                          'linear-gradient(135deg,#2563eb,#1d4ed8)',
                        boxShadow:
                          '0 10px 25px rgba(37,99,235,0.18)',
                      }}
                    >
                      <div className="text-left">
                        <p className="text-white text-sm font-bold">
                          Premium Finish
                        </p>

                        <p className="text-blue-100 text-xs">
                          Professional laundry care
                        </p>
                      </div>

                      <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                        <ArrowRight
                          size={18}
                          className="text-white"
                        />
                      </div>
                    </button>

                  </div>
                </div>
              )
            })}

          </div>

          

</>
)}
      </div>
<GalleryModal
  open={showGallery}
  onClose={() => setShowGallery(false)}
  images={images.slice(9)}
/>
    </section>
  )
}