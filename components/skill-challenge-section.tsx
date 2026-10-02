"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Point {
  x: number
  y: number
}

export default function SkillChallengeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [path, setPath] = useState<Point[]>([])
  const [robotPosition, setRobotPosition] = useState<Point>({ x: 50, y: 250 })
  const [isFollowing, setIsFollowing] = useState(false)
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)

  const drawPath = useCallback((ctx: CanvasRenderingContext2D, points: Point[]) => {
    if (points.length < 2) return

    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.shadowColor = "#ffffff"
    ctx.shadowBlur = 10

    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
    }
    ctx.stroke()
  }, [])

  const drawRobot = useCallback((ctx: CanvasRenderingContext2D, position: Point) => {
    const { x, y } = position

    ctx.fillStyle = "#ff1744"
    ctx.shadowColor = "#ff1744"
    ctx.shadowBlur = 15
    ctx.beginPath()
    ctx.roundRect(x - 15, y - 6, 30, 12, 3)
    ctx.fill()

    ctx.fillStyle = "#d50000"
    ctx.shadowBlur = 10
    ctx.beginPath()
    ctx.roundRect(x + 15, y - 4, 12, 8, 2)
    ctx.fill()

    ctx.fillStyle = "#1976d2"
    ctx.shadowBlur = 8
    ctx.beginPath()
    ctx.roundRect(x - 18, y - 8, 8, 16, 2)
    ctx.fill()

    ctx.fillStyle = "#424242"
    ctx.shadowBlur = 5
    ctx.beginPath()
    ctx.arc(x - 8, y - 8, 3, 0, Math.PI * 2)
    ctx.arc(x - 8, y + 8, 3, 0, Math.PI * 2)
    ctx.arc(x + 8, y - 8, 3, 0, Math.PI * 2)
    ctx.arc(x + 8, y + 8, 3, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "#37474f"
    ctx.shadowBlur = 3
    ctx.beginPath()
    ctx.roundRect(x - 5, y - 3, 10, 6, 2)
    ctx.fill()
  }, [])

  const redraw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "#0a0a0a"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = "#1a1a1a"
    ctx.lineWidth = 1
    ctx.shadowBlur = 0
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, canvas.height)
      ctx.stroke()
    }
    for (let i = 0; i < canvas.height; i += 20) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(canvas.width, i)
      ctx.stroke()
    }

    drawPath(ctx, path)

    drawRobot(ctx, robotPosition)
  }, [path, robotPosition, drawPath, drawRobot])

  useEffect(() => {
    redraw()
  }, [redraw])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!gameStarted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setIsDrawing(true)
    setPath([{ x, y }])
    setIsFollowing(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !gameStarted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPath((prev) => [...prev, { x, y }])
  }

  const handleMouseUp = () => {
    if (!isDrawing) return
    setIsDrawing(false)
    if (path.length > 1) {
      setIsFollowing(true)
      followPath()
    }
  }

  const followPath = () => {
    if (path.length < 2) return

    let currentIndex = 0
    const speed = 3

    const animate = () => {
      if (currentIndex >= path.length - 1) {
        setScore((prev) => prev + Math.floor(path.length / 10))
        return
      }

      const current = path[currentIndex]
      const next = path[currentIndex + 1]

      const dx = next.x - current.x
      const dy = next.y - current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < speed) {
        currentIndex++
        setRobotPosition(next)
      } else {
        const ratio = speed / distance
        setRobotPosition({
          x: current.x + dx * ratio,
          y: current.y + dy * ratio,
        })
        path[currentIndex] = { x: current.x + dx * ratio, y: current.y + dy * ratio }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }

  const resetGame = () => {
    setPath([])
    setRobotPosition({ x: 50, y: 250 })
    setIsFollowing(false)
    setScore(0)
    setIsDrawing(false)
  }

  const startGame = () => {
    setGameStarted(true)
    setShowInstructions(false)
    resetGame()
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent mb-4">
            FollowLine-Bot
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pon a prueba mis habilidades de programación. Dibuja una línea y observa cómo el carro de F1 la sigue usando
            algoritmos de navegación autónoma.
          </p>
        </motion.div>

        <AnimatePresence>
          {showInstructions && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 mb-8 text-center"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">¿Cómo jugar?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <p>Haz clic y arrastra para dibujar una línea</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <p>Suelta el mouse para que el carro de F1 siga tu línea</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <p>¡Gana puntos por líneas más largas y complejas!</p>
                </div>
              </div>
              <button
                onClick={startGame}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-full hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105"
              >
                ¡Comenzar Desafío!
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {gameStarted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-cyan-400 font-bold text-xl">
                Puntuación: <span className="text-white">{score}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={resetGame}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                >
                  Reiniciar
                </button>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span>F1 Car</span>
                </div>
              </div>
            </div>

            <canvas
              ref={canvasRef}
              width={800}
              height={500}
              className="w-full border border-cyan-500/30 rounded-lg cursor-crosshair bg-black"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />

            <div className="mt-4 text-center text-gray-400">
              <p>Dibuja líneas para que el carro de F1 las siga. ¡Líneas más largas = más puntos!</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
