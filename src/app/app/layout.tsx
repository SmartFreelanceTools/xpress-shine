import AppTabBar from '../../components/app/AppTabBar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center text-slate-900"
      style={{
        background: 'linear-gradient(135deg,#dbeafe 0%,#e0f2fe 50%,#eef2ff 100%)',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* On phones this fills the screen. On laptops it becomes a centred, phone-width app.
          This containment makes the tab bar and product bar position inside this column. */}
      <div
        className="relative h-full w-full max-w-[480px] overflow-hidden md:h-[calc(100%-32px)] md:rounded-[32px] md:shadow-[0_30px_90px_rgba(37,99,235,0.25)] md:ring-1 md:ring-blue-200/70"
        style={{
          contain: 'layout',
          background: 'linear-gradient(180deg,#f8faff 0%,#eef4ff 100%)',
        }}
      >
        <div
          className="h-full overflow-y-auto overscroll-contain"
          style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}
        >
          {children}
        </div>
        <AppTabBar />
      </div>
    </div>
  )
}
