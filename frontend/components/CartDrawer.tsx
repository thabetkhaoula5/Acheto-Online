// components/CartDrawer.tsx
'use client'

import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import { CloseIcon, MinusIcon, PlusIcon, CreditCardIcon } from './Icons'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  onCheckout: () => void
}

export function CartDrawer({ isOpen, onClose, onCheckout }: CartDrawerProps) {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-acheto-dark/45 flex justify-end z-40 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white w-[320px] h-screen overflow-y-auto p-5 flex flex-col gap-2.5 border-l border-acheto-dark/10 animate-slide-in" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-3 border-b border-acheto-dark/8">
          <h3 className="text-base font-medium text-acheto-dark">Your cart ({cartItems.length} items)</h3>
          <button 
            onClick={onClose} 
            className="text-acheto-muted w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#f8f5f2] transition-colors"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1">
          {cartItems.length === 0 ? (
            <div className="text-center text-acheto-muted text-[13px] py-8">
              🛒 Your cart is empty
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 py-2 border-b border-acheto-dark/6">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                    style={{ backgroundColor: product.bg }}
                  >
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      width={48} 
                      height={48} 
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[13px] font-medium text-acheto-dark">{product.name}</div>
                        <div className="text-[11px] text-acheto-muted">${product.price}</div>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-acheto-muted hover:text-acheto-red text-xs transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="bg-[#f8f5f2] border border-acheto-dark/10 w-6 h-6 rounded-md text-sm flex items-center justify-center hover:bg-acheto-dark hover:text-white hover:border-acheto-dark transition-all"
                        >
                          <MinusIcon className="w-2.5 h-2.5" />
                        </button>
                        <span className="text-xs font-medium w-6 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="bg-[#f8f5f2] border border-acheto-dark/10 w-6 h-6 rounded-md text-sm flex items-center justify-center hover:bg-acheto-dark hover:text-white hover:border-acheto-dark transition-all"
                        >
                          <PlusIcon className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <span className="text-[13px] font-medium text-acheto-red">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="mt-auto pt-3.5 border-t border-acheto-dark/10">
            <div className="flex justify-between mb-3.5">
              <span className="text-[13px] text-acheto-muted">Subtotal</span>
              <span className="text-[22px] font-medium text-acheto-red">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-3.5 text-[11px] text-acheto-muted">
              <span>Shipping</span>
              <span className="text-acheto-green">Free</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-acheto-red text-white py-3 rounded-lg text-sm font-medium transition-all hover:bg-acheto-red-2 hover:-translate-y-px flex items-center justify-center gap-2"
            >
              <CreditCardIcon className="w-3.5 h-3.5" />
              Checkout (${cartTotal.toFixed(2)})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}