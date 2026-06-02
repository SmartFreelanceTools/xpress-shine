'use client'

import PageHeader from "../../../components/admin/PageHeader"

import {
  Bell,
  ShieldCheck,
  Palette,
  Smartphone,
  Store,
  Database,
  User2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <PageHeader
        title="Settings"
        subtitle="Manage system preferences and admin configuration"
      />

      {/* MAIN CONTAINER */}
      <section
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border border-white/40
          bg-white/70
          backdrop-blur-2xl
          p-6 md:p-8
          shadow-[0_20px_60px_rgba(37,99,235,0.08)]
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="absolute w-[500px] h-[500px] top-0 right-0 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 space-y-8">

          {/* TOP STATUS */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <div className="flex items-center gap-2 mb-3">

                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg">
                  <Sparkles size={18} />
                </div>

                <span className="text-xs uppercase tracking-[0.3em] text-blue-600 font-bold">
                  XPRESS SYSTEM
                </span>

              </div>

              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Control Center
              </h2>

              <p className="text-slate-500 mt-2">
                Configure and manage your premium laundry platform.
              </p>

            </div>

            {/* LIVE STATUS */}
            <div
              className="
                flex items-center gap-3
                px-5 py-4
                rounded-2xl
                bg-white/80
                border border-white/70
                backdrop-blur-xl
                shadow-lg
              "
            >

              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

              <div>
                <p className="text-sm font-bold text-slate-800">
                  System Online
                </p>

                <p className="text-xs text-slate-500">
                  All services operational
                </p>
              </div>

            </div>

          </div>

          {/* SETTINGS GRID */}
          <div className="grid lg:grid-cols-2 gap-6">

            <SettingCard
              icon={<User2 size={18} />}
              title="Admin Profile"
              description="Manage owner account and administrator details"
            />

            <SettingCard
              icon={<Bell size={18} />}
              title="Notifications"
              description="Booking alerts, WhatsApp notifications, and updates"
            />

            <SettingCard
              icon={<ShieldCheck size={18} />}
              title="Security"
              description="Password protection and admin authentication"
            />

            <SettingCard
              icon={<Palette size={18} />}
              title="Dashboard Theme"
              description="Customize appearance, layout, and visuals"
            />

            <SettingCard
              icon={<Smartphone size={18} />}
              title="WhatsApp Integration"
              description="Manage connected booking and support number"
            />

            <SettingCard
              icon={<Store size={18} />}
              title="Business Settings"
              description="Store details, service hours, and operational setup"
            />

            <SettingCard
              icon={<Database size={18} />}
              title="Database & Backup"
              description="Manage products, bookings, and backups"
            />

            <SettingCard
              icon={<CheckCircle2 size={18} />}
              title="System Health"
              description="Monitor uptime and platform performance"
            />

          </div>

        </div>

      </section>

    </div>
  )
}

/* CARD */
function SettingCard({
  icon,
  title,
  description,
}: any) {

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-white/60
        bg-white/75
        backdrop-blur-xl
        p-5
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]
      "
    >

      {/* HOVER GLOW */}
      <div
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        style={{
          background:
            'radial-gradient(circle at top right, rgba(59,130,246,0.10), transparent 70%)',
        }}
      />

      <div className="relative z-10 flex items-start gap-4">

        {/* ICON */}
        <div
          className="
            w-14 h-14 rounded-2xl
            bg-gradient-to-br from-blue-500 to-cyan-400
            text-white
            flex items-center justify-center
            shadow-lg
            group-hover:scale-105
            transition-transform duration-500
          "
        >
          {icon}
        </div>

        {/* TEXT */}
        <div>

          <h3 className="text-lg font-bold text-slate-900">
            {title}
          </h3>

          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            {description}
          </p>

        </div>

      </div>

    </div>
  )
}