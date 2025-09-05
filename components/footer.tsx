
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white py-12 px-4 border-t border-gray-200">
          <p className="text-gray-900 text-sm text-center">© {currentYear} Mohit Mahara. All rights reserved.</p>
    </footer>
  )
}
