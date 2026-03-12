"use client"

import { Handshake } from "lucide-react"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function PartnerSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-xl border-2 border-border bg-background">
          <div className="flex flex-col items-center gap-10 p-8 lg:flex-row lg:gap-16 lg:p-12">
            {/* Left - Logo Placeholder */}
            <div className="flex w-full shrink-0 flex-col items-center justify-center lg:w-1/3">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary">
                <Handshake className="h-12 w-12 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Sneha Group</span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Trusted Poultry Brand
              </span>
            </div>

            {/* Right - Content */}
            <div className="w-full">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                Strategic Partnership
              </span>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                <span className="text-balance">Authorized Dealership Partner of Sneha Group</span>
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Daily Cuisine is a direct dealership partner of Sneha Group, ensuring premium-quality
                poultry products sourced from one of India{"'"}s most trusted poultry brands. Our
                partnership guarantees reliability, consistency, and superior standards in every
                product delivered.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {["Reliable Supply", "Consistent Quality", "Superior Standards", "Direct Sourcing"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Link
                href="#about"
                className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
