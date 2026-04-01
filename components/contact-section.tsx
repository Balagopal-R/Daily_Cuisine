"use client"

import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Daily Cuisine\n Vadayampady P.O Choondy, Kochi,\nKerala 682308, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8089560070\n+91 8281880070",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dailycuisine231@gmail.com",
  },
]

export default function ContactSection() {
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
            Visit our head office or reach out through phone and email for any inquiries.
          </p>
        </div>

        {/* Map and Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Large Map */}
          <div className="lg:col-span-2">
            <div className="h-full min-h-96 overflow-hidden rounded-2xl border border-border shadow-lg lg:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.677894237823!2d76.43780227550904!3d9.964543000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdf0e8e8e8e8e9%3A0x1234567890abcdef!2sDaily%20Cuisine!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactDetails.map((contact) => (
              <div
                key={contact.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-secondary p-6 transition-all hover:shadow-lg hover:border-accent"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary transition-transform group-hover:scale-110">
                    <contact.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {contact.label}
                    </span>
                    <p className="mt-2 whitespace-pre-line text-sm font-medium leading-relaxed text-foreground">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
