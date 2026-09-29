import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-customBlack">
      <div className="max-w-5xl mx-auto border-x border-white/20 px-6">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      </div>
    </main>
  )
}