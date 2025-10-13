'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function MindsetSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('mindset-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="mindset-section" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl border-2 border-poorless-mint/30 
                    shadow-[0_0_80px_rgba(95,206,167,0.3)] transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-poorless-mint/20 to-transparent" />
          <Image
            src="/assets/photo1.jpeg"
            alt="It's not a coin. It's a mindset."
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

