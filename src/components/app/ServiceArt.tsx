// Premium illustrations for each service. No people, brand colours only.
const B1 = '#2563eb'
const B2 = '#1d4ed8'
const B3 = '#172554'
const SKY = '#38bdf8'
const L1 = '#dbeafe'
const L2 = '#eff6ff'
const LINE = '#bfdbfe'

function Sparkle({ x, y, s = 1, c = '#fff' }: { x: number; y: number; s?: number; c?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -9 C1 -3 3 -1 9 0 C3 1 1 3 0 9 C-1 3 -3 1 -9 0 C-3 -1 -1 -3 0 -9Z"
      fill={c}
    />
  )
}

function Bubble({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="rgba(255,255,255,0.55)" stroke="#fff" strokeWidth="1.6" />
      <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.25} fill="#fff" />
    </g>
  )
}

function Washing() {
  return (
    <>
      <rect x="108" y="16" width="104" height="138" rx="16" fill="#fff" stroke={LINE} strokeWidth="2" />
      <path d="M108 32 a16 16 0 0 1 16 -16 h72 a16 16 0 0 1 16 16 v14 h-104z" fill={L1} />
      <circle cx="128" cy="32" r="5" fill={B1} />
      <circle cx="144" cy="32" r="5" fill={SKY} />
      <rect x="168" y="28" width="30" height="8" rx="4" fill="#93c5fd" />
      <circle cx="160" cy="98" r="42" fill={L2} stroke="#93c5fd" strokeWidth="7" />
      <circle cx="160" cy="98" r="33" fill="#e0f2fe" />
      <path d="M127 98 q8 -9 16.5 0 t16.5 0 t16.5 0 t16.5 0 a33 33 0 0 1 -66 0z" fill={SKY} opacity="0.85" />
      <path d="M127 98 q8 -9 16.5 0 t16.5 0 t16.5 0 t16.5 0" fill="none" stroke="#fff" strokeWidth="2" opacity="0.8" />
      <ellipse cx="146" cy="82" rx="10" ry="5" fill="#fff" opacity="0.55" transform="rotate(-25 146 82)" />
      <Bubble x={148} y={112} r={5} />
      <Bubble x={170} y={118} r={4} />
      <Bubble x={176} y={106} r={3} />
      <Bubble x={66} y={110} r={11} />
      <Bubble x={86} y={84} r={7} />
      <Bubble x={246} y={96} r={10} />
      <Bubble x={262} y={124} r={6} />
      <Sparkle x={248} y={44} s={1.3} />
      <Sparkle x={70} y={50} s={1} />
    </>
  )
}

function DryCleaning() {
  return (
    <>
      <path d="M160 44 v-10 a9 9 0 1 1 9 9" fill="none" stroke={B2} strokeWidth="4" strokeLinecap="round" />
      <path d="M160 44 L92 82 Q88 86 94 86 H226 Q232 86 228 82 Z" fill="none" stroke={B2} strokeWidth="4" strokeLinejoin="round" />
      <path d="M116 80 L138 74 Q160 96 182 74 L204 80 L212 152 H108 Z" fill={B1} />
      <path d="M138 74 Q160 96 182 74 L172 118 L160 102 L148 118 Z" fill={B3} />
      <path d="M138 74 L148 118 L160 102 L160 150 H108 L116 80Z" fill="rgba(255,255,255,0.08)" />
      <circle cx="160" cy="122" r="3.4" fill="#fff" />
      <circle cx="160" cy="138" r="3.4" fill="#fff" />
      <path d="M100 82 Q160 70 220 82 L226 156 Q160 168 94 156 Z" fill="rgba(186,230,253,0.28)" stroke="#fff" strokeWidth="2" />
      <path d="M112 96 L118 150" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <Sparkle x={246} y={58} s={1.5} />
      <Sparkle x={72} y={70} s={1.1} />
      <Sparkle x={250} y={120} s={0.9} />
    </>
  )
}

function Ironing() {
  return (
    <>
      <path d="M60 126 H260 L246 142 H74 Z" fill={B2} />
      <path d="M74 142 L66 160 M246 142 L254 160" stroke={B3} strokeWidth="4" strokeLinecap="round" />
      <rect x="104" y="98" width="112" height="30" rx="6" fill="#fff" stroke={LINE} strokeWidth="2" />
      <path d="M104 106 h112" stroke={L1} strokeWidth="2" />
      <path d="M136 98 L160 112 L184 98" fill={L1} stroke={LINE} strokeWidth="2" />
      <path d="M118 52 H182 Q204 52 208 76 L212 94 H118 Z" fill={B1} />
      <path d="M118 94 H212 V100 H118Z" fill={B3} />
      <path d="M118 52 H150 V94 H118Z" fill="rgba(255,255,255,0.14)" />
      <path d="M150 42 H178 a10 10 0 0 1 10 10 H140 a10 10 0 0 1 10 -10Z" fill={B3} />
      <circle cx="198" cy="76" r="4" fill={SKY} />
      <circle cx="232" cy="62" r="8" fill="rgba(255,255,255,0.7)" />
      <circle cx="248" cy="44" r="11" fill="rgba(255,255,255,0.55)" />
      <circle cx="266" cy="64" r="6" fill="rgba(255,255,255,0.7)" />
      <Sparkle x={76} y={58} s={1.2} />
      <Sparkle x={58} y={96} s={0.8} />
    </>
  )
}

