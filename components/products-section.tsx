"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

type Product = {
  name: string
  description: string
  image: string
}

type Category = {
  id: string
  label: string
  products: Product[]
}

const categories: Category[] = [
  {
    id: "whole",
    label: "Whole Chicken",
    products: [
      {
        name: "Whole Frozen Chicken",
        description: "Premium quality whole frozen chicken, individually packed for freshness.",
        image: "/images/products/whole-chicken.jpg",
      },
      {
        name: "Whole Broiler Chicken",
        description: "Farm-fresh broiler chicken, processed and blast frozen for export quality.",
        image: "/images/products/whole-chicken.jpg",
      },
      {
        name: "Frozen Country Chicken",
        description: "Free-range country chicken with natural flavor, frozen for preservation.",
        image: "/images/products/whole-chicken.jpg",
      },
    ],
  },
  {
    id: "cuts",
    label: "Chicken Cuts",
    products: [
      {
        name: "Chicken Breast Boneless",
        description: "Lean, boneless chicken breast — ideal for bulk HORECA supply.",
        image: "/images/products/chicken-cuts.jpg",
      },
      {
        name: "Chicken Leg Quarters",
        description: "Juicy leg quarters, carefully trimmed and individually quick frozen.",
        image: "/images/products/chicken-cuts.jpg",
      },
      {
        name: "Chicken Drumsticks",
        description: "Premium drumsticks, uniform size, perfect for retail and food service.",
        image: "/images/products/chicken-cuts.jpg",
      },
      {
        name: "Chicken Wings",
        description: "Export-grade chicken wings, blast frozen for maximum freshness.",
        image: "/images/products/chicken-cuts.jpg",
      },
      {
        name: "Chicken Thigh Boneless",
        description: "Tender boneless thighs, de-skinned and vacuum packed.",
        image: "/images/products/chicken-cuts.jpg",
      },
      {
        name: "Chicken Liver",
        description: "Fresh chicken liver, hygienically processed and frozen.",
        image: "/images/products/chicken-cuts.jpg",
      },
      {
        name: "Chicken Gizzard",
        description: "Cleaned and trimmed gizzards, packed for institutional supply.",
        image: "/images/products/chicken-cuts.jpg",
      },
      {
        name: "Chicken Mince",
        description: "Finely ground chicken mince, ideal for kebabs and processed foods.",
        image: "/images/products/chicken-cuts.jpg",
      },
    ],
  },
  {
    id: "rtc",
    label: "Ready-to-Cook",
    products: [
      {
        name: "Chicken Nuggets",
        description: "Crispy breaded chicken nuggets, pre-cooked and frozen for convenience.",
        image: "/images/products/ready-to-cook.jpg",
      },
      {
        name: "Chicken Sausages",
        description: "Premium chicken sausages with a smoky flavor, vacuum sealed.",
        image: "/images/products/ready-to-cook.jpg",
      },
      {
        name: "Chicken Kebabs",
        description: "Spiced chicken kebabs, ready to grill or pan fry.",
        image: "/images/products/ready-to-cook.jpg",
      },
      {
        name: "Chicken Popcorn",
        description: "Bite-sized breaded chicken pieces, perfect as starters or snacks.",
        image: "/images/products/ready-to-cook.jpg",
      },
      {
        name: "Chicken Meatballs",
        description: "Hand-formed chicken meatballs with herbs and mild seasoning.",
        image: "/images/products/ready-to-cook.jpg",
      },
      {
        name: "Chicken Burgers",
        description: "Juicy chicken burger patties, pre-formed and quick frozen.",
        image: "/images/products/ready-to-cook.jpg",
      },
    ],
  },
  {
    id: "marinated",
    label: "Marinated Range",
    products: [
      {
        name: "Tandoori Marinated Chicken",
        description: "Classic tandoori spice blend marinated chicken, ready to cook.",
        image: "/images/products/marinated.jpg",
      },
      {
        name: "Peri-Peri Chicken",
        description: "Bold peri-peri seasoned chicken with a fiery kick.",
        image: "/images/products/marinated.jpg",
      },
      {
        name: "Garlic Herb Chicken",
        description: "Delicate garlic and herb infused chicken for gourmet meals.",
        image: "/images/products/marinated.jpg",
      },
      {
        name: "BBQ Marinated Wings",
        description: "Smoky BBQ marinated wings, perfect for grilling.",
        image: "/images/products/marinated.jpg",
      },
      {
        name: "Spicy Indian Masala Chicken",
        description: "Richly spiced Indian masala chicken for authentic flavor.",
        image: "/images/products/marinated.jpg",
      },
    ],
  },
]

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("whole")
  const currentCategory = categories.find((c) => c.id === activeCategory) ?? categories[0]
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section id="products" ref={sectionRef} className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Our Products
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Explore Our Product Range</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our comprehensive range of frozen poultry products — from whole chicken and
            premium cuts to ready-to-cook and marinated varieties.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-border hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentCategory.products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-sm font-semibold text-foreground">{product.name}</h3>
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors group-hover:text-red-light">
                  View Details <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
