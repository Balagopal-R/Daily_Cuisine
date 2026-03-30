"use client"

import Image from "next/image"
import { Globe, Building2, Ship, Tag } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const blocks = [
  {
    icon: Globe,
    title: "Pan-India Distribution Network",
    description: "Extensive reach across all major metros and tier-2 cities with reliable logistics.",
  },
  {
    icon: Building2,
    title: "Bulk Supply for HORECA & Retail Chains",
    description:
      "Tailored bulk supply solutions for hotels, restaurants, catering services, and retail chains.",
  },
  {
    icon: Ship,
    title: "Export Supply Capabilities",
    description:
      "Fully equipped for international export with compliant documentation and packaging.",
  },
  {
    icon: Tag,
    title: "Private Label Manufacturing Support",
    description:
      "White-label and private label manufacturing support for your brand with custom formulations.",
  },
]

export default function DistributionSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="distribution" ref={sectionRef} className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Our Reach
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            <span className="text-balance">Domestic {"&"} Global Distribution</span>
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/70">
            From local distributors to international importers, our supply chain is built for scale,
            speed, and reliability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <block.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 font-semibold text-primary-foreground">{block.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
