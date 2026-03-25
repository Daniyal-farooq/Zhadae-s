import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind Twist - The Dessert Shop. Learn about our passion for crafting exquisite desserts and our commitment to bringing sweetness to Faisalabad.",
  openGraph: {
    title: "About Us | Twist - The Dessert Shop",
    description: "Discover the story behind Twist - The Dessert Shop. Learn about our passion for crafting exquisite desserts.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
