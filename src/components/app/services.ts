export type ServiceItem = {
  slug: string
  name: string
  tagline: string
  desc: string
  features: string[]
  badge: string
  icon: string
  color: 'blue' | 'cyan' | 'red'
}

export const SERVICES: ServiceItem[] = [
  { slug: 'washing', name: 'Washing', tagline: 'Deep Clean Care', desc: 'Premium washing with careful fabric handling, stain treatment, and gentle cycle protection.', features: ['Color sorting', 'Gentle cycles', 'Fabric care'], badge: 'Popular', icon: '🧺', color: 'blue' },
  { slug: 'dry-cleaning', name: 'Dry Cleaning', tagline: 'Luxury Finish', desc: 'Professional cleaning for suits, delicate garments, and premium wear with refined finishing.', features: ['Suits', 'Wedding wear', 'Silk care'], badge: 'Premium', icon: '👔', color: 'cyan' },
  { slug: 'ironing', name: 'Ironing', tagline: 'Crisp Finish', desc: 'Smooth steam pressing for a clean, sharp and elegant appearance.', features: ['Steam press', 'Collars', 'Uniforms'], badge: 'Fast', icon: '🔥', color: 'red' },
  { slug: 'express-laundry', name: 'Express Laundry', tagline: 'Same-Day Care', desc: 'Quick turnaround laundry service with reliable premium finishing.', features: ['4–6 hrs', 'Priority', 'Same day'], badge: 'Express', icon: '⚡', color: 'blue' },
  { slug: 'sofa-cleaning', name: 'Sofa Cleaning', tagline: 'Fresh Upholstery', desc: 'Deep upholstery cleaning that restores freshness and removes hidden dust.', features: ['Stain care', 'Odor removal', 'Fabric refresh'], badge: 'Home', icon: '🛋️', color: 'cyan' },
  { slug: 'mattress-cleaning', name: 'Mattress Cleaning', tagline: 'Healthy Sleep', desc: 'Hygienic mattress deep cleaning for a cleaner and healthier sleep environment.', features: ['Dust removal', 'Sanitization', 'Deep clean'], badge: 'Care', icon: '🛏️', color: 'blue' },
  { slug: 'curtain-care', name: 'Curtain Care', tagline: 'Elegant Refresh', desc: 'Gentle curtain cleaning that preserves fabric quality and freshness.', features: ['Steam care', 'Dust removal', 'Safe wash'], badge: 'Premium', icon: '🪟', color: 'red' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', tagline: 'Deep Clean', desc: 'Professional carpet cleaning for homes and offices with deep extraction.', features: ['Deep wash', 'Fast dry', 'Odor removal'], badge: 'Value', icon: '🧼', color: 'cyan' },
  { slug: 'upholstery', name: 'Upholstery', tagline: 'Fabric Care', desc: 'Soft, safe cleaning for chairs, cushions and fabric furniture.', features: ['Fabric safe', 'Stain care', 'Fresh finish'], badge: 'Luxury', icon: '✨', color: 'blue' },
]
