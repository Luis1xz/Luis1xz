"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const navItems = [
  { labelEs: "Proyectos", labelEn: "Work", href: "#work" },
  { labelEs: "Laboratorio", labelEn: "Lab", href: "#lab" },
  { labelEs: "Historia", labelEn: "Story", href: "#story" },
  { labelEs: "Impacto", labelEn: "Impact", href: "#impact" },
  { labelEs: "Acerca", labelEn: "About", href: "#about" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, toggleLanguage } = useLanguage()

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm text-purple-300/70 hover:text-white transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                {language === "es" ? item.labelEs : item.labelEn}
              </motion.a>
            ))}
          </div>

          {/* Right: Language Switcher & Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/40 hover:bg-purple-800/50 hover:border-cyan-400/50 text-xs font-mono text-purple-200 transition-all shadow-md"
              title={language === "es" ? "Cambiar a Inglés (Switch to English)" : "Switch to Spanish (Cambiar a Español)"}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-bold text-white tracking-wide">
                {language === "es" ? "ES" : "EN"}
              </span>
              <span className="text-[10px] text-purple-400 opacity-60">|</span>
              <span className="text-[11px] text-purple-300/70">
                {language === "es" ? "EN" : "ES"}
              </span>
            </motion.button>

            <div className="w-px h-4 bg-purple-500/20" />

            <motion.a
              href="https://github.com/alfonso1xz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
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
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Right Bar: Language Button + Hamburger */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-900/50 text-xs font-mono text-purple-200"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-cyan-400" />
              <span className="font-bold">{language === "es" ? "ES" : "EN"}</span>
            </button>

            <button
              className="text-purple-300 hover:text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-purple-950/95 backdrop-blur-xl border-b border-purple-500/20 p-6"
          >
            <div className="flex flex-col gap-4">
              {/* Mobile Language Switcher Selector */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-purple-500/20 bg-purple-900/30 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>{language === "es" ? "Idioma" : "Language"}:</span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setLanguage("es")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      language === "es"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                        : "text-purple-400/70 hover:text-white"
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      language === "en"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                        : "text-purple-400/70 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-purple-200 hover:text-white text-lg py-2 border-b border-purple-500/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {language === "es" ? item.labelEs : item.labelEn}
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
