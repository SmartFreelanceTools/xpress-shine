import Link from 'next/link'
import AppHeader from '../../../components/app/AppHeader'
import AppPageTitle from '../../../components/app/AppPageTitle'

export const metadata = { title: 'Services | Express Laundry', robots: { index: false } }

type Service = { icon: string; name: string; desc: string }

const services: Service[] = [
  { icon: '🧺', name: 'Washing', desc: 'Careful washing with stain treatment and gentle cycles.' },
  { icon: '👔', name: 'Dry Cleaning', desc: 'Suits, delicate garments and premium wear.' },
  { icon: '♨️', name: 'Ironing', desc: 'Crisp, neat finishing ready to wear.' },
  { icon: '⚡', name: 'Express Laundry', desc: 'Same-day turnaround when you are in a hurry.' },
  { icon: '🛋️', name: 'Sofa Cleaning', desc: 'Deep cleaning for sofas and upholstery.' },
  { icon: '🛏️', name: 'Mattress Cleaning', desc: 'Fresh, sanitised mattresses.' },
  { icon: '🪟', name: 'Curtain Care', desc: 'Gentle cleaning for curtains.' },
  { icon: '🧶', name: 'Carpet Cleaning', desc: 'Deep cleaning for carpets and rugs.' },
]

export default function AppServices() {
  return (
    <>
      <AppHeader />
      <AppPageTitle title="Our Services" sub="Premium care for every fabric" />
      <div className="space-y-3 px-4 py-5">
        {services.map(({ icon, name, desc }) => (
          <div key={name} className="flex items-center gap-3 rounded-[20px] border border-blue-100/70 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-blue-100 bg-[#eff6ff] text-2xl">{icon}</span>
            <div className="min-w-0 flex-1">
              <p className="font-extrabold tracking-[-0.01em] text-slate-900">{name}</p>
              <p className="text-xs text-slate-500">{desc}</p>
            </div>
            <Link href={`/app/book?service=${encodeURIComponent(name)}`} className="rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] px-3.5 py-2 text-xs font-bold text-white shadow-[0_6px_16px_rgba(37,99,235,0.30)]">
              Book
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
