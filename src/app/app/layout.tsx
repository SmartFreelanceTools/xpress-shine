import AppTabBar from '../../components/app/AppTabBar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-[2000] overflow-y-auto bg-[#f6f9ff] text-[#0b2c6e]"
      style={{ paddingBottom: 'calc(72px + env(safe-area-inset-bottom, 0px))', WebkitTapHighlightColor: 'transparent' }}
    >
      {children}
      <AppTabBar />
    </div>
  )
}