function Express() {
  return (
    <>
      <path d="M44 70 h36 M30 92 h50 M52 114 h28" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      <rect x="150" y="26" width="20" height="10" rx="3" fill={B3} />
      <circle cx="160" cy="92" r="52" fill="#fff" stroke={B2} strokeWidth="8" />
      <circle cx="160" cy="92" r="40" fill={L2} />
      <path d="M168 62 L146 96 H162 L154 124 L178 88 H162 Z" fill={B1} />
      <path d="M200 52 l10 -10" stroke={B2} strokeWidth="6" strokeLinecap="round" />
      <rect x="226" y="108" width="52" height="14" rx="5" fill="#fff" stroke={LINE} strokeWidth="2" />
      <rect x="230" y="92" width="48" height="14" rx="5" fill={L1} stroke={LINE} strokeWidth="2" />
      <rect x="224" y="124" width="56" height="14" rx="5" fill="#fff" stroke={LINE} strokeWidth="2" />
      <Sparkle x={252} y={64} s={1.3} />
      <Sparkle x={96} y={44} s={1} />
    </>
  )
}

function Sofa() {
  return (
    <>
      <rect x="96" y="44" width="128" height="52" rx="18" fill={B2} />
      <rect x="62" y="84" width="38" height="58" rx="14" fill={B1} />
      <rect x="220" y="84" width="38" height="58" rx="14" fill={B1} />
      <rect x="92" y="88" width="136" height="44" rx="12" fill={B1} />
      <path d="M160 90 V130" stroke={B3} strokeWidth="2.5" opacity="0.5" />
      <rect x="100" y="94" width="58" height="30" rx="9" fill="rgba(255,255,255,0.14)" />
      <rect x="162" y="94" width="58" height="30" rx="9" fill="rgba(255,255,255,0.14)" />
      <rect x="82" y="138" width="8" height="14" rx="3" fill={B3} />
      <rect x="230" y="138" width="8" height="14" rx="3" fill={B3} />
      <rect x="112" y="60" width="38" height="26" rx="9" fill={SKY} transform="rotate(-8 131 73)" />
      <circle cx="270" cy="50" r="10" fill="rgba(255,255,255,0.6)" stroke="#fff" strokeWidth="1.6" />
      <Bubble x={50} y={70} r={8} />
      <Bubble x={274} y={100} r={6} />
      <Sparkle x={252} y={32} s={1.4} />
      <Sparkle x={66} y={42} s={1} />
    </>
  )
}

function Mattress() {
  return (
    <>
      <path d="M62 104 L106 62 H262 L218 104 Z" fill="#fff" stroke={LINE} strokeWidth="2" />
      <path d="M62 104 H218 V130 H62 Z" fill={L1} />
      <path d="M218 104 L262 62 V88 L218 130 Z" fill="#93c5fd" />
      <path d="M62 104 H218" stroke={LINE} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) =>
        [0, 1, 2].map((j) => (
          <circle key={`${i}-${j}`} cx={110 + i * 34 - j * 14} cy={92 - j * 12} r="3" fill={B1} opacity="0.55" />
        ))
      )}
      <path d="M72 118 H208" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" />
      <rect x="80" y="130" width="10" height="12" rx="3" fill={B3} />
      <rect x="190" y="130" width="10" height="12" rx="3" fill={B3} />
      <Bubble x={86} y={48} r={9} />
      <Bubble x={236} y={38} r={7} />
      <Bubble x={268} y={110} r={10} />
      <Sparkle x={150} y={36} s={1.4} />
      <Sparkle x={58} y={82} s={0.9} />
    </>
  )
}

