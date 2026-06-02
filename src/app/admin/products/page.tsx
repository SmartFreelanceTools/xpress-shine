'use client'

import ProductUpload from "../../../components/admin/ProductUpload"
import PageHeader from "../../../components/admin/PageHeader"

export default function ProductsPage() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <PageHeader
        title="Products"
        subtitle="Upload and manage cleaning products"
      />

      {/* UPLOAD SECTION */}
      <ProductUpload />

    </div>
  )
}