"use client"

import Image from "next/image"
import { ShieldCheck, Award, FileCheck, Package, Search } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const certifications = [
  {
    icon: ShieldCheck,
    title: "FSSAI Approved",
    description: "Fully compliant with Food Safety and Standards Authority of India regulations.",
  },
  {
    icon: Award,
    title: "ISO 22000 Certified",
    description: "International standard for food safety management systems.",
  },
  {
    icon: FileCheck,
    title: "HACCP Compliant",
    description: "Hazard Analysis Critical Control Points protocol implemented across all processes.",
  },
  {
    icon: Package,
    title: "Export Grade Packaging",
    description: "Products packed to meet international export and transit standards.",
  },
  {
    icon: Search,
    title: "Strict Quality Inspection",
    description: "Multi-point quality inspection at every stage of processing and packaging.",
  },
]

export default function CertificationsSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="certifications" ref={sectionRef} className="bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Quality Assurance
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Quality {"&"} Certifications</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Our commitment to quality is backed by industry-leading certifications and rigorous
            inspection protocols at every stage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-center rounded-xl border border-border bg-secondary p-4 text-center transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <cert.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mb-1 text-xs font-bold text-foreground">{cert.title}</h3>
              <p className="text-[10px] leading-relaxed text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
