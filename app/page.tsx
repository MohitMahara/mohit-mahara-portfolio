import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { SocialLinksSection } from "@/components/social-links-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <SocialLinksSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
