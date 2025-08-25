import { Metadata } from 'next'


import { MapPin, Clock, Users, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local Culture - Hobo Hostel',
  description: 'Immerse yourself in authentic local experiences and cultural activities. Discover the heart of India through our curated cultural experiences.',
}

const culturalExperiences = [
  {
    title: 'Local Food Tours',
    description: 'Explore the vibrant street food scene and traditional restaurants with our local guides.',
    image: '/assets/images/culture/01.svg',
    duration: '3-4 hours',
    groupSize: 'Small groups',
    price: 'From ₹500'
  },
  {
    title: 'Traditional Markets',
    description: 'Visit bustling local markets and learn about traditional crafts and daily life.',
    image: '/assets/images/culture/02.svg',
    duration: '2-3 hours',
    groupSize: 'Small groups',
    price: 'From ₹300'
  },
  {
    title: 'Cultural Workshops',
    description: 'Learn traditional crafts, cooking, or language from local artisans and experts.',
    image: '/assets/images/culture/03.svg',
    duration: '1-2 hours',
    groupSize: 'Individual/Small groups',
    price: 'From ₹800'
  },
  {
    title: 'Festival Celebrations',
    description: 'Experience local festivals and celebrations throughout the year.',
    image: '/assets/images/culture/04.svg',
    duration: 'Full day',
    groupSize: 'All guests',
    price: 'Free for guests'
  }
]

export default function CulturePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Local Culture</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Immerse yourself in authentic local experiences and discover the heart of India.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience Authentic India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Hobo Hostel, we believe the best way to experience a place is through its people, 
              food, and traditions. Our cultural experiences are designed to give you an authentic 
              glimpse into local life while creating meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              
              
              
              
            >
              <div 
                className="h-96 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/assets/images/culture/hero.svg')",
                }}
              />
            </div>

            <div
              
              
              
              
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                Why Cultural Experiences Matter
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Authentic Connections</h4>
                    <p className="text-gray-600">Meet locals and build genuine relationships beyond tourist interactions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Impact</h4>
                    <p className="text-gray-600">Support local artisans and businesses while learning their crafts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hidden Gems</h4>
                    <p className="text-gray-600">Discover places and experiences that most tourists never see.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Cultural Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From food tours to traditional workshops, we offer a variety of experiences 
              to help you connect with local culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalExperiences.map((experience, index) => (
              <div
                key={index}
                
                
                
                
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div 
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${experience.image}')`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {experience.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600">{experience.groupSize}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-orange-600">{experience.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Local Tips & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get insider knowledge from our local team and fellow travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Best Time to Visit',
                content: 'October to March offers the most pleasant weather for exploring the city and participating in outdoor cultural activities.'
              },
              {
                title: 'Local Customs',
                content: 'Learn about local customs and etiquette to show respect and make meaningful connections with the community.'
              },
              {
                title: 'Language Tips',
                content: 'Basic Hindi phrases can go a long way in building rapport with locals and enhancing your cultural experience.'
              }
            ].map((tip, index) => (
              <div
                key={index}
                
                
                
                
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Experience Local Culture?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your stay with us and immerse yourself in authentic local experiences 
              that will create memories to last a lifetime.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Cultural Journey
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
