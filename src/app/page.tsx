import { HeroSection } from "@/components/hero-section"
import TechStackSection  from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import Footer from "@/components/footer"
import WorkSection from "@/components/work-section"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-customBlack">
      <main className="max-w-5xl mx-auto">
          <HeroSection />
          <WorkSection/>
          <TechStackSection />
          <ProjectsSection />
          <Footer />
      </main>
    </div>
  )
}