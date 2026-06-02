'use client'

import {
  Plus,
  Package,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function QuickActions() {

  const actions = [
    {
      title: 'New Booking',
      icon: Plus,
      glow: 'rgba(37,99,235,0.18)',
      gradient: 'from-blue-500 to-blue-700',
      iconBg: 'from-blue-50 to-blue-100',
      iconColor: '#2563eb',
    },

    {
      title: 'Products',
      icon: Package,
      glow: 'rgba(6,182,212,0.18)',
      gradient: 'from-cyan-500 to-cyan-600',
      iconBg: 'from-cyan-50 to-cyan-100',
      iconColor: '#0891b2',
    },

    {
      title: 'Customers',
      icon: Users,
      glow: 'rgba(34,197,94,0.18)',
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'from-green-50 to-green-100',
      iconColor: '#16a34a',
    },

    {
      title: 'Analytics',
      icon: BarChart3,
      glow: 'rgba(168,85,247,0.18)',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'from-purple-50 to-pink-100',
      iconColor: '#a855f7',
    },
  ]

  return (

    <div
      className="
        relative overflow-hidden
        rounded-[38px]
        p-7
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
          className="absolute top-12 right-[10%] w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

      </div>

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between mb-10">

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

            <span className="text-[11px] uppercase tracking-[0.22em] font-black text-blue-700">
              Quick Access
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black text-slate-800 tracking-tight">
            Quick Actions
          </h2>

          {/* SUBTEXT */}
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            Manage your laundry business faster
          </p>

        </div>

      </div>

      {/* ACTIONS GRID */}
      <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((action, i) => {

          const Icon = action.icon

          return (

            <button
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                p-6
                text-left
                transition-all duration-500
                hover:-translate-y-3
              "
              style={{
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(255,255,255,0.9)',
                backdropFilter: 'blur(18px)',
                boxShadow:
                  '0 12px 40px rgba(37,99,235,0.08)',
              }}
            >

              {/* HOVER GLOW */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                style={{
                  background: `radial-gradient(circle at top right, ${action.glow} 0%, transparent 70%)`,
                }}
              />

              {/* FLOATING LIGHT */}
              <div
                className="
                  absolute -top-12 -right-12
                  w-40 h-40 rounded-full
                  blur-3xl opacity-30
                "
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)',
                }}
              />

              {/* NUMBER */}
              <div className="absolute top-4 right-5 text-6xl font-black text-slate-100">
                0{i + 1}
              </div>

              {/* ICON */}
              <div
                className={`
                  relative z-10
                  w-16 h-16 rounded-[24px]
                  flex items-center justify-center
                  bg-gradient-to-br ${action.iconBg}
                  mb-6
                  transition-transform duration-500
                  group-hover:scale-110 group-hover:rotate-3
                `}
                style={{
                  boxShadow:
                    '0 10px 30px rgba(37,99,235,0.08)',
                }}
              >

                <Icon
                  size={28}
                  style={{
                    color: action.iconColor,
                  }}
                />

              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-2xl font-black text-slate-800 mb-3 tracking-tight">
                {action.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-sm text-slate-500 leading-relaxed">
                Open and manage {action.title.toLowerCase()} quickly from your dashboard.
              </p>

              {/* BUTTON */}
              <div
                className={`
                  relative z-10
                  mt-7
                  inline-flex items-center gap-2
                  px-5 py-3 rounded-2xl
                  bg-gradient-to-r ${action.gradient}
                  text-white text-sm font-black
                  shadow-lg
                  transition-all duration-300
                  group-hover:translate-x-1
                `}
                style={{
                  boxShadow:
                    '0 10px 25px rgba(37,99,235,0.18)',
                }}
              >

                Open

                <ArrowRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />

              </div>

            </button>

          )

        })}

      </div>

    </div>

  )

}