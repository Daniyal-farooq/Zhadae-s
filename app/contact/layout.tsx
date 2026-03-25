import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Zhadae's for artisanal cheesecake orders in Logan, Australia. Connect with us on Instagram or Threads.",
  openGraph: {
    title: "Contact Us | Zhadae's",
    description: "Order artisanal cheesecakes from Zhadae's in Logan, Australia.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
