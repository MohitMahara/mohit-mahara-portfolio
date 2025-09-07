import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    image: "/modern-task-dashboard.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Intelligent content creation platform powered by AI with customizable templates and real-time collaboration.",
    image: "/ai-content-generation-interface.png",
    tech: ["Vue.js", "Python", "OpenAI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for social media platform with authentication, posts, comments, and real-time notifications.",
    image: "/api-documentation-dark-theme.png",
    tech: ["Node.js", "Express", "JWT", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8 px-4 bg-customBlack">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-8 text-gray-300">PROJECTS</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-black rounded-lg border border-white/20 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-200 text-xl mb-3 ">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-customBlack text-gray-500 border border-white/30 px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1 border border-white/30 bg-black hover:text-gray-100 font-medium">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border  border-white/30 text-gray-300 group hover:bg-gray-50 bg-transparent"
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300">
                      <Github className="text-gray-200 group-hover:text-gray-900 w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
