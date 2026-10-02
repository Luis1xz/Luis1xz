"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cpu, Thermometer, Globe, Wifi, Brain, Heart } from "lucide-react"
import { Tilt3DCard } from "@/components/tilt-3d-card"
import { useLanguage } from "@/context/language-context"

interface Experiment {
  id: string
  icon: React.ReactNode
  titleEs: string
  titleEn: string
  subtitleEs: string
  subtitleEn: string
  status: "active" | "completed" | "upcoming"
  problemEs: string
  problemEn: string
  solutionEs: string
  solutionEn: string
  hardware?: string[]
  software?: string[]
  tech: string[]
  resultEs?: string
  resultEn?: string
}

const experiments: Experiment[] = [
  {
    id: "line-follower",
    icon: <Cpu className="w-5 h-5" />,
    titleEs: "Seguidor de Línea",
    titleEn: "Line Follower",
    subtitleEs: "Robot de navegación autónoma",
    subtitleEn: "Autonomous navigation robot",
    status: "completed",
    problemEs: "Programar un robot para seguir de forma autónoma una pista con sensores y algoritmos de control.",
    problemEn: "Program a robot to autonomously follow a line track using sensors and control algorithms.",
    solutionEs: "Diseñé y construí un robot seguidor de línea con sensores infrarrojos y microcontrolador, implementando un algoritmo de control PID para un trazado suave de trayectoria.",
    solutionEn: "Designed and built a line-following robot with infrared sensors and a microcontroller, implementing a PID-based control algorithm for smooth trajectory tracking.",
    hardware: ["Microcontroller", "IR Sensors", "Motor Driver", "DC Motors"],
    software: ["C++", "PID Algorithm"],
    tech: ["C++", "Microcontrollers", "Sensors", "Robotics"],
    resultEs: "Competí en Skill Challenge. Medalla de bronce (2023).",
    resultEn: "Competed in Skill Challenge. Bronze medal (2023).",
  },
  {
    id: "valentine",
    icon: <Globe className="w-5 h-5" />,
    titleEs: "Valentine — Monitoreo Ambiental",
    titleEn: "Valentine — Environmental Monitoring",
    subtitleEs: "ESP32 + APIs de NASA",
    subtitleEn: "ESP32 + NASA APIs",
    status: "completed",
    problemEs: "Monitorear condiciones climáticas locales y cruzarlas con datos satelitales globales de la NASA para emitir alertas de riesgo climático.",
    problemEn: "Monitor local weather conditions and cross-reference with global NASA data to generate climate risk alerts.",
    solutionEs: "Dispositivo ESP32 con sensores de temperatura, humedad y lluvia conectado a APIs de la NASA con notificaciones en tiempo real incluyendo llamadas telefónicas.",
    solutionEn: "ESP32 device with temperature, humidity, and rain sensors. Connects to NASA APIs to combine local and global data. Sends real-time alerts including phone call notifications.",
    hardware: ["ESP32", "DHT Sensor", "Rain Sensor", "WiFi Module"],
    software: ["Python", "Flask", "React", "NASA APIs"],
    tech: ["ESP32", "Python", "Flask", "React", "NASA APIs", "Machine Learning"],
    resultEs: "Ganador Local — NASA International Space Apps Challenge Barranquilla.",
    resultEn: "Local Winner — NASA International Space Apps Challenge, Barranquilla.",
  },
  {
    id: "alfy-dev",
    icon: <Brain className="w-5 h-5" />,
    titleEs: "ALFY DEV",
    titleEn: "ALFY DEV",
    subtitleEs: "Software de automatización contable",
    subtitleEn: "Accounting automation software",
    status: "active",
    problemEs: "Procesamiento financiero manual que tomaba cerca de 1 semana por ciclo en una empresa logística de EE. UU.",
    problemEn: "Manual financial processing taking ~1 week per cycle at a US logistics company.",
    solutionEs: "Software contable y operacional personalizado que automatiza cálculos financieros, salarios y gestión de datos en un servidor centralizado.",
    solutionEn: "Custom accounting and operations software that automates financial calculations, salary processing, and data management.",
    hardware: [],
    software: ["Python", "Data Processing", "Server Integration"],
    tech: ["Python", "Data Processing", "Automation"],
    resultEs: "~1 semana → ~2 segundos. Implementado en KSANCHEZ DELIVERY (Miami, FL).",
    resultEn: "~1 week → ~2 seconds. Deployed at KSANCHEZ DELIVERY (Miami, FL).",
  },
  {
    id: "conducarnorte",
    icon: <Wifi className="w-5 h-5" />,
    titleEs: "Plataforma Conducarnorte",
    titleEn: "ConductarNorte Platform",
    subtitleEs: "Sistema de encuestas de satisfacción",
    subtitleEn: "Satisfaction survey system",
    status: "completed",
    problemEs: "Recolección manual de encuestas de satisfacción — ineficiente y difícil de tabular y analizar.",
    problemEn: "Manual data collection for satisfaction surveys — inefficient and hard to analyze.",
    solutionEs: "Plataforma web para encuestas digitales, evaluación de satisfacción, PQRS y panel administrativo con múltiples niveles de acceso. Desarrollado con Google Apps Script y Google Sheets.",
    solutionEn: "Web platform for digital surveys, satisfaction evaluation, PQRS, and admin panel with multi-level access. Built with Google Apps Script and Google Sheets.",
    hardware: [],
    software: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JS"],
    tech: ["Google Apps Script", "Google Sheets", "Web", "QR Codes"],
    resultEs: "Automatización total de recolección y reportería de procesos administrativos.",
    resultEn: "Automated data collection and reporting for administrative processes.",
  },
  {
    id: "esp32",
    icon: <Thermometer className="w-5 h-5" />,
    titleEs: "Experimentos con ESP32",
    titleEn: "ESP32 Experiments",
    subtitleEs: "Prototipado IoT y microcontroladores",
    subtitleEn: "IoT & microcontroller prototyping",
    status: "active",
    problemEs: "Aprender IoT y sistemas embebidos mediante prototipado práctico continuo.",
    problemEn: "Learning IoT and embedded systems through hands-on prototyping.",
    solutionEs: "Experimentos activos con ESP32: comunicación inalámbrica, integración de sensores y transmisión de datos a dashboards.",
    solutionEn: "Ongoing experiments with ESP32 microcontrollers: wireless communication, sensor integration, and data transmission.",
    hardware: ["ESP32", "Various Sensors", "Wireless Circuits"],
    software: ["C++", "MicroPython", "Tinkercad"],
    tech: ["ESP32", "C++", "MicroPython", "IoT"],
  },
  {
    id: "biomedical",
    icon: <Heart className="w-5 h-5" />,
    titleEs: "Ingeniería Biomédica",
    titleEn: "Biomedical Engineering",
    subtitleEs: "Próximamente — 2026",
    subtitleEn: "Upcoming — 2026",
    status: "upcoming",
    problemEs: "Al comenzar Ingeniería Biomédica en 2026, exploraré la intersección entre software, datos de salud y dispositivos médicos.",
    problemEn: "As I begin Biomedical Engineering in 2026, I plan to explore the intersection of software, data, and health technology.",
    solutionEs: "Proyectos futuros enfocados en procesamiento de señales biomédicas, datos clínicos y aplicaciones de IA en salud.",
    solutionEn: "Future projects exploring biomedical signals, health data, and medical technology applications.",
    hardware: [],
    software: [],
    tech: ["Biomedical Signals", "Health Data", "Python", "AI"],
  },
]

