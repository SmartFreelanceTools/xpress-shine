'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  Activity,
  Sparkles,
  Radio,
  BellRing,
} from 'lucide-react'

export default function ActivityFeed() {

  const [activities, setActivities] = useState<string[]>([])

  useEffect(() => {

    const channel =
      supabase
        .channel('live-bookings')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'bookings',
          },
          (payload) => {

            const customer = payload.new.customer_name

            setActivities((prev) => ([
              `🆕 New booking from ${customer}`,
              ...prev
            ]))

          }
        )
        .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }

  }, [])

  return (

    <div
      className="
        relative overflow-hidden
        rounded-[38px]
        border border-white/10
        bg-[#f8faff]
        backdrop-blur-2xl
        p-7
      "
      style={{
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        boxShadow: '0 12px 45px rgba(37,99,235,0.08)',
      }}
    >

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN BLUE GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: -260,
            right: -200,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.75) 0%,transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* CYAN GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            bottom: -180,
            left: -140,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.55) 0%,transparent 70%)',
            filter: 'blur(65px)',
          }}
        />

        {/* SOFT CENTER LIGHT */}
        <div
          className="absolute rounded-full"
          style={{
            width: 320,
            height: 320,
            top: '40%',
            left: '30%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.35) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* GRID TEXTURE */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />

        {/* FLOATING BUBBLE */}
        <div
          className="absolute top-10 right-10 w-14 h-14 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

      </div>

      {/* HEADER */}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-8">

        <div>

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              mb-5
            "
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.9),rgba(186,230,253,0.65))',
              border: '1px solid rgba(147,197,253,0.45)',
              boxShadow: '0 8px 25px rgba(37,99,235,0.08)',
            }}
          >
            <Sparkles size={14} className="text-blue-600" />

            <span className="
              text-[11px]
              font-black
              uppercase
              tracking-[0.22em]
              text-blue-700
            ">
              Realtime Monitor
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-800">
            Live Activity
          </h2>

          <p className="text-slate-500 mt-2 text-sm">
            Track bookings and customer activity in realtime.
          </p>

        </div>

        {/* LIVE BADGE */}
        <div
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-2xl
            bg-emerald-50
            border border-emerald-100
          "
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

          <span className="text-xs font-black text-emerald-600">
            LIVE
          </span>
        </div>

      </div>

      {/* ACTIVITY LIST */}
      <div className="relative z-10 space-y-4">

        {activities.length === 0 ? (

          <div
            className="
              relative overflow-hidden
              rounded-[30px]
              border border-dashed border-slate-200
              bg-white/60
              p-10 text-center
            "
          >

            <div
              className="
                w-20 h-20 mx-auto mb-5
                rounded-[28px]
                flex items-center justify-center
              "
              style={{
                background:
                  'linear-gradient(135deg,#dbeafe,#ecfeff)',
              }}
            >
              <Activity size={34} className="text-blue-600" />
            </div>

            <h3 className="text-xl font-black text-slate-800 mb-2">
              No Activity Yet
            </h3>

            <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
              Waiting for realtime booking updates from customers.
            </p>

          </div>

        ) : (

          activities.map((item, i) => (

            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/70
                backdrop-blur-xl
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)]
              "
            >

              {/* HOVER GLOW */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                style={{
                  background:
                    'radial-gradient(circle at top right, rgba(37,99,235,0.12) 0%, transparent 70%)',
                }}
              />

              <div className="relative flex items-start gap-4">

                <div
                  className="
                    w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    shrink-0
                  "
                  style={{
                    background:
                      'linear-gradient(135deg,#dbeafe,#ecfeff)',
                  }}
                >
                  <BellRing size={24} className="text-blue-600" />
                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-2 mb-2">

                    <Radio size={14} className="text-emerald-500" />

                    <span className="
                      text-[11px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-emerald-600
                    ">
                      Realtime Event
                    </span>

                  </div>

                  <p className="text-slate-700 font-semibold leading-relaxed break-words">
                    {item}
                  </p>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  )
}