"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Sparkles, Hand, ThumbsUp, Zap, Utensils } from "lucide-react"

type AvatarState = "idle" | "greeting" | "thumbs" | "glass" | "salchipapa"

interface InteractiveAvatarProps {
  className?: string
  mouseX?: any
  mouseY?: any
}

export function InteractiveAvatar({ className = "", mouseX, mouseY }: InteractiveAvatarProps) {
  const [activeState, setActiveState] = useState<AvatarState>("idle")
  const [statusMessage, setStatusMessage] = useState("Tócame o pasa el cursor")

  // Refs for all 5 individual video instances
  const idleVideoRef = useRef<HTMLVideoElement | null>(null)       // clip1: Respiración / Idle continuo
  const greetingVideoRef = useRef<HTMLVideoElement | null>(null)   // clip2: Saludo
  const thumbsVideoRef = useRef<HTMLVideoElement | null>(null)     // clip3: Thumbs up / Guiño
  const glassVideoRef = useRef<HTMLVideoElement | null>(null)      // clip5: Vidrio roto
  const salchipapaVideoRef = useRef<HTMLVideoElement | null>(null) // clip6: Salchipapa

  const animationStepRef = useRef<number>(0)

  // 3D Parallax tilt effect
  const defaultMouseX = useMotionValue(0)
  const defaultMouseY = useMotionValue(0)
  const currentMouseX = mouseX || defaultMouseX
  const currentMouseY = mouseY || defaultMouseY

  const rotateX = useTransform(currentMouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(currentMouseX, [-300, 300], [-8, 8])
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 25 })

  // Initialize and ensure breathing idle video plays automatically
  useEffect(() => {
    const idleVideo = idleVideoRef.current
    if (idleVideo) {
      idleVideo.play().catch(() => {})
    }
  }, [])

  // Return to breathing idle loop gracefully
  const returnToIdle = useCallback(() => {
    setActiveState("idle")
    setStatusMessage("Tócame o pasa el cursor")

    const idleVideo = idleVideoRef.current
    if (idleVideo) {
      idleVideo.play().catch(() => {})
    }
  }, [])

  // Advance animation on Click or Tap (iPad, iPhone, Android, PC)
  const handleInteraction = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation()
    }

    // Cycle through reactions: Saludo -> Thumbs up -> Vidrio roto -> Salchipapa
    animationStepRef.current = (animationStepRef.current + 1) % 4

    if (animationStepRef.current === 1) {
      const v = thumbsVideoRef.current
      if (v) {
        v.currentTime = 0
        v.play().then(() => {
          setActiveState("thumbs")
          setStatusMessage("Awesome! 🚀")
        }).catch(() => {})
      }
    } else if (animationStepRef.current === 2) {
      const v = glassVideoRef.current
      if (v) {
        v.currentTime = 0
        v.play().then(() => {
          setActiveState("glass")
          setStatusMessage("Vidrio Roto! 💥")
        }).catch(() => {})
      }
    } else if (animationStepRef.current === 3) {
      const v = salchipapaVideoRef.current
      if (v) {
        v.currentTime = 0
        v.play().then(() => {
          setActiveState("salchipapa")
          setStatusMessage("Salchipapa! 🍟")
        }).catch(() => {})
      }
    } else {
      const v = greetingVideoRef.current
      if (v) {
        v.currentTime = 0
        v.play().then(() => {
          setActiveState("greeting")
          setStatusMessage("Hola! 👋")
        }).catch(() => {})
      }
    }
  }, [])

  // Desktop Hover (only on devices with a mouse/trackpad pointer)
  const handleMouseEnter = useCallback(() => {
    if (activeState !== "idle") return
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      const v = greetingVideoRef.current
      if (v) {
        v.currentTime = 0
        v.play().then(() => {
          setActiveState("greeting")
          setStatusMessage("Hola! 👋")
        }).catch(() => {})
      }
    }
  }, [activeState])

  const handleMouseLeave = useCallback(() => {
    if (activeState === "greeting") {
      returnToIdle()
    }
  }, [activeState, returnToIdle])

  return (
    <motion.div
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative flex flex-col items-center select-none cursor-pointer group touch-manipulation ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteraction}
      role="button"
      tabIndex={0}
      aria-label="Avatar 3D Interactivo de Luis Alfonso Herrera"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleInteraction()
        }
      }}
    >
      {/* Ambient background glows for seamless interface integration */}
      <div className="absolute inset-0 -inset-y-4 rounded-full bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-cyan-400/20 blur-3xl -z-10 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-70 animate-pulse" />
      <div className="absolute -inset-2 rounded-full border border-purple-500/20 opacity-40 group-hover:opacity-80 group-hover:border-cyan-400/40 transition-all duration-500 -z-10" />

      {/* Video Container with Radial Edge Camouflage to eliminate rectangular borders */}
      <div
        className="relative w-[310px] h-[410px] sm:w-[350px] sm:h-[460px] rounded-3xl overflow-hidden bg-transparent transition-transform duration-300 group-hover:scale-[1.02]"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 90% 92% at 50% 50%, black 72%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 90% 92% at 50% 50%, black 72%, transparent 100%)",
        }}
      >
        {/* 1. ESTADO: IDLE / RESPIRACIÓN (Loop continuo por defecto en segundo plano) */}
        <video
          ref={idleVideoRef}
          src="/avatar/clip1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "idle" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />

        {/* 2. ESTADO: SALUDO (clip2) */}
        <video
          ref={greetingVideoRef}
          src="/avatar/clip2.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={returnToIdle}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "greeting" ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        />

        {/* 3. ESTADO: THUMBS UP / REACCIÓN (clip3) */}
        <video
          ref={thumbsVideoRef}
          src="/avatar/clip3.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={returnToIdle}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "thumbs" ? "opacity-100 z-30" : "opacity-0 z-0"
          }`}
        />

        {/* 4. ESTADO: VIDRIO ROTO (clip5) */}
        <video
          ref={glassVideoRef}
          src="/avatar/clip5.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={returnToIdle}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "glass" ? "opacity-100 z-40" : "opacity-0 z-0"
          }`}
        />

        {/* 5. ESTADO: SALCHIPAPA (clip6) */}
        <video
          ref={salchipapaVideoRef}
          src="/avatar/clip6.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={returnToIdle}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "salchipapa" ? "opacity-100 z-50" : "opacity-0 z-0"
          }`}
        />
      </div>

      {/* Floating Interactive Badge Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 backdrop-blur-md text-xs font-mono text-purple-200 shadow-lg shadow-purple-950/50"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
        </span>
        <span className="flex items-center gap-1.5">
          {activeState === "idle" && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
          {activeState === "greeting" && <Hand className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />}
          {activeState === "thumbs" && <ThumbsUp className="w-3.5 h-3.5 text-pink-400 animate-pulse" />}
          {activeState === "glass" && <Zap className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />}
          {activeState === "salchipapa" && <Utensils className="w-3.5 h-3.5 text-amber-400 animate-bounce" />}
          <span>{statusMessage}</span>
        </span>
      </motion.div>
    </motion.div>
  )
}
