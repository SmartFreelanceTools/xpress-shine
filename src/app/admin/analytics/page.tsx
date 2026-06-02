'use client'

import {
  Wallet,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  Activity,
  ArrowUpRight,
} from 'lucide-react'

import PageHeader from "../../../components/admin/PageHeader"
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'


export default function AnalyticsPage() {

  const [stats, setStats] = useState({
  inventoryValue: 0,
  orders: 0,
  growth: 0,
})

const [loading, setLoading] = useState(true)

useEffect(() => {
  fetchAnalytics()
}, [])

async function fetchAnalytics() {

  setLoading(true)

  // PRODUCTS
  const { data: products } = await supabase
    .from('products')
    .select('*')

  // BOOKINGS
  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')

  // TOTAL PRODUCT VALUE
  const inventoryValue = (products || []).reduce(
    (total: number, item: any) => {

      const price =
        Number(item.price) || 0

      return total + price

    },
    0
  )

  // TOTAL ORDERS
  const orders = bookings?.length || 0

  // SIMPLE GROWTH CALCULATION
  const completed =
    bookings?.filter(
      (b: any) =>
        b.status?.toLowerCase() === 'completed'
    ).length || 0

  const growth =
    orders > 0
      ? Math.round((completed / orders) * 100)
      : 0

  setStats({
    inventoryValue,
    orders,
    growth,
  })

  setLoading(false)
}

  return (
    <div className="space-y-10">

      <PageHeader
        title="Analytics"
        subtitle="Performance insights and business metrics"
      />

      {/* PREMIUM HERO */}
      <section
        className="
          relative overflow-hidden
          rounded-[36px]
          p-8 md:p-10
          border border-white/40
        "
        style={{
          background:
            'linear-gradient(135deg,#eff6ff 0%,#ffffff 45%,#ecfeff 100%)',
          boxShadow: '0 20px 60px rgba(37,99,235,0.08)',
        }}
      >

        {/* BACKGROUND GLOWS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div
            className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle,rgba(59,130,246,0.18),transparent 70%)',
            }}
          />

          <div
            className="absolute top-0 right-0 w-[320px] h-[320px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle,rgba(6,182,212,0.15),transparent 70%)',
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div
                className="
                  w-12 h-12 rounded-2xl
                  flex items-center justify-center
                  text-white
                "
                style={{
                  background:
                    'linear-gradient(135deg,#2563eb,#06b6d4)',
                  boxShadow:
                    '0 12px 30px rgba(37,99,235,0.25)',
                }}
              >
                <Activity size={20} />
              </div>

              <div>

                <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-blue-600">
                  XPRESS Analytics
                </p>

                <div className="flex items-center gap-2 mt-1">

                  <Sparkles size={14} className="text-cyan-500" />

                  <span className="text-sm text-slate-500 font-medium">
                    Live business overview
                  </span>

                </div>

              </div>

            </div>

            <h1
              className="
                text-4xl md:text-6xl
                font-black
                tracking-[-0.05em]
                text-slate-900
                leading-none
              "
            >
              Smart
              <span className="text-blue-600"> Insights</span>
            </h1>

            <p className="mt-5 max-w-2xl text-slate-500 text-[15px] leading-relaxed">
              Monitor product performance, inventory value,
              order activity, and business growth from your
              premium XPRESS dashboard.
            </p>

          </div>

          {/* RIGHT STATUS */}
          <div
            className="
              self-start
              rounded-[28px]
              px-6 py-5
              bg-white/70
              border border-white/80
              backdrop-blur-2xl
              shadow-xl
            "
          >

            <div className="flex items-center gap-3">

              <div className="relative">

                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

                <div className="absolute inset-0 rounded-full bg-emerald-400 blur-md opacity-70" />

              </div>

              <span className="text-sm font-semibold text-slate-700">
                System Active
              </span>

            </div>

            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">

              <ArrowUpRight size={15} className="text-blue-500" />

              Real-time tracking enabled

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <Card
    title="Inventory Value"
    value={
      loading
        ? '...'
        : `KES ${stats.inventoryValue.toLocaleString()}`
    }
    growth="+12%"
    icon={<Wallet size={22} />}
    color="from-blue-500 to-cyan-500"
  />

  <Card
    title="Orders"
    value={
      loading
        ? '...'
        : stats.orders
    }
    growth="+8%"
    icon={<ShoppingBag size={22} />}
    color="from-violet-500 to-fuchsia-500"
  />

  <Card
    title="Completion Rate"
    value={
      loading
        ? '...'
        : `${stats.growth}%`
    }
    growth="+4%"
    icon={<TrendingUp size={22} />}
    color="from-emerald-500 to-green-600"
  />

</div>

    </div>
  )
}

/* PREMIUM CARD */
function Card({
  title,
  value,
  growth,
  icon,
  color,
}: any) {

  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[30px]
        p-6
        transition-all duration-500
        hover:-translate-y-2
      "
      style={{
        background: 'rgba(255,255,255,0.72)',
        border: '1px solid rgba(255,255,255,0.9)',
        backdropFilter: 'blur(18px)',
        boxShadow: '0 15px 45px rgba(37,99,235,0.08)',
      }}
    >

      {/* HOVER GLOW */}
      <div
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        style={{
          background:
            'radial-gradient(circle at top right, rgba(59,130,246,0.14), transparent 70%)',
        }}
      />

      {/* ORB */}
      <div
        className="
          absolute -top-10 -right-10
          w-40 h-40 rounded-full
          blur-3xl opacity-30
        "
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.95), transparent 70%)',
        }}
      />

      <div className="relative z-10">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-slate-500 text-sm font-semibold tracking-wide">
              {title}
            </p>

            <h2 className="text-4xl font-black mt-3 text-slate-900 tracking-tight">
              {value}
            </h2>

          </div>

          <div
            className={`
              w-14 h-14 rounded-2xl
              bg-gradient-to-br ${color}
              flex items-center justify-center
              text-white
              transition-all duration-500
              group-hover:scale-110 group-hover:rotate-3
            `}
            style={{
              boxShadow: '0 15px 35px rgba(37,99,235,0.22)',
            }}
          >
            {icon}
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-between">

          <div className="flex items-center gap-2 text-emerald-500">

            <TrendingUp size={15} />

            <span className="text-xs font-bold">
              {growth}
            </span>

          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
            This Month
          </span>

        </div>

      </div>

    </div>
  )
}