'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import ServiceArt from './ServiceArt'
import { ServiceItem } from './services'

export default function ServiceCard({ s, index }: { s: ServiceItem; index: number }) {
  // If you add a real photo at public/services/<slug>.jpg it replaces the illustration automatically.
  const [photo, setPhoto] = useState(false)

  return (
    <div
      className="overflow-hidden rounded-[26px] bg-white"
      style={{ border: '1px solid rgba(191,219,254,0.7)', boxShadow: '0 6px 24px rgba(15,23,42,0.07)' }}
    >
      <div
        className="relative h-[168px] overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${s.from} 0%, ${s.to} 100%)` }}
      >
        <span aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15" />
        <span aria-hidden className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/10" />
        <div className="absolute inset-0 p-2">
          <ServiceArt slug={s.slug} />
        </div>
        <img
          src={`/services/${s.slug}.jpg`}
          alt={s.name}
          loading="lazy"
          onLoad={() => setPhoto(true)}
          onError={() => setPhoto(false)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity"
          style={{ opacity: photo ? 1 : 0 }}
        />
        <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#1d4ed8] shadow">
          {s.badge}
        </span>
        <span className="absolute right-4 top-3 text-[28px] font-black leading-none tracking-[-0.04em] text-white/70">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-500">{s.tagline}</p>
        <h2 className="mt-1 text-[20px] font-black leading-tight tracking-[-0.02em] text-slate-900">{s.name}</h2>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">{s.desc}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {s.features.map((f) => (
            <span key={f} className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-[#eff6ff] px-2.5 py-1 text-[11px] font-bold text-[#1d4ed8]">
              <Check size={11} strokeWidth={3} /> {f}
            </span>
          ))}
        </div>

        <Link
          href={`/app/book?service=${encodeURIComponent(s.name)}`}
          className="mt-4 flex h-12 items-center justify-between rounded-2xl px-4 text-[14px] font-extrabold text-white active:scale-[0.99]"
          style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #172554 100%)', boxShadow: '0 10px 24px rgba(37,99,235,0.28)' }}
        >
          Book {s.name}
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/15">
            <ArrowRight size={16} strokeWidth={2.5} />
          </span>
        </Link>
      </div>
    </div>
  )
}
