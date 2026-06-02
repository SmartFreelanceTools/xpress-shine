'use client'

export default function MobileMap() {
  return (
    <section
      id="map"
      className="relative py-24 overflow-hidden bg-[#020B1C]"
    >
      {/* ═════════ BACKGROUND ═════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Gradient Base */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#4169E1_0%,#0A1631_60%,#020B1C_100%)]" />

        {/* Soft Glow */}
        <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-[#4169E1]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-25%] left-[-20%] w-[450px] h-[450px] bg-[#00CED1]/20 rounded-full blur-[120px]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 px-5 max-w-md mx-auto">

        {/* ═════════ HEADER ═════════ */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00CED1] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white font-bold">
              Visit Us
            </span>
          </div>

          <h2 className="text-4xl font-black text-white leading-tight">
            Our <span className="text-[#00CED1]">Location</span>
          </h2>

          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Located in Thika, Njomoko — fast, premium laundry pickup & delivery.
          </p>
        </div>

        {/* ═════════ MAP ═════════ */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-10">
          <iframe
            src="https://www.google.com/maps?q=Express+Dry+Cleaners+%26+Laundromat+Thika+Njomoko&output=embed"
            className="w-full h-[280px]"
            loading="lazy"
          />
        </div>

        {/* ═════════ INFO CARD ═════════ */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">

          <h3 className="text-xl font-black text-white mb-1">
            Xpress Drycleaners
          </h3>

          <p className="text-white/50 text-xs mb-6">
            Premium garment care services
          </p>

          <div className="space-y-5">

            {/* Location */}
            <div className="flex items-start gap-4">
              <span className="text-[#00CED1] text-lg">📍</span>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                  Location
                </p>
                <p className="text-white text-sm">
                  Thika, Njomoko, Kenya
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-[#00CED1] text-lg">📞</span>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                  Phone
                </p>
                <a
                  href="tel:+254722389764"
                  className="text-white text-sm"
                >
                  +254 722 389 764
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <span className="text-[#00CED1] text-lg">⏰</span>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                  Hours
                </p>
                <p className="text-white text-sm">
                  Mon – Sat: 7AM – 8PM
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <a
            href="https://wa.me/254722389764?text=Hello%20I%20want%20pickup%20from%20Thika%20Njomoko"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-[#00CED1] text-[#020B1C] font-bold text-xs uppercase tracking-[0.2em]"
          >
            Request Pickup
            <span className="text-lg">→</span>
          </a>

        </div>
      </div>
    </section>
  )
}