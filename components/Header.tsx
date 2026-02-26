'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-poorless-mint/20 shadow-lg shadow-poorless-mint/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src="/assets/poorlesslogo.png"
            alt="$POORLESS"
            width={50}
            height={50}
            className="glow-mint"
          />
          <span className="text-2xl font-black text-gradient">$POORLESS</span>
        </div>
      </nav>
    </header>
  )
}

