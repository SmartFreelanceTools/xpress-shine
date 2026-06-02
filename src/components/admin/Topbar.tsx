'use client'

import { Search, Bell, Sparkles } from 'lucide-react'

export default function Topbar() {
  return (
    <div
      className="relative overflow-hidden border-b border-slate-200/60"
      style={{
        background: '#f8faff',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >

      {/* LUXURY BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN GLOW 1 */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -300,
            left: -180,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.75) 0%,transparent 70%)',
            filter: 'blur(65px)',
          }}
        />

        {/* MAIN GLOW 2 */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: -120,
            right: -120,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.55) 0%,transparent 70%)',
            filter: 'blur(55px)',
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

        {/* FLOATING GLASS BUBBLES */}

        <div
          className="absolute top-10 left-[12%] w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

        <div
          className="absolute top-[30%] right-[10%] w-10 h-10 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

        <div
          className="absolute bottom-4 left-[45%] w-12 h-12 rounded-full opacity-10 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-6 py-5">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 flex-wrap">

          {/* SEARCH */}
          <div className="relative">

            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search bookings..."
              className="
                w-full md:w-[340px]
                bg-white/75
                border border-white/80
                rounded-2xl
                pl-11 pr-4 py-3.5
                text-sm text-slate-700
                placeholder:text-slate-400
                outline-none
                backdrop-blur-xl
                transition-all duration-300
                shadow-[0_8px_30px_rgba(37,99,235,0.06)]
                focus:border-blue-300
                focus:bg-white
                focus:shadow-[0_10px_35px_rgba(37,99,235,0.14)]
              "
            />
          </div>

          {/* PREMIUM BADGE */}
          <div
            className="
              hidden lg:flex
              items-center gap-2
              px-4 py-2.5
              rounded-2xl
              backdrop-blur-xl
            "
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.9),rgba(186,230,253,0.65))',
              border: '1px solid rgba(147,197,253,0.45)',
              boxShadow: '0 8px 30px rgba(37,99,235,0.08)',
            }}
          >
            <Sparkles size={14} className="text-blue-600" />

            <span className="text-xs font-bold tracking-[0.15em] uppercase text-blue-700">
              Premium Admin Panel
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* NOTIFICATION */}
          <button
            className="
              relative
              w-12 h-12
              rounded-2xl
              flex items-center justify-center
              transition-all duration-300
              hover:-translate-y-1
            "
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(255,255,255,0.9)',
              backdropFilter: 'blur(18px)',
              boxShadow: '0 8px 25px rgba(37,99,235,0.08)',
            }}
          >
            <Bell size={18} className="text-slate-700" />

            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          </button>

          {/* ADMIN CARD */}
          <div
            className="
              flex items-center gap-3
              px-3 py-2
              rounded-2xl
            "
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(255,255,255,0.9)',
              backdropFilter: 'blur(18px)',
              boxShadow: '0 10px 35px rgba(37,99,235,0.08)',
            }}
          >

            {/* AVATAR */}
            <div className="relative">

              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-blue-500/30
                  blur-md
                "
              />

              <div
                className="
                  relative
                  w-11 h-11
                  rounded-full
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  flex items-center justify-center
                  text-sm font-bold text-white
                  shadow-[0_10px_25px_rgba(37,99,235,0.28)]
                "
              >
                A
              </div>

              {/* ONLINE DOT */}
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
            </div>

            {/* TEXT */}
            <div className="leading-tight">

              <p className="text-sm font-bold text-slate-800">
                Admin
              </p>

              <p className="text-xs text-slate-500">
                Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}