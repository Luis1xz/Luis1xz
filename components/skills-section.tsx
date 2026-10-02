"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    category: "Programming",
    color: "text-blue-400",
    dot: "bg-blue-500",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Web",
    color: "text-cyan-400",
    dot: "bg-cyan-500",
    skills: ["React", "Next.js", "Vercel"],
  },
  {
    category: "Robotics",
    color: "text-orange-400",
    dot: "bg-orange-500",
    skills: ["ESP32", "Microcontrollers", "Sensors", "Wireless Circuits", "Robotics Programming"],
  },
  {
    category: "AI & Data",
    color: "text-violet-400",
    dot: "bg-violet-500",
    skills: ["Machine Learning", "Data Analysis", "Computer Vision", "Google Colab"],
  },
  {
    category: "Cybersecurity",
    color: "text-red-400",
    dot: "bg-red-500",
    skills: ["Network Security", "Ethical Hacking", "Secure Programming", "Data Protection"],
  },
  {
    category: "Tools",
    color: "text-gray-400",
    dot: "bg-gray-500",
    skills: ["Git", "GitHub", "Google Sheets", "Google Apps Script", "Tinkercad", "NetBeans", "VS Code", "Microsoft Office", "Google Workspace"],
  },
  {
    category: "Languages",
    color: "text-green-400",
    dot: "bg-green-500",
    skills: ["Spanish — Native", "English — Intermediate"],
  },
]

export function SkillsSection() {
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
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical toolkit</h2>
          <p className="text-gray-500 mt-3">Built through hands-on projects and real-world experience.</p>
        </motion.div>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="sm:w-40 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                  <p className={`text-sm font-medium ${group.color}`}>{group.category}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm px-3 py-1 rounded-lg bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:border-white/[0.2] hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
