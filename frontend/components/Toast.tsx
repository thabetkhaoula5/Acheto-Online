'use client'

import { useEffect } from 'react'

interface ToastProps {
  message: string
  isVisible: boolean
  onHide: () => void
}

export function Toast({ message, isVisible, onHide }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onHide, 2200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onHide])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-acheto-dark text-acheto-cream rounded-lg px-4 py-2 text-[13px] z-50 flex items-center gap-1.5 transition-all duration-300 translate-y-0">
      <span>✓</span> {message}
    </div>
  )
}