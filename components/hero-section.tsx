"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import { InteractiveAvatar } from "@/components/interactive-avatar"

const words = ["Robotics", "AI", "Software", "STEM", "Biomedical"]

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  useEffect(() => {
    const word = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100)
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
          animate={{ top: ["-2%", "102%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-8 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Based in Barranquilla, Colombia
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Luis Alfonso
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Herrera
              </span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="text-purple-300/70 text-lg">Building in</span>
            <span className="text-xl font-semibold text-cyan-400 min-w-[140px]">
              {displayed}<span className="animate-pulse text-purple-400">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-lg"
          >
            I build technology with purpose.
          </motion.p>

          {/* Degree badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
              <span className="text-blue-400 text-lg">🎓</span>
              <div>
                <p className="text-xs text-blue-400/60">2024–2029</p>
                <p className="text-sm font-medium text-white">Ingeniería de Sistemas</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-500/30 bg-gradient-to-r from-violet-500/10 to-purple-500/10">
              <span className="text-violet-400 text-lg">🧬</span>
              <div>
                <p className="text-xs text-violet-400/60">2026–2030</p>
                <p className="text-sm font-medium text-white">Ingeniería Biomédica</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-sm text-purple-400/50"
          >
            Universidad del Norte · Barranquilla, Colombia
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-purple-500/25"
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="#story"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-purple-500/40 hover:border-purple-400/70 text-purple-300 hover:text-white font-medium rounded-lg transition-all text-sm bg-purple-500/5 hover:bg-purple-500/10"
            >
              My Story
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1NDWC_kqXmsLt0-Lt1efEcnVa9GrmLXg8/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 hover:text-white font-medium rounded-lg transition-all text-sm flex items-center gap-2 bg-cyan-500/5"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a href="https://github.com/alfonso1xz" target="_blank" rel="noopener noreferrer" className="text-purple-400/50 hover:text-purple-300 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/luis1xz" target="_blank" rel="noopener noreferrer" className="text-purple-400/50 hover:text-purple-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-purple-500/40 text-sm">luis1xz.vercel.app</span>
          </motion.div>
        </div>

        {/* Right: 3D Interactive Video Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <InteractiveAvatar mouseX={mouseX} mouseY={mouseY} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5 text-purple-400/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
