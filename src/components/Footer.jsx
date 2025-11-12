export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} — Built with calm and care.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Twitter</a>
          <a href="#" className="hover:text-gray-900">GitHub</a>
          <a href="#" className="hover:text-gray-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
