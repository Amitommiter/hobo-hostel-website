import { Metadata } from 'next'


import { ShoppingBag, Package, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shop - Hobo Hostel',
  description: 'Our online shop is coming soon! We\'ll be offering local crafts, souvenirs, and travel essentials.',
}

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Shop</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Local crafts, souvenirs, and travel essentials - coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Shop is Coming Soon!
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We&apos;re working hard to bring you a curated collection of local crafts, 
              souvenirs, and travel essentials that capture the spirit of India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Package,
                  title: 'Local Crafts',
                  description: 'Handmade items from local artisans and craftspeople.'
                },
                {
                  icon: ShoppingBag,
                  title: 'Travel Essentials',
                  description: 'Quality travel gear and accessories for your adventures.'
                },
                {
                  icon: Truck,
                  title: 'Worldwide Shipping',
                  description: 'We\'ll ship our products worldwide so you can take a piece of India home.'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  
                  
                  
                  
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Notified When We Launch
              </h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when our shop opens and get exclusive early access!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              In the Meantime...
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              While we prepare our shop, why not book your stay with us and experience 
              the real thing? Our hostel is the perfect place to discover local culture 
              and meet fellow travelers.
            </p>
            <a 
              href="/contact"
                              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
