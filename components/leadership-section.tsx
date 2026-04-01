"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const leaders = [
  {
    role: "Founder",
    name: "Radhakrishnan Pillai P B",
    image: "/images/founder_image.png",
    bio: "Brief professional background, vision for the company, commitment to quality and export excellence.",
  },
  {
    role: "Managing Director",
    name: "Sanjai Krishna R",
    image: "/images/ceo_image1.png",
    bio: "Experience in poultry supply chain management, focus on expansion and operational excellence.",
  },
]

export default function LeadershipSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="leadership" ref={sectionRef} className="bg-background py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Leadership Team
          </span>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Leadership</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Meet the visionary leaders driving Daily Cuisine toward excellence in frozen poultry exports.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid gap-8 md:grid-cols-2">
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
                  height={350}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full flex-1 p-5 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {leader.role}
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">{leader.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
