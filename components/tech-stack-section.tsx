const technologies = [
  { name: "React", category: "Frontend", logo: "/react-logo.png" },
  { name: "Next.js", category: "Framework", logo: "/nextjs-logo.png" },
  { name: "TypeScript", category: "Language", logo: "/typescript-logo-blue.png" },
  { name: "Tailwind CSS", category: "Styling", logo: "/tailwind-css-logo-teal.png" },
  { name: "Node.js", category: "Backend", logo: "/nodejs-green-logo.png" },
  { name: "Express", category: "Backend", logo: "/placeholder.svg?height=48&width=48" },
  { name: "PostgreSQL", category: "Database", logo: "/postgresql-blue-elephant.png" },
  { name: "MongoDB", category: "Database", logo: "/mongodb-green-leaf.png" },
  { name: "AWS", category: "Cloud", logo: "/aws-logo.png" },
  { name: "Docker", category: "DevOps", logo: "/docker-logo.png" },
  { name: "Git", category: "Tools", logo: "/git-logo.png" },
  { name: "Figma", category: "Design", logo: "/placeholder.svg?height=48&width=48" },
]

export function TechStackSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-black">Tech Stack</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Technologies I use to build modern web applications</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 gap-8 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center group hover:scale-105 transition-transform duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gray-700 text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
