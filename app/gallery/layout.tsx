import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our visual gallery showcasing handcrafted desserts, French pastries, artisan gelato, and the elegant ambiance at Twist - The Dessert Shop in Faisalabad.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
