'use client'

import Stats from "../../components/admin/Stats"
import ImageUpload from "../../components/admin/ImageUpload"
import ProductUpload from "../../components/admin/ProductUpload"
import BookingTable from "../../components/admin/BookingTable"

export default function AdminPage() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Express Admin
        </h1>

        <p className="text-slate-500 mt-2">
          Premium Dashboard — Manage bookings, customers & products in real time
        </p>

        <div className="mt-6 w-44 h-[2px] bg-gradient-to-r from-blue-500 to-transparent" />
      </div>

      {/* CONTENT */}
      <Stats />

      <ImageUpload />

      <ProductUpload />

      <BookingTable />

    </div>
  )
}