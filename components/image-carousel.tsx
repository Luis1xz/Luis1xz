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
            <img
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className={`w-full ${
                isBarranquillaIA
                  ? "h-80 md:h-96 object-contain" // Barranquilla-IA: mostrar foto completa sin cortes
                  : isCaribeConf && currentIndex === images.length - 1
                    ? "h-80 md:h-96 object-cover object-[center_40%]" // CaribeConf última imagen: bajar más para ver el nombre en la escarapela
                    : isCaribeConf
                      ? "h-80 md:h-96 object-cover object-[center_30%]" // CaribeConf otras imágenes: enfoque en cara y escarapela
                      : isSURA && currentIndex === 0
                        ? "h-64 md:h-80 object-cover object-[center_25%]" // SURA primera imagen: ajustar para ver la cara
                        : isSURA
                          ? "h-64 md:h-80 object-cover object-center" // SURA otras imágenes: mantener configuración original
                          : isS3Robotics
                            ? "h-64 md:h-80 object-cover object-[center_20%]" // S3 Robotics: subir imagen para ver mejor las caras del equipo
                            : isNASA
                              ? "h-64 md:h-80 object-cover object-[center_25%]" // NASA Space Apps: enfocar en rostros
                              : isColCom && currentIndex === 2
                                ? "h-64 md:h-80 object-cover object-[center_20%]" // ColCom 3ra imagen: subir para ver la cara
                                : isColCom
                                  ? "h-64 md:h-80 object-cover object-center" // ColCom otras imágenes: configuración normal
                                  : "h-64 md:h-80 object-cover object-center" // Otros: configuración normal
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {images[currentIndex].caption && (
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm bg-black/50 backdrop-blur-sm rounded px-3 py-2">
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
