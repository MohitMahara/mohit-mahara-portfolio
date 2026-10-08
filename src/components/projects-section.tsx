import { Badge } from "@/components/ui/badge"
import { ExternalLink} from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/projectsData"

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 md:px-10 py-12">
      <div>
        <h2 className="text-3xl mb-8 text-gray-300">PROJECTS</h2>

        <div className="grid md:grid-cols-2 gap-8 px-6">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-black rounded-lg border border-white/20 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative overflow-hidden p-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-38 object-cover rounded-lg"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-200 text-md">{project.title}</h3>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mb-2 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px] bg-customBlack text-gray-500 border border-white/30 px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
