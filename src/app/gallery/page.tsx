import MobileGallery from "../../components/MobileGallery"

export const metadata = {
  title: "Gallery | Express Drycleaners",
  description:
    "View our premium laundry and dry cleaning results. Real transformations from Express Drycleaners Kenya.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <MobileGallery />
    </main>
  )
}