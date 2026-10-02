"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const degrees = [
  {
    degreeEs: "Ingeniería de Sistemas",
    degreeEn: "Systems Engineering",
    university: "Universidad del Norte",
    period: "2024 – 2029",
    icon: "💻",
    color: "border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-indigo-500/5",
    accent: "text-blue-400",
    fieldsEs: ["Desarrollo de Software", "Algoritmos", "Bases de Datos", "Redes", "Inteligencia Artificial"],
    fieldsEn: ["Software Development", "Algorithms", "Databases", "Networks", "Artificial Intelligence"],
  },
  {
    degreeEs: "Ingeniería Biomédica",
    degreeEn: "Biomedical Engineering",
    university: "Universidad del Norte",
    period: "2026 – 2030",
    icon: "🧬",
    color: "border-violet-500/40 bg-gradient-to-br from-violet-500/10 to-purple-500/5",
    accent: "text-violet-400",
    fieldsEs: ["Señales Biomédicas", "Tecnología en Salud", "Dispositivos Médicos", "Datos Clínicos", "Instrumentación"],
    fieldsEn: ["Biomedical Signals", "Health Technology", "Medical Devices", "Clinical Data", "Instrumentation"],
  },
]

export function EducationSection() {
  const { language, t } = useLanguage()

  const complementary = [
    {
      label: "CODETEC",
      detail: t(
        "Técnico Asistente Administrativo · Marzo 2023–Presente · Estudiante destacado — exonerado del 2do módulo por rendimiento académico · Microsoft Office · Google Workspace",
        "Technical Administrative Assistant · March 2023–Present · Outstanding student — exempted from 2nd module for academic excellence · Microsoft Office · Google Workspace"
      ),
      icon: "📋",
    },
    {
      label: "Platzi",
      detail: t(
        "Programación Básica · Python · Backend Profesional · Ethical Hacking · Prompt Engineering con ChatGPT · Matemáticas para Ciencia de Datos e IA · Google Suite · Astrobiología · Comunicación Efectiva · Fundamentos de Matemáticas · Estrategias para el Aprendizaje Efectivo",
        "Basic Programming · Python · Professional Backend · Ethical Hacking · Prompt Engineering with ChatGPT · Mathematics for Data Science & AI · Google Suite · Astrobiology · Effective Communication · Foundations of Mathematics · Effective Learning Strategies"
      ),
      icon: "📚",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4">
            {t("Educación", "Education")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t("Dos carreras de ingeniería", "Two engineering degrees")}
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-2xl">
            {t(
              "Estudiando simultáneamente en la Universidad del Norte — forjando las bases para operar en la intersección de software, analítica de datos y tecnología biomédica.",
              "Studying simultaneously at Universidad del Norte — building the foundation to work at the intersection of software, data, and health technology."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {degrees.map((deg, i) => (
            <motion.div key={deg.degreeEn} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
              className={`p-6 rounded-xl border ${deg.color} hover:shadow-lg hover:shadow-purple-500/10 transition-all`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{deg.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {language === "es" ? deg.degreeEs : deg.degreeEn}
                    </h3>
                    <p className="text-sm text-purple-300/60">{deg.university}</p>
                  </div>
                </div>
                <span className={`text-sm font-mono ${deg.accent} px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20`}>{deg.period}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(language === "es" ? deg.fieldsEs : deg.fieldsEn).map((f) => (
                  <span key={f} className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-400/20">{f}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
          className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-blue-900/30 mb-12">
          <p className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-4 text-center">
            {t("La Intersección", "The intersection")}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="px-6 py-3 rounded-lg border border-blue-500/40 bg-blue-500/10">
              <p className="text-sm font-semibold text-blue-400">{t("SOFTWARE", "SOFTWARE")}</p>
              <p className="text-xs text-blue-300/50 mt-1">{t("Ingeniería de Sistemas", "Systems Engineering")}</p>
            </div>
            <div className="text-2xl text-purple-500/60 font-light">+</div>
            <div className="px-6 py-3 rounded-lg border border-violet-500/40 bg-violet-500/10">
              <p className="text-sm font-semibold text-violet-400">{t("BIOMÉDICA", "BIOMED")}</p>
              <p className="text-xs text-violet-300/50 mt-1">{t("Ingeniería Biomédica", "Biomedical Engineering")}</p>
            </div>
            <div className="text-2xl text-purple-500/60 font-light">=</div>
            <div className="px-6 py-3 rounded-lg border border-cyan-500/40 bg-cyan-500/10">
              <p className="text-sm font-semibold text-cyan-400">{t("TECNOLOGÍA EN SALUD", "TECH FOR HEALTH")}</p>
              <p className="text-xs text-cyan-300/50 mt-1">{t("IA · Datos · Dispositivos Médicos", "AI · Data · Medical Technology")}</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <p className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-6">
            {t("Aprendizaje Continuo", "Continuous Learning")}
          </p>
          {complementary.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              className="flex gap-4 p-4 rounded-xl border border-purple-500/20 bg-gray-900/30 hover:border-purple-400/40 transition-colors">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <h4 className="font-semibold text-white">{item.label}</h4>
                </div>
                <p className="text-sm text-purple-200/50 leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
