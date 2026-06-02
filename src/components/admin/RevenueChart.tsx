'use client'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

import {
  TrendingUp,
  Wallet,
} from 'lucide-react'

export default function RevenueChart({
  bookings,
}: {
  bookings: any[]
}) {

  const grouped =
    bookings.reduce((acc: any, b: any) => {

      const date =
        new Date(
          b.created_at
        ).toLocaleDateString()

      acc[date] =
        (acc[date] || 0) + 500

      return acc

    }, {})

  const data =
    Object.keys(grouped)
      .map(day => ({

        day,
        revenue: grouped[day]

      }))

  return (

    <div
      className="
        relative overflow-hidden
        rounded-[36px]
        p-8
      "
      style={{
        background: '#f8faff',
        border: '1px solid rgba(255,255,255,0.9)',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        boxShadow:
          '0 12px 45px rgba(37,99,235,0.08)',
      }}
    >

      {/* LUXURY BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -320,
            left: -180,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.75) 0%,transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            top: -140,
            right: -120,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.55) 0%,transparent 70%)',
            filter: 'blur(65px)',
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
            filter: 'blur(50px)',
          }}
        />

        {/* GRID TEXTURE */}
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

        {/* FLOATING BUBBLE */}
        <div
          className="absolute top-10 right-[12%] w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

      </div>

      {/* HEADER */}
      <div className="relative z-10 flex items-start justify-between mb-10">

        <div>

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2.5 rounded-full
              mb-5
            "
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.9),rgba(186,230,253,0.65))',
              border: '1px solid rgba(147,197,253,0.45)',
              boxShadow: '0 8px 30px rgba(37,99,235,0.08)',
            }}
          >

            <TrendingUp
              size={14}
              className="text-blue-600"
            />

            <span className="text-[11px] uppercase tracking-[0.25em] text-blue-700 font-bold">
              Analytics
            </span>

          </div>

          {/* TITLE */}
          <h2 className="font-black text-4xl text-slate-800 tracking-tight">
            Revenue Trend
          </h2>

          {/* SUBTEXT */}
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Daily revenue performance overview
          </p>

        </div>

        {/* RIGHT CARD */}
        <div
          className="
            hidden md:flex
            items-center gap-4
            rounded-[28px]
            px-5 py-4
          "
          style={{
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(255,255,255,0.9)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 10px 35px rgba(37,99,235,0.08)',
          }}
        >

          {/* ICON */}
          <div
            className="
              w-14 h-14 rounded-2xl
              bg-gradient-to-br
              from-blue-600 to-cyan-500
              flex items-center justify-center
            "
            style={{
              boxShadow: '0 12px 30px rgba(37,99,235,0.22)',
            }}
          >

            <Wallet
              size={18}
              className="text-white"
            />

          </div>

          {/* TEXT */}
          <div>

            <p className="text-xs text-slate-400 font-medium">
              Total Revenue
            </p>

            <h3 className="text-2xl font-black text-slate-800 tracking-tight">
              KES {data.reduce((a, b) => a + b.revenue, 0)}
            </h3>

          </div>

        </div>

      </div>

      {/* CHART */}
      <div
        className="
          relative z-10
          h-[340px]
          rounded-[30px]
          overflow-hidden
          p-4
        "
        style={{
          background: 'rgba(255,255,255,0.58)',
          border: '1px solid rgba(255,255,255,0.9)',
          backdropFilter: 'blur(18px)',
        }}
      >

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="premiumRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#2563eb"
                  stopOpacity={0.55}
                />

                <stop
                  offset="100%"
                  stopColor="#06b6d4"
                  stopOpacity={0.03}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="rgba(15,23,42,0.05)"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: 'rgba(15,23,42,0.55)',
                fontSize: 12,
                fontWeight: 600,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(226,232,240,0.9)',
                borderRadius: '20px',
                color: '#0f172a',
                backdropFilter: 'blur(18px)',
                boxShadow:
                  '0 10px 35px rgba(37,99,235,0.08)',
              }}
              labelStyle={{
                color: '#64748b',
                fontWeight: 600,
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={4}
              fill="url(#premiumRevenue)"
              dot={{
                r: 4,
                fill: '#2563eb',
                stroke: '#fff',
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: '#06b6d4',
                stroke: '#fff',
                strokeWidth: 3,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  )

}