'use client'

import { useState } from 'react'

export default function SmartBookingModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)

  const [service, setService] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')

  const services = ['Laundry', 'Dry Cleaning', 'Ironing', 'Express Service']
  const locations = ['Ngoingwa', 'Thika CBD', 'Kilimani', 'Nairobi', 'Other']
  const times = ['Morning', 'Afternoon', 'Evening', 'Anytime']

  const next = () => setStep((s) => Math.min(s + 1, 3))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const sendWhatsApp = () => {
    const message = `
Hello EXPRESS Drycleaners 👋

I would like to book a service:

📦 Service: ${service}
📍 Location: ${location}
⏰ Time: ${time}

Please confirm pickup.
    `

    const url = `https://wa.me/254722389764?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition"
      >
        🚀 Book Pickup
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center px-4">

          <div className="w-full max-w-lg bg-[#0A1120] border border-white/10 rounded-3xl p-6 text-white relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              ✕
            </button>

            {/* Progress */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full ${
                    step >= s ? 'bg-[#25D366]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Select Service</h2>

                <div className="grid gap-3">
                  {services.map((s) => (
                    <button
                      key={s}
                      onClick={() => setService(s)}
                      className={`p-3 rounded-xl border transition ${
                        service === s
                          ? 'bg-[#25D366] text-black border-[#25D366]'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <button
                  disabled={!service}
                  onClick={next}
                  className="mt-6 w-full bg-white text-black py-3 rounded-xl font-semibold disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Select Location</h2>

                <div className="grid gap-3">
                  {locations.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocation(l)}
                      className={`p-3 rounded-xl border transition ${
                        location === l
                          ? 'bg-[#25D366] text-black border-[#25D366]'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <button onClick={back} className="w-1/2 py-3 rounded-xl border border-white/10">
                    Back
                  </button>
                  <button
                    disabled={!location}
                    onClick={next}
                    className="w-1/2 py-3 rounded-xl bg-white text-black font-semibold disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Pickup Time</h2>

                <div className="grid gap-3">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`p-3 rounded-xl border transition ${
                        time === t
                          ? 'bg-[#25D366] text-black border-[#25D366]'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <button onClick={back} className="w-1/2 py-3 rounded-xl border border-white/10">
                    Back
                  </button>

                  <button
                    disabled={!time}
                    onClick={sendWhatsApp}
                    className="w-1/2 py-3 rounded-xl bg-[#25D366] text-black font-bold disabled:opacity-40"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  )
}