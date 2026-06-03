'use client'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  const waLink =
    "https://wa.me/254722389764?text=Hello%20EXPRESS%20Drycleaners%2C%20I%20would%20like%20to%20book%20a%20service."

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">

      {/* Premium Dark Glass Tooltip */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
      >
        <div className="relative bg-[#0A1120]/90 backdrop-blur-2xl border border-white/10 text-white px-5 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-black text-[10px] uppercase tracking-[0.2em]">Express Concierge</span>
          </div>
          <p className="text-sm font-light text-gray-300 whitespace-nowrap">
            Book your pickup instantly
          </p>

          {/* Elegant Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A1120]/90 rotate-45 border-r border-t border-white/10" />
        </div>
      </div>

      {/* Button wrapper */}
      <div className="relative group">

        {/* Cinematic Glow */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />

        {/* Subtle Outer Ripple */}
        <div className="absolute inset-0 rounded-full border border-[#25D366]/30 animate-[ping_3s_linear_infinite]" />

        {/* Main WhatsApp Button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(37,211,102,0.3)] transition-all duration-500 hover:scale-110 hover:-rotate-12 active:scale-95"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}