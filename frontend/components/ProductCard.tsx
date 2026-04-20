// components/ProductCard.tsx
'use client'

import Image from 'next/image'

interface Product {
  id: number
  name: string
  cat: string
  price: number
  image: string
  bg: string
  badge: string | null
}

interface ProductCardProps {
  product: Product
  onClick: () => void
  onAddToCart: (e: React.MouseEvent) => void
}

export function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
  return (
    <div 
      className="bg-white border border-acheto-dark/10 rounded-xl overflow-hidden cursor-pointer transition-all hover:border-acheto-red-2 hover:-translate-y-1 group" 
      onClick={onClick}
    >
      <div
        className="w-full h-[180px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: product.bg }}
      >
        <div className="relative w-full h-full flex items-center justify-center transition-transform group-hover:scale-110">
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        {product.badge && (
          <span className="absolute top-2 left-2 bg-acheto-red text-white text-[10px] font-medium px-2 py-0.5 rounded z-10">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3 border-t border-acheto-dark/7">
        <div className="text-[13px] font-medium text-acheto-dark mb-0.5 line-clamp-1">{product.name}</div>
        <div className="text-[11px] text-acheto-muted mb-1.5 capitalize">{product.cat}</div>
        <div className="flex justify-between items-center">
          <span className="text-[15px] font-medium text-acheto-red">${product.price}</span>
          <button
            onClick={onAddToCart}
            className="bg-acheto-dark text-acheto-cream w-7 h-7 rounded-full text-base flex items-center justify-center transition-all hover:bg-acheto-red hover:rotate-90 hover:scale-110"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}