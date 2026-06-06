import type { Metadata } from "next"
import "./globals.css"
import { DM_Sans, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

// Body font
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
})

// Display font
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const baseUrl = "https://www.expressdrycleaners.co.ke"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title:
    "Express Dry Cleaners Thika & Nairobi | Laundry & Cleaning Products",

  description:
    "Professional laundry and dry cleaning services in Thika and Nairobi. We also sell fabric softeners, toilet cleaners, bleach, white restorer, shower gels, detergents, and premium cleaning products with delivery across Kenya.",

  keywords: [
    "laundry services Thika",
    "dry cleaning Thika",
    "laundry Nairobi",
    "dry cleaning Nairobi",
    "detergents Kenya",
    "fabric softener Kenya",
    "toilet cleaner Kenya",
    "shower gel Kenya",
    "cleaning products Kenya",
    "Express Drycleaners",
  ],
  

  robots: {
  index: true,
  follow: true,
},

    alternates: {
    canonical: baseUrl,
  },
  
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon-512x512.png",
  }, 

  openGraph: {
    title:
      "Express Drycleaners | Laundry, Dry Cleaning & Cleaning Products",

    description:
      "Professional laundry and dry cleaning services in Thika and Nairobi. Cleaning products delivered across Kenya.",

    url: baseUrl,

    siteName: "Express Drycleaners",

    locale: "en_US",

    type: "website",

    images: [
  {
    url: "https://azcsllucavtiqdqymvtz.supabase.co/storage/v1/object/public/seo/og-image.jpeg",
    width: 1200,
    height: 630,
    alt: "Express Dry Cleaners Thika & Nairobi",
  },
],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Express Drycleaners | Laundry, Dry Cleaning Services & Cleaning Products in Kenya",

    description:
      "Professional laundry and dry cleaning services in Thika and Nairobi. Cleaning products delivered across Kenya.",

    images: [
  "https://azcsllucavtiqdqymvtz.supabase.co/storage/v1/object/public/seo/og-image.jpeg",
],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">

      <body
        className={`
          ${dmSans.variable}
          ${bebas.variable}
          bg-[#020812]
          text-white
          antialiased
          font-dm
          relative
        `}
      >

        {/* ================= BASE BACKGROUND ================= */}
        <div className="fixed inset-0 -z-10 bg-[#020812]" />

        {/* ================= PREMIUM LIGHTING SYSTEM ================= */}

        {/* Top soft glow (adds depth from above) */}
        <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-blue-500/10 blur-[160px] rounded-full -z-10" />

        {/* Bottom left brand glow */}
        <div className="fixed -bottom-[15%] -left-[15%] w-[55%] h-[55%] bg-[#4169E1]/15 blur-[180px] rounded-full -z-10" />

        {/* Bottom right warm accent glow */}
        <div className="fixed -bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-yellow-400/10 blur-[200px] rounded-full -z-10" />

        {/* Center subtle vignette */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,8,18,0.4)_70%,rgba(2,8,18,0.9)_100%)]" />

        {/* ================= NOISE TEXTURE ================= */}
        <div
          className="fixed inset-0 -z-10 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        {/* ================= GRID DEPTH LAYER ================= */}
        <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:45px_45px]" />

        {/* ================= CONTENT ================= */}
        <main className="relative min-h-screen">
          {children}
        </main>

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Express Dry Cleaners & Laundromat",
      url: baseUrl,
      logo: "https://www.expressdrycleaners.co.ke/favicon-512x512.png",
      image:
        "https://azcsllucavtiqdqymvtz.supabase.co/storage/v1/object/public/seo/og-image.jpeg",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi & Thika",
        addressCountry: "KE",
      },

      areaServed: ["Nairobi", "Thika", "Kenya"],

      description:
        "Professional laundry, dry cleaning, and cleaning products supplier in Nairobi and Thika with fast delivery across Kenya.",

      serviceType: "Laundry & Dry Cleaning",

      priceRange: "Affordable",

      telephone: "+254722389764",
    }),
  }}
/>

{/* Vercel Analytics */}
<Analytics />



      </body>
    </html>
  )
}