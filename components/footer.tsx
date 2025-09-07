
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-customBlack py-12 px-4 border-t border-white/30">
          <p className="text-gray-300 text-sm text-center">© {currentYear} Mohit Mahara. All rights reserved.</p>
    </footer>
  )
}
