"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Sparkles, Hand, ThumbsUp, Zap, Utensils } from "lucide-react"
import { useLanguage } from "@/context/language-context"

type AvatarState = "idle" | "greeting" | "thumbs" | "glass" | "salchipapa"

interface InteractiveAvatarProps {
  className?: string
  mouseX?: any
  mouseY?: any
}

const REACTION_STATES: AvatarState[] = ["greeting", "thumbs", "glass", "salchipapa"]

export function InteractiveAvatar({ className = "", mouseX, mouseY }: InteractiveAvatarProps) {
  const { t } = useLanguage()
  const [activeState, setActiveState] = useState<AvatarState>("idle")
  const activeStateRef = useRef<AvatarState>("idle")

  // Refs for all 5 individual video instances
  const idleVideoRef = useRef<HTMLVideoElement | null>(null)       // clip1: Respiración continua
  const greetingVideoRef = useRef<HTMLVideoElement | null>(null)   // clip2: Saludo
  const thumbsVideoRef = useRef<HTMLVideoElement | null>(null)     // clip3: Thumbs up / Guiño
  const glassVideoRef = useRef<HTMLVideoElement | null>(null)      // clip5: Vidrio roto
  const salchipapaVideoRef = useRef<HTMLVideoElement | null>(null) // clip6: Salchipapa

  const reactionIndexRef = useRef<number>(-1)
  const lastInteractionTimeRef = useRef<number>(0)

  // 3D Parallax tilt effect
  const defaultMouseX = useMotionValue(0)
  const defaultMouseY = useMotionValue(0)
  const currentMouseX = mouseX || defaultMouseX
  const currentMouseY = mouseY || defaultMouseY

  const rotateX = useTransform(currentMouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(currentMouseX, [-300, 300], [-8, 8])
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 25 })

  // Helper to ensure webkit-playsinline and muted are set at DOM level (critical for mobile WebKit)
  const configureVideoDOM = (v: HTMLVideoElement | null) => {
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    v.setAttribute("playsinline", "true")
    v.setAttribute("webkit-playsinline", "true")
  }

  // Initialize videos on mount
  useEffect(() => {
    const allVideos = [
      idleVideoRef.current,
      greetingVideoRef.current,
      thumbsVideoRef.current,
      glassVideoRef.current,
      salchipapaVideoRef.current,
    ]

    allVideos.forEach(configureVideoDOM)

    // Start idle video
    const idleVideo = idleVideoRef.current
    if (idleVideo) {
      idleVideo.play().catch(() => {})
    }
  }, [])

  // Safely pause and reset all reaction clips (except the currently playing one)
  const stopOtherReactions = useCallback((exceptVideo?: HTMLVideoElement | null) => {
    const reactionRefs = [greetingVideoRef, thumbsVideoRef, glassVideoRef, salchipapaVideoRef]
    reactionRefs.forEach((ref) => {
      const vid = ref.current
      if (vid && vid !== exceptVideo) {
        vid.pause()
        vid.currentTime = 0
      }
    })
  }, [])

  // Return to breathing idle loop gracefully
  const returnToIdle = useCallback(() => {
    activeStateRef.current = "idle"
    setActiveState("idle")
    stopOtherReactions(null)

    const idleVideo = idleVideoRef.current
    if (idleVideo) {
      idleVideo.play().catch(() => {})
    }
  }, [stopOtherReactions])

  // Play a specific reaction video from the beginning
  const playReaction = useCallback((nextState: AvatarState) => {
    activeStateRef.current = nextState
    setActiveState(nextState)

    const videoMap: Record<AvatarState, HTMLVideoElement | null> = {
      greeting: greetingVideoRef.current,
      thumbs: thumbsVideoRef.current,
      glass: glassVideoRef.current,
      salchipapa: salchipapaVideoRef.current,
      idle: idleVideoRef.current,
    }

    const targetVideo = videoMap[nextState]

    // Stop and reset all OTHER reaction videos so they don't consume hardware decoders or trigger ghost onEnded
    stopOtherReactions(targetVideo)

    if (targetVideo) {
      configureVideoDOM(targetVideo)
      targetVideo.currentTime = 0
      const playPromise = targetVideo.play()
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Avatar video play failed:", err)
          if (activeStateRef.current === nextState) {
            returnToIdle()
          }
        })
      }
    }
  }, [stopOtherReactions, returnToIdle])

  // Handlers when each reaction video finishes naturally
  const handleVideoEnded = useCallback((finishedState: AvatarState) => {
    // CRITICAL: Only return to idle if THIS video is still the active one!
    // If user already tapped another reaction, do NOT cut off the new video!
    if (activeStateRef.current === finishedState) {
      returnToIdle()
    }
  }, [returnToIdle])

  // Advance animation on Click or Tap (iPad, iPhone, Android, PC)
  const handleInteraction = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation()
    }

    // Debounce rapid accidental double-taps within 200ms
    const now = Date.now()
    if (now - lastInteractionTimeRef.current < 200) {
      return
    }
    lastInteractionTimeRef.current = now

    // Cycle sequentially: Saludo -> Thumbs up -> Vidrio roto -> Salchipapa -> Saludo...
    reactionIndexRef.current = (reactionIndexRef.current + 1) % REACTION_STATES.length
    const nextState = REACTION_STATES[reactionIndexRef.current]

    playReaction(nextState)
  }, [playReaction])

  // Desktop Hover ONLY (Only on devices with a mouse/trackpad pointer)
  const handleMouseEnter = useCallback(() => {
    if (activeStateRef.current !== "idle") return
    // CRITICAL: Never trigger on touch/mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      reactionIndexRef.current = 0
      playReaction("greeting")
    }
  }, [playReaction])

  const handleMouseLeave = useCallback(() => {
    // CRITICAL: On touch devices (iPhone, iPad, Android in vertical/horizontal),
    // mouseleave must NEVER fire or cut off videos when lifting a finger or scrolling!
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      if (activeStateRef.current === "greeting") {
        returnToIdle()
      }
    }
  }, [returnToIdle])

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
          onEnded={() => handleVideoEnded("greeting")}
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
          onEnded={() => handleVideoEnded("thumbs")}
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
          onEnded={() => handleVideoEnded("glass")}
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
          onEnded={() => handleVideoEnded("salchipapa")}
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
          <span>
            {activeState === "greeting" && t("¡Hola! 👋", "Hello! 👋")}
            {activeState === "thumbs" && t("¡Genial! 🚀", "Awesome! 🚀")}
            {activeState === "glass" && t("¡Vidrio Roto! 💥", "Broken Glass! 💥")}
            {activeState === "salchipapa" && t("¡Salchipapa! 🍟", "Salchipapa time! 🍟")}
            {activeState === "idle" && t("Tócame o pasa el cursor", "Touch me or hover")}
          </span>
        </span>
      </motion.div>
    </motion.div>
  )
}
