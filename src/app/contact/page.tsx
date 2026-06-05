import Contact from "../../components/Contact"

export const metadata = {
  title: "Contact Us | Express Drycleaners",
  description:
    "Get in touch with Express Drycleaners in Kenya. Call, WhatsApp, or visit us for fast and premium laundry services.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Contact />
    </main>
  )
}