'use client'

import { ReactNode } from 'react'

export default function AdminBackground({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#f8faff] text-slate-800"
      style={{
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >
      {/* ===== PREMIUM BACKGROUND SYSTEM ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* BLUE GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -250,
            left: -180,
            background:
              'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* CYAN GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            bottom: -220,
            right: -220,
            background:
              'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* CENTER SOFT LIGHT */}
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            top: '35%',
            left: '25%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* GRID TEXTURE */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}