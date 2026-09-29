"use client"

import Header from "@/components/header"
import Image from "next/image"
import { FaGithub, FaFileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link"


export function HeroSection() {

  return (
    <>
      <Header />
      <section className="pt-30 pb-12 max-w-4xl mx-auto border-x border-white/20 px-12">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex justify-center items-center">
            <Image src={"/profile.jpg"} width={60} height={50} alt="Mohit_IMG" className="w-48 w-48 rounded-full" />
          </div>
          <div className="flex flex-col justify-start p-6">
            <h1 className="text-2xl md:text-4xl mb-3 text-white">Hey, I'm Mohit Mahara</h1>
            <p className="text-md text-gray-500 mb-6">Software Developer</p>
            <p className="text-md text-gray-400 mb-6">
              Crafting exceptional digital experiences through clean code and thoughtful design
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-5 text-gray-700 py-2">
              <Link
                href="https://github.com/mohitmahara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 p-2 text-gray-400 hover:text-gray-100 hover:scale-110 transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
                <span className="text-sm font-semibold">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/mohit-mahara/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2  p-2 text-gray-400 hover:text-gray-100 hover:scale-110 transition-all duration-200"
              >
                <FaLinkedin className="w-4 h-4" />
                <span className="text-sm font-semibold">Linkedin</span>

              </Link>
              <Link
                href="https://leetcode.com/u/Mohit_671/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 p-2 text-gray-400 hover:text-gray-100 hover:scale-110 transition-all duration-200"
              >
                <SiLeetcode className="w-4 h-4" />
                <span className="text-sm font-semibold">Leetcode</span>
              </Link>

              <Link
                href="https://drive.google.com/file/d/1pR6x7VnHENB6LwbvhIpEwcp1-lC5BxCT/view?usp=drive_link"
                target="_blank"
                className="flex gap-2 p-2 text-gray-400 hover:text-gray-100 hover:scale-110 transition-all duration-200"
              >
                <FaFileAlt className="w-4 h-4" />
                <span className="text-sm font-semibold">Resume</span>
              </Link>
            </ul>

          </div>
        </div>
        <div className="text-gray-300">
          <div className="text-gray-400 pt-2">
            <p className="mt-2">I’m a final-year BCA student passionate about full-stack web development. I love creating responsive, user-friendly websites that balance clean design with solid back-end functionality. Skilled in HTML, CSS, JavaScript, React, Node.js, and databases, I enjoy turning ideas into complete, working projects.</p>
          </div>
        </div>
      </section>
    </>
  )
}
