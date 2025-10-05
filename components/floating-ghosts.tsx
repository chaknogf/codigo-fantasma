"use client"

import { useEffect, useState } from "react"

const ghostColors = ["text-primary", "text-secondary", "text-accent", "text-primary/60"]

export function FloatingGhosts() {
  const [ghosts, setGhosts] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([])

  useEffect(() => {
    const newGhosts = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ghostColors[Math.floor(Math.random() * ghostColors.length)],
      delay: Math.random() * 5,
    }))
    setGhosts(newGhosts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {ghosts.map((ghost) => (
        <div
          key={ghost.id}
          className={`absolute ${ghost.color} opacity-20`}
          style={{
            left: `${ghost.x}%`,
            top: `${ghost.y}%`,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${ghost.delay}s`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            {/* Pac-Man ghost shape */}
            <path d="M4 16C4 9.373 9.373 4 16 4h8c6.627 0 12 5.373 12 12v16c0 2-1 3-2 3s-2-1-2-3v-2c0-1-1-2-2-2s-2 1-2 2v2c0 2-1 3-2 3s-2-1-2-3v-2c0-1-1-2-2-2s-2 1-2 2v2c0 2-1 3-2 3s-2-1-2-3v-2c0-1-1-2-2-2s-2 1-2 2v2c0 2-1 3-2 3s-2-1-2-3V16z" />
            {/* Eyes */}
            <circle cx="14" cy="16" r="2" fill="black" />
            <circle cx="26" cy="16" r="2" fill="black" />
          </svg>
        </div>
      ))}
    </div>
  )
}
