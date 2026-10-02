"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { Tilt3DCard } from "@/components/tilt-3d-card"
import { useLanguage } from "@/context/language-context"

const experiences = [
  {
    company: "KSANCHEZ DELIVERY",
    locationEs: "Miami, Florida (Operaciones en Barranquilla)",
    locationEn: "Miami, Florida (Operations in Barranquilla)",
    roleEs: "CTO — Director de Tecnología",
    roleEn: "CTO — Chief Technology Officer",
    periodEs: "Septiembre 2024 – Presente",
    periodEn: "September 2024 – Present",
    descEs: "Empresa de EE. UU. especializada en logística y transporte de pedidos para plataformas internacionales (Amazon, AliExpress).",
    descEn: "US company specialized in logistics and transport of orders for international platforms (Amazon, AliExpress).",
    responsibilitiesEs: [
      "Diseñé y desarrollé ALFY DEV — software contable para gestionar datos financieros y operacionales",
      "Reemplacé un proceso manual de ~1 semana por un sistema automatizado que entrega resultados en ~2 segundos",
      "Administración y procesamiento de datos centralizados en servidor",
      "Implementé sistemas para calcular utilidades, pérdidas y salarios de conductores",
      "Supervisión de herramientas tecnológicas para optimizar eficiencia operativa",
      "Colaboración con la dirección ejecutiva para alinear la tecnología con metas comerciales",
    ],
    responsibilitiesEn: [
      "Designed and developed ALFY DEV — accounting software for managing financial and operational data",
      "Replaced a ~1 week manual process with an automated system delivering results in ~2 seconds",
      "Manage and process centralized server data",
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
    locationEs: "Barranquilla, Colombia",
    locationEn: "Barranquilla, Colombia",
    roleEs: "Tecnología & Automatización",
    roleEn: "Technology & Automation",
    periodEs: "Por Proyectos",
    periodEn: "Project-based",
    descEs: "Tecnología, automatización y soluciones inteligentes.",
    descEn: "Technology, automation and intelligent solutions.",
    responsibilitiesEs: [
      "Desarrollo de aplicaciones web y plataformas digitales",
      "Automatización de procesos administrativos y operativos",
      "Sistemas de evaluación de satisfacción y gestión PQRS",
      "Integración profunda con Google Sheets y Google Apps Script",
      "Formularios digitales, códigos QR y tableros interactivos",
      "Panel administrativo con control de acceso multinivel",
    ],
    responsibilitiesEn: [
      "Web application development and digital platforms",
      "Automation of administrative and operational processes",
      "Digital survey, satisfaction evaluation and PQRS system",
      "Google Sheets and Google Apps Script integration",
      "QR codes, digital forms, and interactive dashboards",
      "Administrative panel with multi-level access",
    ],
    color: "border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-indigo-500/5",
    accent: "text-blue-400",
    dotColor: "bg-blue-500",
  },
  {
    company: "CERTIFICARNORTE",
    locationEs: "Barranquilla, Colombia",
    locationEn: "Barranquilla, Colombia",
    roleEs: "Colaboración Tecnológica",
    roleEn: "Technology Collaboration",
    periodEs: "Por Proyectos",
    periodEn: "Project-based",
    descEs: "Participación en el desarrollo de herramientas digitales y análisis de automatización.",
    descEn: "Participated in the development of digital tools and automation analysis.",
    responsibilitiesEs: [
      "Desarrollo y mantenimiento de herramientas digitales",
      "Automatización y optimización de flujos de trabajo",
      "Análisis de necesidades tecnológicas operativas",
      "Diseño de soluciones para simplificar tareas administrativas",
    ],
    responsibilitiesEn: [
      "Development and maintenance of digital tools",
      "Workflow automation and process optimization",
      "Analysis of operational technology needs",
      "Design of solutions to streamline administrative tasks",
    ],
    color: "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-violet-500/5",
    accent: "text-purple-400",
    dotColor: "bg-purple-500",
  },
  {
    company: "CODETEC",
    locationEs: "Barranquilla, Colombia",
    locationEn: "Barranquilla, Colombia",
    roleEs: "Técnico Asistente Administrativo",
    roleEn: "Technical Administrative Assistant",
    periodEs: "Marzo 2023 – Presente",
    periodEn: "March 2023 – Present",
    descEs: "Programa de formación técnica administrativa.",
    descEn: "Technical administrative training program.",
    responsibilitiesEs: [
      "Estudiante destacado — exonerado del 2do módulo por alto rendimiento académico",
      "Dominio avanzado de Microsoft Office Suite y Google Workspace",
      "Diseño de presentaciones ejecutivas y tabulación estadística",
    ],
    responsibilitiesEn: [
      "Outstanding student — exempted from 2nd module for academic performance",
      "Microsoft Office Suite & Google Workspace proficiency",
      "Executive presentations and data organization",
    ],
    color: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5",
    accent: "text-cyan-400",
    dotColor: "bg-cyan-500",
  },
]

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const [expanded, setExpanded] = useState(false)
  const { language } = useLanguage()

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
            <p className={`text-sm ${exp.accent} font-medium`}>
              {language === "es" ? exp.roleEs : exp.roleEn}
            </p>
            <p className="text-xs text-purple-300/50 mt-0.5">
              {language === "es" ? exp.locationEs : exp.locationEn} · {language === "es" ? exp.periodEs : exp.periodEn}
            </p>
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
              <p className="text-sm text-purple-300/60 mb-3">
                {language === "es" ? exp.descEs : exp.descEn}
              </p>
              {"highlight" in exp && exp.highlight && (
                <div className="mb-3 px-3.5 py-2 rounded-xl bg-green-500/10 border border-green-500/20 shadow-sm">
                  <p className="text-xs font-mono text-green-400">⚡ {exp.highlight}</p>
                </div>
              )}
              <ul className="space-y-1.5">
                {(language === "es" ? exp.responsibilitiesEs : exp.responsibilitiesEn).map((r, i) => (
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
  const { t } = useLanguage()

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
          <p className="text-xs font-mono text-orange-400 tracking-widest uppercase mb-4">
            {t("Experiencia", "Experience")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            {t("Trayectoria Profesional", "Professional work")}
          </h2>
          <p className="text-purple-300/60 mt-3">
            {t("Responsabilidades reales. Impacto comprobable.", "Real responsibilities. Real impact.")}
          </p>
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
