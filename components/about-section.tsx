"use client"

import Image from "next/image"
import { ShieldCheck, Snowflake, Search, Truck } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const highlights = [
  { icon: ShieldCheck, label: "Hygienic Processing" },
  { icon: Snowflake, label: "Advanced Cold Storage" },
  { icon: Search, label: "Quality Control Inspection" },
  { icon: Truck, label: "Reliable Supply Chain" },
]

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="about" ref={sectionRef} className="relative bg-background py-20 lg:py-28">
      {/* Background Image */}
      <Image
        src="/images/about-bg.jpg"
        alt="About section background"
        fill
        className="absolute inset-0 object-cover opacity-25"
        quality={90}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left - Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/cold-storage.jpg"
                alt="Daily Cuisine cold storage and processing facility"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-accent/10" />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">Delivering Excellence in Frozen Poultry</span>
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Daily Cuisine is a trusted frozen poultry supplier based in India, specializing in
              whole chicken, premium cuts, and ready-to-cook products. As an authorized dealership
              partner of Sneha Group, we ensure consistent quality, hygienic processing, and
              temperature-controlled storage systems. Our focus is on domestic distribution and
              global export supply.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-4 py-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
