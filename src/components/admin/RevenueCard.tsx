'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

import {
  Wallet,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

export default function RevenueCard() {

  const [revenue, setRevenue] = useState(0)

  useEffect(() => {

    loadRevenue()

  }, [])


  async function loadRevenue() {

    const { data } = await supabase
      .from('bookings')
      .select('amount')

    const total =
      (data || [])
        .reduce((sum, b) =>
          sum + Number(b.amount || 0), 0)

    setRevenue(total)

  }


  return (

    <div
      className="
        relative overflow-hidden
        rounded-[38px]
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
            width: 500,
            height: 500,
            top: -120,
            right: -120,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.55) 0%,transparent 70%)',
            filter: 'blur(60px)',
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
          className="absolute top-10 right-[10%] w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between">

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

              <Sparkles
                size={14}
                className="text-blue-600"
              />

              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-700 font-bold">
                Revenue Analytics
              </span>

            </div>

            {/* LABEL */}
            <p className="text-slate-500 text-sm font-semibold">
              Total Revenue
            </p>

          </div>

          {/* ICON */}
          <div
            className="
              w-16 h-16 rounded-[24px]
              bg-gradient-to-br
              from-blue-600 to-cyan-500
              flex items-center justify-center
            "
            style={{
              boxShadow:
                '0 12px 30px rgba(37,99,235,0.22)',
            }}
          >

            <Wallet
              size={26}
              className="text-white"
            />

          </div>

        </div>

        {/* VALUE */}
        <h1
          className="
            text-5xl md:text-6xl
            font-black
            mt-8
            tracking-tight
            text-slate-800
          "
        >

          KES {revenue.toLocaleString()}

        </h1>

        {/* BOTTOM */}
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">

          {/* GROWTH */}
          <div
            className="
              inline-flex items-center gap-3
              rounded-[24px]
              px-4 py-3
            "
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(255,255,255,0.9)',
              backdropFilter: 'blur(18px)',
              boxShadow:
                '0 10px 35px rgba(37,99,235,0.06)',
            }}
          >

            <div
              className="
                w-10 h-10 rounded-2xl
                bg-gradient-to-br
                from-emerald-500 to-green-500
                flex items-center justify-center
              "
            >
              <TrendingUp
                size={16}
                className="text-white"
              />
            </div>

            <div>

              <p className="text-sm font-black text-emerald-600">
                +12% this month
              </p>

              <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                Compared to last month
              </p>

            </div>

          </div>

          {/* STATUS */}
          <div className="hidden md:block text-right">

            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-bold">
              Updated Live
            </p>

            <div className="flex items-center justify-end gap-2 mt-2">

              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-sm text-slate-500 font-medium">
                System Active
              </span>

            </div>

          </div>

        </div>

        {/* PREMIUM PROGRESS LINE */}
        <div className="relative mt-8 h-[7px] w-full overflow-hidden rounded-full bg-slate-200/70">

          <div
            className="
              h-full w-[72%]
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-blue-600
            "
          />

          {/* SHINE */}
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

  )

}