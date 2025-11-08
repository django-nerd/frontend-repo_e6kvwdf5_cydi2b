import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Vibe Studio. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" aria-label="GitHub" className="hover:text-gray-900">
              <Github size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-900">
              <Twitter size={18} />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-gray-900">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
