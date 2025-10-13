'use client'

import { useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa'

interface CopyButtonProps {
  contractAddress: string
}

export default function CopyButton({ contractAddress }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="bg-gradient-to-r from-poorless-mint to-[#3BA87C] text-white font-semibold px-8 py-3 rounded-lg 
                 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(95,206,167,0.4)]
                 active:scale-95 w-full md:w-auto justify-center"
    >
      {copied ? (
        <>
          <FaCheck className="text-lg" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <FaCopy className="text-lg" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}

