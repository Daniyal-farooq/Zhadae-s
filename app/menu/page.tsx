import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our delicious menu featuring handcrafted cakes, pastries, gelato, beverages, and more at Twist - The Dessert Shop in Faisalabad.",
}

const menuCategories = [
  {
    name: "Signature Cakes",
    description: "Our handcrafted cakes made with premium ingredients",
    items: [
      {
        name: "Belgian Chocolate Cake",
        description: "Rich layers of Belgian chocolate with silky ganache",
        price: "Rs. 850",
        image: "/images/dessert-1.jpg",
        popular: true,
      },
      {
        name: "Red Velvet Cake",
        description: "Classic red velvet with cream cheese frosting",
        price: "Rs. 750",
        image: "/images/gallery-1.jpg",
        popular: true,
      },
      {
        name: "New York Cheesecake",
        description: "Creamy classic with fresh berry topping",
        price: "Rs. 650",
        image: "/images/dessert-4.jpg",
        popular: false,
      },
      {
        name: "Crepe Cake",
        description: "Delicate layers of crepe with pastry cream",
        price: "Rs. 900",
        image: "/images/gallery-2.jpg",
        popular: false,
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center",
        price: "Rs. 550",
        image: "/images/gallery-3.jpg",
        popular: true,
      },
      {
        name: "Mango Mousse Cake",
        description: "Light mousse with fresh mango layers",
        price: "Rs. 700",
        image: "/images/gallery-5.jpg",
        popular: false,
      },
    ],
  },
  {
    name: "French Pastries",
    description: "Authentic French pastries baked fresh daily",
    items: [
      {
        name: "French Macarons (Box of 6)",
        description: "Assorted flavors including rose, pistachio, and chocolate",
        price: "Rs. 350",
        image: "/images/dessert-3.jpg",
        popular: true,
      },
      {
        name: "Chocolate Eclair",
        description: "Choux pastry filled with vanilla cream",
        price: "Rs. 280",
        image: "/images/gallery-4.jpg",
        popular: false,
      },
      {
        name: "Fruit Tart",
        description: "Buttery tart shell with custard and seasonal fruits",
        price: "Rs. 400",
        image: "/images/gallery-4.jpg",
        popular: false,
      },
      {
        name: "Cream Puff",
        description: "Light choux pastry with whipped cream",
        price: "Rs. 220",
        image: "/images/gallery-4.jpg",
        popular: false,
      },
    ],
  },
  {
    name: "Gelato & Ice Cream",
    description: "Premium Italian gelato made in-house",
    items: [
      {
        name: "Single Scoop",
        description: "Choose from our daily selection of flavors",
        price: "Rs. 250",
        image: "/images/dessert-2.jpg",
        popular: false,
      },
      {
        name: "Double Scoop",
        description: "Mix and match your favorite flavors",
        price: "Rs. 450",
        image: "/images/dessert-2.jpg",
        popular: true,
      },
      {
        name: "Sundae Special",
        description: "Gelato with hot fudge, nuts, and whipped cream",
        price: "Rs. 550",
        image: "/images/dessert-5.jpg",
        popular: true,
      },
      {
        name: "Affogato",
        description: "Vanilla gelato drowned in espresso",
        price: "Rs. 400",
        image: "/images/gallery-6.jpg",
        popular: false,
      },
    ],
  },
  {
    name: "Warm Desserts",
    description: "Comforting warm desserts perfect for any occasion",
    items: [
      {
        name: "Brownie with Ice Cream",
        description: "Warm fudgy brownie with vanilla ice cream",
        price: "Rs. 480",
        image: "/images/dessert-5.jpg",
        popular: true,
      },
      {
        name: "Apple Crumble",
        description: "Spiced apples with crunchy oat topping",
        price: "Rs. 420",
        image: "/images/dessert-5.jpg",
        popular: false,
      },
      {
        name: "Churros",
        description: "Crispy churros with chocolate dipping sauce",
        price: "Rs. 350",
        image: "/images/dessert-5.jpg",
        popular: false,
      },
    ],
  },
  {
    name: "Beverages",
    description: "Premium coffee and signature drinks",
    items: [
      {
        name: "Signature Latte",
        description: "Espresso with steamed milk and latte art",
        price: "Rs. 350",
        image: "/images/gallery-6.jpg",
        popular: true,
      },
      {
        name: "Hot Chocolate",
        description: "Rich Belgian hot chocolate with marshmallows",
        price: "Rs. 320",
        image: "/images/gallery-6.jpg",
        popular: false,
      },
      {
        name: "Iced Coffee",
        description: "Cold brew coffee with your choice of milk",
        price: "Rs. 300",
        image: "/images/gallery-6.jpg",
        popular: false,
      },
      {
        name: "Fresh Fruit Smoothie",
        description: "Blended seasonal fruits with yogurt",
        price: "Rs. 380",
        image: "/images/gallery-6.jpg",
        popular: false,
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-accent text-accent-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Explore</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-accent-foreground/80 text-lg leading-relaxed">
              Discover our collection of handcrafted desserts, each made with love and the finest ingredients. From rich chocolate cakes to delicate French pastries, there is something for every palate.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 lg:mb-24 last:mb-0">
              <div className="text-center mb-10 lg:mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
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
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-5 lg:p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-primary font-semibold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Order your favorite desserts via WhatsApp for dine-in, takeaway, or delivery. We deliver across Faisalabad!
          </p>
          <a
            href="https://wa.me/923274170000?text=Hi,%20I%20would%20like%20to%20place%20an%20order%20from%20your%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
