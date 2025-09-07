const technologies = [
  { name: "React", category: "Frontend"},
  { name: "Next.js", category: "Framework"},
  { name: "TypeScript", category: "Language",  },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend"},
  { name: "Express", category: "Backend"},
  { name: "PostgreSQL", category: "Database"},
  { name: "MongoDB", category: "Database"},
  { name: "AWS", category: "Cloud"},
  { name: "Docker", category: "DevOps"},
  { name: "Git", category: "Tools"},
  { name: "Figma", category: "Design"},
]

export function TechStackSection() {
  return (
    <section className="py-8 bg-customBlack">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-8 text-gray-300">TECH STACK</h2>

        <div className="grid grid-cols-3 gap-2 md:grid-cols-8 md:gap-4">
          {technologies.map((tech, index) => (
            <div key={tech.name} className="p-1 text-center border boder-white/20 rounded-lg text-gray-400 hover:text-gray-200 hover:scale-105 transition-transform duration-200">
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
