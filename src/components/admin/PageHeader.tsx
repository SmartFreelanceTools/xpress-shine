'use client'

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-black text-slate-900">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-slate-500 text-sm md:text-base">
          {subtitle}
        </p>
      )}

      <div className="mt-5 w-40 h-[2px] bg-gradient-to-r from-blue-500 to-transparent" />
    </div>
  )
}