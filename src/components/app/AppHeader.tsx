export default function AppHeader({ title }: { title?: string }) {
  return (
    <header
      className="sticky top-0 z-30 flex items-center gap-3 border-b-2 border-sky-400 bg-white px-4 py-3"
      style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)' }}
    >
      <img src="/logo-icon.png" alt="Express logo" width={38} height={38} className="h-[38px] w-[38px] rounded-full" />
      <div className="leading-tight">
        <p className="text-[15px] font-extrabold text-[#0b2c6e]">{title || 'EXPRESS LAUNDRY'}</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-500">Thika · Ngoingwa</p>
      </div>
    </header>
  )
}
