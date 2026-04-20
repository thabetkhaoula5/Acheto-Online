// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { CategoryGrid } from '@/components/CategoryGrid'
import { ProductCard } from '@/components/ProductCard'
import { FilterBar } from '@/components/FilterBar'
import { ProductModal } from '@/components/ProductModal'
import { CartDrawer } from '@/components/CartDrawer'
import { CheckoutForm } from '@/components/CheckoutForm'
import { OrderSuccess } from '@/components/OrderSuccess'
import { Footer } from '@/components/Footer'
import { Toast } from '@/components/Toast'
import { useCart } from '@/contexts/CartContext'
import { productsData, categoriesData } from '@/data/products'
import { About } from '@/components/About'

export default function Home() {
  const [products] = useState(productsData)
  const [categories, setCategories] = useState(categoriesData)
  const [currentPage, setCurrentPage] = useState('home')
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)
  const [orderComplete, setOrderComplete] = useState<any>(null)
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const { addToCart, cartCount } = useCart()

  useEffect(() => {
    const counts = products.reduce((acc: any, p: any) => {
      acc[p.cat] = (acc[p.cat] || 0) + 1
      return acc
    }, {})
    setCategories(categories.map(c => ({ ...c, count: counts[c.id] || 0 })))
  }, [products, categories])

  useEffect(() => {
    if (cartCount > 0) {
      showToastMessage('Added to cart')
    }
  }, [cartCount])

  const getFilteredProducts = () => {
    let filtered = products
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.cat.toLowerCase().includes(searchQuery.toLowerCase())
      )
    } else if (activeFilter !== 'all' && activeFilter !== 'new') {
      filtered = filtered.filter(p => p.cat === activeFilter)
    }
    return filtered
  }

  const handleNavigate = (page: string, category?: string) => {
    setCurrentPage(page)
    setSearchQuery('')
    setIsCheckout(false)
    setOrderComplete(null)
    
    if (category && category !== 'home' && category !== 'about') {
      setActiveFilter(category)
    } else if (page === 'home') {
      setActiveFilter('all')
    } else if (page === 'new') {
      setActiveFilter('new')
    } else if (page !== 'shop' && page !== 'about' && page !== 'home') {
      setActiveFilter(page)
    } else {
      setActiveFilter('all')
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage('shop')
    setActiveFilter('all')
  }

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation()
    addToCart(productId)
  }

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCheckout = () => {
    setIsCartOpen(false)
    setIsCheckout(true)
    setCurrentPage('checkout')
  }

  const handleOrderSuccess = (order: any) => {
    setOrderComplete(order)
    setIsCheckout(false)
  }

  const handleContinueShopping = () => {
    setOrderComplete(null)
    setCurrentPage('home')
    setActiveFilter('all')
  }

  const showToastMessage = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
  }

  const getFilteredProductsByPage = () => {
    if (currentPage === 'new' || activeFilter === 'new') {
      return products.filter(p => p.badge === 'New' || p.badge === 'Trending')
    }
    return getFilteredProducts()
  }

  const filteredProducts = getFilteredProductsByPage()
  const featuredProducts = products.slice(0, 8)

  const getPageTitle = () => {
    if (searchQuery) return `Results for "${searchQuery}"`
    if (currentPage === 'new') return 'New Arrivals'
    if (currentPage === 'clothing') return 'Clothing'
    if (currentPage === 'gadgets') return 'Gadgets'
    if (currentPage === 'footwear') return 'Footwear'
    if (currentPage === 'accessories') return 'Accessories'
    if (currentPage === 'sports') return 'Sports'
    if (currentPage === 'tech') return 'Tech'
    if (currentPage === 'shop') return 'All Products'
    return 'All Products'
  }

  const shouldShowFilterBar = () => {
    return currentPage === 'shop' || searchQuery !== '' || currentPage === 'new'
  }

  const shouldShowProducts = () => {
    return currentPage === 'home' || currentPage === 'shop' || currentPage === 'new' || 
           currentPage === 'clothing' || currentPage === 'gadgets' || currentPage === 'footwear' ||
           currentPage === 'accessories' || currentPage === 'sports' || currentPage === 'tech'
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#f8f5f2]">
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onSearch={handleSearch}
          onToggleCart={() => setIsCartOpen(true)}
        />
        <OrderSuccess order={orderComplete} onContinue={handleContinueShopping} />
        <Footer onNavigate={handleNavigate} />
        <Toast message={toastMessage} isVisible={showToast} onHide={() => setShowToast(false)} />
      </div>
    )
  }

  if (isCheckout) {
    return (
      <div className="min-h-screen bg-[#f8f5f2]">
        <Navbar
          currentPage="checkout"
          onNavigate={handleNavigate}
          onSearch={handleSearch}
          onToggleCart={() => setIsCartOpen(true)}
        />
        <div className="sticky top-[58px] bg-white border-b border-acheto-dark/8 py-3 px-6 flex items-center gap-3">
          <button
            onClick={() => {
              setIsCheckout(false)
              setCurrentPage('home')
            }}
            className="text-acheto-muted text-[13px] flex items-center gap-1 hover:text-acheto-dark"
          >
            ← Back to shop
          </button>
          <span className="text-sm font-medium text-acheto-dark">Checkout</span>
        </div>
        <CheckoutForm onSuccess={handleOrderSuccess} onBack={() => setIsCheckout(false)} />
        <Footer onNavigate={handleNavigate} />
        <Toast message={toastMessage} isVisible={showToast} onHide={() => setShowToast(false)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        onToggleCart={() => setIsCartOpen(true)}
      />

      {currentPage === 'home' && (
        <Hero
          onShopNow={() => handleNavigate('shop', 'clothing')}
          onNewArrivals={() => handleNavigate('new')}
        />
      )}

      {currentPage === 'home' && <Stats />}

      {shouldShowProducts() && (
        <div className="py-8 px-6 bg-[#f8f5f2]">
          <div className="max-w-7xl mx-auto">
            {currentPage === 'home' && (
              <>
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-lg font-medium text-acheto-dark">Browse categories</h2>
                </div>
                <CategoryGrid categories={categories} onSelectCategory={(cat) => handleNavigate('shop', cat)} />
              </>
            )}

            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-medium text-acheto-dark">{getPageTitle()}</h2>
              {(currentPage !== 'home' || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveFilter('all')
                    setSearchQuery('')
                    setCurrentPage('home')
                  }}
                  className="text-acheto-red text-[13px] flex items-center gap-1 hover:text-acheto-red-2"
                >
                  Back to home →
                </button>
              )}
            </div>

            {shouldShowFilterBar() && (
              <FilterBar
                categories={['clothing', 'gadgets', 'footwear', 'accessories', 'sports', 'tech']}
                activeFilter={activeFilter}
                onFilterChange={(filter) => {
                  setActiveFilter(filter)
                  setSearchQuery('')
                }}
              />
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center text-acheto-muted text-[13px] py-6">
                No products found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                {(currentPage === 'home' ? featuredProducts : filteredProducts).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                    onAddToCart={(e) => handleAddToCart(e, product.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {currentPage === 'about' && <About onNavigate={handleNavigate} />}

      <Footer onNavigate={handleNavigate} />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={() => selectedProduct && addToCart(selectedProduct.id)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <Toast message={toastMessage} isVisible={showToast} onHide={() => setShowToast(false)} />
    </div>
  )
}