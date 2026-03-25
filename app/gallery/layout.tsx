import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our visual gallery showcasing artisanal cheesecakes and sweet creations at Zhadae's in Logan, Australia.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
