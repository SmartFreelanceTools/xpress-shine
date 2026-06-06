import Products from "../../components/Products"
import MobileProducts from "../../components/MobileProducts"

export const metadata = {
  title: "Cleaning Products Nairobi | Express Drycleaners",
  description:
    "Shop premium laundry detergents, fabric softeners, bleach, toilet cleaners, shower gels and household cleaning products in Nairobi and across Kenya.",
}

export default function ProductsPage() {
  return (
    <>
      <div className="hidden lg:block">
        <Products />
      </div>

      <div className="lg:hidden">
        <MobileProducts />
      </div>
    </>
  )
}