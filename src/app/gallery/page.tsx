import Gallery from "../../components/Gallery"
import MobileGallery from "../../components/MobileGallery"

export const metadata = {
  title: "Gallery | Express Drycleaners",
  description:
    "View our premium laundry and dry cleaning results. Real transformations from Express Drycleaners Kenya.",
}

export default function ProductsPage() {
  return (
    <>
      <div className="hidden lg:block">
        <Gallery />
      </div>

      <div className="lg:hidden">
        <MobileGallery />
      </div>
    </>
  )
}