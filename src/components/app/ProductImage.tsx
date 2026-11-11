import Image from 'next/image'

/**
 * Product photo served through Next's image optimiser: resized to the size it is shown at,
 * converted to WebP/AVIF and cached on the CDN. The parent must be `relative` with a fixed shape.
 */
export default function ProductImage({
  src,
  alt,
  sizes,
  priority = false,
  className = 'object-cover',
}: {
  src?: string | null
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  if (!src) return <div className="absolute inset-0 bg-slate-100" />
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={70}
      priority={priority}
      unoptimized={src.startsWith('http://')}
      className={className}
    />
  )
}
