import Link from "next/link"

export default function Header(){
  return<>
   <div className="flex justify-center items-center w-full">
    <nav className="fixed z-50 top-4">
       <ul className="flex justify-center items-center border border-white/20 bg-black/70 backdrop-blur-sm transition-all duration-300 space-x-6 text-gray-300 rounded-full mx-auto px-6 py-1">
            <Link
              href="https://github.com/mohitmahara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="https://linkedin.com/in/mohit-mahara/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              Stack
            </Link>
            <Link
              href="https://leetcode.com/u/Mohit_671/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              Projects
            </Link>
            <Link
              href="mailto:maharamohit144@gmail.com"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              Contact
            </Link>
       </ul>
    </nav>
   </div>
  </>
}