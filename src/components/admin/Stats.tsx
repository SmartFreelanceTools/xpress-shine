'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

import {
  ShoppingBag,
  Clock3,
  CheckCircle2,
  Wallet,
  TrendingUp,
  Sparkles,
  Activity,
} from 'lucide-react'

export default function Stats() {

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    revenue: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {

    setLoading(true)

    const { data, error } = await supabase
      .from('bookings')
      .select('*')

    const { data: products } = await supabase
  .from('products')
  .select('price')

  

    if (error) {
      console.log(error.message)
      setLoading(false)
      return
    }

    const total = data.length

    const pending = data.filter(
      (item: any) =>
        item.status?.toLowerCase() === 'pending'
    ).length

    const completed = data.filter(
      (item: any) =>
        item.status?.toLowerCase() === 'completed'
    ).length

    // SAMPLE REVENUE LOGIC
    // Later you can add real prices
    const prices: any = {
  'Dry Cleaning': 1200,
  Laundry: 700,
  Ironing: 500,
  'Pickup & Delivery': 300,

  'Toilet Cleaner': 350,
  'Detergent Soap': 250,
  Bleach: 400,
  'Fabric Softener': 450,
  'Stain Remover': 600,
}

const revenue = data
  .filter(
    (item: any) =>
      item.status?.toLowerCase() === 'completed'
  )
  .reduce((total: number, item: any) => {

    const servicePrice =
      prices[item.service] || 0

    return total + servicePrice

  }, 0)

  const totalProductValue = (products ?? []).reduce(
  (sum: number, item: any) => {
    return sum + Number(item.price || 0)
  },
  0
)

setStats({
  total,
  pending,
  completed,
  revenue: totalProductValue ?? 0,
})

    setLoading(false)
  }

  

  return (
    <section
      className="relative overflow-hidden rounded-[40px] p-6 md:p-8"
      style={{
        background: '#f8fbff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* LEFT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -320,
            left: -180,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.8) 0%,transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: -80,
            right: -100,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.6) 0%,transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* BOTTOM GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            bottom: -180,
            left: '35%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.45) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '42px 42px',
          }}
        />

      </div>

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>

          <div className="flex items-center gap-2 mb-2">

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
              <Activity size={18} />
            </div>

            <span className="text-xs uppercase tracking-[0.35em] text-blue-600 font-bold">
              Analytics
            </span>

          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Business Overview
          </h1>

          <p className="text-slate-500 mt-2">
            Live booking analytics from your EXPRESS system.
          </p>

        </div>

        <div className="hidden md:flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/70 border border-white/80 backdrop-blur-xl shadow-lg">

          <Sparkles size={16} className="text-blue-500" />

          <span className="text-sm font-semibold text-slate-700">
            Real-time Stats
          </span>

        </div>

      </div>

      {/* CARDS */}
      <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <Card
          title="Total Orders"
          value={loading ? '...' : stats.total}
          growth="+12%"
          color="from-blue-500 to-blue-700"
          icon={<ShoppingBag size={22} />}
          progress="78%"
        />

        <Card
          title="Pending Orders"
          value={loading ? '...' : stats.pending}
          growth="+4%"
          color="from-yellow-500 to-orange-500"
          icon={<Clock3 size={22} />}
          progress="55%"
        />

        <Card
          title="Completed"
          value={loading ? '...' : stats.completed}
          growth="+18%"
          color="from-green-500 to-emerald-600"
          icon={<CheckCircle2 size={22} />}
          progress="86%"
        />

        <Card
          title="Inventory Value"
          value={loading ? '...' : `KES ${stats.revenue}`}
          growth="+24%"
          color="from-purple-500 to-pink-600"
          icon={<Wallet size={22} />}
          progress="68%"
        />

      </div>

    </section>
  )
}

function Card({
  title,
  value,
  color,
  icon,
  growth,
  progress,
}: any) {

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[34px]
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

      {/* HOVER LIGHT */}
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
          absolute -top-12 -right-12
          w-40 h-40 rounded-full
          blur-3xl opacity-30
        "
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.95), transparent 70%)',
        }}
      />

      {/* CONTENT */}
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
        <div className="mt-8">

          <div className="flex items-center justify-between mb-3">

            <div className="flex items-center gap-2 text-emerald-500">

              <TrendingUp size={15} />

              <span className="text-xs font-bold">
                {growth}
              </span>

            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
              Weekly Growth
            </span>

          </div>

          {/* PROGRESS */}
          <div className="relative h-[8px] rounded-full overflow-hidden bg-slate-200/70">

            <div
              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${color}`}
              style={{
                width: progress,
              }}
            />

            <div
              className="
                absolute top-0 left-0
                h-full w-24
                bg-white/40 blur-md
                animate-pulse
              "
            />

          </div>

        </div>

      </div>

    </div>
  )
}