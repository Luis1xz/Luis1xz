"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Tilt3DCardProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
  tiltDegree?: number
  depth?: number
  onClick?: () => void
}

export function Tilt3DCard({
  children,
  className = "",
  glareColor = "rgba(168, 85, 247, 0.25)",
  tiltDegree = 8,
  onClick,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true)
    }
  }, [])

  // Smooth springs for high refresh rate physics
  const springX = useSpring(mouseX, { stiffness: 260, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 260, damping: 20 })

  // 3D rotation mapping
  const rotateX = useTransform(springY, [0, 1], [tiltDegree, -tiltDegree])
  const rotateY = useTransform(springX, [0, 1], [-tiltDegree, tiltDegree])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    mouseX.set(x)
    mouseY.set(y)
    glareX.set(e.clientX - rect.left)
    glareY.set(e.clientY - rect.top)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        isTouch
          ? { transform: "translateZ(0)" }
          : {
              transformStyle: "preserve-3d",
              perspective: 1000,
              rotateX,
              rotateY,
            }
      }
      whileHover={isTouch ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl transition-shadow duration-300 ${
        isHovered ? "shadow-2xl shadow-purple-500/20" : ""
      } ${className}`}
    >
      {/* 3D Dynamic Specular Glare */}
      {!isTouch && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${glareX.get()}px ${glareY.get()}px, ${glareColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Card Content with 3D Depth */}
      <div
        style={isTouch ? undefined : { transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  )
}
