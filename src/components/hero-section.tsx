"use client"

import Header from "@/components/header"
import Image from "next/image"
import { FaGithub, FaFileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link"
import coverImg from "@/assets/heroSection/cover-img.jpg";
import ContributionGraph from "./contributionGraph";



export function HeroSection() {

  return (
    <>
      {/* <Header /> */}
      <section className="pb-8 max-w-4xl mx-auto">
        {/* Cover Image Section */}
        <div className="w-full h-[150px] md:h-[250px]">
           <Image src={coverImg.src} alt="Cover Image" height={34} width={100} className="w-full h-full object-cover" />
        </div>
       
        {/* Profile Image */}
        <div className="relative w-full h-20 md:h-30 px-4 md:px-10">
          <Image src={"/profile.jpg"} width={38} height={38} alt="Mohit_IMG" className="w-28 h-28 md:h-38 md:w-38 rounded-full absolute -top-10" />
        </div>
        
        {/* Headline */}
        <div className="px-4 md:px-10 flex flex-col md:flex-row justify-between gap-4">          
          <div className="flex flex-col justify-start">
            <h1 className="text-xl md:text-3xl mb-2 text-white">Mohit Mahara</h1>
            <p className="text-md text-gray-500 mb-2">Software Developer</p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 text-gray-700">
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

        <div className="h-[1px] my-2 w-full divider"></div>
       
        {/* About Me */}
        <div className="text-gray-400 pt-2 px-4 md:px-10 text-[12px] md:text-[16px]">
          <p className="font-bold mb-1">I like building things from scratch.</p>
          <p className="leading-relaxed"> I work across frontend, backend, and AI to turn ideas into working products. I enjoy figuring things out as I go, and I believe in learning by doing.
            For me, it's not really about sticking to one technology. I just like learning whatever I need to build something properly, ship it, and keep improving it.
          </p>
        </div>

         <div className="w-full pt-10 px-4 md:px-10">
          <ContributionGraph platform="github" username="mohitmahara" />
         </div>

      </section>
    </>
  )
}
