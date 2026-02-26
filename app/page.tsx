'use client'

import Header from '@/components/Header'
import ImmersiveBackground from '@/components/ImmersiveBackground'
import HeroMotto from '@/components/HeroMotto'
import MindsetSection from '@/components/MindsetSection'
import DexBanner from '@/components/DexBanner'
import StarterPack from '@/components/StarterPack'
import Ticker from '@/components/Ticker'
import Features from '@/components/Features'
import WojakFloat from '@/components/WojakFloat'
import UPoorButton from '@/components/UPoorButton'
import XButton from '@/components/XButton'

export default function Home() {

  return (
    <>
      {/* Immersive Background */}
      <ImmersiveBackground />

      {/* Header */}
      <Header />

      {/* Wojak Characters */}
      <WojakFloat
        src="/assets/wojak1.png"
        alt="Wojak"
        className="top-[10%] left-[5%] w-32 md:w-40 z-10 hidden md:block"
        delay={0}
      />
      <WojakFloat
        src="/assets/wojak2.png"
        alt="Wojak Lambo"
        className="top-[60%] right-[5%] w-48 md:w-64 z-10 hidden lg:block"
        delay={0.5}
      />
      <WojakFloat
        src="/assets/wojak3.png"
        alt="Wojak POORLESS"
        className="bottom-[10%] left-[8%] w-32 md:w-40 z-10 hidden md:block"
        delay={1}
      />
      <WojakFloat
        src="/assets/wojak4.png"
        alt="Wojak Rich"
        className="top-[15%] right-[8%] w-32 md:w-40 z-10 hidden md:block"
        delay={1.5}
      />

      <div className="relative z-20">
        {/* Hero with Motto */}
        <HeroMotto />

        {/* Mindset Section */}
        <MindsetSection />

        {/* Ticker */}
        <Ticker />

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
              The $POORLESS Movement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-poorless-mint to-poorless-gold mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Welcome to the revolution where poverty becomes history. $POORLESS isn&apos;t just a token—it&apos;s a lifestyle,
              a mindset, a community of dreamers who refuse to stay broke. We&apos;re here to turn wojaks into winners,
              transforming empty wallets into overflowing bags.
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-black text-center text-poorless-gold mb-12">
            Why $POORLESS?
          </h2>
          <Features />
        </section>

        {/* Dex Banner - Achievement Section */}
        <DexBanner />

        {/* Starter Pack */}
        <StarterPack />

        {/* Footer */}
        <footer className="text-center py-12 text-gray-500 mt-20 border-t border-poorless-mint/10">
          <p className="text-sm md:text-base">© 2026 $POORLESS | Built by degens, for degens | DYOR - Not Financial Advice</p>
        </footer>
      </div>

      {/* U Poor Button */}
      <UPoorButton />

      {/* X Community Sticky Button */}
      <XButton />
    </>
  )
}
