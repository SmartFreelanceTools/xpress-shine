'use client'

const testimonials = [
  {
    name: 'Amara Odhiambo',
    role: 'Marketing Manager',
    location: 'Ngoingwa, Thika',
    rating: 5,
    review:
      "Xpress Drycleaners is genuinely the best laundry service I've used. Fast turnaround, careful handling, and very professional packaging.",
    avatar: 'AO',
    tag: 'Dry Cleaning',
    color: 'bg-[#4169E1]',
  },
  {
    name: 'David Kamau',
    role: 'Business Owner',
    location: 'Kilimani, Nairobi',
    rating: 5,
    review:
      "My shirts always come back perfectly pressed. The WhatsApp booking system makes everything effortless and reliable.",
    avatar: 'DK',
    tag: 'Weekly Service',
    color: 'bg-[#E34234]',
  },
  {
    name: 'Grace Wanjiku',
    role: 'Healthcare Professional',
    location: 'Thika Road, Nairobi',
    rating: 5,
    review:
      "Always clean, fresh, and on time. The same-day service has been a lifesaver during my busy schedule.",
    avatar: 'GW',
    tag: 'Express Care',
    color: 'bg-[#00CED1]',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < count ? 'text-[#00CED1]' : 'text-slate-200'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
<section
  id="products"
  className="relative -mt-16 md:-mt-24 overflow-hidden py-32 z-10"
  style={{
    background: '#f8faff',
    fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
  }}
>
      {/* SAME BACKGROUND SYSTEM */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

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
            <span className="w-2 h-2 bg-[#00CED1] rounded-full animate-pulse"/>
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Verified Customer Feedback
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight"
            style={{
              color:'#0f172a',
              fontFamily:"'Syne',sans-serif"
            }}
          >
            What
            <span className="block text-blue-600">
              Clients Say
            </span>
          </h2>

          <p className="text-slate-500 mt-6 max-w-xl mx-auto text-lg">
            Trusted by customers across Thika and Nairobi for premium garment care.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t,i)=>(
            <div
              key={i}
              className="group relative rounded-[32px] p-8 bg-white transition-all duration-500 hover:-translate-y-3"
              style={{
                boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
                border:'1px solid rgba(226,232,240,0.8)'
              }}
            >

              <Stars count={t.rating}/>

              <div className="mt-5 inline-block text-[10px] px-3 py-1 rounded-full bg-blue-50 text-blue-600 uppercase font-bold tracking-[0.2em]">
                {t.tag}
              </div>

              <p className="mt-6 text-slate-500 text-sm leading-relaxed italic">
                "{t.review}"
              </p>

              <div className="h-px bg-slate-100 my-6"/>

              <div className="flex items-center gap-4">

                <div className={`w-12 h-12 rounded-2xl ${t.color} flex items-center justify-center text-white font-bold`}>
                  {t.avatar}
                </div>

                <div>
                  <div className="font-bold text-slate-800">
                    {t.name}
                  </div>

                  <div className="text-slate-400 text-xs uppercase">
                    {t.role}
                  </div>

                  <div className="text-slate-400 text-xs mt-1">
                    📍 {t.location}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            ['2,500+','Happy Clients'],
            ['99%','On-Time Delivery'],
            ['4.3★','Average Rating'],
            ['Thika','Service Area']
          ].map(([val,label],i)=>(
            <div
              key={i}
              className="bg-white rounded-3xl p-6 text-center"
              style={{
                boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
                border:'1px solid rgba(226,232,240,0.8)'
              }}
            >
              <div className="text-blue-600 text-3xl font-black mb-2">
                {val}
              </div>

              <div className="text-slate-400 text-xs uppercase tracking-[0.2em]">
                {label}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}