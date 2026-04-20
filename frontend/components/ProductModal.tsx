// components/ProductModal.tsx
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { CloseIcon } from './Icons'

interface Product {
  id: number
  name: string
  cat: string
  price: number
  image: string
  bg: string
  badge: string | null
  desc: string
  specs: string[][]
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onAddToCart: () => void
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-acheto-dark/60 flex items-center justify-center p-4 z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-[500px] overflow-hidden max-h-[92vh] overflow-y-auto animate-fade-up" onClick={(e) => e.stopPropagation()}>
        <div
          className="w-full h-[240px] flex items-center justify-center relative"
          style={{ backgroundColor: product.bg }}
        >
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 bg-acheto-dark/45 text-white w-7 h-7 rounded-full text-sm flex items-center justify-center hover:bg-acheto-dark/70 z-10"
          >
            <CloseIcon className="w-3.5 h-3.5" />
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={160}
              height={160}
              className="object-contain max-w-[80%] max-h-[80%]"
            />
          </div>
          {product.badge && (
            <span className="absolute top-2.5 left-2.5 bg-acheto-red text-white text-[10px] font-medium px-2 py-0.5 rounded z-10">
              {product.badge}
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="text-[11px] text-acheto-green font-medium uppercase tracking-wide mb-1">{product.cat}</div>
          <div className="text-xl font-medium text-acheto-dark mb-1">{product.name}</div>
          <div className="text-2xl font-medium text-acheto-red mb-3">${product.price}</div>
          <div className="text-[13px] text-acheto-muted leading-relaxed mb-4">{product.desc}</div>
          <div className="grid grid-cols-2 gap-2 mb-5">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="bg-[#f8f5f2] rounded-lg p-2.5">
                <div className="text-[10px] text-acheto-muted mb-0.5">{spec[0]}</div>
                <div className="text-xs font-medium text-acheto-dark">{spec[1]}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={() => { onAddToCart(); onClose() }}
              className="flex-1 bg-acheto-red text-white py-3 rounded-lg text-sm font-medium transition-all hover:bg-acheto-red-2 hover:-translate-y-px"
            >
              Add to cart
            </button>
            <button className="border border-acheto-dark/18 text-acheto-dark px-3.5 py-3 rounded-lg text-sm transition-all hover:border-acheto-red hover:text-acheto-red">
              ♡ Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}