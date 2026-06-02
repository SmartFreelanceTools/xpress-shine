'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestPage() {

  const [loading, setLoading] = useState(false)

  async function testInsert() {
    setLoading(true)

    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          customer_name: 'John Doe',
          phone: '0712345678',
          location: 'Thika',
          service: 'Dry Cleaning',
          notes: 'Handle with care',
          status: 'pending'
          // ❌ DO NOT send pickup_date or created_at
          // Supabase handles created_at automatically
        }
      ])
      .select()

    console.log('DATA:', data)
    console.log('ERROR:', error)

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert('Booking inserted successfully ✅')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={testInsert}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-semibold transition"
      >
        {loading ? 'Saving...' : 'Test Supabase Insert'}
      </button>
    </div>
  )
}