import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import InfrastructureSection from "@/components/infrastructure-section"
import CertificationsSection from "@/components/certifications-section"
import PartnerSection from "@/components/partner-section"
import LeadershipSection from "@/components/leadership-section"
import DistributionSection from "@/components/distribution-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <InfrastructureSection />
        <CertificationsSection />
        <PartnerSection />
        <LeadershipSection />
        <DistributionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
