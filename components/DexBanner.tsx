'use client'

import Image from 'next/image'
import { FaChartLine, FaFire } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function DexBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('dex-banner')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="dex-banner" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-poorless-mint/20 to-poorless-gold/20 
                        border-2 border-poorless-gold rounded-full px-8 py-3 mb-6">
            <FaFire className="text-poorless-gold text-2xl animate-pulse" />
            <span className="text-poorless-gold font-bold text-lg">100% BONDED</span>
            <FaFire className="text-poorless-gold text-2xl animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
            We&apos;ve Graduated!
          </h2>
          <p className="text-xl text-gray-300">
            Bonding curve complete. Now trending on all platforms.
          </p>
        </div>

        <div
          className={`relative overflow-hidden rounded-3xl border-2 border-poorless-gold/50 
                    shadow-[0_0_100px_rgba(255,215,0,0.4)] transition-all duration-1000 delay-300 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-poorless-gold/10 to-transparent" />
          <Image
            src="/assets/dexbanner1.jpeg"
            alt="$POORLESS Bonding Curve Complete"
            width={1280}
            height={427}
            className="w-full h-auto"
          />
        </div>

        <div
          className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://dexscreener.com/solana/enexcb5j81zdmaexxugnf3ddvbusytmtrxe2o3tyewng"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-poorless-gold to-[#FFA500] text-black font-bold text-lg 
                     px-10 py-5 rounded-full flex items-center justify-center gap-3 transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,215,0,0.5)] border-2 border-transparent 
                     hover:border-poorless-gold"
          >
            <FaChartLine className="text-2xl group-hover:rotate-12 transition-transform" />
            <span>View Live Chart</span>
          </a>
        </div>
      </div>
    </section>
  )
}

