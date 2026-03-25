import type { Metadata } from "next"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuGrid } from "@/components/menu/menu-grid"
import { MenuCTA } from "@/components/menu/menu-cta"

export const metadata: Metadata = {
  title: "Menu",
  description: "Discover our artisanal cheesecakes in cups at Zhadae's. Available in Logan, Australia for local orders.",
}

const menuCategories = [
  {
    name: "Cheesecakes",
    description: "Our artisanal cheesecakes served in cups",
    items: [
      {
        name: "Lotus Cheesecake",
        description: "Creamy cheesecake with signature lotus biscoff spread",
        price: "$14.00",
        image: "/zhadae's/lotus-cheeesecake.jpeg",
        popular: true,
      },
      {
        name: "Banana Coffee (Banofee)",
        description: "Classic banana and toffee combo with coffee notes",
        price: "$12.00",
        image: "/zhadae's/banofee.jpeg",
      },
      {
        name: "Oreo",
        description: "Cookies and cream cheesecake with crushed oreos",
        price: "$12.00",
        image: "/zhadae's/oreo.jpeg",
      },
      {
        name: "Peanut Butter",
        description: "Rich peanut butter cheesecake with chocolate drizzle",
        price: "$15.50",
        image: "/zhadae's/peanut-butter.jpeg",
      },
      {
        name: "Strawberry",
        description: "Fresh strawberry cheesecake with fruit swirls",
        price: "$14.00",
        image: "/zhadae's/strawberry.jpeg",
      },
      {
        name: "White Chocolate Raspberry",
        description: "Decadent white chocolate with tart raspberry swirl",
        price: "$15.50",
        image: "/zhadae's/white-choco-raspberry.jpeg",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-20">
      <MenuHero />
      <MenuGrid categories={menuCategories} />
      <MenuCTA />
    </div>
  )
}
