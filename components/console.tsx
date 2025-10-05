"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

const consoleLines = [
  "> SISTEMA INICIADO...",
  "> CARGANDO MODULOS...",
  "> CONECTANDO A RED...",
  "> RADAR ACTIVO",
  "> NAVEGACION ESTABLE",
  "> LISTO PARA DESPEGAR",
]

export function Console() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    if (currentLine < consoleLines.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, consoleLines[currentLine]])
        setCurrentLine((prev) => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  return (
    <section className="relative py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border-4 border-primary p-8 scanline">
            {/* Terminal header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-border">
              <Terminal className="w-6 h-6 text-primary" />
              <span
                className="text-sm font-bold text-primary pixel-text"
                style={{ fontFamily: "var(--font-press-start)" }}
              >
                CONSOLA_NAVE.EXE
              </span>
            </div>

            {/* Console output */}
            <div className="space-y-3 font-mono text-sm">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className="text-secondary pixel-text"
                  style={{ fontFamily: "var(--font-press-start)", fontSize: "0.7rem" }}
                >
                  {line}
                </div>
              ))}
              {currentLine < consoleLines.length && (
                <div
                  className="text-secondary pixel-text flex items-center"
                  style={{ fontFamily: "var(--font-press-start)", fontSize: "0.7rem" }}
                >
                  <span className="animate-pulse">_</span>
                </div>
              )}
            </div>

            {/* Radar */}
            <div className="mt-8 pt-8 border-t-2 border-border">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                <div className="absolute inset-4 rounded-full border-2 border-primary/20" />
                <div className="absolute inset-8 rounded-full border-2 border-primary/10" />
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-primary origin-left"
                  style={{
                    animation: "spin 4s linear infinite",
                    transformOrigin: "0% 50%",
                  }}
                />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
