import { Phone, MessageCircle, MapPin, Globe, Clock } from 'lucide-react'
import AppHeader from '../../../components/app/AppHeader'
import AppPageTitle from '../../../components/app/AppPageTitle'

export const metadata = { title: 'More | Express Laundry', robots: { index: false } }

const rows = [
  { Icon: Phone, label: 'Call us', sub: '+254 722 389 764', href: 'tel:+254722389764' },
  { Icon: MessageCircle, label: 'WhatsApp', sub: 'Chat with us', href: 'https://wa.me/254722389764', ext: true },
  { Icon: MapPin, label: 'Find us', sub: 'Thika, Ngoingwa', href: 'https://maps.google.com/?q=Express+Dry+Cleaners+Thika+Ngoingwa', ext: true },
  { Icon: Globe, label: 'Full website', sub: 'Gallery, reviews and more', href: '/' },
]

export default function AppMore() {
  return (
    <>
      <AppHeader />
      <AppPageTitle title="More" sub="Contact, location and our full website" />
      <div className="space-y-3 px-4 py-5">
        {rows.map(({ Icon, label, sub, href, ext }) => (
          <a
            key={label}
            href={href}
            {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="flex items-center gap-3 rounded-[20px] border border-blue-100/70 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-[#eff6ff] text-[#2563eb]"><Icon size={20} /></span>
            <span>
              <span className="block font-extrabold text-slate-900">{label}</span>
              <span className="block text-xs text-slate-500">{sub}</span>
            </span>
          </a>
        ))}
        <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 text-sm text-slate-600">
          <Clock size={20} className="text-[#2563eb]" /> Mon – Sat: 7AM – 8:30PM
        </div>
      </div>
    </>
  )
}
