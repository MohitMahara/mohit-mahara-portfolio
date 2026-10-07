import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-customBlack">
      <main className="max-w-5xl mx-auto">
          <HeroSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
      </main>
    </div>
  )
}