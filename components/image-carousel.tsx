"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
  caption?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  className?: string
}

export function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const isBarranquillaIA = images.some((img) => img.src.includes("abier"))
  const isSURA = images.some((img) => img.src.includes("sura"))
  const isCaribeConf = images.some((img) => img.src.includes("conf"))
  const isS3Robotics = images.some((img) => img.src.includes("Iv47v"))
  const isNASA = images.some(
    (img) =>
      img.src.includes("image-") &&
      (img.src.includes("ZnKPmV") ||
        img.src.includes("gI94IB") ||
        img.src.includes("k4FarF") ||
        img.src.includes("oMjnmL") ||
        img.src.includes("KhVopF") ||
        img.src.includes("R34Eo3")),
  )
  const isColCom = images.some(
    (img) =>
      img.src.includes("blob.v0.dev") &&
      (img.src.includes("6DfMv") ||
        img.src.includes("fSMK8") ||
        img.src.includes("yFFDu") ||
        img.src.includes("p4nBr") ||
        img.src.includes("sVv2m")),
  )

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-gray-900/30 backdrop-blur-sm border border-purple-500/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-80 sm:h-96 md:h-[420px] bg-black/60 flex items-center justify-center overflow-hidden">
              {/* Ambient blurred backdrop so any aspect ratio fills seamlessly */}
              <img
                src={images[currentIndex].src || "/placeholder.svg"}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-105 pointer-events-none"
                style={{ transform: "translateZ(0)" }}
              />
              <img
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                loading="lazy"
                decoding="async"
                className="relative z-10 max-h-full max-w-full object-contain mx-auto"
                style={{ transform: "translateZ(0)" }}
              />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {images[currentIndex].caption && (
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="text-white text-sm bg-black/70 backdrop-blur-md rounded-lg px-3.5 py-2 border border-white/10 shadow-lg inline-block">
                  {images[currentIndex].caption}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-purple-400 w-6" : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
