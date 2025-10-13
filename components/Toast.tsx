'use client'

import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'

interface ToastProps {
  show: boolean
  message: string
}

export default function Toast({ show, message }: ToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [show])

  return (
    <div
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-poorless-mint to-[#3BA87C] text-white 
                  px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(95,206,167,0.4)] flex items-center gap-4 
                  font-semibold z-50 transition-all duration-400 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                  }`}
    >
      <FaCheck className="text-xl" />
      <span>{message}</span>
    </div>
  )
}

