'use client'

import { useState } from 'react'
import Toast from './Toast'

export default function UPoorButton() {
  const [showToast, setShowToast] = useState(false)

  const handleClick = () => {
    setShowToast(true)
    // Reset to allow toast to show again on next click
    setTimeout(() => setShowToast(false), 3500)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-poorless-mint to-[#3BA87C] text-white font-bold text-lg
                     px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(95,206,167,0.4)] 
                     transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(95,206,167,0.6)]"
        >
          U poor?
        </button>
      </div>
      <Toast show={showToast} message="then stop it now." />
    </>
  )
}
