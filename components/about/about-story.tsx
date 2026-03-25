"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Where Creaminess Meets Perfection
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Zhadaes was born from a simple yet profound passion: to create the perfect cheesecake. In our kitchen in Logan, Australia, we embarked on a journey to craft cheesecakes that not only taste extraordinary but also create lasting memories.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                What sets us apart is not just the quality of our ingredients or the precision of our techniques, but the love and dedication we pour into every cup. We believe that cheesecakes have the power to bring comfort, celebrate special moments, and add a touch of sweetness to everyday life.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="aspect-4/3 rounded-2xl overflow-hidden mb-4"
            >
              <Image
                src="/images/cafe-interior.jpg"
                alt="Zhadaes kitchen"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary rounded-2xl p-6 text-center text-primary-foreground max-w-50 mx-auto"
            >
              <p className="text-4xl lg:text-5xl font-serif font-bold">6</p>
              <p className="text-xs lg:text-sm uppercase tracking-wider mt-1">Signature Flavors</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
