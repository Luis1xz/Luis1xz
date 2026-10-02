"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap, Trophy, Users } from "lucide-react"

const achievements = [
  {
    year: "2024",
    title: "CTO - KSANCHEZ DELIVERY",
    description:
      "Liderando estrategias tecnológicas para empresa americana de logística. Desarrollé el software contable ALFY DEV, reemplazando procesos manuales de una semana con sistemas automatizados de 2 segundos.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024",
    title: "Campeón Nacional - ROBOTECH",
    description: "1er lugar en Categoría de Robótica Profesional. Fundé el equipo S3 ROBOTICS en UNINORTE.",
    icon: Trophy,
    type: "achievement",
  },
  {
    year: "2024",
    title: "Ganador NASA Space Apps Hackathon",
    description:
      "Ganador a nivel local con Proyecto de IA e Integración de Datos. Mentor y Coach del Equipo Campeón en Skill Challenge.",
    icon: Award,
    type: "achievement",
  },
  {
    year: "2023",
    title: "Emprendedor del Año",
    description:
      "Nombrado Emprendedor del Año 2023 por FERIA GREMI. Medalla de estudiante destacado y 2do lugar en modelo de Naciones Unidas.",
    icon: Users,
    type: "education",
  },
  {
    year: "2023",
    title: "Medalla de Bronce - Skill Challenge",
    description: "3er lugar en Competencia de Robótica. Líder y monitor del grupo de robótica e investigación.",
    icon: Trophy,
    type: "achievement",
  },
  {
    year: "2022-Presente",
    title: "Educación Técnica Avanzada",
    description:
      "Cursos profesionales PLATZI: Backend, Python, Hacking Ético, IA y Ciencia de Datos. Técnico Asistente Administrativo CODETEC.",
    icon: GraduationCap,
    type: "education",
  },
]

export function TimelineSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Timeline de Logros
          </h2>
          <p className="text-xl text-gray-300">Mi trayectoria en robótica, liderazgo e innovación</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/30 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <achievement.icon className="w-6 h-6 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-400/30">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 animate-glow"></div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
