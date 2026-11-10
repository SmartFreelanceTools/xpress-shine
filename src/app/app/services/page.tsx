import Link from 'next/link'
import AppHeader from '../../../components/app/AppHeader'

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
      <AppHeader title="Services" />
      <div className="space-y-3 px-4 py-5">
        {services.map(({ icon, name, desc }) => (
          <div key={name} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#e0efff] text-2xl">{icon}</span>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-[#0b2c6e]">{name}</p>
              <p className="text-xs text-slate-500">{desc}</p>
            </div>
            <Link href={`/app/book?service=${encodeURIComponent(name)}`} className="rounded-lg bg-[#0b2c6e] px-3 py-1.5 text-xs font-bold text-white">
              Book
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
