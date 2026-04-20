// components/Navbar.tsx - Fix the cart count display
'use client'

import { useState, useEffect } from 'react'
import { useCart } from '@/contexts/CartContext'
import { ShoppingCartIcon, MagnifyingGlassIcon } from './Icons'

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string, category?: string) => void
  onSearch: (query: string) => void
  onToggleCart: () => void
}

export function Navbar({ currentPage, onNavigate, onSearch, onToggleCart }: NavbarProps) {
  const { cartCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [bump, setBump] = useState(false)

  useEffect(() => {
    if (cartCount > 0) {
      setBump(true)
      setTimeout(() => setBump(false), 300)
    }
  }, [cartCount])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'clothing', label: 'Clothing' },
    { id: 'gadgets', label: 'Gadgets' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'sports', label: 'Sports' },
    { id: 'tech', label: 'Tech' },
    { id: 'about', label: 'About' },
  ]

  return (
    <nav className="bg-acheto-dark flex items-center justify-between px-6 h-[58px] gap-4 sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => onNavigate('home')}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="transition-transform hover:rotate-[-6deg] hover:scale-105">
          <rect width="36" height="36" rx="9" fill="#1E0F1C"/>
          <path d="M10 27L15 9H21L26 27H22L20.5 22H15.5L14 27H10Z" fill="#E2E9C0"/>
          <path d="M16.5 18.5H19.5L18 13L16.5 18.5Z" fill="#A7001E"/>
          <circle cx="27" cy="10" r="4" fill="#7AA95C"/>
          <circle cx="27" cy="10" r="2" fill="#E2E9C0"/>
        </svg>
        <span className="text-white text-xl font-medium tracking-tight">Ach<em className="text-acheto-cream not-italic">eto</em></span>
      </div>

      <div className="flex gap-0.5 flex-1 justify-center overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id, item.id !== 'home' && item.id !== 'about' ? item.id : undefined)}
            className={`relative text-xs px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
              currentPage === item.id
                ? 'text-white'
                : 'text-white/55 hover:text-white hover:bg-white/7'
            }`}
          >
            {item.label}
            {currentPage === item.id && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-acheto-cream rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 stroke-white/40" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="bg-white/8 border border-white/12 text-white pl-8 pr-3 py-1.5 rounded-lg text-xs w-[150px] outline-none transition-all focus:w-[180px] focus:bg-white/13 focus:border-acheto-cream/50"
          />
        </div>
        <button
          onClick={onToggleCart}
          className="bg-acheto-red text-white px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all hover:bg-acheto-red-2 hover:-translate-y-px relative"
        >
          <ShoppingCartIcon className="w-3.5 h-3.5" />
          Cart
          <span className={`bg-acheto-cream text-acheto-dark min-w-[17px] h-[17px] rounded-full text-[10px] font-bold flex items-center justify-center px-1 transition-transform ${bump ? 'scale-125' : ''}`}>
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  )
}