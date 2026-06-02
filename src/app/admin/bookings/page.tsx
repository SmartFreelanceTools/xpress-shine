'use client'

import BookingTable from "../../../components/admin/BookingTable"
import PageHeader from "../../../components/admin/PageHeader"

export default function BookingsPage() {
  return (
    <div className="space-y-10">

      <PageHeader
        title="Bookings"
        subtitle="Manage all customer bookings in real time"
      />

      <BookingTable />

    </div>
  )
}