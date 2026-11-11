import { Phone } from 'lucide-react'

export default function AppHeader() {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between bg-white px-4 pb-3"
      style={{
        paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)',
        boxShadow: '0 1px 0 rgba(219,234,254,0.9), 0 6px 24px rgba(37,99,235,0.06)',
      }}
    >
      <div className="flex select-none items-center gap-3">
        <div className="relative">
          <img
            src="/logo-icon.png"
            alt="Express Dry Cleaners logo"
            width={46}
            height={46}
            className="relative h-[46px] w-[46px] rounded-full object-cover shadow-[0_10px_25px_rgba(37,99,235,0.35)]"
          />
        </div>

        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className="text-[15px] font-black tracking-[-0.04em] text-slate-900">EXPRESS</span>
            <span className="text-[15px] font-black tracking-[-0.04em] text-[#2563eb]">DRYCLEANERS</span>
          </div>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-sky-500">
            & LAUNDROMAT
          </span>
        </div>
      </div>

      <a
        href="tel:+254722389764"
        aria-label="Call us"
        className="relative flex h-11 w-11 items-center justify-center rounded-[13px] border border-blue-100 bg-white active:scale-95"
        style={{ boxShadow: '0 2px 12px rgba(37,99,235,0.10), 0 1px 3px rgba(15,23,42,0.08)' }}
      >
        <Phone size={20} strokeWidth={2.2} className="text-[#1e40af]" />
      </a>
    </header>
  )
}
