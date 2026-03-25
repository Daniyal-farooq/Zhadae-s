import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Menu",
  description: "Explore our delicious selection of handcrafted desserts at Twist - The Dessert Shop. From signature cakes to artisan gelato, discover your next sweet indulgence.",
  openGraph: {
    title: "Our Menu | Twist - The Dessert Shop",
    description: "Explore our delicious selection of handcrafted desserts at Twist - The Dessert Shop.",
  },
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
