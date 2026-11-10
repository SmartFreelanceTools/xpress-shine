'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Shirt, ShoppingBag, CalendarCheck, Menu } from 'lucide-react'

const tabs = [
  { href: '/app', label: 'Home', Icon: Home },
  { href: '/app/services', label: 'Services', Icon: Shirt },
  { href: '/app/shop', label: 'Shop', Icon: ShoppingBag },
  { href: '/app/book', label: 'Book', Icon: CalendarCheck },
  { href: '/app/more', label: 'More', Icon: Menu },
]

export default function AppTabBar() {
  const path = usePathname()
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[2100] flex justify-around bg-white/95 backdrop-blur"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        boxShadow: '0 -1px 0 rgba(219,234,254,0.9), 0 -8px 28px rgba(37,99,235,0.07)',
      }}
    >
      {tabs.map(({ href, label, Icon }) => {
        const active = href === '/app' ? path === '/app' : path.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-bold"
            style={{ color: active ? '#1e40af' : '#94a3b8' }}
          >
            <span
              className="flex h-7 w-12 items-center justify-center rounded-full transition-colors"
              style={{ background: active ? '#dbeafe' : 'transparent' }}
            >
              <Icon size={20} strokeWidth={active ? 2.4 : 2} />
            </span>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
