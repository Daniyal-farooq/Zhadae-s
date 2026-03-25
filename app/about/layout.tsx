import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind Zhadae's. Learn about our passion for crafting artisanal cheesecakes in Logan, Australia.",
  openGraph: {
    title: "About Us | Zhadae's",
    description: "Discover the story behind Zhadae's artisanal cheesecakes.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
