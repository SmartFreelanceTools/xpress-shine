'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, MessageCircle, Truck, ShieldCheck, Phone } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import AppHeader from '../../../../components/app/AppHeader'
import Stars from '../../../../components/app/Stars'
import { Product, discountPercent, ratingOf } from '../../../../components/app/product'

export default function AppProductPage() {
  const params = useParams()
  const id = String(params?.id ?? '')
  const [product, setProduct] = useState<Product | null>(null)
  const [more, setMore] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .maybeSingle()
      .then(({ data }) => {
        setProduct((data as Product) || null)
        setLoading(false)
      })
    supabase
      .from('products')
      .select('*')
      .neq('id', id)
      .order('created_at', { ascending: false })
      .limit(8)
      .then(({ data }) => setMore((data as Product[]) || []))
  }, [id])

  const wa = product
    ? `https://wa.me/254722389764?text=${encodeURIComponent(`Hi! I want ${product.name} - KSh ${product.price}`)}`
    : 'https://wa.me/254722389764'

  return (
    <>
      <AppHeader />

      <div className="px-4 pt-4">
        <Link href="/app/shop" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1d4ed8]">
          <ArrowLeft size={17} /> Back to shop
        </Link>
      </div>

      {loading && <div className="m-4 h-96 animate-pulse rounded-[24px] bg-blue-100/60" />}

      {!loading && !product && (
        <div className="px-4 py-16 text-center">
          <p className="font-extrabold text-slate-900">Product not found</p>
          <Link href="/app/shop" className="mt-4 inline-block rounded-xl bg-[#2563eb] px-5 py-2.5 text-sm font-bold text-white">
            See all products
          </Link>
        </div>
      )}

      {product && (() => {
        const { rating, reviews } = ratingOf(product)
        const off = discountPercent(product)
        return (
          <div className="space-y-4 px-4 pb-28 pt-3">
            <div className="relative overflow-hidden rounded-[24px] border border-blue-100/70 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
              <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
              {product.tag ? (
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.07em] text-[#1d4ed8] shadow">
                  {product.tag}
                </span>
              ) : null}
            </div>

            <div className="rounded-[24px] border border-blue-100/70 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
              <h1 className="text-[20px] font-black leading-snug tracking-[-0.02em] text-slate-900">{product.name}</h1>
              <div className="mt-2">
                <Stars rating={rating} reviews={reviews} size={16} />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                <span className="text-[26px] font-black tracking-[-0.03em] text-[#1e40af]">KSh {product.price}</span>
                {product.oldPrice ? (
                  <span className="text-sm font-medium text-slate-400 line-through">KSh {product.oldPrice}</span>
                ) : null}
                {off > 0 && (
                  <span className="rounded-full bg-green-600 px-2.5 py-1 text-xs font-extrabold text-white">-{off}%</span>
                )}
              </div>
            </div>

            {product.description ? (
              <div className="rounded-[24px] border border-blue-100/70 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">Description</p>
                <p className="mt-2 whitespace-pre-line text-[14px] leading-relaxed text-slate-600">{product.description}</p>
              </div>
            ) : null}

            <div className="space-y-3 rounded-[24px] border border-blue-100/70 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">Delivery &amp; support</p>
              {[
                [Truck, 'Delivery in Thika, Nairobi and across Kenya'],
                [ShieldCheck, 'Quality cleaning products from Express Drycleaners'],
                [Phone, 'Questions? Call +254 722 389 764'],
              ].map(([Icon, text]: any) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-blue-100 bg-[#eff6ff] text-[#2563eb]">
                    <Icon size={17} />
                  </span>
                  {text}
                </div>
              ))}
            </div>

            {more.length > 0 && (
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-500">More products</p>
                <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                  {more.map((p) => (
                    <Link
                      key={p.id}
                      href={`/app/shop/${p.id}`}
                      className="w-36 flex-none overflow-hidden rounded-[18px] border border-blue-100/70 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
                    >
                      <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />
                      <div className="p-2.5">
                        <p className="line-clamp-2 text-[12px] font-extrabold leading-snug text-slate-900">{p.name}</p>
                        <p className="mt-1 text-[13px] font-black text-[#1e40af]">KSh {p.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })()}

      {product && (
        <div
          className="fixed left-0 right-0 z-[2050] flex gap-2.5 bg-white/95 px-4 py-3 backdrop-blur"
          style={{
            bottom: 'calc(62px + env(safe-area-inset-bottom, 0px))',
            boxShadow: '0 -1px 0 rgba(219,234,254,0.9), 0 -8px 24px rgba(37,99,235,0.08)',
          }}
        >
          <a
            href="tel:+254722389764"
            aria-label="Call us"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#1e40af]"
          >
            <Phone size={20} />
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl text-[15px] font-extrabold text-white"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #172554 100%)', boxShadow: '0 10px 28px rgba(37,99,235,0.35)' }}
          >
            <MessageCircle size={19} /> Order on WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
