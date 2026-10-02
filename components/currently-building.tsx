"use client"

import { motion } from "framer-motion"

const building = [
  {
    icon: "🎓",
    title: "Engineering",
    description: "Systems Engineering + Biomedical Engineering",
    color: "from-blue-600/20 to-blue-600/5",
    border: "border-blue-600/20",
    tag: "Universidad del Norte",
  },
  {
    icon: "🤖",
    title: "Robotics",
    description: "Competitive robotics & microcontroller projects",
    color: "from-cyan-600/20 to-cyan-600/5",
    border: "border-cyan-600/20",
    tag: "S3 Robotics",
  },
  {
    icon: "🧠",
    title: "AI & Data",
    description: "Machine learning, data science & predictive solutions",
    color: "from-violet-600/20 to-violet-600/5",
    border: "border-violet-600/20",
    tag: "Active",
  },
  {
    icon: "🌎",
    title: "STEM Education",
    description: "Mentoring, tech education & community engagement",
    color: "from-green-600/20 to-green-600/5",
    border: "border-green-600/20",
    tag: "Barranquilla",
  },
  {
    icon: "💻",
    title: "Software",
    description: "Web apps, automation & digital tools",
    color: "from-orange-600/20 to-orange-600/5",
    border: "border-orange-600/20",
    tag: "Full-Stack",
  },
  {
    icon: "🧬",
    title: "Biomedical",
    description: "Exploring health technology & biomedical signals",
    color: "from-pink-600/20 to-pink-600/5",
    border: "border-pink-600/20",
    tag: "2026–2030",
  },
]

export function CurrentlyBuilding() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4">Currently Building</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What I&apos;m working on
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            A young engineer operating at the intersection of multiple disciplines.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {building.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`group p-6 rounded-xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-sm cursor-default transition-all duration-300 hover:border-opacity-60`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs text-gray-600 font-mono px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
