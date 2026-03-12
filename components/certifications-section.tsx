"use client"

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
    <section id="certifications" ref={sectionRef} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Quality Assurance
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Quality {"&"} Certifications</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our commitment to quality is backed by industry-leading certifications and rigorous
            inspection protocols at every stage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-center rounded-xl border border-border bg-secondary p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <cert.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-sm font-bold text-foreground">{cert.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
