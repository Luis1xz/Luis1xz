"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 px-6 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4">
            {t("Contacto", "Contact")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {t("Construyamos algo juntos.", "Let's build something.")}
          </h2>
          <p className="text-purple-300/60 max-w-xl mx-auto">
            {t(
              "Robótica, software, IA, tecnología biomédica o educación STEM — si implica construir algo significativo, me interesa.",
              "Robotics, software, AI, biomedical technology or STEM education — if it involves building something meaningful, I'm interested."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href="mailto:luisalfonso1818@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-500/30"
          >
            <Mail className="w-5 h-5" />
            {t("Envíame un correo", "Email Me")}
          </motion.a>

          <div className="flex gap-3">
            <motion.a
              href="https://linkedin.com/in/luis1xz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 rounded-xl transition-all text-sm bg-purple-500/5 hover:bg-purple-500/10"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/alfonso1xz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 rounded-xl transition-all text-sm bg-purple-500/5 hover:bg-purple-500/10"
            >
              <Github className="w-4 h-4" /> GitHub
            </motion.a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-purple-400/40 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Barranquilla, Colombia</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
