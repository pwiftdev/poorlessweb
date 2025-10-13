'use client'

import { useState } from 'react'
import { FaXTwitter, FaChartLine } from 'react-icons/fa6'
import Header from '@/components/Header'
import ImmersiveBackground from '@/components/ImmersiveBackground'
import HeroMotto from '@/components/HeroMotto'
import MindsetSection from '@/components/MindsetSection'
import DexBanner from '@/components/DexBanner'
import StarterPack from '@/components/StarterPack'
import CopyButton from '@/components/CopyButton'
import Toast from '@/components/Toast'
import Ticker from '@/components/Ticker'
import Features from '@/components/Features'
import WojakFloat from '@/components/WojakFloat'
import MarketCapButton from '@/components/MarketCapButton'

const CONTRACT_ADDRESS = '7KwKba9xbQqVXSeAzaoCwtQw1sB9mZ3ZCmM5fr3Ppump'

export default function Home() {
  const [showToast, setShowToast] = useState(false)

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

        {/* Contract Section */}
        <section id="contract" className="max-w-6xl mx-auto px-4 py-20">
          <div className="bg-gradient-to-br from-poorless-mint/10 via-transparent to-poorless-gold/10 
                        border-2 border-poorless-mint rounded-3xl p-8 md:p-12 backdrop-blur-xl
                        shadow-[0_0_80px_rgba(95,206,167,0.2)]">
            <h2 className="text-3xl md:text-4xl font-black text-center text-poorless-gold mb-8">
              Join The Revolution
            </h2>
            
            <div className="text-center mb-8">
              <div className="inline-block bg-poorless-mint/10 border border-poorless-mint/30 rounded-full px-6 py-2 mb-4">
                <span className="text-poorless-mint font-semibold">Contract Address (Solana)</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 bg-black/50 p-6 rounded-2xl border-2 border-poorless-mint/30 mb-8">
              <div className="flex-1 font-mono text-sm md:text-lg text-poorless-mint break-all text-center md:text-left">
                {CONTRACT_ADDRESS}
              </div>
              <CopyButton contractAddress={CONTRACT_ADDRESS} />
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://x.com/i/communities/1977479383192375577"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#1DA1F2] to-[#0d8bd9] text-white font-bold text-lg px-8 py-4 
                         rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 
                         hover:shadow-[0_10px_40px_rgba(29,161,242,0.5)] border-2 border-transparent 
                         hover:border-[#1DA1F2]"
              >
                <FaXTwitter className="text-2xl" />
                <span>Join Community</span>
              </a>
              <a
                href="https://dexscreener.com/solana/enexcb5j81zdmaexxugnf3ddvbusytmtrxe2o3tyewng"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-poorless-mint to-[#3BA87C] text-white font-bold text-lg px-8 py-4 
                         rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 
                         hover:shadow-[0_10px_40px_rgba(95,206,167,0.5)] border-2 border-transparent 
                         hover:border-poorless-mint"
              >
                <FaChartLine className="text-2xl" />
                <span>View Chart</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 text-gray-500 mt-20 border-t border-poorless-mint/10">
          <p className="text-sm md:text-base">© 2025 $POORLESS | Built by degens, for degens | DYOR - Not Financial Advice</p>
        </footer>
      </div>

      {/* Toast Notification */}
      <Toast show={showToast} message="Contract address copied!" />

      {/* Market Cap Sticky Button */}
      <MarketCapButton />
    </>
  )
}
