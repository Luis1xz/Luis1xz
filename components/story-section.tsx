"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const milestones = [
  {
    year: "Barranquilla",
    labelEs: "Origen",
    labelEn: "Origin",
    detailEs: "Nacido y criado en Barranquilla, Colombia. Ver de cerca las necesidades de mi entorno forjó mi comprensión de los retos reales y el poder transformador de la tecnología.",
    detailEn: "Born and raised in Barranquilla, Colombia. Seeing the needs around my community shaped my understanding of real challenges and the power of opportunity through technology.",
    icon: "🏙️",
    color: "border-purple-500/40 bg-purple-500/5",
  },
  {
    year: "IDDI Nueva Granada",
    labelEs: "Colegio",
    labelEn: "School",
    detailEs: "Secundaria. Primer contacto con la robótica y la tecnología como herramienta real de solución — camino posteriormente reconocido y publicado por la Alcaldía de Barranquilla.",
    detailEn: "Secondary school. First contact with robotics and technology as a real tool for problem-solving — a journey later highlighted and officially featured by the Barranquilla City Hall.",
    icon: "🏫",
    color: "border-blue-500/40 bg-blue-500/5",
  },
  {
    year: "2023",
    labelEs: "Primera Competencia",
    labelEn: "First Competition",
    detailEs: "Participé en la competencia de robótica Skill Challenge. Medalla de bronce (3er puesto). Primer acercamiento a la robótica competitiva nacional.",
    detailEn: "Competed in Skill Challenge robotics competition. Bronze medal (3rd place). First taste of national-level competitive robotics — the moment everything clicked.",
    icon: "🥉",
    color: "border-orange-500/40 bg-orange-500/5",
  },
  {
    year: "2024",
    labelEs: "Líder & Mentor",
    labelEn: "Leader & Mentor",
    detailEs: "Fundé S3 Robotics en la Universidad del Norte. 1er puesto nacional ROBOTECH. Regresé a Skill Challenge como mentor y coach del equipo campeón.",
    detailEn: "Founded S3 Robotics at Universidad del Norte. 1st place national ROBOTECH. Returned to Skill Challenge as mentor and coach of the winning team.",
    icon: "🏆",
    color: "border-yellow-500/40 bg-yellow-500/5",
  },
  {
    year: "2024",
    labelEs: "NASA Space Apps",
    labelEn: "NASA Space Apps",
    detailEs: "Desarrollamos Project Valentine — sistema meteorológico uniendo sensores ESP32 con datos de la NASA. Ganador Local, Barranquilla. Posteriormente jurado en la siguiente edición.",
    detailEn: "Built Project Valentine — a weather monitoring system combining local ESP32 sensors with NASA data. Local Winner, Barranquilla. Later served as judge in the next edition.",
    icon: "🛸",
    color: "border-cyan-500/40 bg-cyan-500/5",
  },
  {
    year: "2024",
    labelEs: "Universidad & Industria",
    labelEn: "University & Industry",
    detailEs: "Inicié Ingeniería de Sistemas en la Universidad del Norte. Asumí como CTO en KSANCHEZ DELIVERY, desarrollando el software ALFY DEV.",
    detailEn: "Started Systems Engineering at Universidad del Norte. Became CTO at KSANCHEZ DELIVERY, developing ALFY DEV software.",
    icon: "🎓",
    color: "border-blue-500/40 bg-blue-500/5",
  },
  {
    year: "2025",
    labelEs: "Datos & Impacto",
    labelEn: "Data & Impact",
    detailEs: "3er puesto nacional en Data Challenge Pro SURA con solución de IA predictiva para salud. Mentor en Hack Club Scrapyard Barranquilla.",
    detailEn: "3rd national place at Data Challenge Pro SURA with a predictive AI solution for healthcare. Mentored at Hack Club Scrapyard Barranquilla.",
    icon: "🧠",
    color: "border-violet-500/40 bg-violet-500/5",
  },
  {
    year: "2026",
    labelEs: "Ingeniería Biomédica",
    labelEn: "Biomedical Engineering",
    detailEs: "Inicio de Ingeniería Biomédica en la Universidad del Norte — construyendo el puente entre software, inteligencia artificial y salud.",
    detailEn: "Starting Biomedical Engineering at Universidad del Norte — building the intersection between software, AI, and health technology.",
    icon: "🧬",
    color: "border-pink-500/40 bg-pink-500/5",
  },
]

export function StorySection() {
  const { language, t } = useLanguage()

  return (
    <section id="story" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="text-xs font-mono text-orange-400 tracking-widest uppercase mb-4">
            {t("Historia", "Story")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("De Barranquilla a la Ingeniería", "From Barranquilla to Engineering")}
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-2xl">
            {t(
              "Estudiante → competidor → mentor → desarrollador → líder → organizador. Cada paso construyendo sobre el anterior.",
              "Student → competitor → mentor → developer → leader → organizer. Each step building on the last."
            )}
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-blue-600/40 to-transparent" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }} viewport={{ once: true }}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ml-10 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`inline-block p-4 rounded-xl border ${m.color} backdrop-blur-sm hover:border-purple-400/50 transition-colors max-w-sm ${i % 2 !== 0 ? "" : "md:ml-auto"}`}>
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-lg">{m.icon}</span>
                      <div>
                        <p className="text-xs font-mono text-purple-400/60">{m.year}</p>
                        <p className="text-sm font-semibold text-white">
                          {language === "es" ? m.labelEs : m.labelEn}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-purple-200/60 leading-relaxed">
                      {language === "es" ? m.detailEs : m.detailEn}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-5 ring-4 ring-[#0d0a1e] shadow-lg shadow-purple-500/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
