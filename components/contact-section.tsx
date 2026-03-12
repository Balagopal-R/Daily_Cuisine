"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const productOptions = [
  "Whole Chicken",
  "Chicken Cuts",
  "Ready-to-Cook Products",
  "Marinated Range",
  "Private Label / Custom",
  "Bulk / Export Inquiry",
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    productInterest: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="contact" ref={sectionRef} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">{"Let's Connect"}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Reach out to discuss distribution partnerships, bulk orders, or export inquiries. Our
            team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="companyName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="productInterest" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select a product category</option>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:scale-105 hover:bg-red-light sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Side Info */}
          <div className="w-full lg:w-1/3">
            <div className="rounded-xl border border-border bg-secondary p-8">
              <h3 className="mb-6 text-lg font-bold text-foreground">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Address
                    </span>
                    <p className="mt-1 text-sm text-foreground">
                      Daily Cuisine Pvt. Ltd.
                      <br />
                      Industrial Area, Hyderabad
                      <br />
                      Telangana, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </span>
                    <p className="mt-1 text-sm text-foreground">+91 00000 00000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </span>
                    <p className="mt-1 text-sm text-foreground">info@dailycuisine.in</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <div className="flex aspect-[4/3] items-center justify-center bg-muted">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <MapPin className="h-8 w-8" />
                    <span className="text-xs font-medium">Google Maps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
