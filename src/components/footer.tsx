
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="max-w-4xl mx-auto px-6">
      <div className="max-w-3xl mx-auto py-12 px-8 border-t border-white/30">
          <p className="text-gray-300 text-sm text-center">© {currentYear} Mohit Mahara. All rights reserved.</p>
      </div>
    </footer>
  )
}
