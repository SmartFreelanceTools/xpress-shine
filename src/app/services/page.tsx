import Services from "../../components/Services"
import MobileServices from "../../components/MobileServices"

export const metadata = {
  title: 'Our Services | Express Drycleaners',
  description:
    'Premium laundry and cleaning services in Kenya including washing, dry cleaning, ironing, upholstery, carpet and more.',
}

export default function ProductsPage() {
  return (
    <>
      <div className="hidden lg:block">
        <Services />
      </div>

      <div className="lg:hidden">
        <MobileServices />
      </div>
    </>
  )
}