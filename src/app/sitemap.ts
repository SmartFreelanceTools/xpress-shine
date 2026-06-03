import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xpress-shine.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://xpress-shine.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://xpress-shine.vercel.app/products",
      lastModified: new Date(),
    },
    {
      url: "https://xpress-shine.vercel.app/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://xpress-shine.vercel.app/contact",
      lastModified: new Date(),
    },
  ]
}