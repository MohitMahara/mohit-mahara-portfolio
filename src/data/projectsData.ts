import EzCartProjectImg from "@/assets/projects/ezcart.png"
import RydzImg from "@/assets/projects/rydz.png";
import FraudShieldImg from "@/assets/projects/fraudshield.png"
import DelhiOSRMImg from "@/assets/projects/delhi-osrm-img.jpg"

export const projects = [

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
    image: DelhiOSRMImg.src,
    tech: ["Node.js", "Express", "JWT", "PostgreSQL"],
    liveUrl: "https://github.com/MohitMahara/OSRM-Routing-Engine-Delhi",
    githubUrl: "https://github.com/MohitMahara/OSRM-Routing-Engine-Delhi",
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