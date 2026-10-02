"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

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
  { value: 1000, suffix: "+", label: "People impacted", sublabel: "Through events & education", color: "from-purple-500 to-blue-500" },
  { value: 15, suffix: "+", label: "Teams mentored", sublabel: "Competitive & creative", color: "from-cyan-500 to-blue-500" },
  { value: 100, suffix: "+", label: "Youth supported", sublabel: "In STEM activities", color: "from-pink-500 to-purple-500" },
  { value: 4, suffix: "", label: "Major events", sublabel: "As staff & coordinator", color: "from-blue-500 to-indigo-500" },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="text-xs font-mono text-green-400 tracking-widest uppercase mb-4">Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technology as a tool for people</h2>
          <p className="text-purple-300/60 mt-3 max-w-2xl">Growing up in Barranquilla and seeing the needs of communities around me shaped how I see technology — not just as a career tool, but as a way to create opportunities and bring STEM closer to young people.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              className="p-6 rounded-xl border border-purple-500/30 bg-gray-900/50 backdrop-blur-sm hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all text-center group">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                <CountUp target={stat.value} />{stat.suffix}
              </div>
              <p className="text-sm font-medium text-white">{stat.label}</p>
              <p className="text-xs text-purple-300/50 mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl">🎤</div>
          <div>
            <p className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Public Speaking</p>
            <h3 className="text-lg font-semibold text-white mb-2">Skill Challenge — Universidad del Norte</h3>
            <p className="text-purple-200/70 text-sm leading-relaxed">Spoke in front of <span className="text-white font-medium">700+ attendees</span> at the opening ceremony of Skill Challenge at Uninorte — sharing the experience of competitive robotics and STEM education.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
