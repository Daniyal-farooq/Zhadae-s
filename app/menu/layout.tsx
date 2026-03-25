import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Menu",
  description: "Explore our artisanal cheesecake menu at Zhadae's. Choose from 6 delicious flavors including Lotus, Banofee, Oreo, Peanut Butter, Strawberry, and White Chocolate Raspberry.",
  openGraph: {
    title: "Our Menu | Zhadae's",
    description: "Explore our artisanal cheesecake menu at Zhadae's in Logan, Australia.",
  },
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
