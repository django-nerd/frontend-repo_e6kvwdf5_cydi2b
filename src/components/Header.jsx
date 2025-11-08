import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">Vibe Studio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">Sign in</button>
            <button className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">Get started</button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 pt-2">
              <a href="#features" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Features</a>
              <a href="#how" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">How it works</a>
              <a href="#pricing" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Pricing</a>
              <a href="#contact" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
              <div className="flex gap-2 px-3 pt-2">
                <button className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">Sign in</button>
                <button className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">Get started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
