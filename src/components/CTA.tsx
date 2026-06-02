export default function CTA() {
  return (
<section
  id="products"
  className="relative -mt-16 md:-mt-24 overflow-hidden py-32 z-10"
  style={{
    background: '#f8faff',
    fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
  }}
>

      {/* SAME PREMIUM BACKGROUND */}
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

      <div className="relative max-w-5xl mx-auto px-6 z-10">

        <div
          className="
            relative overflow-hidden
            rounded-[42px]
            bg-white
            p-10 sm:p-14 lg:p-16
            text-center
          "
          style={{
            boxShadow:'0 10px 40px rgba(37,99,235,0.08)',
            border:'1px solid rgba(226,232,240,0.8)',
          }}
        >

          {/* top accent line */}

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-[2px]"
            style={{
              background:
                'linear-gradient(to right,#E34234,#2563eb,#00C853)',
            }}
          />

          {/* floating glow */}

          <div
            className="absolute -top-20 right-[-80px] w-60 h-60 rounded-full"
            style={{
              background:'rgba(37,99,235,0.06)',
              filter:'blur(100px)'
            }}
          />

          {/* Badge */}

          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-8"
            style={{
              background:
                'linear-gradient(135deg,rgba(219,234,254,0.8),rgba(186,230,253,0.5))',
              border:'1px solid rgba(147,197,253,0.5)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"/>

            <span
              className="
              text-slate-600
              text-[10px]
              uppercase
              tracking-[0.35em]
              font-medium
            "
            >
              Same-Day Pickup Available
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl sm:text-5xl lg:text-6xl
              leading-[1]
              tracking-[-0.05em]
              font-black
              mb-6
            "
            style={{
              color:'#0f172a',
              fontFamily:"'Syne',sans-serif"
            }}
          >
            Premium Garment Care
            <br />

            <span className="text-[#2563eb]">
              With Elegant Service
            </span>
          </h2>

          {/* Paragraph */}

          <p
            className="
              max-w-2xl mx-auto
              text-slate-500
              text-base sm:text-lg
              leading-relaxed
              mb-12
            "
          >
            Trusted by thousands of customers in Thika for luxury dry cleaning,
            same-day laundry service, delicate fabric care, and professional finishing.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* WhatsApp */}

            <a
              href="https://wa.me/254722389764?text=Hello%20XPRESS%20SHINE%2C%20I%20want%20to%20book%20a%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                rounded-2xl
                px-10 py-5
                text-white
                transition-all duration-500
                hover:scale-[1.03]
              "
              style={{
                background:
                  'linear-gradient(135deg,#25D366,#1fb857)',
                boxShadow:
                  '0 6px 20px rgba(37,211,102,0.25)'
              }}
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

              <div className="relative z-10 flex items-center gap-3">

                <span
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.32em]
                  font-medium
                "
                >
                  Book on WhatsApp
                </span>

                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>

              </div>
            </a>

            {/* Secondary */}

            <a
              href="#contact"
              className="
                rounded-2xl
                px-10 py-5
                transition-all duration-500
              "
              style={{
                background:'#fff',
                border:'1px solid rgba(226,232,240,0.8)',
                color:'#475569',
                boxShadow:'0 4px 20px rgba(37,99,235,0.05)'
              }}
            >
              <span
                className="
                text-[10px]
                uppercase
                tracking-[0.32em]
                font-medium
              "
              >
                Explore Booking Form
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}