export function LuisLab() {
  const [selected, setSelected] = useState<Experiment | null>(null)
  const { language, t } = useLanguage()

  const statusConfig = {
    active: { label: t("Activo", "Active"), color: "text-green-400", dot: "bg-green-400", border: "border-green-500/30", bg: "bg-green-500/5" },
    completed: { label: t("Completado", "Completed"), color: "text-blue-400", dot: "bg-blue-400", border: "border-blue-500/20", bg: "" },
    upcoming: { label: t("Próximo", "Upcoming"), color: "text-purple-400/50", dot: "bg-purple-400/40", border: "border-purple-500/10", bg: "" },
  }

  return (
    <section id="lab" className="py-24 px-6 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4">Luis Lab</p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t("Laboratorio de Experimentos", "Personal experiments")}
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-xl">
            {t(
              "Un laboratorio personal de proyectos — desde robótica competitiva hasta automatización contable.",
              "A personal laboratory of projects — from competitive robotics to accounting automation."
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((exp, i) => {
            const status = statusConfig[exp.status]
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <Tilt3DCard
                  tiltDegree={9}
                  onClick={() => setSelected(exp)}
                  className={`text-left p-5 rounded-2xl border ${status.border} ${status.bg} bg-gray-900/60 hover:border-purple-400/60 cursor-pointer transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:text-cyan-300 group-hover:bg-purple-500/25 transition-all">
                      {exp.icon}
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/5">
                      <span className={`w-2 h-2 rounded-full ${status.dot} ${exp.status === "active" ? "animate-pulse shadow-sm shadow-green-400" : ""}`} />
                      <span className={`text-xs font-mono font-medium ${status.color}`}>{status.label}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white text-base mb-1 group-hover:text-purple-200 transition-colors">
                    {language === "es" ? exp.titleEs : exp.titleEn}
                  </h3>
                  <p className="text-xs text-purple-300/60 mb-3">
                    {language === "es" ? exp.subtitleEs : exp.subtitleEn}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.slice(0, 3).map((tItem) => (
                      <span key={tItem} className="text-xs px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-400/20">{tItem}</span>
                    ))}
                    {exp.tech.length > 3 && <span className="text-xs text-purple-400/50">+{exp.tech.length - 3}</span>}
                  </div>
                </Tilt3DCard>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-purple-500/30 rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl shadow-purple-500/20"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-400">{selected.icon}</span>
                    <h3 className="text-xl font-bold text-white">
                      {language === "es" ? selected.titleEs : selected.titleEn}
                    </h3>
                  </div>
                  <p className="text-sm text-purple-300/50">
                    {language === "es" ? selected.subtitleEs : selected.subtitleEn}
                  </p>
                </div>
                <button onClick={() => setSelected(null)} className="text-purple-400/50 hover:text-white transition-colors p-1" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">
                    {t("Problema", "Problem")}
                  </p>
                  <p className="text-sm text-purple-200/70 leading-relaxed">
                    {language === "es" ? selected.problemEs : selected.problemEn}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">
                    {t("Solución", "Solution")}
                  </p>
                  <p className="text-sm text-purple-200/70 leading-relaxed">
                    {language === "es" ? selected.solutionEs : selected.solutionEn}
                  </p>
                </div>
                {(selected.resultEs || selected.resultEn) && (
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">
                      {t("Resultado", "Result")}
                    </p>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {language === "es" ? selected.resultEs : selected.resultEn}
                    </p>
                  </div>
                )}
                {selected.hardware && selected.hardware.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">
                      {t("Hardware", "Hardware")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.hardware.map((h) => (
                        <span key={h} className="text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">{h}</span>
                      ))}
                    </div>
                  </div>
                )}
                {selected.software && selected.software.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">
                      {t("Software", "Software")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.software.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
