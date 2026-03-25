"use client"

import { useState } from "react"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryFilter } from "@/components/gallery/gallery-filter"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox"
import { GalleryCTA } from "@/components/gallery/gallery-cta"

const galleryImages = [
  {
    src: "/images/hero-dessert.jpg",
    alt: "Signature chocolate cake with strawberries",
    category: "Cakes",
  },
  {
    src: "/images/dessert-1.jpg",
    alt: "Decadent tiramisu in glass jar",
    category: "Desserts",
  },
  {
    src: "/images/dessert-2.jpg",
    alt: "Artisan gelato scoops",
    category: "Gelato",
  },
  {
    src: "/images/dessert-3.jpg",
    alt: "French macarons collection",
    category: "Pastries",
  },
  {
    src: "/images/dessert-4.jpg",
    alt: "New York cheesecake with berries",
    category: "Cakes",
  },
  {
    src: "/images/dessert-5.jpg",
    alt: "Chocolate brownie with ice cream",
    category: "Desserts",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Red velvet cake slice",
    category: "Cakes",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Crepe cake layers",
    category: "Cakes",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Chocolate lava cake",
    category: "Desserts",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "French pastries assortment",
    category: "Pastries",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Mango mousse cake",
    category: "Cakes",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Signature latte art",
    category: "Beverages",
  },
  {
    src: "/images/cafe-interior.jpg",
    alt: "Zhadae's kitchen",
    category: "Ambiance",
  },
]

const categories = ["All", "Cakes", "Desserts", "Pastries", "Gelato", "Beverages", "Ambiance"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1)
    }
  }

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <GalleryHero />
      <GalleryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <GalleryGrid images={filteredImages} onImageClick={openLightbox} />
      <GalleryLightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
      <GalleryCTA />
    </div>
  )
}
