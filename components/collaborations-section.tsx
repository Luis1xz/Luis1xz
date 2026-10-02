"use client"

import React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Lock } from "lucide-react"

const collaborations = [
  { name: "Universidad del Norte", logo: "/universidad-norte-logo.png", unlocked: true },
  { name: "Fundación Código Abierto", logo: "/fundacion-codigo-abierto-logo.png", unlocked: true },
  { name: "Caribe Dev", logo: "/caribe-dev-logo.png", unlocked: true },
  { name: "Haze", logo: "/haze-logo.png", unlocked: true },
  { name: "TechCorp", logo: "/abstract-tech-logo.png", unlocked: false },
  { name: "InnovateLab", logo: "/innovation-lab-logo.png", unlocked: false },
]

function TypewriterText({ text, isVisible }: { text: string; isVisible: boolean }) {
  const [displayText, setDisplayText] = useState("")

  React.useEffect(() => {
    if (!isVisible) {
      setDisplayText("")
      return
    }

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [text, isVisible])

  return (
    <div className="h-6 flex items-center justify-center">
      {isVisible && (
        <span className="text-sm text-primary font-medium">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      )}
    </div>
  )
}

export function CollaborationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Colaboraciones
          </h2>
          <p className="text-xl text-muted-foreground">Empresas y organizaciones con las que he trabajado</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {collaborations.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden ${
                  isInView && company.unlocked ? "shadow-lg shadow-primary/20 border-primary/30" : ""
                }`}
              >
                {isInView && company.unlocked && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg animate-pulse"
                  />
                )}

                {company.unlocked ? (
                  <motion.img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className={`w-full h-12 object-contain relative z-10 transition-all duration-700 ${
                      isInView ? "filter-none" : "filter grayscale"
                    } group-hover:grayscale-0 group-hover:brightness-110`}
                    initial={{ filter: "grayscale(100%)" }}
                    animate={{
                      filter: isInView ? "grayscale(0%)" : "grayscale(100%)",
                      brightness: isInView ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  />
                ) : (
                  <div className="w-full h-12 flex items-center justify-center relative z-10">
                    <Lock className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>

              <div className="mt-2">
                <TypewriterText text={company.name} isVisible={hoveredIndex === index && company.unlocked} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
