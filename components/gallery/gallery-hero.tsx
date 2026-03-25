"use client"

import { motion } from "framer-motion"

export function GalleryHero() {
  return (
    <section className="relative py-16 lg:py-24 bg-accent text-accent-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-primary mb-3"
          >
            Visual Journey
          </motion.p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Gallery
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent-foreground/80 text-lg leading-relaxed"
          >
            Take a visual tour of our delectable creations and cozy ambiance. Every dessert is a work of art, crafted with passion and precision.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
