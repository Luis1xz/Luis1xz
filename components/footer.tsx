"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-white">Luis Alfonso Herrera</p>
            <p className="text-sm text-gray-500 mt-1">Barranquilla, Colombia</p>
            <p className="text-sm text-gray-600 mt-0.5">Systems Engineering × Biomedical Engineering</p>
            <p className="text-xs text-gray-700 mt-1">Robotics · AI · Software · STEM</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/alfonso1xz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/luis1xz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:luisalfonso1818@gmail.com"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-700">Built in Barranquilla 🇨🇴</p>
          <p className="text-xs text-gray-700">© 2025 Luis Alfonso Herrera</p>
        </div>
      </div>
    </footer>
  )
}
