"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sobre Mí
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-glow">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video%20luis-vxwWBfcZoDfMidJ8McfiuMXt22pxpS.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-4 text-card-foreground">
                  Poseo una mentalidad analítica y creativa que me permite abordar desafíos complejos desde múltiples
                  perspectivas. Mi capacidad de liderazgo natural me impulsa a inspirar y guiar equipos hacia objetivos
                  comunes, mientras que mi pasión por la innovación me mantiene en constante búsqueda de soluciones
                  disruptivas.
                </p>
                <p className="text-lg leading-relaxed mb-4 text-card-foreground">
                  Tengo una aptitud excepcional para el aprendizaje rápido y la adaptación a nuevas tecnologías. Mi
                  talento para la resolución de problemas, combinado con habilidades de comunicación efectiva, me
                  permite traducir conceptos técnicos complejos en soluciones prácticas y accesibles.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Liderazgo Natural",
                    "Pensamiento Analítico",
                    "Innovación",
                    "Adaptabilidad",
                    "Resolución de Problemas",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-base font-medium border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
