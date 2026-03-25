import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { FeaturedDesserts } from "@/components/home/featured-desserts"
import { AboutPreview } from "@/components/home/about-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <FeaturedDesserts />
      <AboutPreview />
      <Testimonials />
      <CTA />
    </div>
  )
}
