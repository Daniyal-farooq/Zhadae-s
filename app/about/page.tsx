import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Award, Users, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Twist - The Dessert Shop, our passion for crafting exceptional desserts, our story, values, and commitment to quality in Faisalabad, Pakistan.",
}

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every dessert we create is infused with our deep passion for the art of pastry making.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We source only the finest ingredients to ensure every bite is an exceptional experience.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in creating a warm, welcoming space where memories are made over sweet treats.",
  },
  {
    icon: Leaf,
    title: "Freshness",
    description: "All our desserts are made fresh daily, ensuring the perfect taste and texture every time.",
  },
]

const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Twist was born from a simple dream to bring world-class desserts to Faisalabad.",
  },
  {
    year: "2020",
    title: "Growing Together",
    description: "Despite challenges, our community grew as we introduced delivery services.",
  },
  {
    year: "2021",
    title: "Expanding Horizons",
    description: "We expanded our menu to include French pastries and artisan gelato.",
  },
  {
    year: "2022",
    title: "Recognition",
    description: "Voted as one of the best dessert shops in Faisalabad by local food critics.",
  },
  {
    year: "2024",
    title: "New Chapter",
    description: "Renovated our space and introduced new seasonal specialties.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-accent text-accent-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Our Story</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Twist
            </h1>
            <p className="text-accent-foreground/80 text-lg leading-relaxed">
              A labor of love, a celebration of sweetness, and a commitment to bringing joy through exceptional desserts.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Where Sweetness Meets Artistry
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Twist - The Dessert Shop was born from a simple yet profound passion: to create desserts that not only taste extraordinary but also create lasting memories. In 2019, we opened our doors in Faisalabad with a vision to bring world-class confectionery to our beloved city.
                </p>
                <p>
                  Our journey began in a small kitchen with big dreams. Today, we have become a destination for dessert lovers who appreciate the artistry and craftsmanship that goes into every creation. From our signature chocolate cakes to our delicate French macarons, each item on our menu represents our unwavering commitment to excellence.
                </p>
                <p>
                  What sets us apart is not just the quality of our ingredients or the skill of our pastry chefs, but the love and dedication we pour into everything we do. We believe that desserts have the power to bring people together, celebrate special moments, and add a touch of sweetness to everyday life.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/cafe-interior.jpg"
                  alt="Twist cafe interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 lg:w-56 lg:h-56 bg-primary rounded-2xl hidden sm:flex items-center justify-center">
                <div className="text-center text-primary-foreground p-4">
                  <p className="text-4xl lg:text-5xl font-serif font-bold">5+</p>
                  <p className="text-xs lg:text-sm uppercase tracking-wider mt-1">Years of Sweet Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">What We Stand For</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Our Journey</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 lg:gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <span className="text-sm text-primary font-medium">{milestone.year}</span>
                  <h3 className="font-serif text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">The People Behind Twist</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-accent-foreground/80 leading-relaxed mb-6">
                Behind every delicious creation at Twist is a team of passionate individuals who share a common love for desserts. Our talented pastry chefs, friendly staff, and dedicated management work together to ensure that every visit to Twist is a memorable experience.
              </p>
              <p className="text-accent-foreground/80 leading-relaxed mb-8">
                From our head chef who trained in renowned patisseries to our baristas who craft the perfect cup of coffee, every team member plays a crucial role in delivering the Twist experience that our guests have come to love.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/dessert-1.jpg"
                  alt="Our creations"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/images/dessert-3.jpg"
                  alt="Our creations"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Experience the Twist Difference
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/90 mb-8 leading-relaxed">
            We invite you to visit us and discover why Twist has become Faisalabad&apos;s favorite dessert destination. Whether it&apos;s a special celebration or a simple craving, we are here to make your moments sweeter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-all"
            >
              View Our Menu
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
