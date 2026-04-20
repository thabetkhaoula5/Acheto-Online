// contexts/CartContext.tsx
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { productsData } from '@/data/products'

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
  stock?: number
}

interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  cart: { [key: number]: number }
  cartItems: CartItem[]
  cartCount: number
  cartTotal: number
  addToCart: (productId: number) => void
  updateQuantity: (productId: number, delta: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<{ [key: number]: number }>({})
  const [products, setProducts] = useState<Product[]>(productsData)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('acheto-cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
      } catch (e) {
        console.error('Failed to parse cart:', e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('acheto-cart', JSON.stringify(cart))
  }, [cart])

  const cartItems = Object.entries(cart)
    .map(([id, quantity]) => {
      const product = products.find(p => p.id === parseInt(id))
      return { product: product!, quantity }
    })
    .filter(item => item.product)

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

  const addToCart = (productId: number) => {
    setCart(prev => ({ 
      ...prev, 
      [productId]: (prev[productId] || 0) + 1 
    }))
  }

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => {
      const newQuantity = (prev[productId] || 0) + delta
      if (newQuantity <= 0) {
        const { [productId]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [productId]: newQuantity }
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const { [productId]: _, ...rest } = prev
      return rest
    })
  }

  const clearCart = () => {
    setCart({})
    localStorage.removeItem('acheto-cart')
  }

  return (
    <CartContext.Provider value={{
      cart,
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}