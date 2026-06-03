'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Lock, Sparkles } from 'lucide-react'

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function login(e: any) {
    e.preventDefault()

    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    router.push('/admin')
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f8faff] p-6">

      {/* ===== PREMIUM PRODUCTS-STYLE BACKGROUND ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* TOP LEFT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -250,
            left: -120,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.7) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* TOP RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: 80,
            right: -100,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.45) 0%,transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* BOTTOM GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 450,
            height: 450,
            bottom: -120,
            left: '30%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.35) 0%,transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        {/* FLOATING BUBBLES */}
        <div className="absolute top-20 left-[8%] w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            border: '1px solid rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
          }}
        />

        <div className="absolute top-[35%] right-[10%] w-10 h-10 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            border: '1px solid rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
          }}
        />

        <div className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full opacity-10 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            border: '1px solid rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
          }}
        />

      </div>

      {/* ===== LOGIN CARD ===== */}
      <div className="
        relative
        w-full
        max-w-md
        rounded-[42px]
        border
        border-white/30
        bg-white/70
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(37,99,235,0.15)]
        p-10
        text-slate-900
      ">

        {/* HEADER */}
        <div className="text-center mb-8">

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-blue-50
            border
            border-blue-100
            text-blue-600
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            mb-6
          ">
            <Sparkles size={14} />
            Express Admin
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Welcome Back
          </h1>

          <p className="text-slate-500 mt-3 text-sm">
            Secure admin dashboard access
          </p>

        </div>

        {/* FORM */}
        <form onSubmit={login} className="space-y-5">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              bg-white
              border
              border-slate-200
              outline-none
              text-slate-900
              placeholder-slate-400
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
              transition
            "
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              bg-white
              border
              border-slate-200
              outline-none
              text-slate-900
              placeholder-slate-400
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
              transition
            "
          />

          {/* ERROR */}
          {error && (
            <div className="
              bg-red-50
              border
              border-red-100
              text-red-600
              p-3
              rounded-2xl
              text-sm
            ">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              p-4
              rounded-2xl
              font-bold
              text-white
              transition-all
              hover:scale-[1.02]
              disabled:opacity-60
            "
            style={{
              background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
              boxShadow: '0 10px 30px rgba(37,99,235,0.25)',
            }}
          >

            <Lock size={18} />

            {loading ? 'Signing in...' : 'Login'}

          </button>

        </form>

        {/* FOOTER */}
        <button className="mt-6 text-sm text-slate-400 hover:text-slate-600 w-full transition">
          Forgot password?
        </button>

      </div>

    </div>
  )
}