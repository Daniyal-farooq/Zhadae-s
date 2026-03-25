import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Twist - The Dessert Shop. Visit us at Susan Road, Kohinoor City, Faisalabad or order via WhatsApp. We're here to make your dessert dreams come true.",
  openGraph: {
    title: "Contact Us | Twist - The Dessert Shop",
    description: "Get in touch with Twist - The Dessert Shop. Visit us at Susan Road, Kohinoor City, Faisalabad or order via WhatsApp.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
