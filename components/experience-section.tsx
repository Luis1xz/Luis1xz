"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { Tilt3DCard } from "@/components/tilt-3d-card"

const experiences = [
  {
    company: "KSANCHEZ DELIVERY",
    location: "Miami, Florida (Operations in Barranquilla)",
    role: "CTO — Chief Technology Officer",
    period: "September 2024 – Present",
    description: "US company specialized in logistics and transport of orders for international platforms (Amazon, AliExpress).",
    responsibilities: [
      "Designed and developed ALFY DEV — accounting software for managing financial and operational data",
      "Replaced a ~1 week manual process with an automated system delivering results in ~2 seconds",
      "Manage and process data sent to a centralized server",
      "Implemented systems to calculate profits, losses, and driver salaries",
      "Supervise technology tools to improve operational efficiency",
      "Collaborate with executive team to align technology with business goals",
    ],
    highlight: "ALFY DEV: 1 week → 2 seconds",
    color: "border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/5",
    accent: "text-green-400",
    dotColor: "bg-green-500",
  },
  {
    company: "CONDUCARNORTE",
    location: "Barranquilla, Colombia",
    role: "Technology & Automation",
    period: "Project-based",
    description: "Technology, automation and intelligent solutions.",
    responsibilities: [
      "Web application development",
      "Automation of administrative and operational processes",
      "Digital survey and satisfaction evaluation platforms",
      "Google Sheets and Google Apps Script integration",
      "QR codes, digital forms, PQRS system",
      "Administrative panel with multi-level access",
    ],
    color: "border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-indigo-500/5",
    accent: "text-blue-400",
    dotColor: "bg-blue-500",
  },
  {
    company: "CERTIFICARNORTE",
    location: "Barranquilla, Colombia",
    role: "Technology Collaboration",
    period: "Project-based",
    description: "Participated in the development of digital tools and automation analysis.",
    responsibilities: [
      "Development of digital tools",
      "Automation of processes",
      "Analysis of technological needs",
      "Design of solutions to improve processes",
    ],
    color: "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-violet-500/5",
    accent: "text-purple-400",
    dotColor: "bg-purple-500",
  },
  {
    company: "CODETEC",
    location: "Barranquilla, Colombia",
    role: "Técnico Asistente Administrativo",
    period: "March 2023 – Present",
    description: "Technical administrative training program.",
    responsibilities: [
      "Outstanding student — exempted from 2nd module for academic performance",
      "Microsoft Office Suite",
      "Google Workspace",
      "Executive presentations",
    ],
    color: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5",
    accent: "text-cyan-400",
    dotColor: "bg-cyan-500",
  },
]

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Tilt3DCard
      tiltDegree={6}
      className={`p-5 rounded-2xl border ${exp.color} hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 mt-0.5">
            <Briefcase className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-base">{exp.company}</h3>
            <p className={`text-sm ${exp.accent} font-medium`}>{exp.role}</p>
            <p className="text-xs text-purple-300/50 mt-0.5">{exp.location} · {exp.period}</p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-purple-400/50 hover:text-purple-300 transition-colors flex-shrink-0 mt-1 p-1 rounded-lg hover:bg-white/5"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-purple-500/15">
              <p className="text-sm text-purple-300/60 mb-3">{exp.description}</p>
              {"highlight" in exp && exp.highlight && (
                <div className="mb-3 px-3.5 py-2 rounded-xl bg-green-500/10 border border-green-500/20 shadow-sm">
                  <p className="text-xs font-mono text-green-400">⚡ {exp.highlight}</p>
                </div>
              )}
              <ul className="space-y-1.5">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-purple-200/70">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.dotColor}`} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Tilt3DCard>
  )
}

export function ExperienceSection() {
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
          <p className="text-xs font-mono text-orange-400 tracking-widest uppercase mb-4">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            Professional work
          </h2>
          <p className="text-purple-300/60 mt-3">Real responsibilities. Real impact.</p>
        </motion.div>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
