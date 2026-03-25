"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function AboutCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24 bg-primary text-primary-foreground text-center"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Experience Zhadaes
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
          Discover why Zhadaes has become Logan favorite cheesecake destination.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/menu"
              className="inline-block bg-white text-accent px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
            >
              View Our Flavors
            </Link>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/zkct.cheesecake.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Order Now
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
