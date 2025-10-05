"use client"

import { useEffect, useState } from "react"
import { Rocket } from "lucide-react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const rocketTransform = Math.min(scrollY * 0.5, 400)

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `blink ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Earth at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-full bg-secondary/20 border-t-4 border-secondary"
        style={{
          transform: `translateX(-50%) translateY(${rocketTransform}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute inset-0 rounded-t-full bg-gradient-to-t from-secondary/30 to-transparent" />
      </div>

      {/* Rocket */}
      <div
        className="relative z-10 flex flex-col items-center gap-8"
        style={{
          transform: `translateY(-${rocketTransform}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="relative">
          <Rocket
            className="w-24 h-24 text-primary animate-[float_3s_ease-in-out_infinite]"
            style={{ animation: "float 3s ease-in-out infinite, pulse-glow 2s ease-in-out infinite" }}
          />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-12 bg-accent blur-sm" />
        </div>

        <div className="text-center space-y-6 px-4">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary pixel-text"
            style={{ fontFamily: "var(--font-press-start)" }}
          >
            CODIGO
            <br />
            FANTASMA
          </h1>
          <p
            className="text-sm md:text-base text-secondary pixel-text max-w-2xl"
            style={{ fontFamily: "var(--font-press-start)", lineHeight: "2" }}
          >
            {"> DESARROLLO WEB & WEBAPPS"}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-[float_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-xs text-muted-foreground pixel-text" style={{ fontFamily: "var(--font-press-start)" }}>
          SCROLL
        </span>
      </div>
    </section>
  )
}
