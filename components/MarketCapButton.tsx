'use client'

import { useState, useEffect } from 'react'
import { FaChartLine, FaDollarSign, FaFire } from 'react-icons/fa'

interface DexScreenerData {
  pair: {
    marketCap?: number
    priceUsd?: string
    priceChange?: {
      h24?: number
    }
    liquidity?: {
      usd?: number
    }
    volume?: {
      h24?: number
    }
  }
}

const TOKEN_ADDRESS = '7KwKba9xbQqVXSeAzaoCwtQw1sB9mZ3ZCmM5fr3Ppump'

export default function MarketCapButton() {
  const [data, setData] = useState<DexScreenerData | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using the tokens v1 API endpoint
        const response = await fetch(
          `https://api.dexscreener.com/tokens/v1/solana/${TOKEN_ADDRESS}`
        )
        const result = await response.json()
        console.log('DexScreener API Response:', result) // Debug log
        
        // The tokens API returns an array of pairs
        if (result && result.length > 0) {
          // Get the first pair (usually the main one)
          setData({ pair: result[0] })
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching market data:', error)
        setIsLoading(false)
      }
    }

    // Initial fetch
    fetchData()

    // Update every 30 seconds (well within 290 requests/minute limit)
    const interval = setInterval(fetchData, 30000)

    return () => clearInterval(interval)
  }, [])

  const formatMarketCap = (value?: number) => {
    if (!value) return 'N/A'
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`
    }
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`
    }
    return `$${value.toFixed(0)}`
  }

  const formatPrice = (price?: string) => {
    if (!price) return 'N/A'
    const num = parseFloat(price)
    if (num < 0.000001) return `$${num.toExponential(2)}`
    if (num < 0.01) return `$${num.toFixed(6)}`
    return `$${num.toFixed(4)}`
  }

  const formatVolume = (value?: number) => {
    if (!value) return 'N/A'
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
  }

  if (isLoading) {
    return (
      <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-poorless-mint to-[#3BA87C] 
                    text-white px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(95,206,167,0.4)] 
                    animate-pulse">
        <div className="flex items-center gap-3">
          <FaChartLine className="text-xl animate-spin" />
          <span className="font-bold">Loading...</span>
        </div>
      </div>
    )
  }

  const priceChange = data?.pair?.priceChange?.h24 || 0
  const isPositive = priceChange >= 0

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`bg-gradient-to-r from-poorless-mint to-[#3BA87C] text-white rounded-2xl 
                   shadow-[0_8px_30px_rgba(95,206,167,0.4)] transition-all duration-300 
                   ${isExpanded ? 'px-6 py-4' : 'px-6 py-4'} cursor-pointer hover:scale-105`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Collapsed View */}
        {!isExpanded && (
          <div className="flex items-center gap-3">
            <div className="relative">
              <FaChartLine className="text-2xl" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-poorless-gold rounded-full animate-pulse" />
            </div>
            <div>
              <div className="text-xs opacity-80">Market Cap</div>
              <div className="text-xl font-black">
                {formatMarketCap(data?.pair?.marketCap)}
              </div>
            </div>
            <div
              className={`text-sm font-bold px-2 py-1 rounded ${
                isPositive ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
              }`}
            >
              {isPositive ? '+' : ''}
              {priceChange.toFixed(2)}%
            </div>
          </div>
        )}

        {/* Expanded View */}
        {isExpanded && (
          <div className="space-y-3 min-w-[280px]">
            <div className="flex items-center justify-between pb-3 border-b border-white/20">
              <div className="flex items-center gap-2">
                <FaFire className="text-poorless-gold animate-pulse" />
                <span className="font-black text-lg">$POORLESS Stats</span>
              </div>
              <div className="text-xs opacity-60">Live</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs opacity-70">Market Cap</div>
                <div className="text-lg font-bold">
                  {formatMarketCap(data?.pair?.marketCap)}
                </div>
              </div>
              <div>
                <div className="text-xs opacity-70">24h Change</div>
                <div
                  className={`text-lg font-bold ${
                    isPositive ? 'text-green-300' : 'text-red-300'
                  }`}
                >
                  {isPositive ? '+' : ''}
                  {priceChange.toFixed(2)}%
                </div>
              </div>
              <div>
                <div className="text-xs opacity-70">Price</div>
                <div className="text-sm font-bold">
                  {formatPrice(data?.pair?.priceUsd)}
                </div>
              </div>
              <div>
                <div className="text-xs opacity-70">24h Volume</div>
                <div className="text-sm font-bold">
                  {formatVolume(data?.pair?.volume?.h24)}
                </div>
              </div>
            </div>

            <a
              href="https://dexscreener.com/solana/enexcb5j81zdmaexxugnf3ddvbusytmtrxe2o3tyewng"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block text-center bg-white/10 hover:bg-white/20 py-2 rounded-lg 
                       transition-colors duration-200 text-sm font-semibold mt-2"
            >
              View Full Chart →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

