"use client"

import { motion } from "framer-motion"
import { Tilt3DCard } from "@/components/tilt-3d-card"
import { useLanguage } from "@/context/language-context"

const buildingData = [
  {
    icon: "🎓",
    titleEs: "Ingeniería",
    titleEn: "Engineering",
    descEs: "Ingeniería de Sistemas + Ingeniería Biomédica",
    descEn: "Systems Engineering + Biomedical Engineering",
    color: "from-blue-500/20 to-indigo-500/5",
    border: "border-blue-500/30",
    tagEs: "Universidad del Norte",
    tagEn: "Universidad del Norte",
  },
  {
    icon: "🤖",
    titleEs: "Robótica",
    titleEn: "Robotics",
    descEs: "Robótica competitiva y proyectos con microcontroladores",
    descEn: "Competitive robotics & microcontroller projects",
    color: "from-cyan-500/20 to-blue-500/5",
    border: "border-cyan-500/30",
    tagEs: "S3 Robotics",
    tagEn: "S3 Robotics",
  },
  {
    icon: "🧠",
    titleEs: "IA & Datos",
    titleEn: "AI & Data",
    descEs: "Machine learning, ciencia de datos y soluciones predictivas",
    descEn: "Machine learning, data science & predictive solutions",
    color: "from-violet-500/20 to-purple-500/5",
    border: "border-violet-500/30",
    tagEs: "Activo",
    tagEn: "Active",
  },
  {
    icon: "🌎",
    titleEs: "Educación STEM",
    titleEn: "STEM Education",
    descEs: "Mentoría, divulgación tecnológica y apoyo comunitario",
    descEn: "Mentoring, tech education & community engagement",
    color: "from-green-500/20 to-emerald-500/5",
    border: "border-green-500/30",
    tagEs: "Barranquilla",
    tagEn: "Barranquilla",
  },
  {
    icon: "💻",
    titleEs: "Software",
    titleEn: "Software",
    descEs: "Aplicaciones web, automatización y herramientas digitales",
    descEn: "Web apps, automation & digital tools",
    color: "from-orange-500/20 to-amber-500/5",
    border: "border-orange-500/30",
    tagEs: "Full-Stack",
    tagEn: "Full-Stack",
  },
  {
    icon: "🧬",
    titleEs: "Biomédica",
    titleEn: "Biomedical",
    descEs: "Tecnología en salud y señales biomédicas",
    descEn: "Exploring health technology & biomedical signals",
    color: "from-pink-500/20 to-rose-500/5",
    border: "border-pink-500/30",
    tagEs: "2026–2030",
    tagEn: "2026–2030",
  },
]

export function CurrentlyBuilding() {
  const { language, t } = useLanguage()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">
            {t("Áreas de Enfoque", "Currently Building")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {t("En qué estoy trabajando", "What I'm working on")}
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-xl">
            {t(
              "Un joven ingeniero operando en la intersección de múltiples disciplinas.",
              "A young engineer operating at the intersection of multiple disciplines."
            )}
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildingData.map((item, i) => (
            <motion.div
              key={item.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <Tilt3DCard
                tiltDegree={10}
                className={`p-6 rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-purple-400/60`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl filter drop-shadow-md">{item.icon}</span>
                  <span className="text-xs text-purple-300/70 font-mono px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    {language === "es" ? item.tagEs : item.tagEn}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {language === "es" ? item.titleEs : item.titleEn}
                </h3>
                <p className="text-sm text-purple-200/70 leading-relaxed">
                  {language === "es" ? item.descEs : item.descEn}
                </p>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
