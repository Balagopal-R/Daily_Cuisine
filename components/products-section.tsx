"use client"

import { useState } from "react"
import Image from "next/image"
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
    label: "Whole Chicken & Cuts",
    products: [
      {
        name: "Whole Chicken",
        description: "Premium quality whole frozen chicken, individually packed for freshness.",
        image: "/images/products/Whole Chicken.png",
      },
      {
        name: "Whole Chicken 900g",
        description: "Farm-fresh broiler chicken, processed and blast frozen for export quality.",
        image: "/images/products/Whole Chicken 900g.jpg",
      },
    ],
  },
  {
    id: "cuts",
    label: "Further Processed Products",
    products: [
      {
        name: "Chicken Fingers",
        description: "Lean, boneless chicken strips — ideal for bulk HORECA supply.",
        image: "/images/products/Chicken Fingers.png",
      },
      {
        name: "Seekh Kebab",
        description: "Juicy seekh kebab, carefully spiced and individually quick frozen.",
        image: "/images/products/Seekh Kebab.png",
      },
      {
        name: "Chicken Nuggest",
        description: "Crispy breaded chicken nuggets, pre-cooked and frozen for convenience.",
        image: "/images/products/Chicken Nuggest.png",
      },
      {
        name: "Breakfast Sausage",
        description: "Premium breakfast sausages with a smoky flavor, vacuum sealed.",
        image: "/images/products/Breakfast Sausage.png",
      },
      {
        name: "Chicken Popcorn",
        description: "Bite-sized breaded chicken pieces, perfect as starters or snacks.",
        image: "/images/products/Chicken Popcorn.png",
      },
      {
        name: "Burger Patty",
        description: "Juicy chicken burger patties, pre-formed and quick frozen.",
        image: "/images/products/Burger Patty.png",
      },
      {
        name: "Jumbo Buger Patty",
        description: "Premium oversized burger patties for gourmet preparation.",
        image: "/images/products/Jumbo Buger Patty.png",
      },
      {
        name: "Cocktail Sausage",
        description: "Classic cocktail sausages, perfect for appetizers and parties.",
        image: "/images/products/Cocktail Sausage.png",
      },
      {
        name: "Samosa tray pack Mockup",
        description: "Delicious frozen samosas, ready to fry or bake for authentic taste.",
        image: "/images/products/Samosa tray pack Mockup.jpeg",
      },
    ],
  },
  {
    id: "rtc",
    label: "Rice",
    products: [

    ],
  },
  {
    id: "marinated",
    label: "Other Agro Products",
    products: [

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
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:bg-border hover:text-foreground"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                <h3 className="mb-2 text-sm font-semibold text-foreground">{product.name}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
