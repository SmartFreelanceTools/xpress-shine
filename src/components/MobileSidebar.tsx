'use client'

import { useEffect, useState, useRef } from 'react'
import { Menu, X, ArrowRight, Home, Wrench, Package, Lightbulb, Star, Image, Mail } from 'lucide-react'
import { Calendar } from 'lucide-react'

const links = [
  { label: 'Home',         id: 'home',         Icon: Home },
  { label: 'Services',     id: 'services',     Icon: Wrench },
  { label: 'Products',     id: 'products',     Icon: Package },
  { label: 'How It Works', id: 'how-it-works', Icon: Lightbulb },
  { label: 'Testimonials', id: 'testimonials', Icon: Star },
  { label: 'Gallery',      id: 'gallery',      Icon: Image },
  { label: 'Contact',      id: 'contact',      Icon: Mail },
]

export default function MobileSidebar() {
  const [open, setOpen]           = useState(false)
  const [active, setActive]       = useState<string | null>(null)
  const [visible, setVisible]     = useState(false)   // controls DOM presence for overlay/sidebar
  const [animating, setAnimating] = useState(false)   // drives CSS transition classes
  const closeTimer                = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* ─── open: mount then trigger enter animation ─── */
  const openSidebar = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setVisible(true)
    // One RAF ensures the element is in the DOM before adding transition class
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimating(true))
    })
    setOpen(true)
  }

  /* ─── close: remove animation class, unmount after transition ─── */
  const closeSidebar = () => {
    setAnimating(false)
    setOpen(false)
    closeTimer.current = setTimeout(() => setVisible(false), 340)
  }

  const scrollTo = (id: string) => {
    setActive(id)
    closeSidebar()
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 320)
  }

  /* ─── body scroll lock ─── */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  /* ─── keyboard escape ─── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) closeSidebar() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  

  return (
    <>
      {/* ═══════════════════════════════════════════════
          TOP BAR — fixed, mobile only
      ═══════════════════════════════════════════════ */}
      <div
        className="fixed top-0 left-0 right-0 z-[1000] sm:hidden"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div
          className="flex items-center justify-between px-5"
          style={{
            height: '68px',
            /* PREMIUM FROSTED GLASS TOP BAR */
            background: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            borderBottom: '1px solid rgba(255,255,255,0.75)',
            boxShadow:
              '0 1px 0 rgba(191,219,254,0.5), 0 8px 32px rgba(37,99,235,0.07), 0 2px 8px rgba(15,23,42,0.06)',
          }}
        >
          {/* ── Inner top highlight line ── */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.95) 60%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* ───────── PREMIUM BRAND ───────── */}
