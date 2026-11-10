'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Download, Share, PlusSquare, X } from 'lucide-react'

type BIPEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const KEY = 'xs-install-dismissed'
const SNOOZE_DAYS = 7
const HIDE_ON = ['/app', '/admin', '/login']

export default function InstallPrompt() {
  const path = usePathname() || '/'
  const [deferred, setDeferred] = useState<BIPEvent | null>(null)
  const [ios, setIos] = useState(false)
  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)

  const hidden = HIDE_ON.some((p) => path === p || path.startsWith(p + '/'))

  useEffect(() => {
    try {
      const standalone =
        window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true
      if (standalone) return

      const last = Number(localStorage.getItem(KEY) || 0)
      if (last && Date.now() - last < SNOOZE_DAYS * 86400000) return
    } catch {
      /* storage blocked: still show */
    }

    const ua = navigator.userAgent
    const isIos = /iphone|ipad|ipod/i.test(ua) && !/crios|fxios/i.test(ua)
    setIos(isIos)

    const onBip = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BIPEvent)
      setReady(true)
    }
    const onInstalled = () => {
      setVisible(false)
      setDeferred(null)
    }

    window.addEventListener('beforeinstallprompt', onBip)
    window.addEventListener('appinstalled', onInstalled)
    if (isIos) setReady(true)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBip)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  // Show a few seconds after the page opens, once an install is possible
  useEffect(() => {
    if (!ready || hidden) return
    const t = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(t)
  }, [ready, hidden])

  const snooze = () => {
    setVisible(false)
    try {
      localStorage.setItem(KEY, String(Date.now()))
    } catch {}
  }

  const install = async () => {
    if (!deferred) return
    setVisible(false)
    try {
      await deferred.prompt()
      const { outcome } = await deferred.userChoice
      if (outcome === 'dismissed') localStorage.setItem(KEY, String(Date.now()))
    } catch {}
    setDeferred(null)
  }

  if (!visible || hidden) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[3000] flex justify-center px-3"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)' }}
      role="dialog"
      aria-label="Install the Express Laundry app"
    >
      <div
        className="relative w-full max-w-[440px] rounded-[26px] bg-white p-4"
        style={{
          border: '1px solid rgba(191,219,254,0.8)',
          boxShadow: '0 20px 60px rgba(15,23,42,0.28), 0 4px 16px rgba(37,99,235,0.15)',
          animation: 'xsSlideUp .35s ease-out',
        }}
      >
        <button
          onClick={snooze}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 pr-8">
          <img
            src="/icons/icon-192.png"
            alt=""
            width={52}
            height={52}
            className="h-[52px] w-[52px] flex-none rounded-full object-cover"
            style={{ filter: 'drop-shadow(0 6px 10px rgba(37,99,235,0.30))' }}
          />
          <div>
            <p className="text-[16px] font-black leading-tight tracking-[-0.02em] text-slate-900">Install Express Laundry</p>
            <p className="mt-0.5 text-[12.5px] leading-snug text-slate-500">
              Book pickups and shop faster, right from your home screen.
            </p>
          </div>
        </div>

        {ios && !deferred ? (
          <div className="mt-3 rounded-2xl border border-blue-100 bg-[#eff6ff] p-3 text-[13px] text-slate-700">
            <p className="flex items-center gap-2">
              <Share size={16} className="flex-none text-[#2563eb]" /> Tap <b>Share</b> in Safari
            </p>
            <p className="mt-1.5 flex items-center gap-2">
              <PlusSquare size={16} className="flex-none text-[#2563eb]" /> Then choose <b>Add to Home Screen</b>
            </p>
            <button onClick={snooze} className="mt-3 w-full rounded-xl bg-white py-2.5 text-[13px] font-bold text-[#1d4ed8] ring-1 ring-blue-100">
              Got it
            </button>
          </div>
        ) : (
          <div className="mt-3 flex gap-2.5">
            <button onClick={snooze} className="h-12 flex-1 rounded-2xl border border-slate-200 bg-white text-[14px] font-bold text-slate-600">
              Not now
            </button>
            <button
              onClick={install}
              className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-2xl text-[14px] font-extrabold text-white"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #172554 100%)',
                boxShadow: '0 10px 24px rgba(37,99,235,0.32)',
              }}
            >
              <Download size={17} /> Install app
            </button>
          </div>
        )}
      </div>

      <style>{`@keyframes xsSlideUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
    </div>
  )
}
