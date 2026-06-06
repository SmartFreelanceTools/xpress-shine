import MapSection from "../../components/MapSection"
import MobileMapSection from "../../components/MobileMapSection"

export const metadata = {
  title: "Contact Us | Express Drycleaners",
  description:
    "Get in touch with Express Drycleaners in Kenya. Call, WhatsApp, or visit us for fast and premium laundry services.",
}

export default function ProductsPage() {
  return (
    <>
      <div className="hidden lg:block">
        <MapSection />
      </div>

      <div className="lg:hidden">
        <MobileMapSection />
      </div>
    </>
  )
}