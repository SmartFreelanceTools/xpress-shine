'use client'

import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase'

import {
  Sparkles,
  X,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Phone,
  User2,
  CalendarDays,
  Loader2,
  BadgeCheck,
} from 'lucide-react'

export default function EditBookingModal({
  booking,
  onClose,
  onUpdated,
  onLocalUpdate,
}: {
  booking: any
  onClose: () => void
  onUpdated: () => void
  onLocalUpdate: (id: string, status: string) => void
}) {
  const [status, setStatus] = useState(
    booking?.status || 'Pending'
  )

  const [notes, setNotes] = useState(
    booking?.notes || ''
  )

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  /* LIVE UPDATE WHEN BOOKING CHANGES */
  useEffect(() => {
    setStatus(booking?.status || 'Pending')
    setNotes(booking?.notes || '')
  }, [booking])

  /* STATUS STYLES */
  const statusStyles = useMemo(() => {
    switch (status) {
      case 'Completed':
        return {
          badge:
            'bg-emerald-100 text-emerald-700 border-emerald-200',
          glow:
            'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)',
        }

      case 'In Progress':
        return {
          badge:
            'bg-amber-100 text-amber-700 border-amber-200',
          glow:
            'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)',
        }

      default:
        return {
          badge:
            'bg-blue-100 text-blue-700 border-blue-200',
          glow:
            'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
        }
    }
  }, [status])

  async function deleteBooking() {
  if (!confirm('Delete this booking permanently?')) return

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', booking.id)

  if (error) {
    alert(error.message)
    return
  }

  onUpdated()
  onClose()
}

async function saveChanges() {
  try {
    setLoading(true)

    const { error } = await supabase
      .from('bookings')
      .update({
        status,
        notes,
      })
      .eq('id', booking.id)

    if (error) throw error

    // 🔥 instant UI update (no refresh needed)
onLocalUpdate(booking.id, status)

    setSuccess(true)

    await onUpdated() // 🔥 refresh parent table
    setTimeout(() => {
  window.dispatchEvent(new Event('booking-updated'))
}, 100)

    setTimeout(() => {
      onClose()
    }, 600)

  } catch (err: any) {
    alert(err.message)
  } finally {
    setLoading(false)
  }
}

  return (
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        p-4
      "
    >
      {/* DARK OVERLAY */}
      <div
        onClick={onClose}
        className="
          absolute inset-0
          bg-black/55
          backdrop-blur-md
        "
      />

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* BLUE GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -250,
            left: -180,
            background:
              'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* CYAN GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            bottom: -220,
            right: -220,
            background:
              'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* STATUS GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: '30%',
            left: '35%',
            background: statusStyles.glow,
            filter: 'blur(80px)',
          }}
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(15,23,42,0.10) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* MODAL */}
      <div
  className="
    relative z-10
    w-[900px]
    max-w-[98%]
    max-h-[85vh]
    overflow-y-auto
    rounded-[32px]
    border border-white/40
    bg-white/75
    backdrop-blur-2xl
    shadow-[0_30px_120px_rgba(37,99,235,0.18)]
  "

        style={{
          fontFamily:
            "'DM Sans','Plus Jakarta Sans',sans-serif",
        }}
      >
        {/* TOP SHINE */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-cyan-100/20" />
        </div>

        {/* HEADER */}
        <div
          className="
            relative z-10
            px-8 md:px-10
            pt-8
            pb-7
            border-b border-white/40
          "
        >
          <div className="flex items-start justify-between gap-4">

            {/* LEFT */}
            <div>

              {/* TAG */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-blue-100
                  bg-blue-50/80
                  px-4 py-2
                  mb-5
                "
              >
                <Sparkles
                  size={14}
                  className="text-blue-600"
                />

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    font-black
                    text-blue-700
                  "
                >
                  Premium Booking Manager
                </span>
              </div>

              <h2
                className="
                  text-[28px]
                  md:text-[34px]
                  leading-none
                  tracking-[-0.05em]
                  font-black
                  text-slate-900
                "
              >
                Edit Booking
              </h2>

              <p className="mt-3 text-slate-500 text-sm">
                Update booking progress, customer notes,
                and manage service workflow in real time.
              </p>

            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                w-12 h-12
                rounded-2xl
                border border-white/50
                bg-white/70
                flex items-center justify-center
                text-slate-500
                hover:text-blue-600
                hover:scale-105
                transition-all
              "
            >
              <X size={18} />
            </button>

          </div>
        </div>

        {/* BODY */}
        <div className="relative z-10 p-6 md:p-7">

          {/* CUSTOMER CARD */}
          <div
            className="
              relative overflow-hidden
              rounded-[30px]
              border border-white/40
              bg-white/60
              backdrop-blur-xl
              p-5
              mb-6
            "
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(37,99,235,0.12), transparent 70%)',
              }}
            />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              {/* LEFT */}
              <div className="space-y-4">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-500
                      to-cyan-400
                      text-white
                      flex items-center justify-center
                      shadow-[0_15px_35px_rgba(37,99,235,0.28)]
                    "
                  >
                    <User2 size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {booking.customer_name}
                    </h3>

                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                      <Phone size={14} />
                      {booking.phone || 'No phone'}
                    </div>
                  </div>

                </div>

                <div className="flex flex-wrap gap-3">

                  <div
                    className="
                      flex items-center gap-2
                      rounded-2xl
                      border border-white/40
                      bg-white/70
                      px-4 py-3
                    "
                  >
                    <CalendarDays
                      size={16}
                      className="text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {new Date(
                        booking.created_at
                      ).toLocaleDateString()}
                    </span>
                  </div>

                  <div
                    className="
                      flex items-center gap-2
                      rounded-2xl
                      border border-white/40
                      bg-white/70
                      px-4 py-3
                    "
                  >
                    <Clock3
                      size={16}
                      className="text-cyan-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {booking.service || 'Laundry Service'}
                    </span>
                  </div>

                </div>

              </div>

              {/* STATUS BADGE */}
              <div
                className={`
                  px-5 py-3
                  rounded-2xl
                  border
                  text-sm
                  font-black
                  uppercase
                  tracking-[0.18em]
                  ${statusStyles.badge}
                `}
              >
                {status}
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="grid lg:grid-cols-2 gap-4">

            {/* STATUS */}
            <div
              className="
                rounded-[30px]
                border border-white/40
                bg-white/60
                backdrop-blur-xl
                p-6
              "
            >
              <div className="flex items-center gap-2 mb-5">
                <ShieldCheck
                  size={18}
                  className="text-blue-600"
                />

                <h4 className="font-black text-slate-800">
                  Booking Status
                </h4>
              </div>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="
                  w-full
                  rounded-2xl
                  border border-slate-200
                  bg-white/80
                  px-5 py-4
                  outline-none
                  transition-all
                  focus:border-blue-400
                  focus:ring-4
                  focus:ring-blue-100
                "
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              {/* QUICK STATUS */}
              <div className="grid grid-cols-3 gap-3 mt-5">

                {[
                  'Pending',
                  'In Progress',
                  'Completed',
                ].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`
                      rounded-2xl
                      py-3
                      text-xs
                      font-bold
                      transition-all
                      border
                      ${
                        status === s
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                      }
                    `}
                  >
                    {s}
                  </button>
                ))}

              </div>
            </div>

            {/* NOTES */}
            <div
              className="
                rounded-[30px]
                border border-white/40
                bg-white/60
                backdrop-blur-xl
                p-6
              "
            >
              <div className="flex items-center gap-2 mb-5">
                <FileText
                  size={18}
                  className="text-cyan-600"
                />

                <h4 className="font-black text-slate-800">
                  Customer Notes
                </h4>
              </div>

              <textarea
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Write customer updates, delivery notes, garment conditions..."
                className="
                  w-full
                  h-[140px]
                  rounded-2xl
                  border border-slate-200
                  bg-white/80
                  p-5
                  text-slate-700
                  resize-none
                  outline-none
                  transition-all
                  focus:border-blue-400
                  focus:ring-4
                  focus:ring-blue-100
                "
              />
            </div>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 mt-8">

            <button
              onClick={onClose}
              className="
                px-7 py-4
                rounded-2xl
                bg-white/80
                border border-slate-200
                text-slate-600
                font-semibold
                hover:bg-slate-50
                transition-all
              "
            >
              Cancel
            </button>

            <button
  onClick={deleteBooking}
  className="
    px-7 py-4
    rounded-2xl
    bg-red-500
    text-white
    font-black
    hover:bg-red-600
    transition-all
  "
>
  Delete Booking
</button>

            <button
              onClick={saveChanges}
              disabled={loading || success}
              className="
                min-w-[220px]
                px-8 py-4
                rounded-2xl
                text-white
                font-black
                transition-all
                hover:scale-[1.02]
                disabled:opacity-70
              "
              style={{
                background:
                  success
                    ? 'linear-gradient(135deg,#10b981,#059669)'
                    : 'linear-gradient(135deg,#2563eb,#1d4ed8)',
                boxShadow:
                  success
                    ? '0 18px 45px rgba(16,185,129,0.25)'
                    : '0 18px 45px rgba(37,99,235,0.25)',
              }}
            >
              <div className="flex items-center justify-center gap-3">

                {loading ? (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                ) : success ? (
                  <BadgeCheck size={18} />
                ) : (
                  <CheckCircle2 size={18} />
                )}

                {loading
                  ? 'Saving Changes...'
                  : success
                  ? 'Booking Updated'
                  : 'Save Changes'}

              </div>
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}