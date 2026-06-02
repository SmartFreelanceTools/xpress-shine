'use client'

import {
  LayoutDashboard,
  CalendarCheck2,
  ShoppingBag,
  BarChart3,
  Settings,
  Sparkles,
  ChevronRight,
  LogOut,
} from 'lucide-react'

import { supabase } from '@/lib/supabase'
import { useRouter, usePathname } from 'next/navigation'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  async function logout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <aside
      className="
        relative
        hidden md:flex
        w-[300px]
        flex-col
        overflow-hidden
        border-r border-white/40
        bg-[#f8faff]
        text-slate-800
      "
    >

      {/* ===== PREMIUM LIGHT BACKGROUND ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

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

        {/* CENTER LIGHT */}
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

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex flex-col h-full p-6">

        {/* ===== LOGO ===== */}
        <div className="flex items-center gap-4">

          <div className="relative">
            <div className="absolute -inset-2 rounded-[22px] bg-blue-500/20 blur-2xl" />

            <div className="
              relative
              w-14 h-14
              rounded-[20px]
              border border-white/40
              bg-white/70
              backdrop-blur-xl
              flex items-center justify-center
            ">
              <span className="
                text-2xl font-black
                bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-500
                bg-clip-text text-transparent
              ">
                X
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-black text-slate-900 tracking-tight">
              Xpress Admin
            </h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600">
              Premium Dashboard
            </p>
          </div>

        </div>

        {/* ===== STATUS CARD ===== */}
        <div className="
          mt-8
          rounded-2xl
          border border-white/50
          bg-white/70
          p-4
          backdrop-blur-xl
        ">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
              <Sparkles size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Admin Access
              </p>
              <p className="text-xs text-slate-500">
                Secure system active
              </p>
            </div>

          </div>

        </div>

        {/* ===== NAVIGATION ===== */}
<nav className="mt-10 flex flex-col gap-6">

  {/* MAIN */}
  <div>

    <p className="px-2 mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
      Main
    </p>

    <div className="space-y-3">

      <Item
        label="Dashboard"
        icon={<LayoutDashboard size={18} />}
        active={pathname === '/admin'}
        onClick={() => router.push('/admin')}
      />

      <Item
        label="Bookings"
        icon={<CalendarCheck2 size={18} />}
        active={pathname === '/admin/bookings'}
        onClick={() => router.push('/admin/bookings')}
      />

      <Item
        label="Analytics"
        icon={<BarChart3 size={18} />}
        active={pathname === '/admin/analytics'}
        onClick={() => router.push('/admin/analytics')}
      />

    </div>

  </div>

  {/* UPLOAD CENTER */}
  <div>

    <div className="flex items-center justify-between px-2 mb-3">

      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
        Upload Center
      </p>

      <div className="px-2 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[9px] font-bold uppercase tracking-wider">
        Studio
      </div>

    </div>

    <div className="space-y-3">

      <Item
        label="Product Uploads"
        icon={<ShoppingBag size={18} />}
        active={pathname === '/admin/products'}
        onClick={() => router.push('/admin/products')}
      />

      <Item
        label="Gallery Uploads"
        icon={<Sparkles size={18} />}
        active={pathname === '/admin/gallery'}
        onClick={() => router.push('/admin/gallery')}
      />

    </div>

  </div>

  {/* SYSTEM */}
  <div>

    <p className="px-2 mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
      System
    </p>

    <div className="space-y-3">

      <Item
        label="Settings"
        icon={<Settings size={18} />}
        active={pathname === '/admin/settings'}
        onClick={() => router.push('/admin/settings')}
      />

    </div>

  </div>

</nav>

        {/* ===== LOGOUT ===== */}
        <div className="mt-6">

          <button
            onClick={logout}
            className="
              w-full
              flex items-center justify-between
              px-4 py-4
              rounded-2xl
              border border-red-200
              bg-red-50
              hover:bg-red-100
              text-red-600
              font-semibold
              transition-all
            "
          >
            <div className="flex items-center gap-3">
              <LogOut size={18} />
              Logout
            </div>

            <ChevronRight size={16} />
          </button>

        </div>

        {/* ===== BOTTOM PANEL ===== */}
        <div className="mt-auto">

          <div className="
            relative overflow-hidden
            rounded-[28px]
            border border-white/50
            bg-gradient-to-br from-blue-50 via-cyan-50 to-white
            p-5
          ">

            <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-blue-200/40 blur-3xl" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600">
              System Status
            </p>

            <h3 className="text-lg font-black text-slate-900 mt-2">
              Everything running smoothly
            </h3>

            <p className="text-sm text-slate-600 mt-2">
              Dashboard is secure, optimized and live.
            </p>

            <button className="
              mt-5
              flex items-center gap-2
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              px-4 py-3
              text-sm font-semibold text-white
              transition-all
            ">
              Open Panel
              <ChevronRight size={16} />
            </button>

          </div>

        </div>

      </div>
    </aside>
  )
}

/* ===== NAV ITEM ===== */
function Item({
  label,
  icon,
  active = false,
  onClick,
}: any) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        group
        flex items-center justify-between
        rounded-[22px]
        px-4 py-[14px]
        cursor-pointer
        border
        transition-all
        duration-300
        ${
          active
            ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 shadow-[0_10px_30px_rgba(37,99,235,0.08)]'
            : 'bg-white/60 border-white/40 hover:bg-white/90 hover:shadow-[0_10px_25px_rgba(15,23,42,0.05)]'
        }
      `}
    >

      <div className="flex items-center gap-3">

        <div
          className={`
            w-11 h-11
            rounded-2xl
            flex items-center justify-center
            transition-all
            ${
              active
                ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg'
                : 'bg-white text-slate-600 group-hover:text-slate-900 border border-slate-100'
            }
          `}
        >
          {icon}
        </div>

        <span
          className={`
            text-sm font-semibold transition
            ${
              active
                ? 'text-slate-900'
                : 'text-slate-600 group-hover:text-slate-900'
            }
          `}
        >
          {label}
        </span>

      </div>

      <ChevronRight
        size={16}
        className={`
          transition
          ${
            active
              ? 'text-blue-500'
              : 'text-slate-300 group-hover:text-slate-500'
          }
        `}
      />

    </button>
  )
}