"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Tilt3DCard } from "@/components/tilt-3d-card"
import { ExternalLink, Play, Mic, Users, Award, Instagram } from "lucide-react"

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return <span ref={ref}>{count}</span>
}

const stats = [
  { value: 1000, suffix: "+", label: "Personas impactadas", sublabel: "A través de eventos y educación", color: "from-purple-500 to-blue-500" },
  { value: 15, suffix: "+", label: "Equipos mentoreados", sublabel: "Competitivos y de desarrollo", color: "from-cyan-500 to-blue-500" },
  { value: 100, suffix: "+", label: "Jóvenes apoyados", sublabel: "En actividades STEM y robótica", color: "from-pink-500 to-purple-500" },
  { value: 4, suffix: "", label: "Eventos masivos", sublabel: "Como voluntario staff y líder", color: "from-blue-500 to-indigo-500" },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 px-6 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">Impacto & Oratoria</p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnología como herramienta de impacto
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-2xl text-base">
            Crecí viendo de cerca las necesidades de mi entorno, lo cual definió mi visión: la tecnología no es solo una carrera, es la palanca para abrir puertas, inspirar y acercar STEM a jóvenes estudiantes.
          </p>
        </motion.div>

        {/* Stats Grid with 3D Tilt */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt3DCard
                tiltDegree={8}
                className="p-6 rounded-2xl border border-purple-500/30 bg-gray-900/60 backdrop-blur-sm text-center hover:border-purple-400/60 transition-all h-full flex flex-col justify-center"
              >
                <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <CountUp target={stat.value} />{stat.suffix}
                </div>
                <p className="text-sm font-semibold text-white">{stat.label}</p>
                <p className="text-xs text-purple-300/60 mt-1">{stat.sublabel}</p>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>

        {/* Featured Institutional Recognitions */}
        <div className="space-y-12">
          {/* 1. Publicación Oficial — Alcaldía de Barranquilla */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Tilt3DCard tiltDegree={4}>
              <div className="p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-amber-950/40 via-gray-900/90 to-purple-950/60 backdrop-blur-xl shadow-2xl shadow-amber-500/10">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Instagram Reel Embed with poster */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/20 bg-black group">
                      {/* Ambient poster backdrop */}
                      <img
                        src="/alcaldia-barranquilla.jpg"
                        alt="Alcaldía de Barranquilla cobertura"
                        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-30 pointer-events-none"
                      />
                      <iframe
                        src="https://www.instagram.com/reel/DQFMRu4DxUz/embed"
                        title="Reel Oficial Alcaldía de Barranquilla — Luis Alfonso Herrera"
                        className="relative z-10 w-full h-full object-cover"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Right: Alcaldía Details & Official Quote */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                      <Instagram className="w-3.5 h-3.5 text-pink-400" />
                      <span>Publicación Oficial · Alcaldía de Barranquilla</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Reconocimiento al Talento STEM —{" "}
                      <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                        Alcaldía de Barranquilla
                      </span>
                    </h3>

                    <blockquote className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-100/90 text-sm sm:text-base leading-relaxed italic border-l-4 border-l-amber-400">
                      &ldquo;Desde los pasillos de la IDDI Nueva Granada, Luis Herrera comenzó a descubrir su pasión por la tecnología. Gracias al impulso y acompañamiento de sus docentes, participó en los Skill Challenge de robótica, donde fortaleció su talento y su curiosidad por innovar. Hoy, ese mismo entusiasmo lo llevó a estudiar Ingeniería de Sistemas en la Universidad del Norte, representando con orgullo a la educación pública barranquillera en competencias que promueven el pensamiento creativo y el desarrollo tecnológico.&rdquo;
                    </blockquote>

                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <p className="text-xs font-mono text-amber-400/80 uppercase">Publicado Por</p>
                        <p className="text-lg font-bold text-white mt-0.5">Alcaldía de Barranquilla</p>
                        <p className="text-xs text-amber-300/70 mt-0.5">@sed_barranquilla (Secretaría de Educación)</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <p className="text-xs font-mono text-amber-400/80 uppercase">Enfoque</p>
                        <p className="text-lg font-bold text-white mt-0.5">Talento & Educación Pública</p>
                        <p className="text-xs text-amber-300/70 mt-0.5">Inspiración STEM para la ciudad</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Alcaldía de Barranquilla", "SED Barranquilla", "IDDI Nueva Granada", "Universidad del Norte", "Robótica", "Educación Pública"].map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-400/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap gap-3">
                      <a
                        href="https://www.instagram.com/reel/DQFMRu4DxUz/?stkn=MTR2MmJ5eTB3c2Z4OA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-pink-600/30"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Ver Reel en Instagram</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </motion.div>

          {/* 2. Entrevista Uninorte & Public Speaking Featured Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Tilt3DCard tiltDegree={4}>
              <div className="p-6 sm:p-8 rounded-3xl border border-purple-500/40 bg-gradient-to-br from-purple-950/70 via-gray-900/90 to-indigo-950/70 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Video Player */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20 bg-black group">
                      <iframe
                        src="https://www.youtube.com/embed/rNxhNOWBpas"
                        title="Entrevista Uninorte — Apertura Skill Challenge"
                        className="w-full h-full object-cover"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Right: Interview Details & Key Impact */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono">
                      <Play className="w-3.5 h-3.5 fill-red-400 text-red-400" />
                      <span>Entrevista & Discurso Oficial</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Apertura Skill Challenge —{" "}
                      <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Universidad del Norte
                      </span>
                    </h3>

                    <p className="text-purple-200/80 text-base leading-relaxed">
                      Ese día fui a apoyar a la <span className="text-white font-semibold">Universidad del Norte</span> en la inauguración del Skill Challenge y hablé en frente de <span className="text-cyan-300 font-semibold">más de 700 asistentes</span> entre estudiantes, profesores y directivos, compartiendo la disciplina, los desafíos y el impacto real de la robótica competitiva.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <p className="text-xs font-mono text-purple-400/80 uppercase">Audiencia</p>
                        <p className="text-lg font-bold text-white mt-0.5">+700 Asistentes</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <p className="text-xs font-mono text-purple-400/80 uppercase">Institución</p>
                        <p className="text-lg font-bold text-white mt-0.5">Universidad del Norte</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Oratoria", "Liderazgo", "Divulgación Científica", "Robótica Educativa"].map((skill) => (
                        <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-400/20">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap gap-3">
                      <a
                        href="https://youtube.com/shorts/rNxhNOWBpas?feature=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-sm transition-all shadow-lg shadow-red-600/30"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Ver en YouTube Shorts</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
