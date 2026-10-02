"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Sparkles, Hand, ThumbsUp, Zap } from "lucide-react"

type AvatarState = "idle" | "hover" | "click1" | "click2"

interface InteractiveAvatarProps {
  className?: string
  mouseX?: any
  mouseY?: any
}

export function InteractiveAvatar({ className = "", mouseX, mouseY }: InteractiveAvatarProps) {
  const [activeState, setActiveState] = useState<AvatarState>("idle")
  const [statusMessage, setStatusMessage] = useState("Hover or tap me")

  // Refs for all 4 individual video instances for 0-latency, flicker-free crossfades
  const idleVideoRef = useRef<HTMLVideoElement | null>(null)
  const hoverVideoRef = useRef<HTMLVideoElement | null>(null)
  const click1VideoRef = useRef<HTMLVideoElement | null>(null) // clip3: Thumbs up
  const click2VideoRef = useRef<HTMLVideoElement | null>(null) // clip5: Vidrio roto surprise
  const clickCountRef = useRef<number>(0)

  // 3D Parallax tilt effect if mouse coordinates are provided
  const defaultMouseX = useMotionValue(0)
  const defaultMouseY = useMotionValue(0)
  const currentMouseX = mouseX || defaultMouseX
  const currentMouseY = mouseY || defaultMouseY

  const rotateX = useTransform(currentMouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(currentMouseX, [-300, 300], [-8, 8])
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 25 })

  // Initialize and ensure idle video plays automatically
  useEffect(() => {
    const idleVideo = idleVideoRef.current
    if (idleVideo) {
      idleVideo.play().catch(() => {
        // Autoplay fallback: muted is set so this succeeds across modern browsers
      })
    }
  }, [])

  // Transition back to Idle gracefully
  const returnToIdle = useCallback(() => {
    setActiveState("idle")
    setStatusMessage("Hover or tap me")

    const idleVideo = idleVideoRef.current
    if (idleVideo) {
      idleVideo.play().catch(() => {})
    }
  }, [])

  // Trigger Hover (Greeting) State
  const handleMouseEnter = useCallback(() => {
    // Only trigger hover if not currently handling a higher-priority click action
    if (activeState === "click1" || activeState === "click2") return

    // Verify fine pointer (desktop mouse)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      const hoverVideo = hoverVideoRef.current
      if (hoverVideo) {
        hoverVideo.currentTime = 0
        hoverVideo.play().then(() => {
          setActiveState("hover")
          setStatusMessage("Greeting! 👋")
        }).catch(() => {})
      }
    }
  }, [activeState])

  const handleMouseLeave = useCallback(() => {
    if (activeState === "hover") {
      returnToIdle()
    }
  }, [activeState, returnToIdle])

  // Trigger Click / Tap: Alternates / Randomizes between clip3 (Thumbs up) and clip5 (Vidrio roto)
  const handleClick = useCallback(() => {
    clickCountRef.current += 1
    // Alternates between clip3 and clip5 on subsequent clicks
    const triggerVidrioRoto = clickCountRef.current % 2 === 0

    if (triggerVidrioRoto) {
      const click2 = click2VideoRef.current
      if (click2) {
        click2.currentTime = 0
        click2.play().then(() => {
          setActiveState("click2")
          setStatusMessage("Vidrio Roto! 💥")
        }).catch(() => {})
      }
    } else {
      const click1 = click1VideoRef.current
      if (click1) {
        click1.currentTime = 0
        click1.play().then(() => {
          setActiveState("click1")
          setStatusMessage("Awesome! 🚀")
        }).catch(() => {})
      }
    }
  }, [])

  return (
    <motion.div
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative flex flex-col items-center select-none cursor-pointer group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Interactive 3D Avatar Luis Alfonso Herrera"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleClick()
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
        {/* 1. STATE: IDLE (Continuous ambient loop) */}
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

        {/* 2. STATE: HOVER (Greeting clip on mouseenter) */}
        <video
          ref={hoverVideoRef}
          src="/avatar/clip2.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={returnToIdle}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "hover" ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        />

        {/* 3. STATE: CLICK 1 (Energetic reaction / Thumbs up clip) */}
        <video
          ref={click1VideoRef}
          src="/avatar/clip3.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={returnToIdle}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "click1" ? "opacity-100 z-30" : "opacity-0 z-0"
          }`}
        />

        {/* 4. STATE: CLICK 2 (Vidrio roto special reaction clip) */}
        <video
          ref={click2VideoRef}
          src="/avatar/clip5.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={returnToIdle}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "click2" ? "opacity-100 z-30" : "opacity-0 z-0"
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
          {activeState === "hover" && <Hand className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />}
          {activeState === "click1" && <ThumbsUp className="w-3.5 h-3.5 text-pink-400 animate-pulse" />}
          {activeState === "click2" && <Zap className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />}
          <span>{statusMessage}</span>
        </span>
      </motion.div>
    </motion.div>
  )
}
