export type ServiceItem = {
  slug: string
  name: string
  tagline: string
  desc: string
  features: string[]
  badge: string
  from: string
  to: string
}

export const SERVICES: ServiceItem[] = [
  { slug: 'washing', name: 'Washing', tagline: 'Deep Clean Care', desc: 'Premium washing with careful fabric handling, stain treatment, and gentle cycle protection.', features: ['Color sorting', 'Gentle cycles', 'Fabric care'], badge: 'Popular', from: '#2563eb', to: '#38bdf8' },
  { slug: 'dry-cleaning', name: 'Dry Cleaning', tagline: 'Luxury Finish', desc: 'Professional cleaning for suits, delicate garments, and premium wear with refined finishing.', features: ['Suits', 'Wedding wear', 'Silk care'], badge: 'Premium', from: '#1d4ed8', to: '#60a5fa' },
  { slug: 'ironing', name: 'Ironing', tagline: 'Crisp Finish', desc: 'Smooth steam pressing for a clean, sharp and elegant appearance.', features: ['Steam press', 'Collars', 'Uniforms'], badge: 'Fast', from: '#0ea5e9', to: '#7dd3fc' },
  { slug: 'express-laundry', name: 'Express Laundry', tagline: 'Same-Day Care', desc: 'Quick turnaround laundry service with reliable premium finishing.', features: ['4–6 hrs', 'Priority', 'Same day'], badge: 'Express', from: '#2563eb', to: '#818cf8' },
  { slug: 'sofa-cleaning', name: 'Sofa Cleaning', tagline: 'Fresh Upholstery', desc: 'Deep upholstery cleaning that restores freshness and removes hidden dust.', features: ['Stain care', 'Odor removal', 'Fabric refresh'], badge: 'Home', from: '#0891b2', to: '#67e8f9' },
  { slug: 'mattress-cleaning', name: 'Mattress Cleaning', tagline: 'Healthy Sleep', desc: 'Hygienic mattress deep cleaning for a cleaner and healthier sleep environment.', features: ['Dust removal', 'Sanitization', 'Deep clean'], badge: 'Care', from: '#2563eb', to: '#93c5fd' },
  { slug: 'curtain-care', name: 'Curtain Care', tagline: 'Elegant Refresh', desc: 'Gentle curtain cleaning that preserves fabric quality and freshness.', features: ['Steam care', 'Dust removal', 'Safe wash'], badge: 'Premium', from: '#1e40af', to: '#38bdf8' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', tagline: 'Deep Clean', desc: 'Professional carpet cleaning for homes and offices with deep extraction.', features: ['Deep wash', 'Fast dry', 'Odor removal'], badge: 'Value', from: '#2563eb', to: '#22d3ee' },
  { slug: 'upholstery', name: 'Upholstery', tagline: 'Fabric Care', desc: 'Soft, safe cleaning for chairs, cushions and fabric furniture.', features: ['Fabric safe', 'Stain care', 'Fresh finish'], badge: 'Luxury', from: '#4f46e5', to: '#7dd3fc' },
]
