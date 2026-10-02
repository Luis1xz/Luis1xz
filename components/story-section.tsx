"use client"

import { motion } from "framer-motion"

const milestones = [
  { year: "Barranquilla", label: "Origin", detail: "Born and raised in Barranquilla, Colombia. Grew up near communities like La Paz and La Manga — places that shaped my understanding of real needs.", icon: "🏙️" },
  { year: "IDDI Nueva Granada", label: "School", detail: "Secondary school. First contact with robotics and technology as a tool.", icon: "🏫" },
  { year: "2023", label: "First Competition", detail: "Competed in Skill Challenge robotics competition. Bronze medal (3rd place). First taste of national-level competitive robotics.", icon: "🥉" },
  { year: "2024", label: "Leader & Mentor", detail: "Founded S3 Robotics at Universidad del Norte. 1st place national ROBOTECH. Returned to Skill Challenge as mentor and coach of the winning team.", icon: "🏆" },
  { year: "2024", label: "NASA Space Apps", detail: "Built Project Valentine — a weather monitoring system combining local ESP32 sensors with NASA data. Local Winner, Barranquilla.", icon: "🛰️" },
  { year: "2024", label: "University", detail: "Started Ingeniería de Sistemas at Universidad del Norte. Also became CTO at KSANCHEZ DELIVERY.", icon: "🎓" },
  { year: "2025", label: "Data & Impact", detail: "3rd national place at Data Challenge Pro SURA with a predictive AI solution for healthcare. Mentored at Hack Club Scrapyard.", icon: "🧠" },
  { year: "2026", label: "Biomedical Engineering", detail: "Starting Ingeniería Biomédica at Universidad del Norte — building the intersection between software, AI, and health technology.", icon: "🧬" },
]

export function StorySection() {
  return (
    <section id="story" className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-orange-400 tracking-widest uppercase mb-4">Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">From Barranquilla to Engineering</h2>
          <p className="text-gray-500 mt-3 max-w-2xl">
            Student → competitor → mentor → developer → leader → organizer. Each step building on the last.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/40 via-violet-600/40 to-transparent" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-10 md:ml-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <div className={`inline-block p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors max-w-sm ${
                    i % 2 !== 0 ? "" : "md:ml-auto"
                  }`}>
                    <div className={`flex items-center gap-2 mb-2 ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <span className="text-lg">{m.icon}</span>
                      <div>
                        <p className="text-xs font-mono text-gray-600">{m.year}</p>
                        <p className="text-sm font-semibold text-white">{m.label}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{m.detail}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 mt-5 ring-4 ring-[#050505]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
