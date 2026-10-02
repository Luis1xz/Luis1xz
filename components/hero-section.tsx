"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import Image from "next/image"

function InteractiveRobot({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
      className="w-full h-full flex items-center justify-center"
    >
      <svg viewBox="0 0 280 340" className="w-full max-w-[280px] drop-shadow-2xl" aria-label="Interactive robot illustration">
        {/* Glow effect */}
        <defs>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Background glow */}
        <ellipse cx="140" cy="200" rx="100" ry="80" fill="url(#glowGrad)" />
        
        {/* Body */}
        <rect x="70" y="140" width="140" height="120" rx="16" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        {/* Body details */}
        <rect x="90" y="160" width="40" height="25" rx="4" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />
        <rect x="150" y="160" width="40" height="25" rx="4" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />
        <rect x="90" y="195" width="100" height="4" rx="2" fill="#374151" />
        
        {/* Central panel */}
        <rect x="100" y="205" width="80" height="40" rx="8" fill="#0f172a" stroke="#1d4ed8" strokeWidth="1" />
        <circle cx="120" cy="225" r="5" fill="#22d3ee" filter="url(#glow)" />
        <circle cx="140" cy="225" r="5" fill="#3b82f6" filter="url(#glow)" />
        <circle cx="160" cy="225" r="5" fill="#8b5cf6" filter="url(#glow)" />
        
        {/* Head */}
        <rect x="85" y="70" width="110" height="80" rx="12" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        {/* Eyes */}
        <rect x="100" y="90" width="30" height="20" rx="6" fill="#0ea5e9" filter="url(#glow)" opacity="0.9" />
        <rect x="150" y="90" width="30" height="20" rx="6" fill="#0ea5e9" filter="url(#glow)" opacity="0.9" />
        {/* Eye shine */}
        <rect x="105" y="93" width="10" height="6" rx="3" fill="white" opacity="0.4" />
        <rect x="155" y="93" width="10" height="6" rx="3" fill="white" opacity="0.4" />
        {/* Mouth */}
        <rect x="110" y="120" width="60" height="8" rx="4" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" />
        <rect x="115" y="122" width="10" height="4" rx="2" fill="#60a5fa" />
        <rect x="130" y="122" width="10" height="4" rx="2" fill="#60a5fa" />
        <rect x="145" y="122" width="10" height="4" rx="2" fill="#60a5fa" />
        
        {/* Antenna */}
        <line x1="140" y1="70" x2="140" y2="45" stroke="#60a5fa" strokeWidth="2" />
        <circle cx="140" cy="40" r="8" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" filter="url(#glow)" />
        <circle cx="140" cy="40" r="4" fill="#60a5fa" />
        
        {/* Arms */}
        <rect x="20" y="150" width="50" height="20" rx="10" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="20" cy="160" r="10" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />
        <rect x="210" y="150" width="50" height="20" rx="10" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="260" cy="160" r="10" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />
        
        {/* Legs */}
        <rect x="95" y="258" width="35" height="50" rx="8" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="150" y="258" width="35" height="50" rx="8" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        {/* Feet */}
        <rect x="88" y="298" width="45" height="18" rx="8" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />
        <rect x="143" y="298" width="45" height="18" rx="8" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />
        
        {/* Floating circuit lines */}
        <g opacity="0.4" stroke="#60a5fa" strokeWidth="0.8" fill="none">
          <path d="M 30 100 L 50 100 L 60 90 L 80 90" />
          <path d="M 200 120 L 220 120 L 230 110 L 250 110" />
          <circle cx="50" cy="100" r="2" fill="#60a5fa" />
          <circle cx="220" cy="120" r="2" fill="#60a5fa" />
        </g>
      </svg>
    </motion.div>
  )
}

const words = ["Robotics", "AI", "Software", "STEM", "Biomedical"]

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  // Typewriter
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
      {/* Subtle scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
          animate={{ top: ["-2%", "102%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div className="space-y-8 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm"
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
              <span className="block text-gradient-cyan">Herrera</span>
            </h1>
          </motion.div>

          {/* Typewriter line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="text-gray-400 text-lg">Building in</span>
            <span className="text-xl font-semibold text-blue-400 min-w-[120px]">
              {displayed}<span className="animate-pulse">|</span>
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

          {/* Two degrees badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03]">
              <span className="text-blue-400 text-lg">🎓</span>
              <div>
                <p className="text-xs text-gray-500">2024–2029</p>
                <p className="text-sm font-medium text-white">Ingeniería de Sistemas</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03]">
              <span className="text-violet-400 text-lg">🧬</span>
              <div>
                <p className="text-xs text-gray-500">2026–2030</p>
                <p className="text-sm font-medium text-white">Ingeniería Biomédica</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-sm text-gray-600"
          >
            Universidad del Norte · Barranquilla, Colombia
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="#story"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-white/[0.12] hover:border-white/[0.25] text-gray-300 hover:text-white font-medium rounded-lg transition-all text-sm"
            >
              My Story
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1NDWC_kqXmsLt0-Lt1efEcnVa9GrmLXg8/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-white/[0.08] hover:border-white/[0.15] text-gray-400 hover:text-gray-200 font-medium rounded-lg transition-all text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/alfonso1xz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/luis1xz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-gray-700 text-sm">luis1xz.vercel.app</span>
          </motion.div>
        </div>

        {/* Right: Interactive Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[380px]">
            {/* Glowing ring behind robot */}
            <div className="absolute inset-4 rounded-full bg-blue-600/10 blur-2xl" />
            <div className="absolute inset-0">
              <InteractiveRobot mouseX={mouseX} mouseY={mouseY} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
