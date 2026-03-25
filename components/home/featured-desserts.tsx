"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const featuredCheesecakes = [
  {
    name: "Lotus Cheesecake",
    description: "Creamy cheesecake with signature lotus biscoff spread",
    image: "/zhadae's/lotus-cheeesecake.jpeg",
    price: "$14.00",
    popular: true,
  },
  {
    name: "Banana Coffee (Banofee)",
    description: "Classic banana and toffee combo with coffee notes",
    image: "/zhadae's/banofee.jpeg",
    price: "$12.00",
  },
  {
    name: "Oreo",
    description: "Cookies and cream cheesecake with crushed oreos",
    image: "/zhadae's/oreo.jpeg",
    price: "$12.00",
  },
  {
    name: "Peanut Butter",
    description: "Rich peanut butter cheesecake with chocolate drizzle",
    image: "/zhadae's/peanut-butter.jpeg",
    price: "$15.50",
  },
  {
    name: "Strawberry",
    description: "Fresh strawberry cheesecake with fruit swirls",
    image: "/zhadae's/strawberry.jpeg",
    price: "$14.00",
  },
  {
    name: "White Chocolate Raspberry",
    description: "Decadent white chocolate with tart raspberry swirl",
    image: "/zhadae's/white-choco-raspberry.jpeg",
    price: "$15.50",
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  },
}

export function FeaturedDesserts() {
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
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Our Specialties</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Our Cheesecakes
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuredCheesecakes.map((cheesecake, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <Link href="/menu" className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={cheesecake.image}
                      alt={cheesecake.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  />
                  {cheesecake.popular && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 text-white"
                  >
                    <span className="text-lg font-semibold">{cheesecake.price}</span>
                  </motion.div>
                </div>
                <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {cheesecake.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cheesecake.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Flavors
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
