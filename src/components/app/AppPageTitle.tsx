export default function AppPageTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="px-4 pt-5">
      <h1 className="text-[26px] font-black leading-tight tracking-[-0.03em] text-slate-900">{title}</h1>
      {sub && <p className="mt-1 text-sm text-slate-500">{sub}</p>}
    </div>
  )
}