<div className="flex items-center gap-3 select-none group">

  {/* PREMIUM LOGO */}
  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-[14px] bg-blue-400/20 blur-xl opacity-70" />

    {/* Logo Box */}
    <div
      className="
        relative w-[42px] h-[42px]
        rounded-[14px]
        bg-gradient-to-br
        from-[#2563eb]
        via-[#1d4ed8]
        to-[#38bdf8]
        flex items-center justify-center
        shadow-[0_10px_25px_rgba(37,99,235,0.35)]
        border border-white/20
      "
    >

      {/* Shine */}
      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-tr from-white/0 via-white/20 to-white/0" />

      <span
        className="
          relative z-10
          text-white
          text-[18px]
          font-black
          tracking-[-0.08em]
          drop-shadow-sm
        "
      >
        X
      </span>
    </div>
  </div>

  {/* BRAND TEXT */}
<div className="flex flex-col leading-none">

  <div className="flex items-center gap-1">

    <span className="text-slate-900 text-[14px] font-black tracking-[-0.04em]">
      EXPRESS
    </span>

    <span className="text-[#2563eb] text-[14px] font-black tracking-[-0.04em]">
      DRYCLEANERS
    </span>

  </div>

  <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-slate-400 font-semibold">
    & LAUNDROMAT
  </span>

</div>

</div>

          {/* Hamburger — premium glass pill button */}
          <button
            onClick={openSidebar}
            aria-label="Open navigation"
            className="relative flex items-center justify-center transition-all active:scale-95"
            style={{
              width: 44,
              height: 44,
              borderRadius: 13,
              background: 'rgba(255,255,255,0.92)',
              border: '1px solid rgba(219,234,254,0.9)',
              boxShadow:
                '0 2px 12px rgba(37,99,235,0.10), 0 1px 3px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,1)',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {/* Subtle blue tint inner glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 12,
                background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 65%)',
                pointerEvents: 'none',
              }}
            />
            <Menu size={25} strokeWidth={2.2} style={{ color: '#1e40af', position: 'relative' }} />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          PORTAL — overlay + sidebar (mounted together)
      ═══════════════════════════════════════════════ */}
      {visible && (
        <div className="sm:hidden">

          {/* ── Overlay — elegant deep blur ── */}
          <div
            onClick={closeSidebar}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1001,
              /* PREMIUM DARK OVERLAY */
              background: 'rgba(2,6,23,0.50)',
              backdropFilter: 'blur(10px) saturate(120%)',
              WebkitBackdropFilter: 'blur(10px) saturate(120%)',
              transition: 'opacity 320ms cubic-bezier(0.4,0,0.2,1)',
              opacity: animating ? 1 : 0,
            }}
          />

          {/* ── Sidebar panel — ULTRA PREMIUM ── */}
          <div
          className="overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: 'auto',
minHeight: '100svh',
              width: '82%',
              maxWidth: '340px',
              zIndex: 1002,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',

              /* ULTRA PREMIUM FROSTED GLASS BACKGROUND */
              background:
                'linear-gradient(160deg, rgba(255,255,255,0.94) 0%, rgba(248,250,255,0.90) 50%, rgba(239,246,255,0.88) 100%)',

              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',

              /* PREMIUM BORDER — crisp white right edge */
              borderRight: '1px solid rgba(255,255,255,0.80)',

              /* LAYERED LUXURY SHADOWS */
              boxShadow:
                '0 30px 80px rgba(37,99,235,0.13), 0 8px 30px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.95)',

              transition:
                'transform 320ms cubic-bezier(0.32,0.72,0,1), opacity 320ms ease',

              transform: animating ? 'translateX(0)' : 'translateX(-100%)',
              opacity: animating ? 1 : 0,
              overflow: 'hidden',
            }}
          >
            {/* ── Fine noise texture overlay ── */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
                pointerEvents: 'none',
                opacity: 0.5,
              }}
            />

            {/* ── Ambient blue glow — top left ── */}
            <div
              style={{
                position: 'absolute',
                top: -80,
                left: -60,
                width: 260,
                height: 260,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.14) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* ── Ambient cyan glow — bottom right ── */}
            <div
              style={{
                position: 'absolute',
                bottom: -60,
                right: -40,
                width: 220,
                height: 240,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(56,189,248,0.10) 0%, rgba(37,99,235,0.05) 40%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* ── Subtle white inner highlight — top edge ── */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(255,255,255,0.0) 100%)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />

            {/* ───────── PREMIUM SIDEBAR HEADER ───────── */}
<div
  className="
    relative z-[1]
    flex items-center justify-between
    px-5 py-4
    border-b border-blue-100/50
    bg-white/30
    backdrop-blur-2xl
  "
  style={{
    paddingTop: 'calc(env(safe-area-inset-top, 0px) + 16px)',
  }}
>

  {/* ───────── BRAND ───────── */}
  <div className="flex items-center gap-3 group select-none">

    {/* LOGO */}
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 rounded-[16px] bg-blue-400/20 blur-xl opacity-80" />

      {/* Box */}
      <div
        className="
          relative
          w-[46px] h-[46px]
          rounded-[16px]
          bg-gradient-to-br
          from-[#2563eb]
          via-[#1d4ed8]
          to-[#38bdf8]
          flex items-center justify-center
          border border-white/20
          shadow-[0_12px_30px_rgba(37,99,235,0.35)]
        "
      >

        {/* Shine */}
        <div className="absolute inset-0 rounded-[16px] bg-gradient-to-tr from-white/0 via-white/20 to-white/0" />

        <span
          className="
            relative z-10
            text-white
            text-[20px]
            font-black
            tracking-[-0.08em]
            drop-shadow-sm
          "
        >
          X
        </span>
      </div>
    </div>

    {/* TEXT */}
    <div className="flex flex-col leading-none">

      {/* MAIN NAME */}
      <div className="flex items-center gap-1">

        <span
          className="
            text-slate-900
            text-[17px]
            font-black
            tracking-[-0.05em]
          "
        >
          EXPRESS
        </span>

        <span
  className="
    text-[#2563eb]
    text-[15px]
    font-bold
    tracking-[-0.05em]
  "
>
  DRYCLEANERS
</span>

      </div>

      {/* SUBTITLE */}
      <span
  className="
    mt-1
    text-[9px]
    uppercase
    tracking-[0.32em]
    text-slate-400
    font-semibold
  "
>
  & LAUNDROMAT
</span>

    </div>
  </div>

  {/* ───────── CLOSE BUTTON ───────── */}
  <button
    onClick={closeSidebar}
    aria-label="Close navigation"
    className="
      relative
      flex items-center justify-center
      w-[42px] h-[42px]
      rounded-[14px]
      border border-blue-100
      bg-white/80
      backdrop-blur-xl
      shadow-[0_8px_20px_rgba(15,23,42,0.06)]
      transition-all duration-300
      active:scale-95
    "
    style={{
      WebkitTapHighlightColor: 'transparent',
    }}
  >

    {/* Glow */}
    <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-blue-50 to-cyan-50 opacity-60" />

    <X
      size={22}
      strokeWidth={2.5}
      className="relative z-10 text-slate-600"
    />
  </button>
</div>

            {/* ── Luxury header divider ── */}
            <div
              style={{
                height: 1,
                background:
                  'linear-gradient(to right, transparent 0%, rgba(147,197,253,0.5) 30%, rgba(191,219,254,0.7) 50%, rgba(147,197,253,0.5) 70%, transparent 100%)',
                margin: '0 0',
              }}
            />

            {/* ─── NAV LINKS ─── */}
            <nav
  style={{
    padding: '10px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    position: 'relative',
    zIndex: 1,
  }}
>
            
              {links.map(({ label, id, Icon }, i) => {
                const isActive = active === id
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 13,
                      padding: '11px 13px',
                      borderRadius: 16,

                      /* PREMIUM FLOATING PILL — active vs default */
                      border: isActive
                        ? '1px solid rgba(59,130,246,0.25)'
                        : '1px solid rgba(226,232,240,0.60)',

                      background: isActive
                        ? 'linear-gradient(135deg, rgba(239,246,255,0.95) 0%, rgba(219,234,254,0.85) 100%)'
                        : 'rgba(255,255,255,0.72)',

                      boxShadow: isActive
                        ? '0 8px 24px rgba(37,99,235,0.13), 0 2px 8px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)'
                        : '0 1px 4px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.03), inset 0 1px 0 rgba(255,255,255,0.8)',

                      cursor: 'pointer',
                      transition: 'all 220ms cubic-bezier(0.4,0,0.2,1)',
                      textAlign: 'left',
                      animationDelay: `${i * 40}ms`,
                      WebkitTapHighlightColor: 'transparent',
                    }}
                    /* Hover via className for glass tint */
                    className="group"
                    onMouseEnter={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(239,246,255,0.90)'
                        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(147,197,253,0.60)'
                        ;(e.currentTarget as HTMLElement).style.boxShadow =
                          '0 4px 16px rgba(37,99,235,0.09), 0 1px 4px rgba(15,23,42,0.05), inset 0 1px 0 rgba(255,255,255,0.9)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.72)'
                        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(226,232,240,0.60)'
                        ;(e.currentTarget as HTMLElement).style.boxShadow =
                          '0 1px 4px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.03), inset 0 1px 0 rgba(255,255,255,0.8)'
                      }
                    }}
                  >
                    {/* ── Icon pill — premium glass or blue gradient ── */}
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 220ms cubic-bezier(0.4,0,0.2,1)',

                        background: isActive
                          ? 'linear-gradient(145deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)'
                          : 'rgba(255,255,255,0.95)',

                        border: isActive
                          ? '1px solid rgba(37,99,235,0.18)'
                          : '1px solid rgba(219,234,254,0.70)',

                        boxShadow: isActive
                          ? '0 8px 22px rgba(37,99,235,0.32), 0 2px 6px rgba(37,99,235,0.18), inset 0 1px 0 rgba(255,255,255,0.22)'
                          : '0 2px 8px rgba(37,99,235,0.07), 0 1px 3px rgba(15,23,42,0.04), inset 0 1px 0 rgba(255,255,255,1)',
                      }}
                    >
                      <Icon
                        size={15}
                        strokeWidth={isActive ? 2.3 : 1.9}
                        style={{
                          color: isActive ? '#ffffff' : '#3b82f6',
                          filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))' : 'none',
                          transition: 'all 220ms ease',
                        }}
                      />
                    </div>

                    {/* ── Label ── */}
                    <span
                      style={{
                        /* PREMIUM TEXT VISIBILITY */
                        color: isActive ? '#1e40af' : '#0f172a',
                        fontWeight: isActive ? 700 : 600,
                        fontSize: 14,
                        letterSpacing: isActive ? '0.01em' : '0.005em',
                        lineHeight: 1,
                        transition: 'color 220ms ease, font-weight 220ms ease',
                        flex: 1,
                      }}
                    >
                      {label}
                    </span>

                    {/* ── Active indicator arrow ── */}
                    {isActive && (
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: 7,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(37,99,235,0.10)',
                          border: '1px solid rgba(37,99,235,0.15)',
                          flexShrink: 0,
                        }}
                      >
                        <ArrowRight
                          size={11}
                          strokeWidth={2.5}
                          style={{ color: '#3b82f6' }}
                        />
                      </div>
                    )}
                  </button>
                )
              })}
            </nav>

            {/* ─── LUXURY DIVIDER ─── */}
            <div
              style={{
                margin: '0 14px',
                height: 1,
                background:
                  'linear-gradient(to right, transparent 0%, rgba(147,197,253,0.45) 30%, rgba(191,219,254,0.65) 50%, rgba(147,197,253,0.45) 70%, transparent 100%)',
                position: 'relative',
                zIndex: 1,
              }}
            />

            {/* ─── CTA FOOTER ─── */}
