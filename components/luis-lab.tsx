"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cpu, Thermometer, Globe, Wifi, Brain, Heart } from "lucide-react"
import { Tilt3DCard } from "@/components/tilt-3d-card"

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
    result: "Competed in Skill Challenge. Bronze medal (2023).",
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
    problem: "Manual data collection for satisfaction surveys — inefficient and hard to analyze.",
    solution: "Web platform for digital surveys, satisfaction evaluation, PQRS, and admin panel with multi-level access. Built with Google Apps Script and Google Sheets.",
    hardware: [],
    software: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JS"],
    tech: ["Google Apps Script", "Google Sheets", "Web", "QR Codes"],
    result: "Automated data collection and reporting for administrative processes.",
  },
  {
    id: "esp32",
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
  active: { label: "Active", color: "text-green-400", dot: "bg-green-400", border: "border-green-500/30", bg: "bg-green-500/5" },
  completed: { label: "Completed", color: "text-blue-400", dot: "bg-blue-400", border: "border-blue-500/20", bg: "" },
  upcoming: { label: "Upcoming", color: "text-purple-400/50", dot: "bg-purple-400/40", border: "border-purple-500/10", bg: "" },
}

export function LuisLab() {
  const [selected, setSelected] = useState<Experiment | null>(null)

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
            Personal experiments
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-xl">
            A personal laboratory of projects — from competitive robotics to accounting automation.
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
                  <h3 className="font-semibold text-white text-base mb-1 group-hover:text-purple-200 transition-colors">{exp.title}</h3>
                  <p className="text-xs text-purple-300/60 mb-3">{exp.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-400/20">{t}</span>
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
                    <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                  </div>
                  <p className="text-sm text-purple-300/50">{selected.subtitle}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-purple-400/50 hover:text-white transition-colors p-1" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-purple-200/70 leading-relaxed">{selected.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">Solution</p>
                  <p className="text-sm text-purple-200/70 leading-relaxed">{selected.solution}</p>
                </div>
                {selected.result && (
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">Result</p>
                    <p className="text-sm text-white font-medium leading-relaxed">{selected.result}</p>
                  </div>
                )}
                {selected.hardware && selected.hardware.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">Hardware</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.hardware.map((h) => (
                        <span key={h} className="text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">{h}</span>
                      ))}
                    </div>
                  </div>
                )}
                {selected.software && selected.software.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-2">Software</p>
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
