'use client'

import { useEffect, useState } from 'react'

export default function ImmersiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Base Gradient */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-black via-poorless-dark to-black" />

      {/* Animated Mesh Gradient */}
      <div
        className="fixed inset-0 -z-10 opacity-30 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #5FCEA7 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, #FFD700 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #5FCEA7 0%, transparent 80%)
          `,
        }}
      />

      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-poorless-mint/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-poorless-gold/20 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-poorless-mint/10 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(#5FCEA7 1px, transparent 1px),
              linear-gradient(90deg, #5FCEA7 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-poorless-mint to-transparent animate-pulse" />
      </div>
    </>
  )
}

