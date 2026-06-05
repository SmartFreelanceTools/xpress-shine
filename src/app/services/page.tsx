import MobileServices from "../../components/MobileServices"

export const metadata = {
  title: 'Our Services | Express Drycleaners',
  description:
    'Premium laundry and cleaning services in Kenya including washing, dry cleaning, ironing, upholstery, carpet and more.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <MobileServices />
    </main>
  )
}