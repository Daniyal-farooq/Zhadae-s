"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "The Dream",
    title: "The Beginning",
    description: "Zhadaes was born from a love for creamy, indulgent cheesecakes.",
  },
  {
    year: "First Batch",
    title: "Crafting Perfection",
    description: "We perfected our signature lotus cheesecake recipe.",
  },
  {
    year: "Growing Flavors",
    title: "Expanding Our Menu",
    description: "We introduced new exciting flavors like banofee, oreo, and more.",
  },
  {
    year: "Today",
    title: "Serving Logan",
    description: "Proudly serving Logan, Australia with artisanal cheesecakes.",
  },
]

export function AboutTimeline() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Our Journey</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            Milestones
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 lg:gap-8 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg"
                >
                  {index + 1}
                </motion.div>
              </div>
              <div className="flex-1 pb-8">
                <span className="text-sm text-primary font-medium">{milestone.year}</span>
                <h3 className="font-serif text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
