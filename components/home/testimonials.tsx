"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Daniyal Farooq",
    review: "The best desserts in Faisalabad! Their chocolate cake is absolutely divine.",
    rating: 5,
  },
  {
    name: "Ali Hassan",
    review: "Amazing ambiance and even better desserts. A must-visit for anyone with a sweet tooth!",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    review: "Their macarons are perfection. Will definitely come back for more!",
    rating: 5,
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Testimonials() {
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
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            What Our Guests Say
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &quot;{testimonial.review}&quot;
              </p>
              <p className="font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
