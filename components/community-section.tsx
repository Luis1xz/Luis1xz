"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImageCarousel } from "./image-carousel"
import { Tilt3DCard } from "@/components/tilt-3d-card"
import { Users, Award, ChevronDown, ChevronUp } from "lucide-react"

const events = [
  {
    name: "Hackathon Barranquilla-IA",
    role: "Voluntario Staff",
    date: "Mayo 2025",
    icon: "🤖",
    color: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5",
    accent: "text-cyan-400",
    badge: "Staff Oficial · 100+ Participantes",
    description:
      "El hackathón de IA más importante de Colombia. Durante el fin de semana del 3 y 4 de Mayo de 2025, más de 100 participantes crearon soluciones innovadoras con IA, apoyados por mentores expertos y una comunidad tecnológica vibrante.",
    impact: "Coordiné actividades técnicas y mentorías para más de 100 participantes desarrollando soluciones de IA",
    tags: ["IA", "Hackathon", "Voluntariado", "Innovación", "Staff"],
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier2.jpg-fk1azantb4H5jwBeL24TYLyPSs0cnf.jpeg",
        alt: "Luis como voluntario staff en Barranquilla-IA",
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
        alt: "Credencial oficial de staff de Luis Herrera",
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
    name: "CaribeConf 2025",
    role: "Voluntario Staff",
    date: "2025",
    icon: "🌴",
    color: "border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/5",
    accent: "text-green-400",
    badge: "16 Comunidades Tech · 300+ Asistentes",
    description:
      "La conferencia que reúne a más de 300 profesionales y 16 comunidades tecnológicas del Caribe. Charlas sobre programación, diseño UX/UI, IA, ciberseguridad y diversidad en la industria tech.",
    impact:
      "Coordiné actividades para más de 300 profesionales tecnológicos y facilité networking entre 16 comunidades del Caribe",
    tags: ["Conferencia", "Tecnología", "Comunidades", "Networking", "Caribe"],
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf1-baapWiDAIFpIVo5e2DiUH0bX8R93By.png",
        alt: "Foto grupal masiva de voluntarios y participantes de CaribeConf 2025",
        caption: "Toda la comunidad de CaribeConf 2025: 16 comunidades tecnológicas del Caribe.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf5.jpg-cshH2XW6sUcxTYyPJwyS462zwBdb77.jpeg",
        alt: "Luis con equipo de voluntarias de CaribeConf",
        caption: "Con el increíble equipo de voluntarias incluyendo Ana Rangel, diseñadora UX/UI.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf4.jpg-qcJWu4OHnbkmEgGg1RUnzRghFgcMtz.jpeg",
        alt: "Luis posando frente al banner de bienvenida de CaribeConf 2025",
        caption: "Dando la bienvenida a CaribeConf 2025, reuniendo las comunidades tech del Caribe.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf2.jpg-Rd0kZEHY7378HJV3xGQkWofjluKzEK.jpeg",
        alt: "Luis con Ana Rangel en CaribeConf",
        caption: "Con Ana Rangel, diseñadora UX/UI, trabajando juntos en CaribeConf 2025.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf6.jpg-BNmHYiESefOYiKMf2uxY9L5VtYMrVz.jpeg",
        alt: "Credencial oficial de Luis Alfonso para CaribeConf 2025",
        caption: "Mi credencial oficial con el escenario donde se compartieron las últimas tendencias tech.",
      },
    ],
  },
  {
    name: "IEEE ColCom 2024",
    role: "Voluntario Staff / Participante",
    date: "Agosto 2024",
    icon: "📡",
    color: "border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-indigo-500/5",
    accent: "text-blue-400",
    badge: "IEEE ComSoc · Staff & Networking",
    description:
      "Conferencia Colombiana de Comunicaciones y Computación IEEE que reúne académicos, científicos e industriales para discutir avances en telecomunicaciones y computación. Participé como voluntario staff apoyando la logística y en sesiones técnicas.",
    impact:
      "Establecí conexiones con líderes de la industria tecnológica y participé en discusiones sobre el futuro de las telecomunicaciones",
    tags: ["IEEE", "Telecomunicaciones", "Staff", "Robótica", "Networking"],
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0LHjISoKxC3vPY93jlDJYtj3W08xek.png",
        alt: "Cena de gala de ColCom 2024",
        caption: "Cena de gala de IEEE ColCom 2024 con la comunidad académica e industrial.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HdNFphhGBN85MJRmXe3ywSp8BH8mPf.png",
        alt: "Luis en las sesiones técnicas de ColCom 2024",
        caption: "Participando activamente en las sesiones técnicas de IEEE ColCom 2024.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qxcYY4mOT2w6W9rZVm7B0gMJ1Yx5EA.png",
        alt: "Luis con Pedro J. Romero M. de Huawei",
        caption: "Networking con Pedro J. Romero M. (CSPO en Huawei) durante IEEE ColCom 2024.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AYB2BbyYadnjctF7GuiuGyH7hEqAYx.png",
        alt: "Certificado oficial de participación de Luis A. Herrera",
        caption: "Certificado oficial de participación en IEEE ColCom 2024.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K048CNUcW8P4FtuLHiE0ZxPoxPYJ0M.png",
        alt: "Luis con Pedro J. Romero M. y compañero",
        caption: "Evento social de IEEE ColCom 2024 con colegas de la industria.",
      },
    ],
  },
  {
    name: "World Cup Amputee",
    role: "Voluntario",
    date: "2024",
    icon: "⚽",
    color: "border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-amber-500/5",
    accent: "text-yellow-400",
    badge: "Evento Internacional · Inclusión Social",
    description:
      "Apoyé como voluntario en la World Cup Amputee, contribuyendo al éxito de este evento deportivo internacional que celebra el talento y la determinación de atletas extraordinarios. Una experiencia enriquecedora que me permitió ser parte de algo más grande que la tecnología.",
    impact: "Contribuí al éxito de un evento deportivo internacional que celebra el talento de atletas extraordinarios",
    tags: ["Voluntariado Internacional", "Deportes", "Inclusión", "Servicio Comunitario"],
    images: [
      {
        src: "/world-cup-volunteers.jpeg",
        alt: "Equipo completo de voluntarios World Cup Amputee",
        caption: "El increíble equipo de voluntarios que hizo posible este evento deportivo internacional en Barranquilla.",
      },
    ],
  },
]

