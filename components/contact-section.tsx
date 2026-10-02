"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Robotics, software, AI, biomedical technology or STEM education — if it involves building something meaningful, I&apos;m interested.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          {/* Primary CTA */}
          <motion.a
            href="mailto:luisalfonso1818@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </motion.a>

          {/* Secondary CTAs */}
          <div className="flex gap-3">
            <motion.a
              href="https://linkedin.com/in/luis1xz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 border border-white/[0.12] text-gray-300 hover:text-white hover:border-white/[0.25] rounded-xl transition-all text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/alfonso1xz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 border border-white/[0.12] text-gray-300 hover:text-white hover:border-white/[0.25] rounded-xl transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          </div>

          {/* Info */}
          <div className="mt-8 flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Barranquilla, Colombia</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
