'use client'

import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const checklist = [
  'Diamond Hands Mentality',
  'Green Lambo Dreams',
  '100% Bonding Curve',
  'Wojak Energy',
]

export default function StarterPack() {
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

    const element = document.getElementById('starter-pack')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="starter-pack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
            Your $POORLESS Starter Pack
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to stop being poor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className={`relative overflow-hidden rounded-3xl border-2 border-poorless-mint/30 
                      shadow-[0_0_60px_rgba(95,206,167,0.3)] transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
          >
            <Image
              src="/assets/starterpack.jpeg"
              alt="$POORLESS Starter Pack"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-poorless-mint/10 to-poorless-gold/10 
                          border-2 border-poorless-mint/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-poorless-gold mb-6">
                What&apos;s Included:
              </h3>
              <ul className="space-y-4">
                {checklist.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-lg text-gray-200 group cursor-default"
                  >
                    <FaCheckCircle className="text-poorless-mint text-2xl group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-poorless-mint transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-poorless-gold/20 to-transparent border-l-4 border-poorless-gold 
                          rounded-r-2xl p-6">
              <p className="text-lg text-gray-300 italic">
                &quot;Stop being poor isn&apos;t just a meme—it&apos;s a lifestyle. Join the movement and elevate your mindset.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

