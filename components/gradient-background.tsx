"use client"

import { motion } from "framer-motion"

export function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep cosmic purple/indigo base */}
      <div className="absolute inset-0 bg-[#090616]" />

      {/* 3D Atmospheric Radial Glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] rounded-full bg-purple-700/20 blur-[130px]" />
      <div className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-cyan-600/15 blur-[140px]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/20 blur-[150px]" />
      <div className="absolute top-[75%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-pink-600/15 blur-[140px]" />

      {/* Floating 3D luminous energy orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        className="absolute top-[15%] right-[25%] w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-400/25 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/20 to-pink-500/20 blur-[90px]"
      />

      {/* Cybernetic 3D perspective grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle scanline and vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,3,15,0.7)_100%)]" />
    </div>
  )
}
