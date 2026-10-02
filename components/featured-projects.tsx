"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Trophy, Cpu, Brain, ChevronDown, ChevronUp } from "lucide-react"

interface Project {
  id: string
  badge: string
  badgeColor: string
  icon: React.ReactNode
  title: string
  subtitle: string
  problem: string
  solution: string
  tech: string[]
  result: string
  github?: string
  demo?: string
  carousel?: { src: string; caption: string }[]
  highlight: boolean
}

const projects: Project[] = [
  {
    id: "nasa",
    badge: "NASA Space Apps · Local Winner",
    badgeColor: "bg-blue-600/20 text-blue-400 border-blue-600/30",
    icon: <Brain className="w-5 h-5" />,
    title: "Project Valentine",
    subtitle: "Meteorological monitoring & alert system",
    problem: "Communities in the Colombian Caribbean region need real-time weather alerts for flood and drought risks, but local data is often insufficient.",
    solution: "Built Valentine: a physical device using an ESP32 with humidity, temperature, and rain sensors. Combined local measurements with NASA's global weather APIs to generate precise real-time alerts — including phone call notifications on detected climate risks.",
    tech: ["ESP32", "Sensors", "NASA APIs", "Python", "Flask", "React", "Machine Learning"],
    result: "Local Winner — NASA International Space Apps Challenge, Barranquilla. Later served as judge in subsequent NASA Space Apps Challenge.",
    highlight: true,
    carousel: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R34Eo3OnU5nrkdGF0f6SNTs9Yw3swy.png", caption: "Team at NASA Space Apps" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZnKPmV0D9RIXXTSdnNFVk227GEZbXn.png", caption: "Valentine device technical diagram" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gI94IB9H066Tazkm0CrxF1AU8YRHLy.png", caption: "Meteorological data analysis" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oMjnmLwnILOGkQe6QIHz4AbhimM549.png", caption: "Luis presenting the project" },
    ],
  },
  {
    id: "alfy",
    badge: "KSANCHEZ DELIVERY · CTO",
    badgeColor: "bg-green-600/20 text-green-400 border-green-600/30",
    icon: <Cpu className="w-5 h-5" />,
    title: "ALFY DEV",
    subtitle: "Accounting & operations software",
    problem: "Financial and operational data at KSANCHEZ DELIVERY (US logistics company) was processed manually, taking approximately 1 week per cycle.",
    solution: "Designed and developed ALFY DEV: an automated accounting system managing financial data, calculating profits, losses, and driver salaries from a centralized server.",
    tech: ["Python", "Data Processing", "Financial Analysis", "Server Integration"],
    result: "Replaced a ~1 week manual process with an automated system that delivers results in approximately 2 seconds.",
    highlight: true,
  },
  {
    id: "sura",
    badge: "Data Challenge Pro SURA 2025 · 3rd National",
    badgeColor: "bg-orange-600/20 text-orange-400 border-orange-600/30",
    icon: <Trophy className="w-5 h-5" />,
    title: "Health Data Challenge",
    subtitle: "Predictive AI for healthcare data",
    problem: "Medical and health system data contains complex patterns that are difficult to analyze manually for anticipating key service behaviors.",
    solution: "Built a predictive AI solution using real medical data from SURA. Team: Luis Alfonso Herrera, Henry Sáenz, Francesca Martínez.",
    tech: ["Python", "Machine Learning", "Data Analysis", "Healthcare Data", "Google Colab"],
    result: "3rd place national — Data Challenge Pro SURA 2025.",
    highlight: false,
    carousel: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura1.jpg-dEj52iISiCjUBgDxbGfO3ElPvvEzlZ.jpeg", caption: "Receiving 3rd place recognition" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura2.jpg-mtJ9yZIuYIPCwpgmONL3hfXbVzA8Dt.jpeg", caption: "Team presenting the solution" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura%203.jpg-KvKdtZMGXmYuWi7l0Gy3HaD3fH38U1.jpeg", caption: "Team with certificates" },
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)

  return (
    <motion.div
      layout
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        project.highlight
          ? "border-white/[0.1] bg-white/[0.02]"
          : "border-white/[0.06] bg-white/[0.01]"
      }`}
    >
      {/* Carousel */}
      {project.carousel && (
        <div className="relative aspect-video overflow-hidden bg-gray-900/50">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={project.carousel[imgIdx].src}
              alt={project.carousel[imgIdx].caption}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          {project.carousel.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {project.carousel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === imgIdx ? "bg-white scale-125" : "bg-white/30"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          )}
          {/* Badge overlay */}
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
              {project.badge}
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-blue-400">{project.icon}</div>
            <div>
              <h3 className="font-semibold text-white text-lg leading-tight">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.subtitle}</p>
            </div>
          </div>
          {!project.carousel && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ${project.badgeColor}`}>
              {project.badge}
            </span>
          )}
        </div>

        {/* ALFY DEV visual */}
        {project.id === "alfy" && (
          <div className="mb-4 p-4 rounded-lg bg-black/40 border border-white/[0.06]">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-400">1 week</p>
                <p className="text-xs text-gray-600">Manual process</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-gray-700 text-xl">→</div>
                <div className="w-px h-6 bg-gradient-to-b from-red-500 to-green-500" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">~2 sec</p>
                <p className="text-xs text-gray-600">Automated</p>
              </div>
            </div>
          </div>
        )}

        {/* PROBLEM / SOLUTION */}
        <div className="space-y-3 mb-4">
          <div>
            <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-1">Problem</p>
            <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
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
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-1">Result</p>
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-gray-500 border border-white/[0.06]">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors px-3 py-1.5 rounded border border-white/[0.08] hover:border-white/[0.2]"
              >
                <Github className="w-3 h-3" /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors px-3 py-1.5 rounded border border-white/[0.08] hover:border-white/[0.2]"
              >
                <ExternalLink className="w-3 h-3" /> Demo
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-300 transition-colors"
          >
            {expanded ? (
              <><ChevronUp className="w-3 h-3" /> Less</>
            ) : (
              <><ChevronDown className="w-3 h-3" /> Details</>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedProjects() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4">Featured Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What I&apos;ve built</h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Real problems. Real solutions. Evidence-backed results.
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
