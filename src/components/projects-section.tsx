import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import EzCartProjectImg from "@/assets/projects/ezcart.png"
import RydzImg from "@/assets/projects/rydz.png";
import FraudShieldImg from "@/assets/projects/fraudshield.png"
import Link from "next/link"

const projects = [

  {
    title: "RyDz",
    description: "Real-time ride-hailing platform with live rider-driver communication, location-based matching, ride management, routing, and Redis-powered state management.",
    image: RydzImg.src,
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    liveUrl: "https://rydz-nine.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "FraudShield",
    description:
      "Intelligent content creation platform powered by AI with customizable templates and real-time collaboration.",
    image: FraudShieldImg.src,
    tech: ["Vue.js", "Python", "OpenAI", "Redis"],
    liveUrl: "https://trace-nm3o.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Self Hosted Routing Engine",
    description:
      "RESTful API for social media platform with authentication, posts, comments, and real-time notifications.",
    image: "/api-documentation-dark-theme.png",
    tech: ["Node.js", "Express", "JWT", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "EZCart",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: EzCartProjectImg.src,
    tech: ["React.js", "TailwindCSS", "JavaScript", "Node.js", "MongoDB"],
    liveUrl: "https://ez-cart1-329g.vercel.app/",
    githubUrl: "https://github.com/MohitMahara/EZCart1",
  },
]

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
