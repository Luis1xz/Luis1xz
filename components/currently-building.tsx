"use client"

import { motion } from "framer-motion"

const building = [
  { icon: "🎓", title: "Engineering", description: "Systems Engineering + Biomedical Engineering", color: "from-blue-500/20 to-indigo-500/5", border: "border-blue-500/30", tag: "Universidad del Norte" },
  { icon: "🤖", title: "Robotics", description: "Competitive robotics & microcontroller projects", color: "from-cyan-500/20 to-blue-500/5", border: "border-cyan-500/30", tag: "S3 Robotics" },
  { icon: "🧠", title: "AI & Data", description: "Machine learning, data science & predictive solutions", color: "from-violet-500/20 to-purple-500/5", border: "border-violet-500/30", tag: "Active" },
  { icon: "🌎", title: "STEM Education", description: "Mentoring, tech education & community engagement", color: "from-green-500/20 to-emerald-500/5", border: "border-green-500/30", tag: "Barranquilla" },
  { icon: "💻", title: "Software", description: "Web apps, automation & digital tools", color: "from-orange-500/20 to-amber-500/5", border: "border-orange-500/30", tag: "Full-Stack" },
  { icon: "🧬", title: "Biomedical", description: "Exploring health technology & biomedical signals", color: "from-pink-500/20 to-rose-500/5", border: "border-pink-500/30", tag: "2026–2030" },
]

export function CurrentlyBuilding() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">Currently Building</p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">What I'm working on</h2>
          <p className="text-purple-300/60 mt-3 max-w-xl">A young engineer operating at the intersection of multiple disciplines.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {building.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }} whileHover={{ y: -4, scale: 1.02 }}
              className={`group p-6 rounded-xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-sm cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs text-purple-300/50 font-mono px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20">{item.tag}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-purple-200/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
