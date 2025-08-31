'use client'

import { ShoppingBag, Package, Truck, ArrowRight, Star, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  description: string
  unit?: string
}

interface CartItem {
  id: string
  name: string
  price: number
  description: string
  unit?: string
  quantity: number
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('hobo-cart')
      return savedCart ? JSON.parse(savedCart) : []
    }
    return []
  })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
    
    // Show success notification
    const notification = document.createElement('div')
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300'
    notification.textContent = `${product.name} added to cart!`
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)'
    }, 100)
    
    setTimeout(() => {
      notification.style.transform = 'translateX(full)'
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 2000)
  }

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const openProductModal = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
  }

  // Function to get the correct image path for each product
  const getProductImagePath = (productId: string) => {
    // Handle specific product ID mappings
    const imageMap: { [key: string]: string } = {
      'hazelNut': 'hazelnut',
      'pineNut': 'pineNut',
      'blackCumin': 'blackCumin',
      'redRice': 'redRice'
    }
    
    const imageName = imageMap[productId] || productId
    return `/assets/images/products/${imageName}.jpg`
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://us-central1-hobo-f638c.cloudfunctions.net/fetchProducts')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])



  useEffect(() => {
    localStorage.setItem('hobo-cart', JSON.stringify(cartItems))
    window.dispatchEvent(new Event('cartUpdated'))
  }, [cartItems])

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Shop
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Local products, crafts, and souvenirs from the heart of India
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover authentic local products and souvenirs from the Himalayas
            </p>
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
              <p className="text-gray-300 mt-6 text-lg">Loading products...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-8 max-w-md mx-auto">
                <p className="text-red-400 text-lg">Error: {error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-purple-500/30 hover:shadow-purple-500/20 h-full flex flex-col"
                >
                  {/* Product Image */}
                  <div 
                    className="h-80 relative overflow-hidden cursor-pointer"
                    onClick={() => openProductModal(product)}
                  >
                    <Image
                      src={getProductImagePath(product.id)}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.src = '/assets/images/products/gucchi.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-300 text-base mb-8 line-clamp-3 flex-1">
                      {product.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col space-y-1">
                          <span className="text-3xl font-bold text-purple-400">
                            ₹{product.price}
                          </span>
                          {product.unit && (
                            <span className="text-gray-400 text-sm">
                              per {product.unit}
                            </span>
                          )}
                        </div>
                        
                        <button 
                          onClick={() => addToCart(product)}
                          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span className="text-sm">Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-8">
                <Package className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">No Products Available</h3>
              <p className="text-gray-300 text-lg">Check back soon for new products!</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Shop With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Local Products',
                description: 'Authentic products sourced directly from local artisans and farmers.'
              },
              {
                icon: ShoppingBag,
                title: 'Quality Assured',
                description: 'All products are carefully selected and quality-tested for your satisfaction.'
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                description: 'Quick and reliable delivery across India and worldwide shipping available.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visit Our Hostel
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the real thing! Book your stay with us and discover local culture 
              while meeting fellow travelers from around the world.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Book Your Stay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeProductModal}></div>
          <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedProduct.name}</h2>
                <button
                  onClick={closeProductModal}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src={getProductImagePath(selectedProduct.id)}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/assets/images/products/gucchi.jpg'
                    }}
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Price</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-purple-400">₹{selectedProduct.price}</span>
                      {selectedProduct.unit && (
                        <span className="text-gray-400">per {selectedProduct.unit}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400">5.0 (12 reviews)</span>
                  </div>
                  
                  <button
                    onClick={() => {
                      addToCart(selectedProduct)
                      closeProductModal()
                    }}
                    className="w-full flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl transition-colors font-semibold text-lg"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
