"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

interface SkillGroup {
  category: { es: string; en: string }
  color: string
  dot: string
  skills: { es: string; en: string }[]
}

const skillGroups: SkillGroup[] = [
  {
    category: { es: "Programación", en: "Programming" },
    color: "text-blue-400",
    dot: "bg-blue-500",
    skills: [
      { es: "Python", en: "Python" },
      { es: "C", en: "C" },
      { es: "C++", en: "C++" },
      { es: "Java", en: "Java" },
      { es: "JavaScript", en: "JavaScript" },
      { es: "HTML", en: "HTML" },
      { es: "CSS", en: "CSS" },
    ],
  },
  {
    category: { es: "Desarrollo Web", en: "Web" },
    color: "text-cyan-400",
    dot: "bg-cyan-500",
    skills: [
      { es: "React", en: "React" },
      { es: "Next.js", en: "Next.js" },
      { es: "Vercel", en: "Vercel" },
    ],
  },
  {
    category: { es: "Robótica", en: "Robotics" },
    color: "text-orange-400",
    dot: "bg-orange-500",
    skills: [
      { es: "ESP32", en: "ESP32" },
      { es: "Microcontroladores", en: "Microcontrollers" },
      { es: "Sensores", en: "Sensors" },
      { es: "Circuitos Inalámbricos", en: "Wireless Circuits" },
      { es: "Programación Robótica", en: "Robotics Programming" },
    ],
  },
  {
    category: { es: "IA y Datos", en: "AI & Data" },
    color: "text-violet-400",
    dot: "bg-violet-500",
    skills: [
      { es: "Machine Learning", en: "Machine Learning" },
      { es: "Análisis de Datos", en: "Data Analysis" },
      { es: "Visión Artificial", en: "Computer Vision" },
      { es: "Google Colab", en: "Google Colab" },
    ],
  },
  {
    category: { es: "Ciberseguridad", en: "Cybersecurity" },
    color: "text-red-400",
    dot: "bg-red-500",
    skills: [
      { es: "Seguridad de Redes", en: "Network Security" },
      { es: "Hacking Ético", en: "Ethical Hacking" },
      { es: "Programación Segura", en: "Secure Programming" },
      { es: "Protección de Datos", en: "Data Protection" },
    ],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    color: "text-purple-400",
    dot: "bg-purple-500",
    skills: [
      { es: "Git", en: "Git" },
      { es: "GitHub", en: "GitHub" },
      { es: "Google Sheets", en: "Google Sheets" },
      { es: "Google Apps Script", en: "Google Apps Script" },
      { es: "Tinkercad", en: "Tinkercad" },
      { es: "NetBeans", en: "NetBeans" },
      { es: "VS Code", en: "VS Code" },
      { es: "Microsoft Office", en: "Microsoft Office" },
      { es: "Google Workspace", en: "Google Workspace" },
    ],
  },
  {
    category: { es: "Idiomas", en: "Languages" },
    color: "text-green-400",
    dot: "bg-green-500",
    skills: [
      { es: "Español — Nativo", en: "Spanish — Native" },
      { es: "Inglés — Intermedio", en: "English — Intermediate" },
    ],
  },
]

export function SkillsSection() {
  const { language, t } = useLanguage()

  return (
    <section className="py-24 px-6 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4">
            {t("Habilidades", "Skills")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t("Arsenal técnico", "Technical toolkit")}
          </h2>
          <p className="text-purple-300/60 mt-3">
            {t(
              "Construido a través de proyectos reales y experiencia práctica.",
              "Built through hands-on projects and real-world experience."
            )}
          </p>
        </motion.div>
        <div className="space-y-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category.en}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="sm:w-40 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                  <p className={`text-sm font-medium ${group.color}`}>{group.category[language]}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill.en}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-sm px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-400/20 hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-default"
                  >
                    {skill[language]}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
