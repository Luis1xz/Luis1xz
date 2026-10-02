"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Menu, X } from "lucide-react"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Story", href: "#story" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-purple-950/80 backdrop-blur-xl border-b border-purple-500/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            className="font-bold text-lg tracking-tight"
            whileHover={{ opacity: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">luis</span>
            <span className="text-purple-400">.</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">dev</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm text-purple-300/70 hover:text-white transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://github.com/alfonso1xz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/luis1xz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          <button
            className="md:hidden text-purple-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-purple-950/95 backdrop-blur-xl border-b border-purple-500/20 p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-purple-200 hover:text-white text-lg py-2 border-b border-purple-500/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/alfonso1xz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white flex items-center gap-2">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href="https://linkedin.com/in/luis1xz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white flex items-center gap-2">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
