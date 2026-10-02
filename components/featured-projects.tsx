"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Trophy, Cpu, Brain, ChevronDown, ChevronUp, Play, Instagram } from "lucide-react"
import { Tilt3DCard } from "@/components/tilt-3d-card"
import { useLanguage } from "@/context/language-context"

interface Project {
  id: string
  badgeEs: string
  badgeEn: string
  badgeColor: string
  icon: React.ReactNode
  titleEs: string
  titleEn: string
  subtitleEs: string
  subtitleEn: string
  problemEs: string
  problemEn: string
  solutionEs: string
  solutionEn: string
  tech: string[]
  resultEs: string
  resultEn: string
  github?: string
  demo?: string
  demoLabelEs?: string
  demoLabelEn?: string
  videoUrl?: string
  poster?: string
  carousel?: { src: string; captionEs: string; captionEn: string }[]
  highlight: boolean
}

const projects: Project[] = [
  {
    id: "nasa",
    badgeEs: "NASA Space Apps · Ganador Local",
    badgeEn: "NASA Space Apps · Local Winner",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    icon: <Brain className="w-5 h-5" />,
    titleEs: "Project Valentine",
    titleEn: "Project Valentine",
    subtitleEs: "Sistema de monitoreo y alerta meteorológica",
    subtitleEn: "Meteorological monitoring & alert system",
    problemEs: "Las comunidades del Caribe colombiano necesitan alertas meteorológicas en tiempo real ante inundaciones y sequías, donde los datos locales suelen ser escasos.",
    problemEn: "Communities in the Colombian Caribbean region need real-time weather alerts for flood and drought risks, but local data is often insufficient.",
    solutionEs: "Desarrollamos Valentine: un dispositivo físico con ESP32 y sensores de humedad, temperatura y lluvia, combinando mediciones locales con APIs globales de la NASA para emitir alertas en tiempo real con llamadas telefónicas automáticas.",
    solutionEn: "Built Valentine: a physical device using an ESP32 with humidity, temperature, and rain sensors. Combined local measurements with NASA's global weather APIs to generate precise real-time alerts — including automated phone call notifications on detected risks.",
    tech: ["ESP32", "Sensors", "NASA APIs", "Python", "Flask", "React", "Machine Learning"],
    resultEs: "Ganador Local — NASA International Space Apps Challenge Barranquilla. Posteriormente jurado en la siguiente edición.",
    resultEn: "Local Winner — NASA International Space Apps Challenge, Barranquilla. Later served as judge in the subsequent NASA Space Apps Challenge.",
    highlight: true,
    carousel: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R34Eo3OnU5nrkdGF0f6SNTs9Yw3swy.png", captionEs: "Equipo en NASA Space Apps", captionEn: "Team at NASA Space Apps" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZnKPmV0D9RIXXTSdnNFVk227GEZbXn.png", captionEs: "Diagrama técnico de Valentine", captionEn: "Valentine device technical diagram" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gI94IB9H066Tazkm0CrxF1AU8YRHLy.png", captionEs: "Análisis de datos meteorológicos", captionEn: "Meteorological data analysis" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oMjnmLwnILOGkQe6QIHz4AbhimM549.png", captionEs: "Luis sustentando el proyecto", captionEn: "Luis presenting the project" },
    ],
  },
  {
    id: "alfy",
    badgeEs: "KSANCHEZ DELIVERY · CTO",
    badgeEn: "KSANCHEZ DELIVERY · CTO",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    icon: <Cpu className="w-5 h-5" />,
    titleEs: "ALFY DEV",
    titleEn: "ALFY DEV",
    subtitleEs: "Software de operaciones y contabilidad",
    subtitleEn: "Accounting & operations software",
    problemEs: "Los datos financieros y operativos en KSANCHEZ DELIVERY (EE. UU.) se procesaban manualmente, tardando cerca de 1 semana por ciclo.",
    problemEn: "Financial and operational data at KSANCHEZ DELIVERY was processed manually, taking approximately 1 week per cycle.",
    solutionEs: "Diseñé y desarrollé ALFY DEV: un sistema contable automatizado que gestiona datos financieros, calcula utilidades, pérdidas y salarios de conductores desde un servidor centralizado.",
    solutionEn: "Designed and developed ALFY DEV: an automated accounting system managing financial data, calculating profits, losses, and driver salaries from a centralized server.",
    tech: ["Python", "Data Processing", "Financial Analysis", "Server Integration"],
    resultEs: "Reemplazó un proceso manual de ~1 semana por un sistema automatizado que entrega resultados en aproximadamente 2 segundos.",
    resultEn: "Replaced a ~1 week manual process with an automated system that delivers results in approximately 2 seconds.",
    highlight: true,
  },
  {
    id: "sura",
    badgeEs: "Data Challenge Pro SURA 2025 · 3er Puesto Nacional",
    badgeEn: "Data Challenge Pro SURA 2025 · 3rd National",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    icon: <Trophy className="w-5 h-5" />,
    titleEs: "Desafío de Datos en Salud",
    titleEn: "Health Data Challenge",
    subtitleEs: "IA predictiva para datos del sistema de salud",
    subtitleEn: "Predictive AI for healthcare data",
    problemEs: "Los datos médicos y de atención presentan patrones complejos que requieren análisis predictivo para anticipar comportamientos de servicio.",
    problemEn: "Medical and health system data contains complex patterns difficult to analyze for anticipating key service behaviors.",
    solutionEs: "Construimos una solución de IA predictiva utilizando datos médicos reales de SURA. Equipo: Luis Alfonso Herrera, Henry Sáenz, Francesca Martínez.",
    solutionEn: "Built a predictive AI solution using real medical data from SURA. Team: Luis Alfonso Herrera, Henry Sáenz, Francesca Martínez.",
    tech: ["Python", "Machine Learning", "Data Analysis", "Healthcare Data", "Google Colab"],
    resultEs: "3er lugar nacional — Data Challenge Pro SURA 2025.",
    resultEn: "3rd place national — Data Challenge Pro SURA 2025.",
    highlight: false,
    carousel: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura1.jpg-dEj52iISiCjUBgDxbGfO3ElPvvEzlZ.jpeg", captionEs: "Reconocimiento del 3er lugar", captionEn: "Receiving 3rd place recognition" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura2.jpg-mtJ9yZIuYIPCwpgmONL3hfXbVzA8Dt.jpeg", captionEs: "Equipo presentando la solución", captionEn: "Team presenting the solution" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura%203.jpg-KvKdtZMGXmYuWi7l0Gy3HaD3fH38U1.jpeg", captionEs: "Equipo con certificados", captionEn: "Team with certificates" },
    ],
  },
  {
    id: "uninorte",
    badgeEs: "Universidad del Norte · 700+ Asistentes",
    badgeEn: "Universidad del Norte · 700+ Attendees",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    icon: <Play className="w-5 h-5 text-red-400" />,
    titleEs: "Entrevista Uninorte",
    titleEn: "Uninorte Interview",
    subtitleEs: "Apertura Skill Challenge ante 700+ asistentes",
    subtitleEn: "Opening ceremony Skill Challenge before 700+ attendees",
    problemEs: "Compartir la experiencia en robótica competitiva y motivar a cientos de jóvenes estudiantes a involucrarse en ciencia, tecnología e ingeniería.",
    problemEn: "Sharing the competitive robotics journey and motivating hundreds of young students to pursue science, technology, and engineering.",
    solutionEs: "Acompañé y apoyé a la Universidad del Norte en la inauguración del Skill Challenge, brindando una entrevista y discurso motivacional sobre disciplina, superación y robótica.",
    solutionEn: "Joined and supported Universidad del Norte during the Skill Challenge kickoff, delivering an interview and keynote on discipline, resilience, and robotics.",
    tech: ["Oratoria", "Liderazgo", "Divulgación Científica", "Robótica", "Universidad del Norte"],
    resultEs: "Discurso y entrevista frente a más de 700 asistentes, transmitido en canales oficiales de Uninorte.",
    resultEn: "Keynote and interview delivered before 700+ attendees, broadcasted on official Uninorte channels.",
    highlight: true,
    videoUrl: "https://www.youtube.com/embed/rNxhNOWBpas",
    demo: "https://youtube.com/shorts/rNxhNOWBpas?feature=share",
    demoLabelEs: "Ver en YouTube",
    demoLabelEn: "Watch on YouTube",
  },
  {
    id: "alcaldia",
    badgeEs: "Alcaldía de Barranquilla · Cobertura Oficial",
    badgeEn: "Barranquilla City Hall · Official Feature",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    icon: <Instagram className="w-5 h-5 text-amber-400" />,
    titleEs: "Alcaldía de Barranquilla",
    titleEn: "Barranquilla City Hall",
    subtitleEs: "Publicación oficial destacando trayectoria STEM y talento joven",
    subtitleEn: "Official publication featuring STEM journey & youth leadership",
    problemEs: "Visibilizar el talento joven y cómo la educación pública abre caminos reales hacia la ingeniería, la robótica y el impacto comunitario.",
    problemEn: "Highlighting young talent and demonstrating how public education paves real pathways toward engineering, robotics, and social impact.",
    solutionEs: "La Alcaldía de Barranquilla (Secretaría de Educación) realizó un reportaje oficial en sus plataformas destacando mi camino desde la IDDI Nueva Granada hasta la Universidad del Norte y el liderazgo en competencias de robótica.",
    solutionEn: "The Barranquilla City Hall (Ministry of Education) produced an official feature showcasing my journey from IDDI Nueva Granada to Universidad del Norte and leadership in competitive robotics.",
    tech: ["Alcaldía de Barranquilla", "SED Barranquilla", "IDDI Nueva Granada", "Universidad del Norte", "Robótica", "Educación STEM"],
    resultEs: "Publicación oficial en Instagram por parte de la Alcaldía de Barranquilla como referente de talento e innovación educativa.",
    resultEn: "Official Instagram publication by the Barranquilla City Hall celebrating youth innovation and STEM excellence.",
    highlight: true,
    videoUrl: "https://www.instagram.com/reel/DQFMRu4DxUz/embed",
    poster: "/alcaldia-barranquilla.jpg",
    demo: "https://www.instagram.com/reel/DQFMRu4DxUz/?stkn=MTR2MmJ5eTB3c2Z4OA==",
    demoLabelEs: "Ver en Instagram",
    demoLabelEn: "View on Instagram",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const { language, t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)

  return (
    <Tilt3DCard
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        project.highlight
          ? "border-purple-500/40 bg-gray-900/70"
          : "border-purple-500/20 bg-gray-900/50"
      }`}
    >
      {/* Video Embed */}
      {project.videoUrl && (
        <div className="relative h-64 sm:h-72 overflow-hidden bg-black flex items-center justify-center">
          <iframe
            src={project.videoUrl}
            loading="lazy"
            title={language === "es" ? project.titleEs : project.titleEn}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-md shadow-md ${project.badgeColor}`}>
              {language === "es" ? project.badgeEs : project.badgeEn}
            </span>
          </div>
        </div>
      )}

      {/* Image Carousel */}
      {project.carousel && (
        <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-950 flex items-center justify-center">
          <img
            src={project.carousel[imgIdx].src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-105 pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          />
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={project.carousel[imgIdx].src}
              alt={language === "es" ? project.carousel[imgIdx].captionEs : project.carousel[imgIdx].captionEn}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full h-full object-contain object-center transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          {project.carousel.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
              {project.carousel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === imgIdx ? "bg-white scale-125" : "bg-white/40"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          )}
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-md shadow-md ${project.badgeColor}`}>
              {language === "es" ? project.badgeEs : project.badgeEn}
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-purple-400">{project.icon}</div>
            <div>
              <h3 className="font-semibold text-white text-lg leading-tight">
                {language === "es" ? project.titleEs : project.titleEn}
              </h3>
              <p className="text-sm text-purple-300/60">
                {language === "es" ? project.subtitleEs : project.subtitleEn}
              </p>
            </div>
          </div>
          {!project.carousel && !project.videoUrl && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ${project.badgeColor}`}>
              {language === "es" ? project.badgeEs : project.badgeEn}
            </span>
          )}
        </div>

        {project.id === "alfy" && (
          <div className="mb-4 p-4 rounded-lg bg-black/40 border border-purple-500/20">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-400">1 {t("semana", "week")}</p>
                <p className="text-xs text-purple-300/40">{t("Proceso manual", "Manual process")}</p>
              </div>
              <div className="text-purple-400/50 text-xl">→</div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">~2 seg</p>
                <p className="text-xs text-purple-300/40">{t("Automatizado", "Automated")}</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 mb-4">
          <div>
            <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-1">
              {t("Problema", "Problem")}
            </p>
            <p className="text-sm text-purple-200/70 leading-relaxed">
              {language === "es" ? project.problemEs : project.problemEn}
            </p>
          </div>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-2 space-y-3">
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-1">
                      {t("Solución", "Solution")}
                    </p>
                    <p className="text-sm text-purple-200/70 leading-relaxed">
                      {language === "es" ? project.solutionEs : project.solutionEn}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-purple-400/50 uppercase tracking-wider mb-1">
                      {t("Resultado", "Result")}
                    </p>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {language === "es" ? project.resultEs : project.resultEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tItem) => (
            <span key={tItem} className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-400/20">
              {tItem}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-purple-400/60 hover:text-purple-300 transition-colors px-3 py-1.5 rounded border border-purple-500/20 hover:border-purple-400/40">
                <Github className="w-3 h-3" /> {t("Código", "Code")}
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-purple-400/60 hover:text-purple-300 transition-colors px-3 py-1.5 rounded border border-purple-500/20 hover:border-purple-400/40">
                {project.id === "alcaldia" ? <Instagram className="w-3 h-3 text-pink-400" /> : <ExternalLink className="w-3 h-3" />}
                {language === "es" ? (project.demoLabelEs || "Ver") : (project.demoLabelEn || "View")}
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-purple-400/50 hover:text-purple-300 transition-colors"
          >
            {expanded ? <><ChevronUp className="w-3 h-3" /> {t("Menos", "Less")}</> : <><ChevronDown className="w-3 h-3" /> {t("Detalles", "Details")}</>}
          </button>
        </div>
      </div>
    </Tilt3DCard>
  )
}

export function FeaturedProjects() {
  const { t } = useLanguage()

  return (
    <section id="work" className="py-24 px-6 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4">
            {t("Proyectos Destacados", "Featured Projects")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {t("Lo que he construido", "What I've built")}
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-xl">
            {t("Problemas reales. Soluciones reales. Resultados comprobados.", "Real problems. Real solutions. Evidence-backed results.")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
