import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    'Home',
    'Services',
    'Products',
    'How It Works',
    'Gallery',
    'Contact',
  ]

  return (
<footer

style={{
background:'#f8faff',
fontFamily:"'DM Sans','Plus Jakarta Sans',sans-serif",
}}
>

{/* TOP LINE */}

<div className="h-[2px] bg-gradient-to-r from-[#E34234] via-[#4169E1] to-[#00C853]" />

{/* SAME BACKGROUND */}

<div className="absolute inset-0 overflow-hidden">

<div
className="absolute rounded-full"
style={{
width:700,
height:700,
top:-250,
left:-120,
background:
'radial-gradient(circle,rgba(219,234,254,.7) 0%,transparent 70%)',
filter:'blur(60px)'
}}
/>

<div
className="absolute rounded-full"
style={{
width:500,
height:500,
top:80,
right:-100,
background:
'radial-gradient(circle,rgba(186,230,253,.45) 0%,transparent 70%)',
filter:'blur(50px)'
}}
/>

<div
className="absolute rounded-full"
style={{
width:450,
height:450,
bottom:-120,
left:'30%',
background:
'radial-gradient(circle,rgba(191,219,254,.35) 0%,transparent 70%)',
filter:'blur(45px)'
}}
/>

</div>


<div className="relative max-w-7xl mx-auto px-6 py-20">

<div className="grid lg:grid-cols-4 gap-14">

{/* BRAND */}

<div className="lg:col-span-2">

{/* PREMIUM FOOTER LOGO */}
<div className="flex items-center gap-4 mb-8 group">

  {/* Logo */}
  <div className="relative">

    {/* Glow */}
    <div className="
      absolute inset-0
      rounded-[22px]
      bg-blue-400/20
      blur-2xl
      opacity-70
    "/>

    {/* Box */}
    <div
      className="
        relative
        w-[64px] h-[64px]
        rounded-[22px]
        bg-gradient-to-br
        from-[#2563eb]
        via-[#1d4ed8]
        to-[#38bdf8]
        flex items-center justify-center
        shadow-[0_12px_35px_rgba(37,99,235,.25)]
      "
    >

      {/* shine */}
      <div className="
        absolute inset-0
        rounded-[22px]
        bg-gradient-to-tr
        from-transparent
        via-white/20
        to-transparent
      "/>

      <span className="
        relative z-10
        text-white
        text-[30px]
        font-black
        tracking-[-0.08em]
      ">
        X
      </span>

    </div>

  </div>


  {/* Brand text */}
  <div className="leading-none">

    <div className="flex items-center gap-2">

      <span className="
        text-slate-900
        text-[34px]
        font-black
        tracking-[-0.05em]
      ">
        XPRESS
      </span>

      <span className="
        text-[#2563eb]
        text-[34px]
        font-black
        tracking-[-0.05em]
      ">
        SHINE
      </span>

    </div>

    <span className="
      mt-2 block
      text-[11px]
      uppercase
      tracking-[0.35em]
      text-slate-400
      font-semibold
    ">
      Premium Laundry Care
    </span>

  </div>

</div>


<p className="max-w-md text-slate-500 leading-relaxed">

XPRESS SHINE offers premium laundry,
dry cleaning, pickup and delivery
services in Thika with elegant care,
fast turnaround and professional finishing.

</p>


{/* PREMIUM SOCIALS */}
<div className="flex gap-4 mt-8">

  {/* WhatsApp */}
  <a
    href="https://wa.me/254722389764"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      w-14 h-14
      rounded-2xl
      bg-white
      border border-slate-200
      flex items-center justify-center
      hover:bg-[#25D366]
      hover:scale-110
      transition-all duration-300
      shadow-md
    "
  >
    <FaWhatsapp
      className="
        text-[#25D366]
        text-[28px]
        drop-shadow-[0_0_8px_rgba(37,211,102,.45)]
        group-hover:text-white
        transition
      "
    />
  </a>


  {/* Instagram */}
  <a
    href="https://instagram.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      w-14 h-14
      rounded-2xl
      bg-white
      border border-slate-200
      flex items-center justify-center
      hover:bg-gradient-to-br
      hover:from-[#833AB4]
      hover:via-[#E1306C]
      hover:to-[#FCAF45]
      hover:scale-110
      transition-all duration-300
      shadow-md
    "
  >
    <FaInstagram
      className="
        text-[#E1306C]
        text-[28px]
        drop-shadow-[0_0_8px_rgba(225,48,108,.45)]
        group-hover:text-white
        transition
      "
    />
  </a>


  {/* Facebook */}
  <a
    href="https://facebook.com/YOUR_PAGE"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      w-14 h-14
      rounded-2xl
      bg-white
      border border-slate-200
      flex items-center justify-center
      hover:bg-[#1877F2]
      hover:scale-110
      transition-all duration-300
      shadow-md
    "
  >
    <FaFacebookF
      className="
        text-[#1877F2]
        text-[28px]
        drop-shadow-[0_0_8px_rgba(24,119,242,.50)]
        group-hover:text-white
        transition
      "
    />
  </a>


  {/* TikTok */}
  <a
    href="https://tiktok.com/@YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      w-14 h-14
      rounded-2xl
      bg-white
      border border-slate-200
      flex items-center justify-center
      hover:bg-black
      hover:scale-110
      transition-all duration-300
      shadow-md
    "
  >
    <FaTiktok
      className="
        text-black
        text-[28px]
        drop-shadow-[0_0_6px_rgba(0,0,0,.35)]
        group-hover:text-white
        transition
      "
    />
  </a>

</div>

</div>


{/* QUICK LINKS */}

<div>

<h4 className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-7">

Quick Links

</h4>

<ul className="space-y-4">

{links.map((l)=>(

<li key={l}>

<a
href={`#${l.toLowerCase().replace(/ /g,'-')}`}
className="
group flex items-center gap-3
text-slate-500
hover:text-slate-900
transition
"
>

<span className="w-0 group-hover:w-5 h-px bg-blue-600 transition"/>

{l}

</a>

</li>

))}

</ul>

</div>



{/* CONTACT */}

<div>

<h4 className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-7">

Contact

</h4>

<div className="space-y-6 text-sm">

<div>

<p className="text-slate-400 mb-1">

Phone

</p>

<p className="text-slate-700">

+254 714 066 855

</p>

<p className="text-slate-700">

+254 722 389 764

</p>

</div>


<div>

<p className="text-slate-400 mb-1">

Location

</p>

<p className="text-slate-700">

Ngoingwa, Thika

</p>

</div>


<div>

<p className="text-slate-400 mb-1">

Working Hours

</p>

<p className="text-slate-700">

Mon – Sat • 7AM – 8PM

</p>

</div>

</div>

</div>

</div>



{/* BOTTOM BAR */}

<div
className="
mt-16 pt-8
border-t border-slate-200
flex flex-col md:flex-row
justify-between
gap-4
"
>

<p className="text-slate-400 text-xs">

© {year} XPRESS SHINE.
All rights reserved.

</p>

<p className="text-slate-400 text-xs">

Designed with premium care in Thika.

</p>

</div>

</div>

</footer>
  )
}