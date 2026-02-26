'use client'

import { FaXTwitter } from 'react-icons/fa6'

export default function XButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="https://x.com/i/communities/2027168050777038956/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[#1DA1F2] to-[#0d8bd9] text-white rounded-full 
                   shadow-[0_8px_30px_rgba(29,161,242,0.4)] transition-all duration-300 
                   hover:scale-110 p-4 flex items-center justify-center"
        aria-label="Join X Community"
      >
        <FaXTwitter className="text-2xl" />
      </a>
    </div>
  )
}
