import Link from 'next/link'
import { Shirt, ShoppingBag, MessageCircle, MapPin, ArrowRight } from 'lucide-react'
import AppHeader from '../../components/app/AppHeader'

export const metadata = { title: 'Express Laundry', robots: { index: false } }

const tiles = [
  { href: '/app/services', label: 'Services', sub: 'Wash, dry clean, iron', Icon: Shirt },
  { href: '/app/shop', label: 'Shop', sub: 'Cleaning products', Icon: ShoppingBag },
  { href: 'https://wa.me/254722389764', label: 'Chat with us', sub: 'WhatsApp', Icon: MessageCircle, ext: true },
  { href: '/app/more', label: 'Find us', sub: 'Thika, Ngoingwa', Icon: MapPin },
]

export default function AppHome() {
  return (
    <>
      <AppHeader />
      <div className="space-y-4 px-4 py-5">
        <div>
          <p className="text-sm text-slate-500">Welcome</p>
          <h1 className="text-2xl font-extrabold text-[#0b2c6e]">What can we clean today?</h1>
        </div>

        <Link href="/app/book" className="block rounded-3xl bg-gradient-to-br from-[#0b2c6e] to-[#123d8f] p-5 text-white shadow-lg">
          <p className="text-lg font-bold">Book a pickup</p>
          <p className="mt-1 text-sm text-blue-100">Schedule collection in seconds</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-4 py-2 text-sm font-bold text-[#0b2c6e]">
            Book now <ArrowRight size={16} />
          </span>
        </Link>

        <div className="grid grid-cols-2 gap-3">
          {tiles.map(({ href, label, sub, Icon, ext }) => (
            <Link
              key={label}
              href={href}
              {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="flex flex-col gap-2 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0efff] text-[#0b2c6e]">
                <Icon size={20} />
              </span>
              <span className="text-[15px] font-bold text-[#0b2c6e]">{label}</span>
              <span className="-mt-1.5 text-xs text-slate-500">{sub}</span>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl border border-blue-100 bg-white p-4 text-sm text-slate-600">
          <p className="font-bold text-[#0b2c6e]">Open today</p>
          <p>Mon – Sat: 7AM – 8PM</p>
        </div>
      </div>
    </>
  )
}
