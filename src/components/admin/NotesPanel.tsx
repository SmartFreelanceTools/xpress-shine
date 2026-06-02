'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

import {
  MessageSquareText,
  Sparkles,
  Clock3,
  User2,
} from 'lucide-react'

export default function NotesPanel() {

  const [notes, setNotes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchNotes()

  }, [])


  async function fetchNotes() {

    const { data } = await supabase
      .from('bookings')
      .select('id,customer_name,notes,created_at')
      .not('notes', 'is', null)
      .order('created_at', { ascending: false })
      .limit(5)

    setNotes(data || [])
    setLoading(false)

  }


  return (

    <div
      className="
        relative overflow-hidden
        rounded-[38px]
        p-7
      "
      style={{
        background: '#f8faff',
        border: '1px solid rgba(255,255,255,0.9)',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
        boxShadow:
          '0 12px 45px rgba(37,99,235,0.08)',
      }}
    >

      {/* LUXURY BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -320,
            left: -180,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.75) 0%,transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            top: -140,
            right: -120,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.55) 0%,transparent 70%)',
            filter: 'blur(65px)',
          }}
        />

        {/* BOTTOM GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            bottom: -180,
            left: '35%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.45) 0%,transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* GRID TEXTURE */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '42px 42px',
          }}
        />

        {/* FLOATING BUBBLE */}
        <div
          className="absolute top-12 right-[10%] w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
          }}
        />

      </div>

      {/* HEADER */}
      <div className="relative z-10 flex items-start justify-between mb-10">

        <div>

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2.5 rounded-full
              mb-5
            "
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.9),rgba(186,230,253,0.65))',
              border: '1px solid rgba(147,197,253,0.45)',
              boxShadow:
                '0 8px 30px rgba(37,99,235,0.08)',
            }}
          >

            <Sparkles
              size={14}
              className="text-blue-600"
            />

            <span className="text-[11px] uppercase tracking-[0.22em] font-black text-blue-700">
              Customer Feedback
            </span>

          </div>

          {/* TITLE */}
          <h3 className="text-4xl font-black text-slate-800 tracking-tight">
            Customer Notes
          </h3>

          {/* SUBTEXT */}
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            Latest special requests & customer messages
          </p>

        </div>

        {/* ICON */}
        <div
          className="
            relative
            w-16 h-16 rounded-[24px]
            flex items-center justify-center
            bg-gradient-to-br
            from-blue-600 to-cyan-500
          "
          style={{
            boxShadow:
              '0 12px 30px rgba(37,99,235,0.22)',
          }}
        >

          <MessageSquareText
            size={28}
            className="text-white"
          />

        </div>

      </div>

      {/* LOADING */}
      {loading && (

        <div
          className="
            relative z-10
            rounded-[30px]
            p-6
          "
          style={{
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(255,255,255,0.9)',
            backdropFilter: 'blur(18px)',
          }}
        >

          <p className="text-slate-500 font-medium">
            Loading customer notes...
          </p>

        </div>

      )}

      {/* NOTES */}
      <div className="relative z-10 space-y-6">

        {!loading && notes.length === 0 && (

          <div
            className="
              rounded-[30px]
              p-10 text-center
            "
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px dashed rgba(148,163,184,0.35)',
              backdropFilter: 'blur(18px)',
            }}
          >

            <p className="text-slate-500 font-medium">
              No customer notes yet.
            </p>

          </div>

        )}

        {notes.map((note, index) => (

          <div
            key={note.id}
            className="
              group
              relative overflow-hidden
              rounded-[32px]
              p-6
              transition-all duration-500
              hover:-translate-y-2
            "
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(255,255,255,0.9)',
              backdropFilter: 'blur(18px)',
              boxShadow:
                '0 12px 40px rgba(37,99,235,0.08)',
            }}
          >

            {/* HOVER GLOW */}
            <div
              className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(37,99,235,0.14) 0%, transparent 70%)',
              }}
            />

            {/* FLOATING LIGHT */}
            <div
              className="
                absolute -top-12 -right-12
                w-40 h-40 rounded-full
                blur-3xl opacity-30
              "
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)',
              }}
            />

            {/* NUMBER */}
            <div className="absolute top-4 right-5 text-6xl font-black text-slate-100">
              0{index + 1}
            </div>

            {/* TOP */}
            <div className="relative z-10 flex items-start justify-between gap-4">

              <div className="flex items-center gap-4">

                {/* AVATAR */}
                <div
                  className="
                    w-16 h-16 rounded-[24px]
                    bg-gradient-to-br
                    from-blue-50 to-blue-100
                    flex items-center justify-center
                  "
                  style={{
                    boxShadow:
                      '0 10px 25px rgba(37,99,235,0.08)',
                  }}
                >

                  <User2
                    size={28}
                    className="text-blue-600"
                  />

                </div>

                {/* INFO */}
                <div>

                  <p className="font-black text-xl text-slate-800 tracking-tight">
                    {note.customer_name}
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <Clock3
                      size={14}
                      className="text-slate-400"
                    />

                    <p className="text-xs font-semibold text-slate-400">
                      {new Date(
                        note.created_at
                      ).toLocaleDateString()}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* NOTE */}
            <div
              className="
                relative z-10
                mt-6
                rounded-[24px]
                p-5
              "
              style={{
                background:
                  'linear-gradient(135deg, rgba(248,250,252,0.95), rgba(241,245,249,0.92))',
                border: '1px solid rgba(226,232,240,0.9)',
              }}
            >

              {/* FULL NOTE DISPLAY */}
              <p
                className="
                  text-[15px]
                  leading-[1.9]
                  text-slate-700
                  font-medium
                  whitespace-pre-wrap
                  break-words
                "
              >
                {note.notes}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}