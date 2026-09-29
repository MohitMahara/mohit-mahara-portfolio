import Link from "next/link"

export default function Header(){
  return<>
   <div className="flex justify-center items-center w-full">
    <nav className="fixed z-50 top-4">
       <ul className="flex justify-center items-center border border-white/20 bg-black/70 backdrop-blur-sm transition-all duration-300 space-x-6 text-gray-300 rounded-full mx-auto px-6 py-1">
            <Link
              href="/#about"
              rel="noopener noreferrer"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/#stack"
              rel="noopener noreferrer"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              Stack
            </Link>
            <Link
              href="/#projects"
              rel="noopener noreferrer"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="p-2 text-sm text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200"
            >
              Contact
            </Link>
       </ul>
    </nav>
   </div>
  </>
}
