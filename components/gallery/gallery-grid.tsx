"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  onImageClick: (index: number) => void
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: "spring" },
  },
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {images.map((image, index) => (
            <motion.button
              key={image.src}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => onImageClick(index)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="bg-white/90 text-foreground px-4 py-2 rounded-full text-sm font-medium">
                  View
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-3 left-3 right-3"
              >
                <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </span>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
