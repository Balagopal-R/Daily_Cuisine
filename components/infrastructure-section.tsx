"use client"

import Image from "next/image"
import { Factory, Snowflake, ThermometerSnowflake, Package } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const features = [
  {
    icon: Factory,
    title: "Automated Processing Facility",
    description:
      "Advanced machinery ensuring efficient and hygienic processing.",
  },
  {
    icon: Snowflake,
    title: "Blast Freezing Technology",
    description:
      "Rapid freezing systems to preserve freshness and nutritional value.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Temperature Controlled Storage",
    description:
      "Cold storage systems maintaining strict temperature standards.",
  },
  {
    icon: Package,
    title: "Hygienic Packaging & Export Handling",
    description:
      "Secure, export-grade packaging for international standards.",
  },
]

export default function InfrastructureSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="infrastructure" ref={sectionRef} className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <Image
        src="/images/processing-plant.jpg"
        alt="Daily Cuisine processing facility"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Our Facility
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            <span className="text-balance">
              State-of-the-Art Processing {"&"} Cold Chain
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/70">
            Our world-class facility integrates advanced technology with rigorous quality protocols
            to deliver frozen poultry products that meet global standards.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <feature.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
