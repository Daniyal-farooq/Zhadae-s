"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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
    alt: "Twist cafe interior",
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
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-accent text-accent-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Visual Journey</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-accent-foreground/80 text-lg leading-relaxed">
              Take a visual tour of our delectable creations and cozy ambiance. Every dessert is a work of art, crafted with passion and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-foreground px-4 py-2 rounded-full text-sm font-medium">
                    View
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4">
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">
              {filteredImages[lightboxIndex].alt}
            </p>
            <p className="text-white/60 text-sm mt-1">
              {lightboxIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Follow Us for More
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated with our latest creations and behind-the-scenes moments on social media.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://instagram.com/twistdesserts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
            <a
              href="https://facebook.com/twistdesserts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Like on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
