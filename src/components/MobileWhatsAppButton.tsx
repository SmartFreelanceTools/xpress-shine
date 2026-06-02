'use client'

export default function MobileWhatsAppButton() {
  const waLink =
    'https://wa.me/254722389764?text=Hello%20EXPRESS%20Drycleaners%2C%20I%20would%20like%20to%20book%20a%20service.'

  return (
    <div
      className="lg:hidden"
      style={{
        position: 'fixed',
        bottom: 56,
        right: 20,
        zIndex: 120,
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        WebkitTapHighlightColor: 'transparent',
        fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
      }}
    >

      {/* ══════════════════════════════════════
          LABEL PILL — left of button
      ══════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          marginRight: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Pill card */}
        <div
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg,#2563eb 0%,#1d4ed8 50%,#172554 100%)',
            borderRadius: 16,
            padding: '10px 14px',
            boxShadow:
              '0 10px 32px rgba(37,99,235,0.36), 0 3px 10px rgba(37,99,235,0.20), inset 0 1px 0 rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.14)',
            overflow: 'hidden',
          }}
        >
          {/* Gloss sheen */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '50%',
              borderRadius: '16px 16px 0 0',
              background: 'linear-gradient(180deg,rgba(255,255,255,0.12) 0%,transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Corner radial */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: -16, right: -16,
              width: 52, height: 52,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(255,255,255,0.10) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
            }}
          >
            {/* Pulsing green live dot */}
            <span style={{ position: 'relative', width: 8, height: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span
                style={{
                  position: 'absolute',
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'mobilewa-pulse 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: 5, height: 5,
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  display: 'block',
                }}
              />
            </span>

            <span
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                textShadow: '0 1px 3px rgba(0,0,0,0.15)',
              }}
            >
              Schedule Pickup
            </span>
          </div>
        </div>

        {/* Pointer arrow — triangle pointing right toward button */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: -6,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '6px solid #1d4ed8',
            filter: 'drop-shadow(1px 0px 2px rgba(37,99,235,0.25))',
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          WHATSAPP FAB BUTTON
      ══════════════════════════════════════ */}
      <div style={{ position: 'relative', flexShrink: 0 }}>

        {/* Outer ambient glow — large soft halo */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: -8,
            borderRadius: '50%',
            background: 'rgba(37,211,102,0.20)',
            filter: 'blur(14px)',
            pointerEvents: 'none',
          }}
        />

        {/* Ripple ring — animate-ping equivalent */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            border: '1.5px solid rgba(37,211,102,0.35)',
            animation: 'mobilewa-ring 2s cubic-bezier(0,0,0.2,1) infinite',
            pointerEvents: 'none',
          }}
        />

        {/* Second ripple ring — offset timing */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            border: '1.5px solid rgba(37,211,102,0.20)',
            animation: 'mobilewa-ring 2s cubic-bezier(0,0,0.2,1) infinite 0.6s',
            pointerEvents: 'none',
          }}
        />

        {/* Button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'relative',
            width: 62,
            height: 62,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(145deg,#2ecc71 0%,#25D366 40%,#1db954 100%)',
            boxShadow:
              '0 12px 36px rgba(37,211,102,0.42), 0 4px 12px rgba(37,211,102,0.24), inset 0 1px 0 rgba(255,255,255,0.30)',
            border: '1px solid rgba(255,255,255,0.20)',
            textDecoration: 'none',
            WebkitTapHighlightColor: 'transparent',
            transition: 'transform 160ms ease, box-shadow 160ms ease',
          }}
          onTouchStart={e => {
            e.currentTarget.style.transform = 'scale(0.92)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(37,211,102,0.30), 0 2px 6px rgba(37,211,102,0.18)'
          }}
          onTouchEnd={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,211,102,0.42), 0 4px 12px rgba(37,211,102,0.24), inset 0 1px 0 rgba(255,255,255,0.30)'
          }}
        >
          {/* Gloss half-circle on button */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '48%',
              borderRadius: '50% 50% 0 0',
              background: 'linear-gradient(180deg,rgba(255,255,255,0.22) 0%,transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* WhatsApp SVG icon */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="white"
            style={{
              position: 'relative',
              filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.20))',
            }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Z" />
          </svg>
        </a>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes mobilewa-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(2.4); opacity: 0; }
        }
        @keyframes mobilewa-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          80%  { transform: scale(1.7); opacity: 0;   }
          100% { transform: scale(1.7); opacity: 0;   }
        }
      `}</style>

    </div>
  )
}