<div
  style={{
    padding: '8px 14px 10px',
    position: 'relative',
    zIndex: 1,
    background:
      'linear-gradient(0deg, rgba(239,246,255,0.30) 0%, transparent 100%)',
  }}
>
  <button
    onClick={() => {
      closeSidebar()

      setTimeout(() => {
        const bookButton = document.getElementById('open-booking')

        if (bookButton) {
          bookButton.click()
        }
      }, 250)
    }}
    className="
      w-full
      flex
      items-center
      justify-center
      gap-2.5
      rounded-2xl
      text-sm
      font-bold
      text-white
      transition-all
      duration-200
      active:scale-[0.98]
    "
    style={{
      height: 44,
      background:
        'linear-gradient(135deg,#2563eb,#1d4ed8)',
      boxShadow:
        '0 6px 20px rgba(37,99,235,0.22)',
      WebkitTapHighlightColor: 'transparent',
    }}
  >
    <Calendar size={16} />

    <span>Book Pickup</span>

    <ArrowRight size={15} />
  </button>

  <p
    style={{
      textAlign: 'center',
      color: '#94a3b8',
      fontSize: 10,
      marginTop: 8,
      fontWeight: 500,
      letterSpacing: '0.03em',
    }}
  >
    Fast response · No commitment
  </p>
</div>
          </div>
        </div>
      )}
    </>
  )
}