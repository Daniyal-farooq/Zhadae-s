"use client"

import { motion } from "framer-motion"

const values = [
  {
    title: "Passion",
    description: "Every cheesecake we create is infused with our deep passion for the art of cheesecake making.",
  },
  {
    title: "Quality",
    description: "We source only the finest ingredients to ensure every spoonful is an exceptional experience.",
  },
  {
    title: "Community",
    description: "We are proud to serve the Logan community with sweet treats made with love.",
  },
  {
    title: "Freshness",
    description: "All our cheesecakes are made fresh in small batches, ensuring perfect taste and texture.",
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  },
}

export function AboutValues() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">What We Stand For</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Values
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
