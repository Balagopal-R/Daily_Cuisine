import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Quality", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Distribution", href: "#distribution" },
  { label: "Contact", href: "#contact" },
]

const productLinks = [
  { label: "Whole Chicken", href: "#products" },
  { label: "Chicken Cuts", href: "#products" },
  { label: "Ready-to-Cook", href: "#products" },
  { label: "Marinated Range", href: "#products" },
]

const certLinks = [
  "FSSAI Approved",
  "ISO 22000",
  "HACCP Compliant",
  "Export Grade",
]

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                <span className="text-sm font-bold text-accent-foreground">DC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight text-primary-foreground">
                  Daily Cuisine
                </span>
                <span className="text-[9px] font-medium uppercase tracking-widest text-primary-foreground/50">
                  Frozen Poultry Exports
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/60">
              India{"'"}s trusted frozen poultry supplier specializing in export-quality whole
              chicken, premium cuts, and ready-to-cook products.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Product Categories
            </h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Certifications
            </h4>
            <ul className="flex flex-col gap-2.5">
              {certLinks.map((cert) => (
                <li key={cert}>
                  <span className="text-sm text-primary-foreground/60">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/40 sm:flex-row lg:px-8">
          <span>&copy; {new Date().getFullYear()} Daily Cuisine Pvt. Ltd. All rights reserved.</span>
          <span>Authorized Dealership Partner of Sneha Group</span>
        </div>
      </div>
    </footer>
  )
}
