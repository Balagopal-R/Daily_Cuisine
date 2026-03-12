"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const leaders = [
  {
    role: "Founder",
    name: "Founder Name",
    image: "/images/founder.jpg",
    bio: "Brief professional background, vision for the company, commitment to quality and export excellence.",
  },
  {
    role: "Managing Director",
    name: "Director Name",
    image: "/images/director.jpg",
    bio: "Experience in poultry supply chain management, focus on expansion and operational excellence.",
  },
]

export default function LeadershipSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="leadership" ref={sectionRef} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Leadership Team
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Leadership</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Meet the visionary leaders driving Daily Cuisine toward excellence in frozen poultry exports.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {leaders.map((leader, idx) => (
            <div
              key={leader.name}
              className="flex flex-col items-center rounded-xl border border-border bg-secondary p-0 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-t-xl bg-muted">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={400}
                  height={500}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full flex-1 p-8 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {leader.role}
                </span>
                <h3 className="mt-2 text-xl font-bold text-foreground">{leader.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
