"use client"

import { useEffect, useState } from "react"

export function SpaceJourney() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const galaxyOpacity = Math.min((scrollY - 800) / 500, 1)
  const starsScale = 1 + (scrollY - 800) / 1000

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-muted via-background to-background">
      {/* Deep space stars */}
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${starsScale})`,
          opacity: galaxyOpacity,
        }}
      >
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Galaxies */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: galaxyOpacity }}>
        <div className="relative w-full h-full">
          {/* Galaxy 1 */}
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-2xl"
            style={{ animation: "float 8s ease-in-out infinite" }}
          />
          {/* Galaxy 2 */}
          <div
            className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-2xl"
            style={{ animation: "float 10s ease-in-out infinite reverse" }}
          />
          {/* Galaxy 3 */}
          <div
            className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-accent/20 blur-2xl"
            style={{ animation: "float 12s ease-in-out infinite" }}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            className="text-3xl md:text-5xl font-bold text-primary pixel-text"
            style={{ fontFamily: "var(--font-press-start)", lineHeight: "2" }}
          >
            VIAJE AL
            <br />
            FUTURO DIGITAL
          </h2>
          <p
            className="text-sm md:text-base text-foreground/80 pixel-text leading-relaxed"
            style={{ fontFamily: "var(--font-press-start)", lineHeight: "2.5" }}
          >
            Despegamos tu proyecto hacia nuevas dimensiones
          </p>
        </div>
      </div>
    </section>
  )
}
