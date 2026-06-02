'use client'

export default function MapSection() {
  return (
    <section
      id="map"
      className="relative py-36 overflow-hidden bg-[#020B1C]"
    >
      
      {/* ═══════════════════════════════════════
          PREMIUM CINEMATIC BACKGROUND
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Main Brand Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#4169E1_0%,#2B50D8_35%,#0A1631_70%,#020B1C_100%)]" />

        {/* Mesh Texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Royal Blue Ambient Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4169E1]/30 rounded-full blur-[140px]" />

        {/* Cyan Accent Glow */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#00CED1]/20 rounded-full blur-[140px]" />

        {/* Red Accent Glow */}
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#E34234]/10 rounded-full blur-[120px]" />

        {/* Cinematic Light Beam */}
        <div
          className="absolute top-[-10%] left-[15%] h-[130%] w-[220px] rotate-[18deg]"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)',
            filter: 'blur(35px)',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#020B1C]/35" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ═══════════════════════════════════════
            HEADER
        ═══════════════════════════════════════ */}
        <div className="text-center mb-24">

          <div className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-white/10 border border-white/15 backdrop-blur-2xl shadow-2xl mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CED1] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00CED1]" />
            </span>

            <span className="text-white font-black uppercase tracking-[0.35em] text-[10px]">
              Visit Our Headquarters
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none font-barlow">
            OUR <span className="text-[#00CED1]">LOCATION</span>
          </h2>

          <p className="text-white/65 mt-8 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Located in Thika, Njomoko — delivering premium laundry care with speed,
            precision, and unmatched professionalism.
          </p>
        </div>

        {/* ═══════════════════════════════════════
            MAIN GRID
        ═══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-14 items-stretch">

          {/* ── MAP CARD ── */}
          <div className="group relative rounded-[42px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00CED1]/60 to-transparent z-20" />

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-[#4169E1]/10 opacity-100 group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none" />

            <iframe
              src="https://www.google.com/maps?q=Express+Dry+Cleaners+%26+Laundromat+Thika+Njomoko&output=embed"
              className="w-full h-[500px] lg:h-full min-h-[580px] grayscale-[0.3] contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>

          {/* ── INFO CARD ── */}
          <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.06] backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.45)] p-12 flex flex-col justify-center">

            {/* Premium Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#4169E1]/20 rounded-full blur-[120px]" />

            {/* Glass Reflection */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Brand */}
            <div className="mb-12 relative z-10">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-[#00CED1]" />
                <span className="text-[#00CED1] text-[10px] font-black tracking-[0.3em] uppercase">
                  Premium Service Hub
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none font-barlow text-white">
                EXPRESS <span className="text-[#00CED1]">DRYCLEANERS</span>
              </h3>

              <p className="mt-5 text-white/60 text-lg leading-relaxed font-medium">
                Excellence in every fiber. Fast, elegant, and trusted garment care
                services for modern lifestyles.
              </p>
            </div>

            {/* INFO LIST */}
            <div className="space-y-8 relative z-10">

              {[
                {
                  icon: '📍',
                  title: 'Location',
                  value: 'Thika, Njomoko, Kenya',
                },
                {
                  icon: '📞',
                  title: 'Direct Line',
                  value: '+254 722 389 764',
                },
                {
                  icon: '⏰',
                  title: 'Business Hours',
                  value: 'Mon – Sat: 7AM – 8PM',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 group/item"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl backdrop-blur-xl shadow-lg transition-all duration-500 group-hover/item:scale-110 group-hover/item:border-[#00CED1]/40">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-2">
                      {item.title}
                    </p>

                    <p className="text-white text-xl font-semibold">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="mt-14 relative z-10">

              <a
                href="https://wa.me/254722389764?text=Hello%20I%20want%20pickup%20from%20Thika%20Njomoko"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-between w-full rounded-2xl bg-white hover:bg-[#00CED1] px-8 py-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,206,209,0.35)]"
              >
                <span className="text-[#4169E1] group-hover/btn:text-[#020B1C] text-xs font-black uppercase tracking-[0.25em] transition-colors duration-500">
                  Request Pickup
                </span>

                <div className="w-12 h-12 rounded-xl bg-[#4169E1]/10 group-hover/btn:bg-[#020B1C]/10 flex items-center justify-center transition-all duration-500">
                  <svg
                    className="w-5 h-5 text-[#4169E1] group-hover/btn:text-[#020B1C]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');

        .font-barlow {
          font-family: 'Barlow Condensed', sans-serif;
        }
      `}</style>
    </section>
  )
}