import MobileProducts from "../../components/MobileProducts"

export const metadata = {
  title: "Cleaning Products | Express Drycleaners",
  description:
    "Shop premium laundry and cleaning products in Kenya. Detergents, fabric softeners, bleach, toilet cleaners, and more.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <MobileProducts />
    </main>
  )
}