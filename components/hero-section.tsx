"use client"

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Snowflake, ThermometerSnowflake, Sparkles, ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"

const trustBadges = [
  { icon: ShieldCheck, label: "FSSAI Certified" },
  { icon: Sparkles, label: "Export Quality Standard" },
  { icon: ThermometerSnowflake, label: "Cold Chain Maintained" },
  { icon: Snowflake, label: "Hygienic Processing" },
]

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (el) {
      el.style.opacity = "0"
      el.style.transform = "translateY(24px)"
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      })
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-primary">
      {/* Background Image */}
      <Image
        src="/images/hero-chicken.jpg"
        alt="Premium frozen chicken products by Daily Cuisine"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-4 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-28"
      >
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-xl bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Premium Quality Since Establishment
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Premium Frozen Chicken.</span>
            <br />
            <span className="text-accent">Freshness Preserved.</span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Processed under strict hygiene standards with advanced cold-chain technology.
            Supplying export-quality poultry products across India and global markets.
          </p>

          <Link
            href="#products"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:scale-105 hover:bg-red-light"
          >
            Explore Products
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 backdrop-blur-sm"
            >
              <badge.icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-xs font-medium text-primary-foreground/90">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-1 text-primary-foreground/50 transition-colors hover:text-primary-foreground/80">
          <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
