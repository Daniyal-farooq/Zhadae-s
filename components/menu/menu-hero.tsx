"use client"

import { motion } from "framer-motion"

export function MenuHero() {
  return (
    <section className="relative py-16 lg:py-24 bg-accent text-accent-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-primary mb-3"
          >
            Explore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Cheesecakes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-accent-foreground/80 text-lg leading-relaxed"
          >
            Discover our collection of artisanal cheesecakes, each made with love and the finest ingredients. From classic lotus to fruity delights, there's a flavor for every palate.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
