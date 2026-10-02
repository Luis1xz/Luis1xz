"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImageCarousel } from "./image-carousel"

const events = [
  {
    name: "Hackathon Barranquilla-IA",
    role: "Volunteer Staff",
    date: "May 2025",
    icon: "🤖",
    color: "border-cyan-600/20 bg-cyan-600/5",
    accent: "text-cyan-400",
    description: "One of the most important AI hackathons in Colombia. Over a weekend, 100+ participants created innovative AI-powered solutions, supported by expert mentors and a vibrant tech community.",
    impact: "Coordinated technical activities and mentoring for 100+ participants",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier2.jpg-fk1azantb4H5jwBeL24TYLyPSs0cnf.jpeg", caption: "Volunteer staff at Barranquilla-IA", alt: "Luis as volunteer staff" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier3.jpg-rss7IsellULSVmTeRDJCfBaV36wDnM.jpeg", caption: "With the volunteer team", alt: "Volunteer team" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier1-vpWODS1Ymu25jWGwWGwnxX2K1FMxnl.png", caption: "Full team celebrating success", alt: "Full team" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abier5.jpg-pJR9VHvVVfqyeVKyC0zEFSXCWOX36v.jpeg", caption: "Official staff credential", alt: "Staff credential" },
    ],
  },
  {
    name: "CaribeConf 2025",
    role: "Volunteer Staff",
    date: "2025",
    icon: "🌴",
    color: "border-green-600/20 bg-green-600/5",
    accent: "text-green-400",
    description: "Conference uniting 300+ tech professionals and 16 tech communities from the Caribbean. Talks on programming, UX/UI design, AI, cybersecurity, and diversity in tech.",
    impact: "Coordinated activities for 300+ professionals, facilitating networking across 16 Caribbean communities",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf1-baapWiDAIFpIVo5e2DiUH0bX8R93By.png", caption: "All 16 Caribbean tech communities", alt: "Full CaribeConf group" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf5.jpg-cshH2XW6sUcxTYyPJwyS462zwBdb77.jpeg", caption: "Volunteer team with official shirts", alt: "Volunteer team" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf4.jpg-qcJWu4OHnbkmEgGg1RUnzRghFgcMtz.jpeg", caption: "Welcome at CaribeConf 2025", alt: "CaribeConf welcome" },
    ],
  },
  {
    name: "IEEE ColCom 2024",
    role: "Staff / Volunteer",
    date: "August 2024",
    icon: "📡",
    color: "border-blue-600/20 bg-blue-600/5",
    accent: "text-blue-400",
    description: "Colombian Conference on Communications and Computing (IEEE) — bringing together academics, scientists, and industry professionals to discuss advances in telecommunications and computing.",
    impact: "Connected with technology industry leaders and participated in technical sessions",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0LHjISoKxC3vPY93jlDJYtj3W08xek.png", caption: "IEEE ColCom 2024 gala dinner", alt: "ColCom gala" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HdNFphhGBN85MJRmXe3ywSp8BH8mPf.png", caption: "Participating in technical sessions", alt: "Technical sessions" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qxcYY4mOT2w6W9rZVm7B0gMJ1Yx5EA.png", caption: "Networking with industry professionals", alt: "Networking" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AYB2BbyYadnjctF7GuiuGyH7hEqAYx.png", caption: "Official participation certificate", alt: "Certificate" },
    ],
  },
  {
    name: "World Cup Amputee",
    role: "Volunteer",
    date: "2024",
    icon: "⚽",
    color: "border-yellow-600/20 bg-yellow-600/5",
    accent: "text-yellow-400",
    description: "Volunteered at the World Cup Amputee — an international sports event in Barranquilla celebrating the talent and determination of extraordinary athletes.",
    impact: "Contributed to the success of an international sports event",
    images: [
      { src: "/world-cup-volunteers.jpeg", caption: "Volunteer team at World Cup Amputee", alt: "Volunteer team" },
    ],
  },
]

function EventCard({ event }: { event: typeof events[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`p-5 rounded-xl border ${event.color} transition-all duration-300`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{event.icon}</span>
          <div>
            <h3 className="font-semibold text-white">{event.name}</h3>
            <p className={`text-sm ${event.accent} font-medium`}>{event.role}</p>
            <p className="text-xs text-gray-600">{event.date}</p>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`text-xs px-3 py-1 rounded-full border ${event.color} ${event.accent} hover:opacity-80 transition-opacity flex-shrink-0`}
        >
          {open ? "Less" : "Photos"}
        </button>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-2">{event.description}</p>
      <div className={`text-xs px-2 py-1 rounded bg-white/[0.04] text-gray-600 inline-block`}>
        Impact: {event.impact}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              <ImageCarousel images={event.images} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CommunitySection() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-green-400 tracking-widest uppercase mb-4">Community & Events</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Giving back</h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Volunteering, coordinating, and contributing to the Caribbean tech community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
