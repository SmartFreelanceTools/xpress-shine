'use client'

import { Search, Phone, User2 } from 'lucide-react'

export default function SearchBar() {
  return (
    <div
      className="relative w-full group overflow-hidden rounded-[32px]"
      style={{
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >

      {/* LUXURY BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: -220,
            left: -140,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.7) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 360,
            height: 360,
            top: -100,
            right: -100,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.55) 0%,transparent 70%)',
            filter: 'blur(55px)',
          }}
        />

        {/* BOTTOM GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            bottom: -160,
            left: '35%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.45) 0%,transparent 70%)',
            filter: 'blur(45px)',
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
          className="absolute top-6 right-[15%] w-14 h-14 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

      </div>

      {/* OUTER GLOW */}
      <div
        className="
          absolute -inset-[1px]
          rounded-[32px]
          opacity-0
          group-focus-within:opacity-100
          transition-opacity duration-500
        "
        style={{
          background:
            'linear-gradient(135deg, rgba(59,130,246,0.28), rgba(6,182,212,0.18), rgba(255,255,255,0.08))',
          filter: 'blur(12px)',
        }}
      />

      {/* MAIN WRAPPER */}
      <div
        className="
          relative
          z-10
          flex items-center gap-4
          overflow-hidden
          rounded-[32px]
          px-5 py-5
          transition-all duration-300
        "
        style={{
          background: 'rgba(255,255,255,0.72)',
          border: '1px solid rgba(255,255,255,0.9)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 12px 40px rgba(37,99,235,0.08)',
        }}
      >

        {/* SEARCH ICON */}
        <div
          className="
            flex items-center justify-center
            w-12 h-12 rounded-2xl
            bg-gradient-to-br from-blue-600 to-cyan-500
            text-white
            transition-transform duration-500
            group-focus-within:scale-110
          "
          style={{
            boxShadow: '0 10px 30px rgba(37,99,235,0.22)',
          }}
        >
          <Search size={18} />
        </div>

        {/* INPUT AREA */}
        <div className="flex-1">

          <input
            type="text"
            placeholder="Search names, phone numbers, services..."
            className="
              w-full
              bg-transparent
              text-slate-800
              placeholder:text-slate-400
              outline-none
              text-sm
              font-semibold
            "
          />

          {/* HELPER TEXT */}
          <div className="flex flex-wrap items-center gap-4 mt-2.5">

            <div className="flex items-center gap-1.5 text-slate-400">
              <User2 size={12} />

              <span className="text-[11px] font-medium">
                Customer Names
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <Phone size={12} />

              <span className="text-[11px] font-medium">
                Phone Numbers
              </span>
            </div>

          </div>

        </div>

        {/* LIVE STATUS */}
        <div className="hidden sm:flex items-center gap-2">

          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-bold">
            Live Search
          </span>

        </div>

      </div>

      {/* FLOATING ORB */}
      <div
        className="
          absolute -top-12 -right-12
          w-36 h-36 rounded-full
          blur-3xl opacity-20
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)',
        }}
      />

    </div>
  )
}