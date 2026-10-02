"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Award } from "lucide-react"
import { ImageCarousel } from "./image-carousel"

const volunteeringData = [
  {
    title: "Hackathon Barranquilla-IA",
    role: "Voluntario Staff",
    location: "Barranquilla, Colombia",
    date: "Mayo 2025",
    description:
      "El hackathón de IA más importante de Colombia. Durante el fin de semana del 3 y 4 de Mayo de 2025, más de 100 participantes crearon soluciones innovadoras con IA, apoyados por mentores expertos y una comunidad tecnológica vibrante.",
    impact: "Coordiné actividades técnicas y mentorías para más de 100 participantes desarrollando soluciones de IA",
    tags: ["IA", "Hackathon", "Voluntariado", "Innovación", "Staff"],
    icon: "🤖",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier2.jpg-fk1azantb4H5jwBeL24TYLyPSs0cnf.jpeg",
        alt: "Luis como voluntario staff en Barranquilla-IA con camiseta oficial del evento",
        caption: "Como voluntario staff coordinando el hackathón de IA más importante de Colombia.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier3.jpg-rss7IsellULSVmTeRDJCfBaV36wDnM.jpeg",
        alt: "Luis con compañeros voluntarios del hackathon Barranquilla-IA",
        caption: "Con el increíble equipo de voluntarios de Barranquilla-IA 2025.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier1-vpWODS1Ymu25jWGwWGwnxX2K1FMxnl.png",
        alt: "Equipo completo de voluntarios celebrando el éxito del hackathon",
        caption: "Celebrando el éxito con todo el equipo organizador y más de 100 participantes.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier5.jpg-pJR9VHvVVfqyeVKyC0zEFSXCWOX36v.jpeg",
        alt: "Credencial oficial de staff de Luis Herrera para Barranquilla-IA 2025",
        caption: "Mi credencial oficial como staff del evento más importante de IA del país.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier4.jpg-SVueMQdnHOKd5Z0p7p8bvZ7IaZgcCV.jpeg",
        alt: "Luis en los pasillos del evento con su credencial de staff",
        caption: "Coordinando actividades para asegurar el éxito del hackathón.",
      },
    ],
  },
  {
    title: "CaribeConf 2025",
    role: "Voluntario Staff",
    location: "Barranquilla, Colombia",
    date: "2025",
    description:
      "La conferencia que reúne a más de 300 profesionales y 16 comunidades tecnológicas del Caribe. Charlas sobre programación, diseño UX/UI, IA, ciberseguridad y diversidad en la industria tech.",
    impact:
      "Coordiné actividades para más de 300 profesionales tecnológicos y facilité networking entre 16 comunidades del Caribe",
    tags: ["Conferencia", "Tecnología", "Comunidades", "Networking", "Caribe"],
    icon: "🌴",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf1-baapWiDAIFpIVo5e2DiUH0bX8R93By.png",
        alt: "Foto grupal masiva de voluntarios y participantes de CaribeConf 2025",
        caption: "Toda la comunidad de CaribeConf 2025: 16 comunidades tecnológicas del Caribe.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf5.jpg-cshH2XW6sUcxTYyPJwyS462zwBdb77.jpeg",
        alt: "Luis con equipo de voluntarias de CaribeConf, todos con camisetas oficiales",
        caption: "Con el increíble equipo de voluntarias incluyendo Ana Rangel, diseñadora UX/UI.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf4.jpg-qcJWu4OHnbkmEgGg1RUnzRghFgcMtz.jpeg",
        alt: "Luis posando frente al banner de bienvenida de CaribeConf 2025",
        caption: "Dando la bienvenida a CaribeConf 2025, reuniendo las comunidades tech del Caribe.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf2.jpg-Rd0kZEHY7378HJV3xGQkWofjluKzEK.jpeg",
        alt: "Luis con Ana Rangel en CaribeConf, ambos con credenciales oficiales",
        caption: "Con Ana Rangel, diseñadora UX/UI, trabajando juntos en CaribeConf 2025.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf6.jpg-BNmHYiESefOYiKMf2uxY9L5VtYMrVz.jpeg",
        alt: "Credencial oficial de Luis Alfonso para CaribeConf 2025 con escenario de fondo",
        caption: "Mi credencial oficial con el escenario donde se compartieron las últimas tendencias tech.",
      },
    ],
  },
  {
    title: "IEEE ColCom 2024",
    role: "Participante y Ponente",
    location: "Barranquilla, Colombia",
    date: "Agosto 2024",
    description:
      "Conferencia Colombiana de Comunicaciones y Computación IEEE que reúne académicos, científicos e industriales para discutir avances en telecomunicaciones y computación.",
    impact:
      "Establecí conexiones con líderes de la industria tecnológica y participé en discusiones sobre el futuro de las telecomunicaciones",
    tags: ["IEEE", "Investigación", "Telecomunicaciones", "Robótica", "Academia"],
    icon: "📡",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0LHjISoKxC3vPY93jlDJYtj3W08xek.png",
        alt: "Cena de gala de ColCom 2024 con todos los participantes y organizadores IEEE ComSoc",
        caption: "Cena de gala de IEEE ColCom 2024 con la comunidad académica e industrial.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HdNFphhGBN85MJRmXe3ywSp8BH8mPf.png",
        alt: "Luis presentando su investigación en robótica educativa en ColCom 2024",
        caption: "Participando activamente en las sesiones técnicas de IEEE ColCom 2024.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qxcYY4mOT2w6W9rZVm7B0gMJ1Yx5EA.png",
        alt: "Luis con Pedro J. Romero M. de Huawei en networking de ColCom 2024",
        caption: "Networking con Pedro J. Romero M. (CSPO at Huawei) durante IEEE ColCom 2024.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AYB2BbyYadnjctF7GuiuGyH7hEqAYx.png",
        alt: "Certificado oficial de participación de Luis A. Herrera en ColCom 2024",
        caption: "Certificado oficial de participación en IEEE ColCom 2024.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K048CNUcW8P4FtuLHiE0ZxPoxPYJ0M.png",
        alt: "Luis con Pedro J. Romero M. y compañero en evento social de ColCom 2024",
        caption: "Evento social de IEEE ColCom 2024 con colegas de la industria.",
      },
    ],
  },
  {
    title: "World Cup Amputee",
    role: "Voluntario",
    location: "Barranquilla, Colombia",
    date: "2024",
    description:
      "Apoyé como voluntario en la World Cup Amputee, contribuyendo al éxito de este evento deportivo internacional que celebra el talento y la determinación de atletas extraordinarios. Una experiencia enriquecedora que me permitió ser parte de algo más grande que la tecnología.",
    impact: "Contribuí al éxito de un evento deportivo internacional que celebra el talento de atletas extraordinarios",
    tags: ["Voluntariado Internacional", "Deportes", "Inclusión", "Servicio Comunitario"],
    icon: "⚽",
    images: [
      {
        src: "/world-cup-volunteers.jpeg",
        alt: "Equipo completo de voluntarios World Cup Amputee",
        caption: "El increíble equipo de voluntarios que hizo posible este evento deportivo internacional",
      },
    ],
  },
]

export function VolunteeringSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Voluntariados e Impacto Social
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Mi compromiso con la comunidad tecnológica y el desarrollo social a través de la participación activa en
            eventos que transforman vidas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {volunteeringData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full group hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <Badge variant="outline" className="border-purple-400/50 text-purple-300">
                      {item.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-purple-300 font-semibold text-base">{item.role}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-5">
                  {item.images && (
                    <div className="mb-4">
                      <ImageCarousel images={item.images} />
                    </div>
                  )}

                  <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>

                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-3 rounded-lg border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="font-semibold text-purple-300 text-sm">Impacto Generado</span>
                    </div>
                    <p className="text-gray-300 text-xs">{item.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-400/30 hover:border-purple-300/50 transition-colors text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Impacto Total en la Comunidad</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1000+</div>
                <div className="text-xs text-gray-300">Personas Impactadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-xs text-gray-300">Equipos Mentoreados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">4</div>
                <div className="text-xs text-gray-300">Eventos Principales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-xs text-gray-300">Jóvenes Apoyados</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
