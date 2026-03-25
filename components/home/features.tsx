"use client"

import { Sparkles, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted Daily",
    description: "Every dessert is made fresh daily with premium ingredients",
  },
  {
    icon: Clock,
    title: "Open Late",
    description: "Satisfying your sweet cravings until midnight on weekends",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Conveniently located in the heart of Madina Town",
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

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center text-center p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
