"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImageCarousel } from "./image-carousel"
import { Tilt3DCard } from "@/components/tilt-3d-card"
import { Users, ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface EventItem {
  name: string
  role: { es: string; en: string }
  date: { es: string; en: string }
  icon: string
  color: string
  accent: string
  badge: { es: string; en: string }
  description: { es: string; en: string }
  impact: { es: string; en: string }
  tags: { es: string[]; en: string[] }
  images: {
    src: string
    alt: { es: string; en: string }
    caption: { es: string; en: string }
  }[]
}

const events: EventItem[] = [
  {
    name: "Hackathon Barranquilla-IA",
    role: { es: "Voluntario Staff", en: "Volunteer Staff" },
    date: { es: "Mayo 2025", en: "May 2025" },
    icon: "🤖",
    color: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5",
    accent: "text-cyan-400",
    badge: { es: "Staff Oficial · 100+ Participantes", en: "Official Staff · 100+ Participants" },
    description: {
      es: "El hackathón de IA más importante de Colombia. Durante el fin de semana del 3 y 4 de Mayo de 2025, más de 100 participantes crearon soluciones innovadoras con IA, apoyados por mentores expertos y una comunidad tecnológica vibrante.",
      en: "One of the most important AI hackathons in Colombia. Over the weekend of May 3-4, 2025, over 100 participants built innovative AI solutions, supported by expert mentors and a vibrant tech community.",
    },
    impact: {
      es: "Coordiné actividades técnicas y mentorías para más de 100 participantes desarrollando soluciones de IA",
      en: "Coordinated technical activities and mentoring for 100+ participants building AI solutions",
    },
    tags: {
      es: ["IA", "Hackathon", "Voluntariado", "Innovación", "Staff"],
      en: ["AI", "Hackathon", "Volunteering", "Innovation", "Staff"],
    },
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier2.jpg-fk1azantb4H5jwBeL24TYLyPSs0cnf.jpeg",
        alt: { es: "Luis como voluntario staff en Barranquilla-IA", en: "Luis as volunteer staff at Barranquilla-IA" },
        caption: { es: "Como voluntario staff coordinando el hackathón de IA más importante de Colombia.", en: "As volunteer staff coordinating Colombia's premier AI hackathon." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier3.jpg-rss7IsellULSVmTeRDJCfBaV36wDnM.jpeg",
        alt: { es: "Luis con compañeros voluntarios del hackathon Barranquilla-IA", en: "Luis with fellow volunteers at Barranquilla-IA" },
        caption: { es: "Con el increíble equipo de voluntarios de Barranquilla-IA 2025.", en: "With the incredible volunteer team of Barranquilla-IA 2025." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier1-vpWODS1Ymu25jWGwWGwnxX2K1FMxnl.png",
        alt: { es: "Equipo completo de voluntarios celebrando el éxito del hackathon", en: "Full volunteer team celebrating hackathon success" },
        caption: { es: "Celebrando el éxito con todo el equipo organizador y más de 100 participantes.", en: "Celebrating success with the organizing team and 100+ participants." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier5.jpg-pJR9VHvVVfqyeVKyC0zEFSXCWOX36v.jpeg",
        alt: { es: "Credencial oficial de staff de Luis Herrera", en: "Official staff credential of Luis Herrera" },
        caption: { es: "Mi credencial oficial como staff del evento más importante de IA del país.", en: "My official staff badge at Colombia's premier AI event." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier4.jpg-SVueMQdnHOKd5Z0p7p8bvZ7IaZgcCV.jpeg",
        alt: { es: "Luis en los pasillos del evento con su credencial de staff", en: "Luis in event halls with staff badge" },
        caption: { es: "Coordinando actividades para asegurar el éxito del hackathón.", en: "Coordinating logistics and activities to ensure the hackathon's success." },
      },
    ],
  },
  {
    name: "CaribeConf 2025",
    role: { es: "Voluntario Staff", en: "Volunteer Staff" },
    date: { es: "2025", en: "2025" },
    icon: "🌴",
    color: "border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/5",
    accent: "text-green-400",
    badge: { es: "16 Comunidades Tech · 300+ Asistentes", en: "16 Tech Communities · 300+ Attendees" },
    description: {
      es: "La conferencia que reúne a más de 300 profesionales y 16 comunidades tecnológicas del Caribe. Charlas sobre programación, diseño UX/UI, IA, ciberseguridad y diversidad en la industria tech.",
      en: "The conference bringing together over 300 tech professionals and 16 Caribbean tech communities. Talks on programming, UX/UI design, AI, cybersecurity, and diversity in tech.",
    },
    impact: {
      es: "Coordiné actividades para más de 300 profesionales tecnológicos y facilité networking entre 16 comunidades del Caribe",
      en: "Coordinated activities for 300+ tech professionals and facilitated networking across 16 Caribbean communities",
    },
    tags: {
      es: ["Conferencia", "Tecnología", "Comunidades", "Networking", "Caribe"],
      en: ["Conference", "Technology", "Communities", "Networking", "Caribbean"],
    },
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf1-baapWiDAIFpIVo5e2DiUH0bX8R93By.png",
        alt: { es: "Foto grupal masiva de voluntarios y participantes de CaribeConf 2025", en: "Massive group photo of volunteers and participants at CaribeConf 2025" },
        caption: { es: "Toda la comunidad de CaribeConf 2025: 16 comunidades tecnológicas del Caribe.", en: "The entire CaribeConf 2025 community: 16 Caribbean tech communities." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf5.jpg-cshH2XW6sUcxTYyPJwyS462zwBdb77.jpeg",
        alt: { es: "Luis con equipo de voluntarias de CaribeConf", en: "Luis with CaribeConf volunteer team" },
        caption: { es: "Con el increíble equipo de voluntarias incluyendo Ana Rangel, diseñadora UX/UI.", en: "With the incredible volunteer team including Ana Rangel, UX/UI designer." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf4.jpg-qcJWu4OHnbkmEgGg1RUnzRghFgcMtz.jpeg",
        alt: { es: "Luis posando frente al banner de bienvenida de CaribeConf 2025", en: "Luis in front of CaribeConf 2025 welcome banner" },
        caption: { es: "Dando la bienvenida a CaribeConf 2025, reuniendo las comunidades tech del Caribe.", en: "Welcoming attendees to CaribeConf 2025, uniting Caribbean tech communities." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf2.jpg-Rd0kZEHY7378HJV3xGQkWofjluKzEK.jpeg",
        alt: { es: "Luis con Ana Rangel en CaribeConf", en: "Luis with Ana Rangel at CaribeConf" },
        caption: { es: "Con Ana Rangel, diseñadora UX/UI, trabajando juntos en CaribeConf 2025.", en: "With Ana Rangel, UX/UI designer, working together at CaribeConf 2025." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf6.jpg-BNmHYiESefOYiKMf2uxY9L5VtYMrVz.jpeg",
        alt: { es: "Credencial oficial de Luis Alfonso para CaribeConf 2025", en: "Official credential of Luis Alfonso for CaribeConf 2025" },
        caption: { es: "Mi credencial oficial con el escenario donde se compartieron las últimas tendencias tech.", en: "My official credential with the stage where the latest tech trends were shared." },
      },
    ],
  },
  {
    name: "IEEE ColCom 2024",
    role: { es: "Voluntario Staff / Participante", en: "Volunteer Staff / Participant" },
    date: { es: "Agosto 2024", en: "August 2024" },
    icon: "📡",
    color: "border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-indigo-500/5",
    accent: "text-blue-400",
    badge: { es: "IEEE ComSoc · Staff & Networking", en: "IEEE ComSoc · Staff & Networking" },
    description: {
      es: "Conferencia Colombiana de Comunicaciones y Computación IEEE que reúne académicos, científicos e industriales para discutir avances en telecomunicaciones y computación. Participé como voluntario staff apoyando la logística y en sesiones técnicas.",
      en: "Colombian Conference on Communications and Computing (IEEE) bringing together academics, scientists, and industry leaders to discuss advances in telecommunications and computing. Participated as volunteer staff supporting logistics and attending technical sessions.",
    },
    impact: {
      es: "Establecí conexiones con líderes de la industria tecnológica y participé en discusiones sobre el futuro de las telecomunicaciones",
      en: "Connected with tech industry leaders and took part in discussions on the future of telecommunications",
    },
    tags: {
      es: ["IEEE", "Telecomunicaciones", "Staff", "Robótica", "Networking"],
      en: ["IEEE", "Telecommunications", "Staff", "Robotics", "Networking"],
    },
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0LHjISoKxC3vPY93jlDJYtj3W08xek.png",
        alt: { es: "Cena de gala de ColCom 2024", en: "ColCom 2024 gala dinner" },
        caption: { es: "Cena de gala de IEEE ColCom 2024 con la comunidad académica e industrial.", en: "IEEE ColCom 2024 gala dinner with academic and industry community." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HdNFphhGBN85MJRmXe3ywSp8BH8mPf.png",
        alt: { es: "Luis en las sesiones técnicas de ColCom 2024", en: "Luis at ColCom 2024 technical sessions" },
        caption: { es: "Participando activamente en las sesiones técnicas de IEEE ColCom 2024.", en: "Actively participating in IEEE ColCom 2024 technical sessions." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qxcYY4mOT2w6W9rZVm7B0gMJ1Yx5EA.png",
        alt: { es: "Luis con Pedro J. Romero M. de Huawei", en: "Luis with Pedro J. Romero M. from Huawei" },
        caption: { es: "Networking con Pedro J. Romero M. (CSPO en Huawei) durante IEEE ColCom 2024.", en: "Networking with Pedro J. Romero M. (CSPO at Huawei) during IEEE ColCom 2024." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AYB2BbyYadnjctF7GuiuGyH7hEqAYx.png",
        alt: { es: "Certificado oficial de participación de Luis A. Herrera", en: "Official certificate of participation of Luis A. Herrera" },
        caption: { es: "Certificado oficial de participación en IEEE ColCom 2024.", en: "Official certificate of participation in IEEE ColCom 2024." },
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K048CNUcW8P4FtuLHiE0ZxPoxPYJ0M.png",
        alt: { es: "Luis con Pedro J. Romero M. y compañero", en: "Luis with Pedro J. Romero M. and colleague" },
        caption: { es: "Evento social de IEEE ColCom 2024 con colegas de la industria.", en: "IEEE ColCom 2024 social event with industry colleagues." },
      },
    ],
  },
  {
    name: "World Cup Amputee",
    role: { es: "Voluntario", en: "Volunteer" },
    date: { es: "2024", en: "2024" },
    icon: "⚽",
    color: "border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-amber-500/5",
    accent: "text-yellow-400",
    badge: { es: "Evento Internacional · Inclusión Social", en: "International Event · Social Inclusion" },
    description: {
      es: "Apoyé como voluntario en la World Cup Amputee, contribuyendo al éxito de este evento deportivo internacional que celebra el talento y la determinación de atletas extraordinarios. Una experiencia enriquecedora que me permitió ser parte de algo más grande que la tecnología.",
      en: "Volunteered at the World Cup Amputee, contributing to the success of this international sports event celebrating the talent and determination of extraordinary athletes. An inspiring experience beyond technology.",
    },
    impact: {
      es: "Contribuí al éxito de un evento deportivo internacional que celebra el talento de atletas extraordinarios",
      en: "Contributed to the success of an international sports event celebrating extraordinary athletes",
    },
    tags: {
      es: ["Voluntariado Internacional", "Deportes", "Inclusión", "Servicio Comunitario"],
      en: ["International Volunteering", "Sports", "Inclusion", "Community Service"],
    },
    images: [
      {
        src: "/world-cup-volunteers.jpeg",
        alt: { es: "Equipo completo de voluntarios World Cup Amputee", en: "Full volunteer team World Cup Amputee" },
        caption: { es: "El increíble equipo de voluntarios que hizo posible este evento deportivo internacional en Barranquilla.", en: "The wonderful volunteer team that made this international sports event possible in Barranquilla." },
      },
    ],
  },
]

function EventCard({ event }: { event: EventItem }) {
  const [showGallery, setShowGallery] = useState(true)
  const { language, t } = useLanguage()

  const localizedImages = event.images.map((img) => ({
    src: img.src,
    alt: img.alt[language],
    caption: img.caption[language],
  }))

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
                <p className={`text-sm ${event.accent} font-medium mt-0.5`}>{event.role[language]}</p>
                <p className="text-xs text-purple-300/50 font-mono mt-0.5">{event.date[language]} · Barranquilla</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
              {event.badge[language]}
            </span>
          </div>

          <p className="text-sm text-purple-200/70 leading-relaxed mb-4">{event.description[language]}</p>

          <div className="mb-4 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <p className="text-xs font-mono text-purple-300">
              <span className="text-cyan-400 font-bold">⚡ {t("Impacto:", "Impact:")}</span> {event.impact[language]}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {event.tags[language].map((tag) => (
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
              <span>
                {t("Evidencia Fotográfica", "Photo Evidence")} ({event.images.length} {t("fotos", "photos")})
              </span>
            </p>
            <button
              onClick={() => setShowGallery(!showGallery)}
              className="text-xs text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              {showGallery ? (
                <>
                  <span>{t("Ocultar", "Hide")}</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>{t("Ver Fotos", "View Photos")}</span>
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
                <ImageCarousel images={localizedImages} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Tilt3DCard>
  )
}

export function CommunitySection() {
  const { t } = useLanguage()

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
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">
            {t("Comunidad y Voluntariado", "Community & Volunteering")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {t("Voluntariado y Comunidades Tech", "Volunteering & Tech Communities")}
          </h2>
          <p className="text-purple-300/60 mt-3 max-w-2xl text-base">
            {t(
              "La tecnología cobra su verdadero sentido cuando se comparte. Eventos masivos, hackathons y conferencias donde he servido como voluntario staff e impulsado la comunidad tecnológica del Caribe.",
              "Technology gains its true meaning when shared. Major events, hackathons, and conferences where I have served as volunteer staff and fostered the Caribbean tech community."
            )}
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
