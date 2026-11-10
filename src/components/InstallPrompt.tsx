'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Download, Share, PlusSquare, X, CalendarCheck, ShoppingBag, Zap } from 'lucide-react'

type InstallEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const KEY = 'xs-install-dismissed'
const SNOOZE_DAYS = 7
const DELAY_MS = 5000

function isStandalone() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true
}

function recentlyDismissed() {
  try {
    const t = Number(localStorage.getItem(KEY) || 0)
    return t > 0 && Date.now() - t < SNOOZE_DAYS * 86400000
  } catch {
    return false
  }
}

export default function InstallPrompt() {
  const path = usePathname() || ''
  const [event, setEvent] = useState<InstallEvent | null>(null)
  const [ios, setIos] = useState(false)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)
  const [installed, setInstalled] = useState(false)

  const blocked = path.startsWith('/admin') || path.startsWith('/login')

  // Capture the browser's install event (Chrome, Edge, Android, desktop) and detect iPhone/iPad
  useEffect(() => {
    if (isStandalone()) return
    const ua = navigator.userAgent
    setIos(/iphone|ipad|ipod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1))

    const onPrompt = (e: Event) => {
      e.preventDefault()
      setEvent(e as InstallEvent)
    }
    const onInstalled = () => {
      setInstalled(true)
      setVisible(false)
      setEvent(null)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    const t = setTimeout(() => setReady(true), DELAY_MS)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
      clearTimeout(t)
    }
  }, [])

  // Decide whether to show it
  useEffect(() => {
    if (!ready || installed || blocked || visible) return
    if (isStandalone() || recentlyDismissed()) return
    if (event || ios) setVisible(true)
  }, [ready, event, ios, installed, blocked, visible])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(KEY, String(Date.now()))
    } catch {}
  }

  const install = async () => {
    if (!event) return
    setVisible(false)
    try {
      await event.prompt()
      const { outcome } = await event.userChoice
      if (outcome === 'dismissed') localStorage.setItem(KEY, String(Date.now()))
    } catch {}
    setEvent(null)
  }

  if (!visible || blocked) return null

  return (
    <div className="fixed inset-0 z-[3000] flex items-end justify-center bg-slate-900/50 backdrop-blur-sm sm:items-center sm:p-6" onClick={dismiss}>
      <style>{`@keyframes xsUp{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Install the Express Laundry app"
        className="relative w-full max-w-md overflow-hidden rounded-t-[28px] bg-white sm:rounded-[28px]"
        style={{ boxShadow: '0 30px 90px rgba(15,23,42,0.35)', animation: 'xsUp 320ms cubic-bezier(0.2,0.8,0.2,1)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="relative px-6 pb-5 pt-6 text-white" style={{ background: 'linear-gradient(135deg,#1d4ed8 0%,#2563eb 55%,#0ea5e9 100%)' }}>
          <span aria-hidden className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <span aria-hidden className="absolute -bottom-12 right-10 h-28 w-28 rounded-full bg-white/10" />
          <button onClick={dismiss} aria-label="Close" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition hover:bg-white/25">
            <X size={18} />
          </button>
          <div className="relative flex items-center gap-4">
            <img src="/icons/icon-192.png" alt="" width={64} height={64} className="h-16 w-16 rounded-[18px] object-cover" style={{ boxShadow: '0 10px 24px rgba(0,0,0,0.25)', border: '2px solid rgba(255,255,255,0.5)' }} />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-100">Free app</p>
              <h2 className="text-[22px] font-black leading-tight tracking-[-0.02em]">Install Express Laundry</h2>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-5">
          <ul className="space-y-3">
            {[
              { I: CalendarCheck, t: 'Book a pickup in seconds', c: '#2563eb', bg: '#eff6ff' },
              { I: ShoppingBag, t: 'Browse and order our products', c: '#0891b2', bg: '#ecfeff' },
              { I: Zap, t: 'Opens fast from your home screen', c: '#d97706', bg: '#fffbeb' },
            ].map(({ I, t, c, bg }) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl" style={{ background: bg }}>
                  <I size={18} style={{ color: c }} />
                </span>
                <span className="text-[14px] font-semibold text-slate-700">{t}</span>
              </li>
            ))}
          </ul>

          {event ? (
            <button
              onClick={install}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-[20px] py-4 text-[15px] font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8 60%,#172554)', boxShadow: '0 14px 34px rgba(37,99,235,0.35)' }}
            >
              <Download size={18} /> Install app
            </button>
          ) : (
            <div className="mt-5 rounded-2xl bg-[#f8fafc] p-4" style={{ border: '1px solid rgba(226,232,240,0.9)' }}>
              <p className="text-[13px] font-bold text-slate-800">To install on your iPhone or iPad:</p>
              <ol className="mt-2 space-y-2 text-[13px] text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#eff6ff] text-[11px] font-black text-[#2563eb]">1</span>
                  Tap the <Share size={15} className="mx-0.5 inline text-[#2563eb]" /> Share button in Safari
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#eff6ff] text-[11px] font-black text-[#2563eb]">2</span>
                  Choose <PlusSquare size={15} className="mx-0.5 inline text-[#2563eb]" /> <b>Add to Home Screen</b>
                </li>
              </ol>
            </div>
          )}

          <button onClick={dismiss} className="mt-3 w-full py-2.5 text-[13px] font-semibold text-slate-400 hover:text-slate-600">
            Not now
          </button>
        </div>
      </div>
    </div>
  )
}
