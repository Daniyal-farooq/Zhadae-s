import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Zhadaes and our passion for crafting artisanal cheesecakes in Logan, Australia.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTimeline />
      <AboutCTA />
    </div>
  )
}
