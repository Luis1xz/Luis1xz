"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Sparkles, Hand, ThumbsUp } from "lucide-react"

type AvatarState = "idle" | "hover" | "click"

interface InteractiveAvatarProps {
  className?: string
  mouseX?: any
  mouseY?: any
}

export function InteractiveAvatar({ className = "", mouseX, mouseY }: InteractiveAvatarProps) {
  const [activeState, setActiveState] = useState<AvatarState>("idle")
  const [statusMessage, setStatusMessage] = useState("Hover or tap me")

  // Refs for the 3 individual video instances to ensure 0-latency, flicker-free crossfades
  const idleVideoRef = useRef<HTMLVideoElement | null>(null)
  const hoverVideoRef = useRef<HTMLVideoElement | null>(null)
  const clickVideoRef = useRef<HTMLVideoElement | null>(null)

  // 3D Parallax tilt effect if mouseX and mouseY are provided
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
    if (activeState === "click") return

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
    // If hovering and cursor leaves, return to idle
    if (activeState === "hover") {
      returnToIdle()
    }
  }, [activeState, returnToIdle])

  // Trigger Click / Tap (Enthusiastic Reaction) State
  const handleClick = useCallback(() => {
    const clickVideo = clickVideoRef.current
    if (clickVideo) {
      clickVideo.currentTime = 0
      clickVideo.play().then(() => {
        setActiveState("click")
        setStatusMessage("Awesome! 🚀")
      }).catch(() => {})
    }
  }, [])

  // Event handlers for video completion
  const handleHoverEnded = useCallback(() => {
    returnToIdle()
  }, [returnToIdle])

  const handleClickEnded = useCallback(() => {
    returnToIdle()
  }, [returnToIdle])

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
          onEnded={handleHoverEnded}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "hover" ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        />

        {/* 3. STATE: CLICK (Energetic reaction / Thumbs up clip) */}
        <video
          ref={clickVideoRef}
          src="/avatar/clip3.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={handleClickEnded}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "click" ? "opacity-100 z-30" : "opacity-0 z-0"
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
          {activeState === "click" && <ThumbsUp className="w-3.5 h-3.5 text-pink-400 animate-pulse" />}
          <span>{statusMessage}</span>
        </span>
      </motion.div>
    </motion.div>
  )
}