function Curtain() {
  return (
    <>
      <rect x="104" y="40" width="112" height="106" rx="6" fill="#bae6fd" stroke="#fff" strokeWidth="4" />
      <path d="M104 40 H216 V90 Q160 108 104 90Z" fill="#e0f2fe" />
      <path d="M160 40 V146 M104 93 H216" stroke="#fff" strokeWidth="3" />
      <rect x="76" y="30" width="168" height="7" rx="3.5" fill={B3} />
      <circle cx="76" cy="33.5" r="6" fill={B2} />
      <circle cx="244" cy="33.5" r="6" fill={B2} />
      <path d="M88 37 Q112 60 118 98 Q112 130 120 156 H86 Q76 100 88 37Z" fill={B1} />
      <path d="M232 37 Q208 60 202 98 Q208 130 200 156 H234 Q244 100 232 37Z" fill={B1} />
      <path d="M100 40 Q108 100 100 156 M112 52 Q120 104 112 156" stroke="rgba(255,255,255,0.28)" strokeWidth="3" fill="none" />
      <path d="M220 40 Q212 100 220 156 M208 52 Q200 104 208 156" stroke="rgba(255,255,255,0.28)" strokeWidth="3" fill="none" />
      <rect x="88" y="96" width="30" height="7" rx="3.5" fill={SKY} />
      <rect x="202" y="96" width="30" height="7" rx="3.5" fill={SKY} />
      <Sparkle x={268} y={62} s={1.4} />
      <Sparkle x={54} y={86} s={1} />
      <Bubble x={274} y={116} r={8} />
    </>
  )
}

function Carpet() {
  return (
    <>
      <path d="M52 122 L96 70 H268 L224 122 Z" fill={B2} />
      <path d="M52 122 H224 V138 H52 Z" fill={B3} />
      <path d="M224 122 L268 70 V86 L224 138 Z" fill="#1e40af" />
      <path d="M68 118 L106 76 H252 L214 118Z" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.7" />
      <path d="M92 114 L122 82 H232 L202 114Z" fill={B1} />
      <path d="M160 82 L142 114 M196 82 L178 114" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />
      <circle cx="172" cy="98" r="7" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.8" />
      {/* clean stripe */}
      <path d="M132 118 L168 82 H206 L170 118Z" fill={SKY} opacity="0.55" />
      {/* scrub brush */}
      <rect x="146" y="46" width="66" height="26" rx="10" fill="#fff" stroke={LINE} strokeWidth="2" />
      <rect x="156" y="36" width="46" height="12" rx="6" fill={B3} />
      <path d="M154 72 v10 M164 72 v10 M174 72 v10 M184 72 v10 M194 72 v10 M204 72 v10" stroke={SKY} strokeWidth="4" strokeLinecap="round" />
      <Bubble x={126} y={64} r={9} />
      <Bubble x={228} y={92} r={8} />
      <Bubble x={112} y={96} r={6} />
      <Bubble x={246} y={58} r={6} />
      <Sparkle x={86} y={48} s={1.3} />
      <Sparkle x={270} y={120} s={1} />
    </>
  )
}

function Upholstery() {
  return (
    <>
      <path d="M112 60 Q112 44 128 44 H192 Q208 44 208 60 V98 H112Z" fill={B1} />
      <rect x="98" y="90" width="124" height="38" rx="14" fill={B2} />
      <rect x="92" y="70" width="28" height="60" rx="12" fill={B1} />
      <rect x="200" y="70" width="28" height="60" rx="12" fill={B1} />
      <circle cx="140" cy="68" r="3" fill="#fff" opacity="0.8" />
      <circle cx="160" cy="68" r="3" fill="#fff" opacity="0.8" />
      <circle cx="180" cy="68" r="3" fill="#fff" opacity="0.8" />
      <circle cx="150" cy="82" r="3" fill="#fff" opacity="0.8" />
      <circle cx="170" cy="82" r="3" fill="#fff" opacity="0.8" />
      <rect x="106" y="128" width="8" height="22" rx="3" fill={B3} />
      <rect x="206" y="128" width="8" height="22" rx="3" fill={B3} />
      <Bubble x={66} y={92} r={10} />
      <Bubble x={86} y={58} r={6} />
      <Bubble x={254} y={74} r={9} />
      <Sparkle x={262} y={44} s={1.4} />
      <Sparkle x={72} y={38} s={1} />
    </>
  )
}

const ART: Record<string, () => React.ReactElement> = {
  washing: Washing,
  'dry-cleaning': DryCleaning,
  ironing: Ironing,
  'express-laundry': Express,
  'sofa-cleaning': Sofa,
  'mattress-cleaning': Mattress,
  'curtain-care': Curtain,
  'carpet-cleaning': Carpet,
  upholstery: Upholstery,
}

export default function ServiceArt({ slug }: { slug: string }) {
  const Art = ART[slug] ?? Washing
  return (
    <svg viewBox="0 0 320 170" className="h-full w-full" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <Art />
    </svg>
  )
}
