const VERSION = 'xs-v5'
const STATIC = `${VERSION}-static`
const PAGES = `${VERSION}-pages`
const IMAGES = `${VERSION}-images`
const MAX_IMAGES = 150

async function trim(cache, max) {
  const keys = await cache.keys()
  if (keys.length > max) await Promise.all(keys.slice(0, keys.length - max).map((k) => cache.delete(k)))
}
const PRECACHE = ['/app', '/offline.html', '/icons/icon-192.png', '/icons/icon-512.png']

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(PAGES).then((c) => c.addAll(PRECACHE).catch(() => {}))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/login') || url.pathname.startsWith('/api')) return

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(PAGES).then((c) => c.put(req, copy))
          return res
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('/offline.html')))
    )
    return
  }

  // Product photos: once seen, they load from the phone instantly (even offline).
  if (url.pathname.startsWith('/_next/image')) {
    e.respondWith(
      caches.open(IMAGES).then(async (cache) => {
        const cached = await cache.match(req)
        if (cached) return cached
        const res = await fetch(req)
        if (res.ok) {
          cache.put(req, res.clone())
          trim(cache, MAX_IMAGES)
        }
        return res
      })
    )
    return
  }

  if (url.pathname.startsWith('/_next/static') || url.pathname.startsWith('/icons') || url.pathname.startsWith('/gallery')) {
    e.respondWith(
      caches.match(req).then((cached) => {
        const net = fetch(req).then((res) => {
          const copy = res.clone()
          caches.open(STATIC).then((c) => c.put(req, copy))
          return res
        }).catch(() => cached)
        return cached || net
      })
    )
  }
})
