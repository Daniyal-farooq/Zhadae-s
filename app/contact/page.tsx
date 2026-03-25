"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Plot # 291, East, C487+P52", "Susan Road, Kohinoor City", "Madina Town, Faisalabad, Pakistan"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+92 327 4170000",],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@twistdesserts.pk", "orders@twistdesserts.pk"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Thu: 12:00 PM - 11:00 PM", "Fri - Sun: 12:00 PM - 12:00 AM"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const whatsappNumber = "923274170000"
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order from Twist - The Dessert Shop.")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-accent text-accent-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-accent-foreground/80 leading-relaxed text-pretty">
              Have a question, special order, or feedback? We would love to hear from you. 
              Reach out and let us make your dessert dreams come true.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Send a Message</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                We Would Love to Hear From You
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FieldGroup>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field>
                        <FieldLabel htmlFor="name">Your Name</FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background"
                        />
                      </Field>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field>
                        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 327 4170000"
                          className="bg-background"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="subject">Subject</FieldLabel>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Custom Order Inquiry"
                          required
                          className="bg-background"
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="message">Your Message</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your dessert requirements..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </Field>
                  </FieldGroup>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Order via WhatsApp
                      </a>
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Find Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                Visit Our Shop
              </h2>
              
              <div className="flex-1 min-h-[400px] rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5!2d73.0847!3d31.4504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269c81f0f0f0f%3A0x0!2sSusan%20Road%2C%20Kohinoor%20City%2C%20Madina%20Town%2C%20Faisalabad!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Twist - The Dessert Shop Location"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">Address:</strong> Plot # 291, East, C487+P52, Susan Road, 
                  Kohinoor City Madina Town, Faisalabad, Pakistan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
