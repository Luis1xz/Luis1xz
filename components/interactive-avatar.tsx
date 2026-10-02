"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
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
  const [isLoading, setIsLoading] = useState(true)
  const [isTouch, setIsTouch] = useState(false)

  // Refs for all 5 individual video instances
  const idleVideoRef = useRef<HTMLVideoElement | null>(null)       // clip1: Respiración continua
  const greetingVideoRef = useRef<HTMLVideoElement | null>(null)   // clip2: Saludo
  const thumbsVideoRef = useRef<HTMLVideoElement | null>(null)     // clip3: Thumbs up / Guiño
  const glassVideoRef = useRef<HTMLVideoElement | null>(null)      // clip5: Vidrio roto
  const salchipapaVideoRef = useRef<HTMLVideoElement | null>(null) // clip6: Salchipapa

  const reactionIndexRef = useRef<number>(-1)
  const lastInteractionTimeRef = useRef<number>(0)

  // Detect touch devices to optimize GPU compositing on mobile
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true)
    }
  }, [])

  // 3D Parallax tilt effect
  const defaultMouseX = useMotionValue(0)
  const defaultMouseY = useMotionValue(0)
  const currentMouseX = mouseX || defaultMouseX
  const currentMouseY = mouseY || defaultMouseY

  const rotateX = useTransform(currentMouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(currentMouseX, [-300, 300], [-8, 8])
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 25 })

  // Helper to ensure webkit-playsinline and muted are strictly enforced at DOM level (critical for mobile WebKit)
  const configureVideoDOM = useCallback((v: HTMLVideoElement | null) => {
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    v.volume = 0
    v.playsInline = true
    v.setAttribute("muted", "")
    v.setAttribute("playsinline", "")
    v.setAttribute("webkit-playsinline", "true")
    v.setAttribute("x5-playsinline", "true")
  }, [])

  // Handler when idle video is ready to play
  const handleIdleReady = useCallback(() => {
    setIsLoading(false)
    const v = idleVideoRef.current
    if (v) {
      configureVideoDOM(v)
      if (v.paused) {
        v.play().catch(() => {})
      }
    }
  }, [configureVideoDOM])

  // Initialize and guarantee mobile autoplay without manual user intervention
  useEffect(() => {
    const idleVideo = idleVideoRef.current
    if (idleVideo) {
      configureVideoDOM(idleVideo)
      if (idleVideo.readyState >= 3) {
        setIsLoading(false)
      }
      idleVideo.play().catch(() => {})
    }

    // Safety fallback: if video starts playing or can play
    const onPlaying = () => setIsLoading(false)
    idleVideo?.addEventListener("playing", onPlaying, { once: true })
    idleVideo?.addEventListener("canplay", handleIdleReady, { once: true })
    idleVideo?.addEventListener("loadeddata", handleIdleReady, { once: true })

    // Unlocking mechanism: on first touch anywhere on screen, ensure playback starts if blocked by iOS battery saver
    const unlockAutoplay = () => {
      const v = idleVideoRef.current
      if (v) {
        configureVideoDOM(v)
        if (v.paused) {
          v.play().catch(() => {})
        }
      }
    }
    window.addEventListener("touchstart", unlockAutoplay, { once: true, passive: true })
    window.addEventListener("touchend", unlockAutoplay, { once: true, passive: true })
    window.addEventListener("click", unlockAutoplay, { once: true, passive: true })

    return () => {
      idleVideo?.removeEventListener("playing", onPlaying)
      idleVideo?.removeEventListener("canplay", handleIdleReady)
      idleVideo?.removeEventListener("loadeddata", handleIdleReady)
      window.removeEventListener("touchstart", unlockAutoplay)
      window.removeEventListener("touchend", unlockAutoplay)
      window.removeEventListener("click", unlockAutoplay)
    }
  }, [configureVideoDOM, handleIdleReady])

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
      configureVideoDOM(idleVideo)
      idleVideo.play().catch(() => {})
    }
  }, [stopOtherReactions, configureVideoDOM])

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
  }, [stopOtherReactions, configureVideoDOM, returnToIdle])

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
      style={
        isTouch
          ? { transform: "translateZ(0)" }
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }
      }
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
        {/* PANTALLA DE CARGA (Scanner morado) únicamente mientras el avatar carga */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="avatar-scanner-loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-between p-6 bg-[#080516] overflow-hidden pointer-events-none"
            >
              {/* Cuadrícula cibernética morada */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Resplandor radial morado central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-600/30 blur-3xl animate-pulse" />

              {/* Esquinas HUD tecnológicas */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-purple-500/60" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-purple-500/60" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-500/60" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-purple-500/60" />

              {/* Línea láser de escáner morado animada verticalmente */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_18px_#c084fc]"
                animate={{ top: ["8%", "92%", "8%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Estela luminosa del escáner */}
                <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-purple-500/20 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-purple-500/20 to-transparent" />
              </motion.div>

              {/* Encabezado del escáner */}
              <div className="w-full flex justify-between items-center z-10">
                <span className="text-[10px] font-mono tracking-widest text-purple-400/80 uppercase">
                  SYS.INIT // AVATAR
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
              </div>

              {/* Ícono central cibernético */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full border border-purple-500/40 bg-purple-950/40 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Sparkles className="w-7 h-7 text-purple-300 animate-pulse" />
                </div>
              </div>

              {/* Pie del escáner */}
              <div className="w-full flex justify-center items-center z-10">
                <span className="text-[11px] font-mono tracking-widest text-purple-300/80 uppercase flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  CARGANDO SISTEMA...
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. ESTADO: IDLE / RESPIRACIÓN (Loop continuo por defecto en segundo plano) */}
        <video
          ref={idleVideoRef}
          src="/avatar/clip1.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          onCanPlay={handleIdleReady}
          onLoadedData={handleIdleReady}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "idle" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />

        {/* 2. ESTADO: SALUDO (clip2) - Preload metadata to prevent iOS VRAM crash */}
        <video
          ref={greetingVideoRef}
          src="/avatar/clip2.mp4"
          muted
          playsInline
          controls={false}
          preload="metadata"
          onEnded={() => handleVideoEnded("greeting")}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "greeting" ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        />

        {/* 3. ESTADO: THUMBS UP / REACCIÓN (clip3) - Preload metadata */}
        <video
          ref={thumbsVideoRef}
          src="/avatar/clip3.mp4"
          muted
          playsInline
          controls={false}
          preload="metadata"
          onEnded={() => handleVideoEnded("thumbs")}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "thumbs" ? "opacity-100 z-30" : "opacity-0 z-0"
          }`}
        />

        {/* 4. ESTADO: VIDRIO ROTO (clip5) - Preload metadata */}
        <video
          ref={glassVideoRef}
          src="/avatar/clip5.mp4"
          muted
          playsInline
          controls={false}
          preload="metadata"
          onEnded={() => handleVideoEnded("glass")}
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ease-in-out ${
            activeState === "glass" ? "opacity-100 z-40" : "opacity-0 z-0"
          }`}
        />

        {/* 5. ESTADO: SALCHIPAPA (clip6) - Preload metadata */}
        <video
          ref={salchipapaVideoRef}
          src="/avatar/clip6.mp4"
          muted
          playsInline
          controls={false}
          preload="metadata"
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
