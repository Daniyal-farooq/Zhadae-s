"use client"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface GalleryLightboxProps {
  images: GalleryImage[]
  currentIndex: number | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function GalleryLightbox({ images, currentIndex, onClose, onPrevious, onNext }: GalleryLightboxProps) {
  if (currentIndex === null) return null

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      >
        <motion.button
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={onPrevious}
          className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-10 h-10" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          onClick={onNext}
          className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-10 h-10" />
        </motion.button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          key={`caption-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="text-white text-lg font-medium">
            {currentImage.alt}
          </p>
          <p className="text-white/60 text-sm mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
