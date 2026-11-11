'use client'

import { useEffect, useState } from 'react'
import { RefreshCw } from 'lucide-react'

const CHECK_EVERY_MS = 30 * 60 * 1000

export default function PWARegister() {
  const [updateReady, setUpdateReady] = useState(false)

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    if (process.env.NODE_ENV !== 'production') return

    // True when a service worker already controlled this page, i.e. this is not the very first install.
    const hadController = !!navigator.serviceWorker.controller
    const isApp =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as any).standalone === true ||
      window.location.pathname.startsWith('/app')

    // When a newer version of the app takes over, tell the person so they can refresh into it.
    const onControllerChange = () => {
      if (hadController && isApp) setUpdateReady(true)
    }
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange)

    let timer: ReturnType<typeof setInterval> | undefined
    let onVisible: (() => void) | undefined

    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        // Look for a new version whenever the app is opened or brought back, and every 30 minutes.
        onVisible = () => {
          if (document.visibilityState === 'visible') reg.update().catch(() => {})
        }
        document.addEventListener('visibilitychange', onVisible)
        timer = setInterval(() => reg.update().catch(() => {}), CHECK_EVERY_MS)
        reg.update().catch(() => {})
      })
      .catch(() => {})

    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange)
      if (onVisible) document.removeEventListener('visibilitychange', onVisible)
      if (timer) clearInterval(timer)
    }
  }, [])

  if (!updateReady) return null

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-[3500] flex justify-center px-3"
      style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)' }}
    >
      <div
        className="flex w-full max-w-[440px] items-center gap-3 rounded-[20px] border border-blue-100 bg-white p-3.5"
        style={{ boxShadow: '0 18px 50px rgba(15,23,42,0.22)' }}
      >
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-[#eff6ff] text-[#2563eb]">
          <RefreshCw size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-extrabold leading-tight text-slate-900">New version ready</p>
          <p className="text-[12px] text-slate-500">Tap update to get the latest changes.</p>
        </div>
        <button
          type="button"
          onClick={() => setUpdateReady(false)}
          className="flex-none px-1 text-[12px] font-bold text-slate-400"
        >
          Later
        </button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="flex-none rounded-xl px-4 py-2.5 text-[13px] font-bold text-white"
          style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 14px rgba(37,99,235,0.28)' }}
        >
          Update
        </button>
      </div>
    </div>
  )
}
