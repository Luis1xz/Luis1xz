"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
    const particleCount = isMobile ? 25 : 50

    // Limit pixel ratio to max 1.5 on mobile devices to prevent GPU saturation and memory crashes
    const pixelRatio = isMobile ? Math.min(window.devicePixelRatio || 1, 1.5) : Math.min(window.devicePixelRatio || 1, 2)

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      ctx.scale(pixelRatio, pixelRatio)
    }

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? "#8b5cf6" : "#3b82f6",
    })

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle())
      }
    }

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1
        if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Only add blur on desktop to prevent mobile WebKit GPU crashes
        if (!isMobile) {
          ctx.shadowBlur = 8
          ctx.shadowColor = particle.color
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = ((100 - distance) / 100) * 0.2
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
