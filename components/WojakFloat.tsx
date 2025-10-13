'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface WojakProps {
  src: string
  alt: string
  className?: string
  delay?: number
}

export default function WojakFloat({ src, alt, className = '', delay = 0 }: WojakProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * (0.5 + delay * 0.1)

  return (
    <div
      className={`absolute transition-transform duration-200 ${className}`}
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        animationDelay: `${delay}s`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="animate-bounce-slow"
        priority
      />
    </div>
  )
}

