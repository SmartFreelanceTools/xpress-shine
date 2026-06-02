'use client'

import BookingTable from './BookingTable'

import ActivityFeed from './ActivityFeed'

export default function DashboardGrid() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-10">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute w-[800px] h-[800px] -top-40 -left-40 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute w-[600px] h-[600px] top-40 -right-40 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute w-[500px] h-[500px] bottom-0 left-1/3 bg-indigo-500/10 blur-[120px] rounded-full" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-8">

        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-white/50 mt-2">
              Premium booking & customer management system
            </p>
          </div>

          <div className="flex gap-3">

            <div className="px-4 py-2 rounded-2xl bg-white/10 border border-white/10 text-white text-sm">
              Live System
            </div>

            <div className="px-4 py-2 rounded-2xl bg-green-500/10 border border-green-400/20 text-green-300 text-sm">
              Online
            </div>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            <BookingTable />
            
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <ActivityFeed />
          </div>

        </div>

      </div>

    </div>
  )
}
