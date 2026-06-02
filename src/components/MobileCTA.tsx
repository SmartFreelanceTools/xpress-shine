'use client'

export default function MobileCTA() {
  return (
    <section
      id="cta"
      className="relative py-24 overflow-hidden bg-[#f8faff]"
      style={{
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >

      {/* ═════════ BACKGROUND ═════════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Soft Glow */}
        <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-blue-200/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-25%] right-[-20%] w-[350px] h-[350px] bg-cyan-200/40 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-5">

        {/* ═════════ CARD ═════════ */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 text-center relative overflow-hidden">

          {/* top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500" />

          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 mt-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600 font-medium">
              Same-Day Pickup Available
            </span>
          </div>

          {/* heading */}
          <h2 className="text-3xl font-black text-slate-900 leading-tight">
            Premium Garment
            <br />
            <span className="text-blue-600">Care Service</span>
          </h2>

          {/* description */}
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Luxury dry cleaning, express laundry, and professional fabric care trusted across Thika.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-col gap-4">

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254722389764?text=Hello%20EXPRESS%20DRYCLEANERS%2C%20I%20want%20a%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-4 rounded-2xl bg-green-500 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 transition"
            >
              Book on WhatsApp
              <span className="text-lg">→</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="flex items-center justify-center px-5 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 text-xs uppercase tracking-[0.2em] font-medium active:scale-95 transition"
            >
              View Booking Info
            </a>

          </div>

          {/* mini trust line */}
          <p className="text-[11px] text-slate-400 mt-6">
            Trusted by thousands of customers in Thika
          </p>

        </div>
      </div>
    </section>
  )
}