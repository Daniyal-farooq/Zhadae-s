import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-serif font-bold tracking-tight">Twist</h3>
              <p className="text-xs uppercase tracking-widest text-accent-foreground/70 mt-1">
                The Dessert Shop
              </p>
            </Link>
            <p className="mt-4 text-sm text-accent-foreground/80 leading-relaxed">
              Crafting moments of sweetness in the heart of Faisalabad. Every dessert tells a story of passion and perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-accent-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Plot # 291, East, C487+P52, Susan Road, Kohinoor City Madina Town, Faisalabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:+923274170000" className="hover:text-primary transition-colors">
                  +92 327 4170000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:info@twistdesserts.pk" className="hover:text-primary transition-colors">
                  info@twistdesserts.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Clock className="w-4 h-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-accent-foreground">Mon - Thu</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Clock className="w-4 h-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-accent-foreground">Fri - Sun</p>
                  <p>11:00 AM - 12:00 AM</p>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/twistdesserts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/twistdesserts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-accent-foreground/60">
            <p>&copy; {new Date().getFullYear()} Twist - The Dessert Shop. All rights reserved.</p>
            <p>Crafted with love in Faisalabad</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
