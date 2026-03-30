"use client"

import Image from "next/image"
import { Handshake } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function PartnerSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="bg-background py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-xl border-2 border-border bg-white">
          <div className="flex flex-col items-center gap-6 p-6 lg:flex-row lg:gap-12 lg:p-8">
            {/* Left - Logo Placeholder */}
            <div className="flex w-full shrink-0 flex-col items-center justify-center lg:w-1/3">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-navy">
                <Handshake className="h-12 w-12 text-white" />
              </div>
              <span className="text-xl font-bold text-navy">Sneha Group</span>
              <span className="text-xs font-medium uppercase tracking-wider text-navy/60">
                Trusted Poultry Brand
              </span>
            </div>

            {/* Right - Content */}
            <div className="w-full">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                Strategic Partnership
              </span>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy md:text-3xl">
                <span className="text-balance">Authorized Dealership Partner of Sneha Group</span>
              </h2>
              <p className="mb-6 leading-relaxed text-navy/70">
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
                      className="rounded-xl bg-navy/15 px-3 py-1.5 text-xs font-semibold text-navy"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
