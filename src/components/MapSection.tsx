'use client'

export default function MapSection() {
  return (
<section
  id="products"
  className="relative -mt-16 md:-mt-24 overflow-hidden py-32 z-10"
  style={{
    background: '#f8faff',
    fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
  }}
>

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* TOP LEFT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -250,
            left: -120,
            background:
              'radial-gradient(circle,rgba(219,234,254,0.7) 0%,transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: 80,
            right: -100,
            background:
              'radial-gradient(circle,rgba(186,230,253,0.45) 0%,transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* BOTTOM GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: 450,
            height: 450,
            bottom: -120,
            left: '30%',
            background:
              'radial-gradient(circle,rgba(191,219,254,0.35) 0%,transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

      </div>

      {/* FLOATING BUBBLES */}

      <div
        className="absolute top-20 left-[8%] w-16 h-16 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border:'1px solid rgba(255,255,255,0.7)',
          backdropFilter:'blur(12px)',
        }}
      />

      <div
        className="absolute top-[35%] right-[10%] w-10 h-10 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border:'1px solid rgba(255,255,255,0.7)',
          backdropFilter:'blur(12px)',
        }}
      />

      <div
        className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full opacity-10 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border:'1px solid rgba(255,255,255,0.7)',
          backdropFilter:'blur(12px)',
        }}
      />

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-20">

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
              border:'1px solid rgba(147,197,253,0.5)',
              color:'#2563eb'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#4169E1] animate-pulse" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Visit Us
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight"
            style={{
              color:'#0f172a',
              fontFamily:"'Syne',sans-serif"
            }}
          >
            Our
            <span className="block text-blue-600 mt-2">
              Location
            </span>
          </h2>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Located in Thika, Njomoko — we provide premium laundry care with fast pickup and delivery.
          </p>

        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* MAP */}

          <div
            className="overflow-hidden rounded-[32px] bg-white"
            style={{
              boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
              border:'1px solid rgba(226,232,240,0.8)',
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Express+Dry+Cleaners+%26+Laundromat+Thika+Njomoko&output=embed"
              className="w-full h-[520px]"
              loading="lazy"
            />
          </div>

          {/* INFO CARD */}

          <div
            className="rounded-[32px] bg-white p-10 flex flex-col justify-center"
            style={{
              boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
              border:'1px solid rgba(226,232,240,0.8)',
            }}
          >

            <div className="mb-10">

              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold mb-3">
                Service Hub
              </p>

              <h3 className="text-3xl font-black text-slate-900">
                Express Drycleaners
              </h3>

              <p className="text-slate-500 mt-3">
                Clean. Fast. Reliable garment care.
              </p>

            </div>

            <div className="space-y-8">

              <div className="flex gap-4">

                <div className="text-blue-600 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Location
                  </p>

                  <p className="text-slate-700 mt-1">
                    Thika, Njomoko, Kenya
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-blue-600 text-xl">
                  📞
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </p>

                  <a
                    href="tel:+254722389764"
                    className="text-slate-700 hover:text-blue-600 transition"
                  >
                    +254 722 389 764
                  </a>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-blue-600 text-xl">
                  ⏰
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Hours
                  </p>

                  <p className="text-slate-700">
                    Mon – Sat: 7:00 AM – 8:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-10">

              <a
                href="https://wa.me/254722389764?text=Hello%20I%20want%20pickup%20from%20Thika%20Njomoko"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 rounded-2xl text-white"
                style={{
                  background:
                    'linear-gradient(135deg,#25D366,#1fb857)',
                  boxShadow:
                    '0 6px 20px rgba(37,211,102,0.25)'
                }}
              >

                <span className="font-bold text-sm">
                  Request Pickup on WhatsApp
                </span>

                <span>→</span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}