"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/cafe-interior.jpg"
                alt="Twist cafe interior"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 lg:w-48 lg:h-48 bg-primary rounded-2xl hidden sm:flex items-center justify-center"
            >
              <div className="text-center text-primary-foreground">
                <p className="text-3xl lg:text-4xl font-serif font-bold">5+</p>
                <p className="text-xs lg:text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Where Every Dessert Tells a Story
            </h2>
            <p className="text-accent-foreground/80 leading-relaxed mb-6">
              At Twist, we believe that desserts are more than just sweet treats - they are moments of joy, celebrations of life, and expressions of love. Our journey began with a simple passion: to create extraordinary desserts that bring smiles to faces.
            </p>
            <p className="text-accent-foreground/80 leading-relaxed mb-8">
              Every creation that leaves our kitchen carries the essence of craftsmanship, using only the finest ingredients sourced from around the world. From our signature chocolate cake to our artisan gelato, each dessert is a masterpiece.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
