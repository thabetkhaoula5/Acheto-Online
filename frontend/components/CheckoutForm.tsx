// components/CheckoutForm.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import axios from 'axios'
import { LockIcon } from './Icons'

interface CheckoutFormProps {
  onSuccess: (order: any) => void
  onBack: () => void
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export function CheckoutForm({ onSuccess, onBack }: CheckoutFormProps) {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: 'Tunisia',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\D/g, '').substring(0, 16)
    return v.replace(/(.{4})/g, '$1 ').trim()
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, '')
    if (v.length >= 3) return v.substring(0, 2) + '/' + v.substring(2)
    return v
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const orderData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zip: formData.zip,
      country: formData.country,
      items: cartItems.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
      total: cartTotal,
    }

    try {
      const response = await axios.post(`${API_URL}/api/orders`, orderData)
      clearCart()
      onSuccess(response.data)
    } catch (error) {
      console.error('Order failed:', error)
      alert('Order failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-acheto-muted">Your cart is empty</p>
        <button onClick={onBack} className="mt-4 text-acheto-red hover:text-acheto-red-2">
          Back to shop
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-[860px] mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white rounded-xl border border-acheto-dark/10 p-6">
            <h3 className="text-base font-medium text-acheto-dark pb-3 border-b border-acheto-dark/8 mb-4">Contact information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-acheto-muted block mb-1">Full name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-acheto-muted block mb-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-acheto-muted block mb-1">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-acheto-dark/10 p-6">
            <h3 className="text-base font-medium text-acheto-dark pb-3 border-b border-acheto-dark/8 mb-4">Shipping address</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-acheto-muted block mb-1">Street address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-acheto-muted block mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-acheto-muted block mb-1">Zip code</label>
                  <input
                    type="text"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-acheto-muted block mb-1">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                >
                  <option>Tunisia</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>United States</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-acheto-dark/10 p-6">
            <h3 className="text-base font-medium text-acheto-dark pb-3 border-b border-acheto-dark/8 mb-4">Payment details</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-acheto-muted block mb-1">Card number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  required
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: formatCardNumber(e.target.value) })}
                  maxLength={19}
                  className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-acheto-muted block mb-1">Expiry date</label>
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    required
                    value={formData.expiry}
                    onChange={(e) => setFormData({ ...formData, expiry: formatExpiry(e.target.value) })}
                    maxLength={5}
                    className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-acheto-muted block mb-1">CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    placeholder="•••"
                    required
                    value={formData.cvv}
                    onChange={handleChange}
                    maxLength={3}
                    className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-acheto-muted block mb-1">Name on card</label>
                <input
                  type="text"
                  name="cardName"
                  required
                  value={formData.cardName}
                  onChange={handleChange}
                  className="w-full bg-[#f8f5f2] border border-acheto-dark/20 text-acheto-dark px-3 py-2 rounded-lg text-sm outline-none focus:border-acheto-red"
                />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-acheto-red text-white py-3.5 rounded-lg text-sm font-medium transition-all hover:bg-acheto-red-2 hover:-translate-y-px flex items-center justify-center gap-2 md:hidden"
          >
            <LockIcon className="w-3.5 h-3.5" />
            {loading ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
          </button>
        </form>

        <div>
          <div className="bg-white rounded-xl border border-acheto-dark/10 p-6 sticky top-24">
            <h3 className="text-base font-medium text-acheto-dark pb-3 border-b border-acheto-dark/8 mb-4">Order summary</h3>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between items-center py-1.5 border-b border-acheto-dark/6">
                  <div className="flex gap-2 items-center">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ backgroundColor: product.bg }}
                    >
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={32} 
                        height={32} 
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-acheto-dark line-clamp-1">{product.name}</div>
                      <div className="text-[11px] text-acheto-muted">Qty: {quantity}</div>
                    </div>
                  </div>
                  <span className="text-[13px] font-medium text-acheto-red">${(product.price * quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr className="my-3 border-acheto-dark/8" />
            <div className="flex justify-between mb-1">
              <span className="text-sm text-acheto-muted">Subtotal</span>
              <span className="text-sm font-medium text-acheto-dark">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-acheto-muted">Shipping</span>
              <span className="text-[13px] text-acheto-green font-medium">Free</span>
            </div>
            <div className="flex justify-between pt-3 mt-2 border-t border-acheto-dark/8">
              <span className="text-sm text-acheto-muted">Total</span>
              <span className="text-[22px] font-medium text-acheto-dark">${cartTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-acheto-red text-white py-3.5 rounded-lg text-sm font-medium transition-all hover:bg-acheto-red-2 hover:-translate-y-px flex items-center justify-center gap-2 mt-4 disabled:opacity-50 hidden md:flex"
            >
              <LockIcon className="w-3.5 h-3.5" />
              {loading ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-acheto-muted mt-3">
              <LockIcon className="w-3 h-3" />
              Secured by SSL encryption
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}