"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  popular?: boolean
}

interface MenuCategory {
  name: string
  description: string
  items: MenuItem[]
}

interface MenuGridProps {
  categories: MenuCategory[]
}

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

export function MenuGrid({ categories }: MenuGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-16 lg:mb-24 last:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 lg:mb-12"
            >
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                {category.name}
              </h2>
              <p className="text-muted-foreground">{category.description}</p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  variants={item}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.popular && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 + 0.3 }}
                        className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
                      >
                        Popular
                      </motion.div>
                    )}
                  </div>
                  <div className="p-5 lg:p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: itemIndex * 0.1 + 0.5 }}
                        className="text-primary font-semibold whitespace-nowrap"
                      >
                        {item.price}
                      </motion.span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
