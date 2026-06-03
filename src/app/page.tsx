import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Products from "../components/Products"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import MapSection from "../components/MapSection"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import MobileSidebar from '../components/MobileSidebar'
import MobileHero from '../components/MobileHero'
import MobileServices from '../components/MobileServices'
import MobileProducts from '../components/MobileProducts'
import MobileHowItWorks from "../components/MobileHowItWorks"
import MobileTestimonials from '../components/MobileTestimonials'
import MobileGallery from '../components/MobileGallery'
import MobileMapSection from "../components/MobileMapSection"
import MobileCTA from "../components/MobileCTA"
import MobileFooter from '../components/MobileFooter'
import MobileWhatsAppButton from '../components/MobileWhatsAppButton'


export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#f8faff] text-white pb-24 sm:pb-0 scroll-smooth touch-pan-y">

      {/* ================= GLOBAL BACKGROUND LAYER ================= */}
      <div className="fixed inset-0 -z-10 bg-[#020812]" />

      {/* soft ambient glow system */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-blue-500/10 blur-[160px] rounded-full -z-10" />
      <div className="fixed -bottom-[15%] -left-[10%] w-[60%] h-[60%] bg-brand-yellow/10 blur-[180px] rounded-full -z-10" />
      <div className="fixed -bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-brand-blue/20 blur-[200px] rounded-full -z-10" />

      {/* subtle grid overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:45px_45px]" />

      {/* vignette depth */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,8,18,0.4)_60%,rgba(2,8,18,0.95)_100%)]" />

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section id="home" className="relative">
  <div className="hidden lg:block">
    <Hero />
  </div>

  <div className="block lg:hidden">
    <MobileHero />
  </div>
</section>

      

      {/* ================= SERVICES ================= */}
      <section id="services" className="relative">
  {/* Desktop */}
  <div className="hidden lg:block py-10 px-4 sm:px-0">
    <Services />
  </div>

  {/* Mobile */}
  <div className="block lg:hidden">
    <MobileServices />
  </div>
</section>

      {/* ================= PRODUCTS ================= */}
<section id="products" className="relative">
  <div className="hidden lg:block py-10 px-4 sm:px-0">
    <Products />
  </div>

  <div className="block lg:hidden">
    <MobileProducts />
  </div>
</section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="relative">
        {/* Desktop */}
        <div className="hidden lg:block py-10 px-4 sm:px-0">
          <HowItWorks />
        </div>

        {/* Mobile */}
        <div className="block lg:hidden">
          <MobileHowItWorks />
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
<section id="testimonials" className="relative">

  {/* Desktop */}
  <div className="hidden lg:block py-10 px-4 sm:px-0">
    <Testimonials />
  </div>

  {/* Mobile */}
  <div className="block lg:hidden">
    <MobileTestimonials />
  </div>

</section>

      {/* ================= GALLERY ================= */}
<section id="gallery" className="relative">

  {/* Desktop */}
  <div className="hidden lg:block py-10 px-4 sm:px-0">
    <Gallery />
  </div>

  {/* Mobile */}
  <div className="block lg:hidden">
    <MobileGallery />
  </div>

</section>

      {/* ================= MAP / CONTACT ================= */}
      <section id="contact" className="relative">
  {/* Desktop */}
  <div className="hidden lg:block py-10 px-4 sm:px-0">
    <MapSection />
  </div>

  {/* Mobile */}
  <div className="block lg:hidden">
    <MobileMapSection />
  </div>
</section>

      {/* ================= CTA ================= */}
<section id="cta" className="relative">
  <div className="hidden lg:block">
    <CTA />
  </div>


{/* Mobile */}
  <div className="block lg:hidden">
    <MobileCTA />
  </div>
</section>

      {/* ================= FOOTER ================= */}
      <div className="hidden lg:block">
  <Footer />
</div>

{/* Mobile */}
<div className="block lg:hidden">
  <MobileFooter />
</div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <div className="hidden lg:block">
  <WhatsAppButton />
</div>

<div className="block lg:hidden">
  <MobileWhatsAppButton />
</div>

      <MobileSidebar />

    </main>
  )
}