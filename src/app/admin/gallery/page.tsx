'use client'

import PageHeader from "../../../components/admin/PageHeader"
import GalleryUpload from "../../../components/admin/ImageUpload"

export default function GalleryPage() {
  return (
    <div className="space-y-10">

      <PageHeader
        title="Gallery"
        subtitle="Upload and manage your cleaning service visuals"
      />

      <GalleryUpload />

    </div>
  )
}