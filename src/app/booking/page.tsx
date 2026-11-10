'use client'

import { useRouter } from 'next/navigation'
import BookingModal from '../../components/BookingModal'

export default function BookingPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#f8faff]">
      <BookingModal onClose={() => router.push('/')} />
    </div>
  )
}
