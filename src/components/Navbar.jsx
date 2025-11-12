import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
              <span className="align-middle">Developer</span>
              <span className="ml-1 text-gray-500">· Portfolio</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-gray-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black/90 transition-colors"
              >
                Get in touch
              </a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-lg border border-white/50 shadow-sm"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/50 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-gray-700 hover:bg-white/70"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-lg px-3 py-2 text-white bg-gray-900 text-center"
                  onClick={() => setOpen(false)}
                >
                  Get in touch
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
