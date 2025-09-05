import { Github, Linkedin, Mail, Code } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    icon: Code,
  },
  {
    name: "Email",
    url: "mailto:john@example.com",
    icon: Mail,
  },
]

export function SocialLinksSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bold text-4xl md:text-5xl mb-4 text-black">Let's Connect</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Ready to collaborate? Find me on these platforms or reach out directly
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:text-black hover:border-gray-400 hover:scale-105 transition-all duration-200 bg-white hover:shadow-sm"
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{link.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
