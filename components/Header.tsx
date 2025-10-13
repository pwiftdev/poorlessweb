'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaXTwitter, FaChartLine } from 'react-icons/fa6'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-poorless-mint/20 shadow-lg shadow-poorless-mint/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-poorless-mint transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-white hover:text-poorless-mint transition-colors font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('contract')}
            className="text-white hover:text-poorless-mint transition-colors font-medium"
          >
            Contract
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/i/communities/1977479383192375577"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-poorless-mint/10 hover:bg-poorless-mint/20 text-poorless-mint 
                     transition-all duration-300 hover:scale-110"
          >
            <FaXTwitter className="text-xl" />
          </a>
          <a
            href="https://dexscreener.com/solana/enexcb5j81zdmaexxugnf3ddvbusytmtrxe2o3tyewng"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-poorless-gold/10 hover:bg-poorless-gold/20 text-poorless-gold 
                     transition-all duration-300 hover:scale-110"
          >
            <FaChartLine className="text-xl" />
          </a>
        </div>
      </nav>
    </header>
  )
}

