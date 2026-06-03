'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

import {
  Sparkles,
  RefreshCw,
  Eye,
  Phone,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ChevronRight,
  Search,
  Filter,
  Activity,
  Users,
  CircleDashed,
} from 'lucide-react'

import EditBookingModal from './EditBookingModal'

type Booking = {
  id: string
  customer_name: string
  phone?: string
  status?: string
  service?: string
  notes?: string
  created_at: string
}

export default function BookingTable() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [notification, setNotification] = useState<string | null>(null)

async function fetchBookings() {
  setLoading(true)

  const { data, error } = await supabase
    .from('bookings')
    .select('*')

  if (error) {
    console.log(error)
    setLoading(false)
    return
  }

  setBookings((data as Booking[]) || [])
  setLoading(false)
}



useEffect(() => {
  fetchBookings()

  supabase.removeAllChannels()

  const channel = supabase
    .channel(`bookings-realtime-${Date.now()}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'bookings',
      },
      (payload) => {
        const eventType = payload.eventType
        const row = payload.new as Booking

        if (eventType === 'INSERT') {
          setBookings(prev => [row, ...prev])

          setNotification(`New booking: ${row.customer_name}`)

          const audio = new Audio('/notify.mp3')
          audio.play().catch(() => {})
        }

        if (eventType === 'UPDATE') {
          setBookings(prev =>
            prev.map(b => (b.id === row.id ? row : b))
          )

          setNotification(`Updated: ${row.customer_name}`)
        }

        if (eventType === 'DELETE') {
          setBookings(prev =>
            prev.filter(b => b.id !== payload.old.id)
          )

          setNotification('Booking deleted')
        }

        setTimeout(() => setNotification(null), 3000)
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}, [])

useEffect(() => {
  if ('Notification' in window) {
    Notification.requestPermission()
  }
}, [])

  const filteredBookings = bookings.filter((b) => {
  const matchesSearch =
    b.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
    b.phone?.toLowerCase().includes(search.toLowerCase())

  const matchesStatus =
    statusFilter === 'All'
      ? true
      : (b.status || 'Pending') === statusFilter

  return matchesSearch && matchesStatus
})

const visibleBookings = showAll
  ? filteredBookings
  : filteredBookings.slice(0, 5)

  const updateLocalBooking = (id: string, status: string) => {
  setBookings(prev =>
    prev.map(b =>
      b.id === id ? { ...b, status } : b
    )
  )
}

const today: Booking[] = []
const yesterday: Booking[] = []
const older: Booking[] = []

const now = new Date()
const todayStr = now.toDateString()

const yesterdayDate = new Date()
yesterdayDate.setDate(now.getDate() - 1)
const yesterdayStr = yesterdayDate.toDateString()

visibleBookings.forEach((b) => {
  const bookingDate = new Date(b.created_at).toDateString()

  if (bookingDate === todayStr) {
    today.push(b)
  } else if (bookingDate === yesterdayStr) {
    yesterday.push(b)
  } else {
    older.push(b)
  }
})


const renderBookingCard = (b: Booking, index?: number) => (
  <div
    key={b.id}
    className="group relative overflow-hidden rounded-[34px] bg-white/70 backdrop-blur-xl border border-white/30 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(37,99,235,0.12)]"
  >
    <div className="relative flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
  
  {/* LEFT SIDE (CONTENT) */}
  <div className="flex-1 min-w-0 space-y-2">
    
    {/* NAME + STATUS */}
    <div className="flex items-center gap-3 flex-wrap">
      <h3 className="text-xl font-black text-slate-800">
        {b.customer_name}
      </h3>

      <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest
        ${
          b.status === 'Completed'
            ? 'bg-emerald-100 text-emerald-600'
            : b.status === 'In Progress'
            ? 'bg-orange-100 text-orange-600'
            : 'bg-yellow-100 text-yellow-700'
        }
      `}>
        {b.status || 'Pending'}
      </span>
    </div>

    {/* PHONE + DATE */}
    <div className="flex items-center gap-5 text-sm text-slate-500">
      <span className="flex items-center gap-2">📞 {b.phone || 'No phone'}</span>
      <span className="flex items-center gap-2">📅 {new Date(b.created_at).toLocaleDateString()}</span>
    </div>

    {/* SERVICE */}
    <div className="text-sm font-semibold text-slate-600">
      🧺 {b.service || 'Laundry Service'}
    </div>

    {/* NOTES (controlled height!) */}
    <div className="mt-3 p-4 rounded-2xl bg-white/60 border border-white/40">
      <p className="text-sm text-slate-600 leading-relaxed break-words line-clamp-3">
        {b.notes || 'No customer notes available.'}
      </p>
    </div>
  </div>

  {/* RIGHT SIDE (BUTTON ALWAYS FIXED) */}
  <div className="xl:w-[180px] flex xl:justify-end">
    <button
      onClick={() => setSelectedBooking(b)}
      className="px-6 py-3 rounded-2xl text-white font-semibold hover:scale-[1.03] transition-all whitespace-nowrap"
      style={{
        background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
        boxShadow: '0 10px 25px rgba(37,99,235,0.22)',
      }}
    >
      <div className="flex items-center gap-2">
        <CheckCircle2 size={18} />
        Manage Booking
        <ChevronRight size={18} />
      </div>
    </button>
  




        </div>
      

    </div>
  </div>
)

  return (
    <>

{notification && (
  <div className="fixed bottom-6 right-6 z-[9999] animate-bounce">
    <div className="bg-white border border-green-200 shadow-2xl px-5 py-3 rounded-2xl flex items-center gap-3">
      
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

      <div className="text-sm font-medium text-slate-800">
        {notification}
      </div>

    </div>
  </div>
)}
      {/* MAIN CARD */}
      <div
        className="relative overflow-hidden rounded-[42px] p-8"
        style={{
          background: '#f8faff',
          border: '1px solid rgba(255,255,255,0.9)',
          fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
          boxShadow: '0 20px 80px rgba(37,99,235,0.10)',
        }}
      >
        {/* LUXURY BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="absolute rounded-full"
            style={{
              width: 800,
              height: 800,
              top: -320,
              right: -220,
              background:
                'radial-gradient(circle, rgba(219,234,254,0.65) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div
            className="absolute rounded-full"
            style={{
              width: 520,
              height: 520,
              bottom: -200,
              left: -160,
              background:
                'radial-gradient(circle, rgba(186,230,253,0.45) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '42px 42px',
            }}
          />
        </div>

        {/* HEADER */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          {/* STATS */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">

  <div className="rounded-3xl bg-white/70 border border-white/40 px-5 py-4 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
        <Users size={18} className="text-blue-700" />
      </div>

      <div>
        <p className="text-xs text-slate-500">Total</p>
        <h3 className="text-xl font-black text-slate-800">
          {bookings.length}
        </h3>
      </div>
    </div>
  </div>

  <div className="rounded-3xl bg-white/70 border border-white/40 px-5 py-4 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
        <CheckCircle2 size={18} className="text-emerald-700" />
      </div>

      <div>
        <p className="text-xs text-slate-500">Completed</p>
        <h3 className="text-xl font-black text-slate-800">
          {
            bookings.filter(
              (b) => b.status === 'Completed'
            ).length
          }
        </h3>
      </div>
    </div>
  </div>

  <div className="rounded-3xl bg-white/70 border border-white/40 px-5 py-4 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-2xl bg-orange-100 flex items-center justify-center">
        <Activity size={18} className="text-orange-700" />
      </div>

      <div>
        <p className="text-xs text-slate-500">In Progress</p>
        <h3 className="text-xl font-black text-slate-800">
          {
            bookings.filter(
              (b) => b.status === 'In Progress'
            ).length
          }
        </h3>
      </div>
    </div>
  </div>

  <div className="rounded-3xl bg-white/70 border border-white/40 px-5 py-4 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-2xl bg-yellow-100 flex items-center justify-center">
        <CircleDashed size={18} className="text-yellow-700" />
      </div>

      <div>
        <p className="text-xs text-slate-500">Pending</p>
        <h3 className="text-xl font-black text-slate-800">
          {
            bookings.filter(
              (b) => !b.status || b.status === 'Pending'
            ).length
          }
        </h3>
      </div>
    </div>
  </div>

</div>

          

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            <button
              onClick={fetchBookings}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl border bg-white/70 hover:bg-white transition-all"
            >
              <RefreshCw size={18} className="text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">
                Refresh
              </span>
            </button>

            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-2xl font-semibold text-white transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
                boxShadow: '0 10px 30px rgba(37,99,235,0.25)',
              }}
            >
              <div className="flex items-center gap-2">
                <Eye size={18} />
                {showAll ? 'Show Less' : 'View All'}
              </div>
            </button>

          </div>
        </div>

        {/* SEARCH BAR */}
<div className="relative z-10 mb-8 flex flex-col lg:flex-row gap-4">

  {/* SEARCH INPUT */}
  <div className="flex-1 relative group">

    {/* GLOW */}
    <div
      className="
        absolute
        -inset-[1px]
        rounded-[28px]
        opacity-0
        group-focus-within:opacity-100
        transition-all
        duration-500
        blur-md
      "
      style={{
        background:
          'linear-gradient(135deg, rgba(59,130,246,0.35), rgba(6,182,212,0.22))',
      }}
    />

    {/* INPUT WRAPPER */}
    <div
      className="
        relative
        flex
        items-center
        gap-4
        rounded-[28px]
        px-5
        py-4
        overflow-hidden
      "
      style={{
        background: 'rgba(255,255,255,0.78)',
        border: '1px solid rgba(255,255,255,0.9)',
        backdropFilter: 'blur(18px)',
        boxShadow: '0 12px 40px rgba(37,99,235,0.08)',
      }}
    >

      {/* ICON */}
      <div
        className="
          w-10
          h-10
          rounded-2xl
          flex
          items-center
          justify-center
          text-white
          shrink-0
          transition-all
          duration-300
          group-focus-within:scale-110
        "
        style={{
          background:
            'linear-gradient(135deg,#2563eb,#06b6d4)',
          boxShadow:
            '0 10px 25px rgba(37,99,235,0.22)',
        }}
      >
        <Search size={17} />
      </div>

      {/* INPUT */}
      <div className="flex-1">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customer name or phone number..."
          className="
            w-full
            bg-transparent
            outline-none
            text-slate-800
            placeholder:text-slate-400
            text-sm
            font-semibold
          "
        />

        {/* LIVE TEXT */}
        <div className="flex items-center gap-2 mt-2">

          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-bold">
            Live Search Active
          </span>

        </div>

      </div>

    </div>

  </div>

  {/* FILTER */}
  <div className="relative">

    <Filter
      size={16}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"
    />

    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="
        pl-11
        pr-10
        py-4
        rounded-2xl
        border
        border-white/40
        bg-white/70
        backdrop-blur-xl
        outline-none
        font-semibold
        text-slate-700
      "
    >
      <option>All</option>
      <option>Pending</option>
      <option>In Progress</option>
      <option>Completed</option>
    </select>

  </div>



</div>

        {/* LOADING */}
        {loading ? (
          <div className="relative z-10 flex flex-col items-center py-20">
            <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
            <p className="mt-6 text-slate-500">Loading bookings...</p>
          </div>
        ) : (
          <div className="relative z-10 space-y-6">

            {visibleBookings.length === 0 && (
  <div className="rounded-[32px] border border-white/40 bg-white/60 backdrop-blur-xl py-20 text-center">

    <Sparkles
      size={42}
      className="mx-auto text-blue-500"
    />

    <h3 className="mt-5 text-2xl font-black text-slate-800">
      No bookings found
    </h3>

    <p className="mt-2 text-slate-500">
      Try adjusting search or filters.
    </p>

  </div>
)}

            {/* TODAY */}
{today.length > 0 && (
  <>
    <h2 className="text-lg font-bold text-slate-700 mt-6">
      TODAY
    </h2>

    {today.map((b, i) => renderBookingCard(b, i + 1))}
  </>
)}

{/* YESTERDAY */}
{yesterday.length > 0 && (
  <>
    <h2 className="text-lg font-bold text-slate-700 mt-10">
      YESTERDAY
    </h2>

    {yesterday.map((b, i) => renderBookingCard(b, i + 1))}
  </>
)}

{/* OLDER */}
{older.length > 0 && (
  <>
    <h2 className="text-lg font-bold text-slate-700 mt-10">
      OLDER
    </h2>

    {older.map((b, i) => renderBookingCard(b, i + 1))}
  </>
)}

          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedBooking && (
        <EditBookingModal
  booking={selectedBooking}
  onClose={() => setSelectedBooking(null)}
  onUpdated={fetchBookings}
  onLocalUpdate={updateLocalBooking}
/>
      )}
    </>
  )
}