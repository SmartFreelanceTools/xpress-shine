import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Express Dry Cleaners & Laundromat',
    short_name: 'Express Laundry',
    description: 'Laundry and dry cleaning pickup and delivery in Thika and Nairobi.',
    start_url: '/app',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Book pickup', url: '/app/book', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
      { name: 'Shop', url: '/app/shop', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
    ],
  }
}
