'use client'

const steps = [
  {
    number: '01',
    title: 'Book a Service',
    description:
      "Choose your service online, WhatsApp, or call. We’ll handle everything for you smoothly.",
    icon: (
      <svg viewBox="0 0 56 56" className="w-7 h-7" fill="none">
        <path
          d="M14 28 C14 20 20 14 28 14 C36 14 42 20 42 28 C42 36 36 42 28 42 C20 42 14 36 14 28Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M28 22 L28 28 L33 31"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: 'bg-[#4169E1] text-white',
    detail: 'Under 2 minutes',
  },
  {
    number: '02',
    title: 'Pickup at Your Door',
    description:
      'We arrive at your location, collect your clothes safely, and label everything professionally.',
    icon: (
      <svg viewBox="0 0 56 56" className="w-7 h-7" fill="none">
        <rect
          x="10"
          y="22"
          width="36"
          height="20"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 22 L14 18 C14 15 16 12 20 12 H36 C40 12 42 15 42 18 V22"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    color: 'bg-[#00CED1] text-white',
    detail: 'Free within 5km',
  },
  {
    number: '03',
    title: 'Clean & Deliver',
    description:
      'We clean, press, and package your clothes. Delivered fresh, neat, and on time.',
    icon: (
      <svg viewBox="0 0 56 56" className="w-7 h-7" fill="none">
        <path
          d="M14 30 L24 40 L42 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: 'bg-[#E34234] text-white',
    detail: 'Same / Next day',
  },
]

export default function HowItWorks() {
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
          border: '1px solid rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
        }}
      />

      <div
        className="absolute top-[35%] right-[10%] w-10 h-10 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border: '1px solid rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
        }}
      />

      <div
        className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full opacity-10 animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(147,197,253,0.45))',
          border: '1px solid rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-28">

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
              border: '1px solid rgba(147,197,253,0.5)',
              color: '#2563eb',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#E34234]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              The Express Experience
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6"
            style={{
              color: '#0f172a',
              fontFamily: "'Syne',sans-serif",
            }}
          >
            HOW IT
            <span className="block text-blue-600 mt-2">
              WORKS
            </span>
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Premium garment care made effortless in three simple steps.
          </p>

        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-14">

          {steps.map((step, i) => (
            <div
              key={i}
              className="group text-center flex flex-col items-center"
            >

              <div className="relative mb-10">

                <div
                  className="w-36 h-36 rounded-[40px] bg-white flex items-center justify-center"
                  style={{
                    boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
                    border:'1px solid rgba(226,232,240,0.8)',
                  }}
                >

                  <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center ${step.color}`}>
                    {step.icon}
                  </div>

                </div>

                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                  {step.number}
                </div>

              </div>

              <div
                className="bg-white p-7 rounded-[28px]"
                style={{
                  boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
                  border:'1px solid rgba(226,232,240,0.8)',
                }}
              >

                <div className="text-[10px] tracking-[0.3em] text-blue-600 uppercase mb-3 font-bold">
                  {step.detail}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>

              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">

          <a
            href="https://wa.me/254722389764"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-xs tracking-[0.25em] uppercase text-white"
            style={{
              background:'linear-gradient(135deg,#25D366,#1fb857)',
              boxShadow:'0 6px 20px rgba(37,211,102,0.25)'
            }}
          >
            Request Pickup on WhatsApp
          </a>

        </div>

      </div>

    </section>
  )
}