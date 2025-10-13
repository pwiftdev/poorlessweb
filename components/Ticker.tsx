'use client'

import { FaRocket, FaGem, FaFire, FaCar, FaDollarSign } from 'react-icons/fa'
import { BsEmojiSunglasses } from 'react-icons/bs'

const tickerItems = [
  { icon: FaRocket, text: 'TO THE MOON' },
  { icon: FaGem, text: 'DIAMOND HANDS' },
  { icon: FaFire, text: 'GET RICH' },
  { icon: BsEmojiSunglasses, text: 'BE POORLESS' },
  { icon: FaCar, text: 'LAMBO SOON' },
  { icon: FaDollarSign, text: 'NO MORE POVERTY' },
]

export default function Ticker() {
  return (
    <div className="bg-poorless-mint/20 py-4 overflow-hidden border-t-2 border-b-2 border-poorless-mint my-12">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-3 px-10 text-poorless-gold text-xl font-bold">
            <item.icon className="text-2xl" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

