import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

// Escape anything the customer typed before putting it in the email HTML.
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

function prettyDate(iso: string) {
  const d = new Date(`${iso}T00:00:00+03:00`)
  if (isNaN(d.getTime())) return iso || 'Not set'
  return d.toLocaleDateString('en-KE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Nairobi' })
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const to = (process.env.NOTIFY_EMAIL || '').split(',').map((s) => s.trim()).filter(Boolean)
  const from = process.env.RESEND_FROM || 'Express Bookings <onboarding@resend.dev>'

  if (!apiKey || to.length === 0) {
    console.error('notify-booking: RESEND_API_KEY or NOTIFY_EMAIL is not set')
    return NextResponse.json({ ok: false, error: 'Email is not configured' }, { status: 500 })
  }

  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 })
  }

  const name = clean(body.customer_name, 120)
  const phone = clean(body.phone, 20)
  const location = clean(body.location, 300)
  const service = clean(body.service, 800)
  const isProduct = body.item_type === 'product'
  const items: { name: string; price: string }[] = Array.isArray(body.items)
    ? body.items.slice(0, 40).map((i: any) => ({ name: clean(i?.name, 120), price: clean(i?.price, 40) })).filter((i: any) => i.name)
    : []
  const pickup = clean(body.pickup_date, 20)
  const notes = clean(body.notes, 1000)
  const source = clean(body.type, 20) || 'website'

  // Only accept real-looking Kenyan bookings so the endpoint can't be used to spam you.
  if (!name || !/^\+254[17]\d{8}$/.test(phone) || !service) {
    return NextResponse.json({ ok: false, error: 'Invalid booking' }, { status: 400 })
  }

  const when = pickup ? prettyDate(pickup) : 'Not set'
  const waLink = `https://wa.me/${phone.replace('+', '')}`
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;color:#64748b;font-size:13px;white-space:nowrap">${label}</td><td style="padding:8px 12px;color:#0f172a;font-size:15px;font-weight:600">${value}</td></tr>`

  const productsHtml =
    isProduct && items.length
      ? items.map((i) => `${esc(i.name)}${i.price ? ` <span style="color:#2563eb">- ${esc(i.price)}</span>` : ''}`).join('<br>')
      : esc(service)
  const productsText = isProduct && items.length ? items.map((i) => `- ${i.name}${i.price ? ` (${i.price})` : ''}`).join('\n') : service

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;background:#f8faff;padding:20px">
    <div style="background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;padding:18px 20px;border-radius:16px 16px 0 0">
      <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.85">${isProduct ? 'New product order' : 'New booking'}</div>
      <div style="font-size:22px;font-weight:800;margin-top:4px">${esc(name)}</div>
    </div>
    <table style="width:100%;background:#fff;border-collapse:collapse;border-radius:0 0 16px 16px">
      ${row(isProduct ? 'Products' : 'Service', productsHtml)}
      ${row('Pickup date', esc(when))}
      ${row('Location', esc(location || '-'))}
      ${row('Phone', `<a href="tel:${esc(phone)}" style="color:#2563eb;text-decoration:none">${esc(phone)}</a>`)}
      ${row('Notes', esc(notes || 'No notes'))}
      ${row('Source', esc(source))}
    </table>
    <div style="margin-top:16px;text-align:center">
      <a href="tel:${esc(phone)}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 22px;border-radius:12px;text-decoration:none;font-weight:700;margin:4px">Call customer</a>
      <a href="${esc(waLink)}" style="display:inline-block;background:#16a34a;color:#fff;padding:12px 22px;border-radius:12px;text-decoration:none;font-weight:700;margin:4px">WhatsApp customer</a>
    </div>
  </div>`

  const text = `${isProduct ? 'NEW PRODUCT ORDER' : 'NEW BOOKING'}\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\n${isProduct ? 'Products:\n' : 'Service: '}${productsText}\nPickup: ${when}\nNotes: ${notes || 'None'}\nWhatsApp: ${waLink}`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, subject: isProduct ? `New product order: ${name}` : `New booking: ${name} - ${service}`, html, text }),
    })
    if (!res.ok) {
      console.error('notify-booking: Resend error', res.status, await res.text())
      return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('notify-booking: send failed', err)
    return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 })
  }
}
