"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cpu, Thermometer, Globe, Wifi, Brain, Heart } from "lucide-react"

interface Experiment {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  status: "active" | "completed" | "upcoming"
  problem: string
  solution: string
  hardware?: string[]
  software?: string[]
  tech: string[]
  result?: string
}

const experiments: Experiment[] = [
  {
    id: "line-follower",
    icon: <Cpu className="w-5 h-5" />,
    title: "Line Follower",
    subtitle: "Autonomous navigation robot",
    status: "completed",
    problem: "Program a robot to autonomously follow a line track using sensors and control algorithms.",
    solution: "Designed and built a line-following robot with infrared sensors and a microcontroller, implementing a PID-based control algorithm for smooth trajectory tracking.",
    hardware: ["Microcontroller", "IR Sensors", "Motor Driver", "DC Motors"],
    software: ["C++", "PID Algorithm"],
    tech: ["C++", "Microcontrollers", "Sensors", "Robotics"],
    result: "Competed in Skill Challenge robotics competition. Bronze medal (2023).",
  },
  {
    id: "valentine",
    icon: <Globe className="w-5 h-5" />,
    title: "Valentine — Environmental Monitoring",
    subtitle: "ESP32 + NASA APIs",
    status: "completed",
    problem: "Monitor local weather conditions and cross-reference with global NASA data to generate climate risk alerts.",
    solution: "ESP32 device with temperature, humidity, and rain sensors. Connects to NASA APIs to combine local and global data. Sends real-time alerts including phone call notifications.",
    hardware: ["ESP32", "DHT Sensor", "Rain Sensor", "WiFi Module"],
    software: ["Python", "Flask", "React", "NASA APIs"],
    tech: ["ESP32", "Python", "Flask", "React", "NASA APIs", "Machine Learning"],
    result: "Local Winner — NASA International Space Apps Challenge, Barranquilla.",
  },
  {
    id: "alfy-dev",
    icon: <Brain className="w-5 h-5" />,
    title: "ALFY DEV",
    subtitle: "Accounting automation software",
    status: "active",
    problem: "Manual financial processing taking ~1 week per cycle at a US logistics company.",
    solution: "Custom accounting and operations software that automates financial calculations, salary processing, and data management.",
    hardware: [],
    software: ["Python", "Data Processing", "Server Integration"],
    tech: ["Python", "Data Processing", "Automation"],
    result: "~1 week → ~2 seconds. Deployed at KSANCHEZ DELIVERY (Miami, FL).",
  },
  {
    id: "conducarnorte",
    icon: <Wifi className="w-5 h-5" />,
    title: "ConductarNorte Platform",
    subtitle: "Satisfaction survey system",
    status: "completed",
    problem: "Manual data collection for satisfaction surveys and administrative processes — inefficient and hard to analyze.",
    solution: "Web platform for digital surveys, satisfaction evaluation, PQRS, and administrative panel with multi-level access. Built with Google Apps Script and Google Sheets as backend.",
    hardware: [],
    software: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JS", "QR Codes"],
    tech: ["Google Apps Script", "Google Sheets", "Web", "QR Codes"],
    result: "Automated data collection and reporting for administrative processes.",
  },
  {
    id: "esp32-experiments",
    icon: <Thermometer className="w-5 h-5" />,
    title: "ESP32 Experiments",
    subtitle: "IoT & microcontroller prototyping",
    status: "active",
    problem: "Learning IoT and embedded systems through hands-on prototyping.",
    solution: "Ongoing experiments with ESP32 microcontrollers: wireless communication, sensor integration, and data transmission.",
    hardware: ["ESP32", "Various Sensors", "Wireless Circuits"],
    software: ["C++", "MicroPython", "Tinkercad"],
    tech: ["ESP32", "C++", "MicroPython", "IoT"],
  },
  {
    id: "biomedical",
    icon: <Heart className="w-5 h-5" />,
    title: "Biomedical Engineering",
    subtitle: "Upcoming — 2026",
    status: "upcoming",
    problem: "As I begin Biomedical Engineering in 2026, I plan to explore the intersection of software, data, and health technology.",
    solution: "Future projects exploring biomedical signals, health data, and medical technology applications.",
    hardware: [],
    software: [],
    tech: ["Biomedical Signals", "Health Data", "Python", "AI"],
  },
]

const statusConfig = {
  active: { label: "Active", color: "text-green-400", dot: "bg-green-400" },
  completed: { label: "Completed", color: "text-blue-400", dot: "bg-blue-400" },
  upcoming: { label: "Upcoming", color: "text-gray-500", dot: "bg-gray-500" },
}

export function LuisLab() {
  const [selected, setSelected] = useState<Experiment | null>(null)

  return (
    <section id="lab" className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4">Luis Lab</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Personal experiments</h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            A personal laboratory of projects — from competitive robotics to accounting automation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((exp, i) => {
            const status = statusConfig[exp.status]
            return (
              <motion.button
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(exp)}
                className="text-left p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/[0.04] text-gray-400 group-hover:text-white transition-colors">
                    {exp.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${exp.status === 'active' ? 'animate-pulse' : ''}`} />
                    <span className={`text-xs font-mono ${status.color}`}>{status.label}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{exp.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{exp.subtitle}</p>
                <div className="flex flex-wrap gap-1">
                  {exp.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-white/[0.04] text-gray-600 border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                  {exp.tech.length > 3 && (
                    <span className="text-xs text-gray-700">+{exp.tech.length - 3}</span>
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d0d0d] border border-white/[0.1] rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400">{selected.icon}</span>
                    <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{selected.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-600 hover:text-white transition-colors p-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{selected.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">Solution</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{selected.solution}</p>
                </div>
                {selected.result && (
                  <div>
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">Result</p>
                    <p className="text-sm text-gray-300 font-medium leading-relaxed">{selected.result}</p>
                  </div>
                )}
                {selected.hardware && selected.hardware.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">Hardware</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.hardware.map((h) => (
                        <span key={h} className="text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">{h}</span>
                      ))}
                    </div>
                  </div>
                )}
                {selected.software && selected.software.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">Software</p>
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
