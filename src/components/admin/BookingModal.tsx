'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  Sparkles,
  X,
  CheckCircle2,
  ClipboardCheck,
} from 'lucide-react'

export default function EditBookingModal({
  booking,
  onClose,
  onUpdated,
  onLocalUpdate,
}: any) {

  const [status, setStatus] = useState(booking.status)
  const [notes, setNotes] = useState(booking.notes || '')
  const [loading, setLoading] = useState(false)

  async function updateBooking() {

    setLoading(true)

    await supabase
      .from('bookings')
      .update({
        status,
        notes
      })
      .eq('id', booking.id)

    setLoading(false)

    onUpdated()
    onClose()
  }

  return (

    <div className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-slate-950/60
      backdrop-blur-md
      p-4
      overflow-hidden
    ">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN BLUE GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 900,
            height: 900,
            top: -380,
            left: -260,
            background:
              'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 72%)',
            filter: 'blur(90px)',
          }}
        />

        {/* CYAN GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 650,
            height: 650,
            top: 80,
            right: -200,
            background:
              'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 72%)',
            filter: 'blur(80px)',
          }}
        />

        {/* SOFT BOTTOM GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            bottom: -180,
            left: '25%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 72%)',
            filter: 'blur(70px)',
          }}
        />

        {/* FLOATING ORB */}
        <div
          className="
            absolute top-16 right-[12%]
            w-20 h-20 rounded-full
            opacity-20 animate-pulse
          "
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.5))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

      </div>

      {/* MODAL */}
      <div
        className="
          relative z-10
          w-[560px] max-w-[95%]
          overflow-hidden
          rounded-[38px]
          border border-white/10
          bg-[#f8faff]
          backdrop-blur-2xl
          shadow-[0_25px_90px_rgba(37,99,235,0.18)]
        "
        style={{
          fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        }}
      >

        {/* HEADER */}
        <div className="
          relative px-8 pt-8 pb-7
          border-b border-white/10
        ">

          {/* HEADER GLOW */}
          <div
            className="
              absolute top-0 right-0
              w-60 h-60 opacity-40
            "
            style={{
              background:
                'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
              filter: 'blur(45px)',
            }}
          />

          <div className="relative flex items-start justify-between gap-4">

            <div>

              {/* BADGE */}
              <div
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-full
                  mb-5
                "
                style={{
                  background:
                    'linear-gradient(135deg,rgba(219,234,254,0.9),rgba(186,230,253,0.65))',
                  border: '1px solid rgba(147,197,253,0.45)',
                }}
              >
                <Sparkles size={14} className="text-blue-600" />

                <span className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-blue-700
                ">
                  Premium Booking Manager
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-800">
                Edit Booking
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Update booking status and customer notes.
              </p>

            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                w-12 h-12
                rounded-2xl
                bg-white/80
                border border-white/10
                flex items-center justify-center
                text-slate-500
                hover:text-slate-800
                hover:scale-105
                transition-all
              "
            >
              <X size={18} />
            </button>

          </div>

        </div>

        {/* BODY */}
        <div className="px-8 py-8 space-y-7">

          {/* STATUS */}
          <div>

            <label className="block text-sm font-bold text-slate-700 mb-3">
              Booking Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="
                w-full rounded-2xl
                border border-white/10
                bg-white/80
                px-5 py-4
                text-slate-700
                outline-none
                focus:border-blue-400
                focus:ring-4 focus:ring-blue-100
                transition-all
              "
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

          </div>

          {/* NOTES */}
          <div>

            <label className="block text-sm font-bold text-slate-700 mb-3">
              Customer Notes
            </label>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="
                w-full h-40
                rounded-3xl
                border border-white/10
                bg-white/80
                p-5
                text-slate-700
                outline-none
                resize-none
                focus:border-blue-400
                focus:ring-4 focus:ring-blue-100
                transition-all
                leading-relaxed
              "
              placeholder="Edit customer notes..."
            />

          </div>

          {/* ACTIONS */}
          <div className="flex justify-between items-center gap-4 pt-2">

            {/* INFO */}
            <div className="hidden sm:flex items-center gap-3 text-slate-400">
              <ClipboardCheck size={18} />
              <span className="text-sm">
                Changes update instantly in your system
              </span>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-4">

              <button
                onClick={onClose}
                className="
                  px-6 py-3.5
                  rounded-2xl
                  bg-white
                  border border-white/10
                  font-semibold
                  text-slate-600
                  hover:bg-slate-50
                  transition-all
                "
              >
                Cancel
              </button>

              <button
                onClick={updateBooking}
                disabled={loading}
                className="
                  group relative overflow-hidden
                  px-7 py-3.5
                  rounded-2xl
                  font-semibold text-white
                  hover:scale-[1.02]
                  disabled:opacity-70
                "
                style={{
                  background:
                    'linear-gradient(135deg,#2563eb,#1d4ed8)',
                  boxShadow: '0 12px 35px rgba(37,99,235,0.28)',
                }}
              >

                {/* SHINE */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                  style={{
                    background:
                      'linear-gradient(135deg,rgba(255,255,255,0.12),transparent)',
                  }}
                />

                <div className="relative flex items-center gap-2">

                  <CheckCircle2 size={18} />

                  {loading ? 'Saving...' : 'Save Changes'}

                </div>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}