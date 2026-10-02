"use client"

import { motion } from "framer-motion"
import { Trophy, Users, Cpu, Target } from "lucide-react"

const achievements = [
  {
    place: "1st",
    color: "text-yellow-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/5",
    competition: "ROBOTECH Robotics Competition",
    category: "Professional Category · National",
    year: "2024",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    place: "3rd",
    color: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    competition: "UTBOT / Robotic People Fest",
    category: "Professional Category · National",
    year: "2024",
    icon: <Target className="w-5 h-5" />,
  },
]

const members = [
  { name: "Luis Alfonso Herrera", role: "Founder / Lead" },
  { name: "Haxell Gómez Lara", role: "Team Member" },
  { name: "Samir Olivo", role: "Team Member" },
  { name: "Juan Bornacelly", role: "Team Member" },
  { name: "Christopher Cabana", role: "Team Member" },
]

const skillTimeline = [
  {
    year: "2023",
    event: "Skill Challenge",
    detail: "🥉 Bronze Medal — 3rd place",
    role: "Competitor",
  },
  {
    year: "2024",
    event: "Skill Challenge",
    detail: "Mentor & coach of the winning team",
    role: "Mentor",
  },
]

export function S3RoboticsSection() {
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
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">Competitive Robotics</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            S3 Robotics
            <span className="ml-3 text-lg font-normal text-gray-600">Universidad del Norte</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl">
            Competitive robotics team founded at Universidad del Norte. We build, program, and compete at the professional level.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-6">Results</p>
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-5 rounded-xl border ${a.border} ${a.bg} flex items-center gap-6`}
              >
                <div className={`text-5xl font-bold ${a.color} min-w-[60px] text-center`}>{a.place}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={a.color}>{a.icon}</span>
                    <h3 className="font-semibold text-white">{a.competition}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{a.category}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-gray-600 px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                    {a.year}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* S3 Robot image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 rounded-xl overflow-hidden border border-white/[0.06]"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-08-18%20a%20las%2020.55.45_073c123e.jpg-hL9T9zDRJAvHaWOpH2kQIFXKYo0Ic7.jpeg"
                alt="S3 Robotics team with their robot"
                className="w-full object-cover max-h-64"
              />
            </motion.div>
          </div>

          {/* Team + Skill Challenge */}
          <div className="space-y-6">
            {/* Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-gray-400" />
                <p className="text-sm font-medium text-gray-300">Team Members</p>
              </div>
              <div className="space-y-2.5">
                {members.map((m) => (
                  <div key={m.name} className="flex items-center justify-between">
                    <p className="text-sm text-white">{m.name}</p>
                    <span className="text-xs text-gray-600 font-mono">{m.role}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skill Challenge Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-gray-400" />
                <p className="text-sm font-medium text-gray-300">Skill Challenge Journey</p>
              </div>
              <div className="space-y-4">
                {skillTimeline.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1" />
                      {i < skillTimeline.length - 1 && <div className="w-px h-full bg-white/[0.06] mt-1" />}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-mono text-gray-600">{item.year}</span>
                        <span className="text-xs text-blue-400 font-medium">{item.role}</span>
                      </div>
                      <p className="text-sm font-medium text-white">{item.event}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* From Competitor to Mentor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-green-600/20 bg-green-600/5"
            >
              <p className="text-xs font-mono text-green-400 uppercase tracking-wider mb-2">From Competitor to Mentor</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Competed → learned → won → came back to teach. 
                Also mentored at <span className="text-green-400">Hack Club Scrapyard</span> (Barranquilla) — guiding young people in software, hardware, and rapid prototyping.
              </p>
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <p className="text-xs text-gray-600">Tech Caribe Fest — Robotics Zone Coordinator</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