function EventCard({ event }: { event: typeof events[0] }) {
  const [showGallery, setShowGallery] = useState(true)

  return (
    <Tilt3DCard tiltDegree={5} className="h-full">
      <div className={`p-6 rounded-2xl border ${event.color} bg-gray-950/70 flex flex-col justify-between h-full hover:border-purple-400/50 transition-all shadow-xl shadow-purple-500/5`}>
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3">
              <span className="text-3xl filter drop-shadow-md">{event.icon}</span>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">{event.name}</h3>
                <p className={`text-sm ${event.accent} font-medium mt-0.5`}>{event.role}</p>
                <p className="text-xs text-purple-300/50 font-mono mt-0.5">{event.date} · Barranquilla</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
              {event.badge}
            </span>
          </div>

          <p className="text-sm text-purple-200/70 leading-relaxed mb-4">{event.description}</p>

          <div className="mb-4 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <p className="text-xs font-mono text-purple-300">
              <span className="text-cyan-400 font-bold">⚡ Impacto:</span> {event.impact}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {event.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-purple-300/60 border border-white/[0.06]">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Photos Carousel with Toggle */}
        <div className="pt-2 border-t border-purple-500/15">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-mono uppercase tracking-wider text-purple-400/70 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>Evidencia Fotográfica ({event.images.length} fotos)</span>
            </p>
            <button
              onClick={() => setShowGallery(!showGallery)}
              className="text-xs text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              {showGallery ? (
                <>
                  <span>Ocultar</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Ver Fotos</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {showGallery && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl"
              >
                <ImageCarousel images={event.images} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Tilt3DCard>
  )
}

export function CommunitySection() {
  return (
    <section id="community" className="py-24 px-6 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">Community & Volunteering</p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Voluntariado y Comunidades Tech
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-2xl text-base">
            La tecnología cobra su verdadero sentido cuando se comparte. Eventos masivos, hackathons y conferencias donde he servido como voluntario staff e impulsado la comunidad tecnológica del Caribe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
