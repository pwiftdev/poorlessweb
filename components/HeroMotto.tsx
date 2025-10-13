'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaRocket } from 'react-icons/fa'

export default function HeroMotto() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      {/* Logo */}
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <Image
          src="/assets/poorlesslogo.png"
          alt="$POORLESS Logo"
          width={280}
          height={280}
          className="mb-8 animate-float glow-mint"
          priority
        />
      </div>

      {/* Main Title */}
      <div
        className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gradient uppercase mb-8 tracking-tight leading-none">
          $POORLESS
        </h1>
      </div>

      {/* Motto Section */}
      <div
        className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Decorative Lines */}
          <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent to-poorless-gold -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-gradient-to-l from-transparent to-poorless-gold -translate-y-1/2" />
          
          {/* Motto Box */}
          <div className="relative bg-gradient-to-r from-poorless-mint/10 via-poorless-gold/10 to-poorless-mint/10 
                        border-2 border-poorless-gold/50 rounded-2xl p-8 md:p-12 backdrop-blur-xl
                        shadow-[0_0_50px_rgba(255,215,0,0.2)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-poorless-dark px-6 py-2 
                          border-2 border-poorless-gold rounded-full">
              <span className="text-poorless-gold text-sm font-bold tracking-wider">OUR MOTTO</span>
            </div>
            
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed">
              Get rich or{' '}
              <span className="text-gradient">meme trying</span>
            </p>
            
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-poorless-mint" />
              <p className="text-2xl md:text-4xl font-black text-gradient">
                Be $POORLESS
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-poorless-mint" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => document.getElementById('contract')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-poorless-mint to-[#3BA87C] text-white font-bold text-lg 
                     px-10 py-5 rounded-full flex items-center gap-3 transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_10px_40px_rgba(95,206,167,0.5)] 
                     border-2 border-transparent hover:border-poorless-mint"
          >
            <FaRocket className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
            <span>Join The Movement</span>
          </button>
          
          <div className="flex items-center gap-2 text-poorless-gold/80">
            <div className="w-2 h-2 bg-poorless-gold rounded-full animate-pulse" />
            <span className="text-sm font-semibold">Live on Solana</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-poorless-mint/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-poorless-mint rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

