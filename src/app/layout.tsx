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
const ogImage = "https://azcsllucavtiqdqymvtz.supabase.co/storage/v1/object/public/seo/og-image.jpeg"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Express Dry Cleaners | Laundry & Dry Cleaning in Thika & Nairobi",
    template: "%s | Express Dry Cleaners",
  },

  description:
    "Express Dry Cleaners offers professional laundry and dry cleaning services in Thika and Nairobi. Shop fabric softeners, detergents, bleach, toilet cleaners, shower gels & more — with delivery across Kenya.",

  keywords: [
    "dry cleaning Thika",
    "laundry services Thika",
    "dry cleaning Nairobi",
    "laundry Nairobi",
    "Express Dry Cleaners",
    "Express Drycleaners Kenya",
    "detergents Kenya",
    "fabric softener Kenya",
    "toilet cleaner Kenya",
    "bleach Kenya",
    "white restorer Kenya",
    "shower gel Kenya",
    "cleaning products Kenya",
    "laundry pickup Nairobi",
    "professional dry cleaning Kenya",
    "clothes cleaning Thika",
    "online cleaning products Kenya",
  ],

  authors: [{ name: "Express Dry Cleaners", url: baseUrl }],
  creator: "Express Dry Cleaners",
  publisher: "Express Dry Cleaners",

  category: "Laundry & Cleaning Services",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "Express Dry Cleaners | Laundry & Dry Cleaning in Thika & Nairobi",
    description:
      "Professional laundry and dry cleaning services in Thika and Nairobi. Shop detergents, fabric softeners, bleach & more — delivered across Kenya.",
    url: baseUrl,
    siteName: "Express Dry Cleaners",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Express Dry Cleaners — Laundry & Dry Cleaning Services in Thika and Nairobi, Kenya",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Express Dry Cleaners | Laundry & Dry Cleaning in Thika & Nairobi",
    description:
      "Professional laundry and dry cleaning in Thika & Nairobi. Cleaning products delivered across Kenya.",
    images: [ogImage],
    site: "@expressdrycleaners",
    creator: "@expressdrycleaners",
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
              "@id": `${baseUrl}/#business`,
              name: "Express Dry Cleaners",
              alternateName: "Express Drycleaners",
              url: baseUrl,
              logo: "https://www.expressdrycleaners.co.ke/favicon-512x512.png",
image: ogImage,
              telephone: "+254722389764",
              priceRange: "KSh",
              currenciesAccepted: "KES",
              paymentAccepted: "Cash, M-Pesa",
              description:
                "Professional laundry, dry cleaning, and cleaning products supplier in Nairobi and Thika with fast delivery across Kenya.",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Thika & Nairobi Service Area",
                  addressCountry: "KE",
                },
                
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Nairobi",
                },
                {
                  "@type": "City",
                  name: "Thika",
                },
                {
                  "@type": "Country",
                  name: "Kenya",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Laundry, Dry Cleaning & Cleaning Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Laundry Services",
                      description: "Professional laundry services in Thika and Nairobi",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dry Cleaning Services",
                      description: "Professional dry cleaning services in Thika and Nairobi",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Cleaning Products",
                      description:
                        "Fabric softeners, detergents, bleach, toilet cleaners, shower gels, white restorer — delivered across Kenya",
                    },
                  },
                ],
              },
              sameAs: [
  "https://www.instagram.com/yourpage",
  "https://www.facebook.com/yourpage",
],
            }),
          }}
        />

        {/* Vercel Analytics */}
        <Analytics />

      </body>
    </html>
  )
}