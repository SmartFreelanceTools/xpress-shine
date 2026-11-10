import AppTabBar from '../../components/app/AppTabBar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-[2000] overflow-y-auto text-slate-900"
      style={{
        background: 'linear-gradient(180deg,#f8faff 0%,#eef4ff 100%)',
        paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {children}
      <AppTabBar />
    </div>
  )
}
