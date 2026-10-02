"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Trophy, Users, Brain } from "lucide-react"
import { ImageCarousel } from "./image-carousel"

const projects = [
  {
    title: "Colaboración Northeastern Illinois University - Chicago",
    description:
      "Recientemente tuve el privilegio de ser parte de un proyecto excepcional junto a Northeastern Illinois University de Chicago, USA. La impecable gestión liderada por Aaron Cortes Minor nos permitió adquirir valiosos conocimientos en robótica, desde micro:bit y Arduino hasta drones. ¡Un verdadero viaje tecnológico! 🚀",
    carousel: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyx3lDwFt8JQ7DTqB5pKZYfXjHyyQM.png",
        alt: "Sesión de capacitación en aula universitaria",
        caption: "Participando en sesiones de aprendizaje sobre robótica y tecnología",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-18sp84FWjDWaHKxhnYF9AtDz1Evfkr.jpeg",
        alt: "Momento de camaradería durante el almuerzo",
        caption: "Compartiendo experiencias con compañeros del programa internacional",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xI4CrflAk6bMQ6ETr36twv0axRQ0E7.png",
        alt: "Presentación técnica en el aula",
        caption: "Demostrando conocimientos adquiridos en programación y robótica",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0KlB1cKgTHeYIgYzpPwhUNoFUY62gx.png",
        alt: "Foto grupal de todos los participantes",
        caption: "El grupo completo de participantes del programa de intercambio tecnológico",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nwK59Q3dPMYcArC74NmW99zNn2OvW6.png",
        alt: "Presentación en el podium de Universidad del Norte",
        caption: "Compartiendo la experiencia adquirida en Chicago con la comunidad universitaria",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FNgqGa9dfbmKPWTxeaFX9Oz1qbDiTD.png",
        alt: "Encuentro con Aaron Cortes Minor y el equipo organizador",
        caption: "Con Aaron Cortes Minor y el equipo que hizo posible esta experiencia internacional",
      },
    ],
    tech: ["micro:bit", "Arduino", "Drones", "Robótica Educativa", "Intercambio Internacional", "Liderazgo"],
    github: "#",
    demo: "#",
    icon: <Brain className="w-5 h-5" />,
    highlight: "Programa Internacional",
  },
  {
    title: "ALFY DEV - Software Contable",
    description:
      "Software contable revolucionario para KSANCHEZ DELIVERY que reemplazó procesos manuales de una semana con sistemas automatizados de 2 segundos. Gestiona datos financieros y operacionales con cálculos avanzados de ganancias/pérdidas.",
    image: "/modern-accounting-dashboard.png",
    tech: ["Python", "Gestión de Bases de Datos", "Procesamiento de Datos", "Análisis Financiero"],
    github: "#",
    demo: "#",
  },
  {
    title: "Data Challenge Pro SURA 2025 - 3er Puesto",
    description:
      "Experiencia transformadora trabajando con datos médicos reales de SURA. Junto a Henry Saenz y Francesca Martínez, desarrollamos una solución predictiva para el sistema de salud, procesando grandes volúmenes de información y extrayendo insights valiosos para anticipar comportamientos clave en servicios médicos.",
    carousel: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura1.jpg-dEj52iISiCjUBgDxbGfO3ElPvvEzlZ.jpeg",
        alt: "Luis sosteniendo certificado de tercer puesto",
        caption: "Recibiendo el reconocimiento de Grupo Ganador - Tercer Puesto",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura2.jpg-mtJ9yZIuYIPCwpgmONL3hfXbVzA8Dt.jpeg",
        alt: "Presentación del equipo en el aula",
        caption: "Presentando nuestra solución predictiva para el sistema de salud",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura%203.jpg-KvKdtZMGXmYuWi7l0Gy3HaD3fH38U1.jpeg",
        alt: "Equipo completo con certificados",
        caption: "El equipo completo celebrando nuestro logro",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura%206.jpg-MjGaEVUnRZUbIUXa3IoXFfN3ay15HW.jpeg",
        alt: "Pantalla con perfiles del equipo",
        caption: "Nuestros perfiles durante la competencia",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sura5.jpg-ESa2GkdaZ1Oge6ga6gI1ZbEo305vt1.jpeg",
        alt: "Luis y Francesca con certificados",
        caption: "Celebrando en el campus de Universidad del Norte",
      },
    ],
    tech: ["Análisis de Datos", "IA Predictiva", "Python", "Ciencia de Datos", "Salud Digital"],
    github: "#",
    demo: "#",
    icon: <Trophy className="w-5 h-5" />,
    highlight: "3er Puesto Nacional",
  },
  {
    title: "Equipo S3 ROBOTICS - UNINORTE",
    description:
      "Cofundé y lidero el nuevo equipo de robótica competitiva profesional de Universidad del Norte junto a mis talentosos compañeros Haxell Gómez Lara, Samir Olivo, Juan Bornacelly y Christopher Cabana. Logramos 1er lugar en Campeonato Nacional ROBOTECH y múltiples victorias en competencias nacionales.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-08-18%20a%20las%2020.55.45_073c123e.jpg-hL9T9zDRJAvHaWOpH2kQIFXKYo0Ic7.jpeg",
    tech: ["Programación Robótica", "Liderazgo de Equipo", "Estrategia Competitiva", "C++", "Trabajo en Equipo"],
    github: "#",
    demo: "#",
    icon: <Users className="w-5 h-5" />,
    highlight: "1er Lugar Nacional",
  },
  {
    title: "NASA Space Apps - Sistema Valentine",
    description:
      "Nuestro proyecto se centra en un sistema de monitoreo y alerta meteorológica, capaz de recopilar datos globales a través de una API conectada a la base de datos de la NASA y combinarlos con información local obtenida por un prototipo físico llamado Valentine. Este dispositivo, que utiliza un ESP32 con sensores de humedad, temperatura y lluvia, nos permitió cruzar información global con condiciones físicas locales para generar alertas precisas en tiempo real, incluso enviando notificaciones vía llamada telefónica cuando se detecta un riesgo climático como inundaciones o sequías.",
    carousel: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R34Eo3OnU5nrkdGF0f6SNTs9Yw3swy.png",
        alt: "Equipo completo NASA Space Apps",
        caption: "El equipo completo celebrando nuestra participación",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZnKPmV0D9RIXXTSdnNFVk227GEZbXn.png",
        alt: "Diagramas técnicos del prototipo Valentine",
        caption: "Diseño técnico del dispositivo Valentine con ESP32 y sensores",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gI94IB9H066Tazkm0CrxF1AU8YRHLy.png",
        alt: "Análisis de datos meteorológicos",
        caption: "Análisis de distribución de precipitación y matriz de confusión",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k4FarFtWJ37KyrnsC5NOa50RhCNw96.png",
        alt: "Presentación del equipo HAZE",
        caption: "Equipo HAZE presentando en NASA Space Apps",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oMjnmLwnILOGkQe6QIHz4AbhimM549.png",
        alt: "Luis presentando el proyecto",
        caption: "Explicando las variables medidas del sistema Valentine",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KhVopFVuMhRZGA5zhbL9l4yuzKpOXm.png",
        alt: "Vistas adicionales del prototipo",
        caption: "Diferentes configuraciones del dispositivo de monitoreo",
      },
    ],
    tech: ["ESP32", "Sensores IoT", "API NASA", "Python", "Análisis de Datos", "Alertas en Tiempo Real"],
    github: "#",
    demo: "#",
    icon: <Brain className="w-5 h-5" />,
    highlight: "Ganador Local",
  },
  {
    title: "Entrevista Uninorte",
    description:
      "Ese día fui a apoyar a la Universidad del Norte en la apertura del Skill Challenge y hablé en frente de más de 700 asistentes.",
    videoUrl: "https://www.youtube.com/embed/rNxhNOWBpas",
    isVerticalVideo: true,
    skills: ["Hablar en Público", "Comunicación Efectiva", "Presentaciones", "Liderazgo"],
    youtubeLink: "https://youtube.com/shorts/rNxhNOWBpas?feature=share",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-300">Innovaciones que han generado impacto real</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className={`group bg-gray-900/50 backdrop-blur-sm border-purple-500/30 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col ${
                  project.isVerticalVideo ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <CardHeader className="p-0 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {project.videoUrl ? (
                      <div
                        className={`relative w-full ${
                          project.isVerticalVideo
                            ? "h-96 md:h-[500px] lg:h-[600px]" // Much taller for vertical video format
                            : "h-48"
                        }`}
                      >
                        <iframe
                          src={project.videoUrl}
                          title={project.title}
                          className="w-full h-full rounded-t-lg"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="absolute top-4 right-4">
                            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-gradient-to-r from-purple-500/80 to-blue-500/80 backdrop-blur-sm rounded-lg p-2">
                              <p className="text-white text-sm font-medium">Ver en YouTube</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.carousel ? (
                      <ImageCarousel images={project.carousel} />
                    ) : (
                      <>
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    )}
                  </div>
                </CardHeader>
                {project.isVerticalVideo ? (
                  <CardContent className="p-6 flex flex-col justify-center">
                    <CardTitle className="text-2xl text-white text-center font-bold mb-4">{project.title}</CardTitle>
                    <p className="text-gray-300 text-center leading-relaxed mb-6">{project.description}</p>

                    {project.skills && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-purple-300 text-center mb-3">
                          Aptitudes Desarrolladas
                        </h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-400/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.youtubeLink && (
                      <div className="flex justify-center">
                        <Button
                          asChild
                          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
                        >
                          <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Ver en YouTube
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                ) : (
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start gap-2 mb-4">
                      {project.icon && <div className="text-purple-400 flex-shrink-0 mt-1">{project.icon}</div>}
                      <div className="flex-grow min-w-0">
                        <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors leading-tight">
                          {project.title}
                        </CardTitle>
                      </div>
                      {project.highlight && (
                        <span className="flex-shrink-0 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full font-medium">
                          {project.highlight}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-base flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group-hover:border-purple-400 group-hover:text-purple-300 bg-transparent border-purple-500/30 text-purple-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
