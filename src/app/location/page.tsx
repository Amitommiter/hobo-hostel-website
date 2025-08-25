import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Navigation, Phone, Mail, Clock, Car, Train, Plane, Bus, Wifi, Coffee, Mountain, Heart } from 'lucide-react'

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-8 border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Find <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of the Himalayas, surrounded by nature and adventure
            </p>
          </div>
        </div>
      </section>

      {/* Main Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.1234567890123!2d76.3720192!3d32.2074489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b53d3f70fc37f%3A0xbf098a197d5ba456!2sHobo%20Hostel!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Hobo Hostel</h3>
                      <p className="text-sm text-gray-600">McLeod Ganj, Dharamshala, Himachal Pradesh</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                                                 <a 
                           href="https://www.google.com/maps/place/Hobo+Hostel/@32.207449,76.372019,15z/data=!4m9!3m8!1s0x391b53d3f70fc37f:0xbf098a197d5ba456!5m2!4m1!1i2!8m2!3d32.2074489!4d76.3720192!16s%2Fg%2F11c6yzb2vv?hl=en&entry=ttu" 
                           target="_blank" 
                           rel="noopener noreferrer"
                         >
                           Directions
                         </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                        <a href="tel:+919876543210">
                          Call
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  asChild
                >
                                     <a 
                     href="https://www.google.com/maps/place/Hobo+Hostel/@32.207449,76.372019,15z/data=!4m9!3m8!1s0x391b53d3f70fc37f:0xbf098a197d5ba456!5m2!4m1!1i2!8m2!3d32.2074489!4d76.3720192!16s%2Fg%2F11c6yzb2vv?hl=en&entry=ttu" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center justify-center"
                   >
                     <Navigation className="mr-2 h-4 w-4" />
                     Get Directions
                   </a>
                </Button>
                
                <Button 
                  variant="outline"
                  asChild
                >
                  <a 
                    href="tel:+919876543210"
                    className="flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Hobo Hostel<br />
                      Near McLeod Ganj<br />
                      Dharamshala, Himachal Pradesh<br />
                      India - 176219
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">hello@hobohostel.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">Check-in: 2:00 PM | Check-out: 11:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Location Highlights */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Mountain className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">5 min from McLeod Ganj</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Coffee className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Walking distance to cafes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Heart className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Peaceful surroundings</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Navigation className="h-4 w-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700">Easy hiking access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Wifi className="h-4 w-4 text-pink-600" />
                      </div>
                      <span className="text-gray-700">Free Wi-Fi available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Car className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span className="text-gray-700">Free parking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to <span className="text-purple-600">Reach</span> Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple transportation options to reach Hobo Hostel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Plane className="h-8 w-8 text-blue-600" />,
                title: "By Air",
                description: "Nearest airport is Gaggal Airport (DHM), 15 km away",
                details: "Take a taxi or bus from the airport to McLeod Ganj"
              },
              {
                icon: <Train className="h-8 w-8 text-green-600" />,
                title: "By Train",
                description: "Nearest railway station is Pathankot, 85 km away",
                details: "Take a bus or taxi from Pathankot to McLeod Ganj"
              },
              {
                icon: <Bus className="h-8 w-8 text-purple-600" />,
                title: "By Bus",
                description: "Direct buses from Delhi, Chandigarh, and other cities",
                details: "Get down at McLeod Ganj bus stand and walk 5 minutes"
              },
              {
                icon: <Car className="h-8 w-8 text-orange-600" />,
                title: "By Car",
                description: "Well-connected by road from major cities",
                details: "Parking available at the hostel premises"
              }
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                <p className="text-sm text-gray-500">{option.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nearby <span className="text-purple-600">Attractions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the beautiful surroundings and local attractions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dalai Lama Temple Complex",
                distance: "10 min walk",
                description: "Spiritual center and residence of His Holiness the Dalai Lama",
                type: "Temple"
              },
              {
                name: "Bhagsu Waterfall",
                distance: "15 min walk",
                description: "Beautiful waterfall surrounded by lush greenery",
                type: "Nature"
              },
              {
                name: "Triund Trek",
                distance: "20 min walk to starting point",
                description: "Popular trekking destination with stunning mountain views",
                type: "Adventure"
              },
              {
                name: "Tibetan Markets",
                distance: "5 min walk",
                description: "Local markets with Tibetan handicrafts and souvenirs",
                type: "Shopping"
              },
              {
                name: "St. John's Church",
                distance: "8 min walk",
                description: "Historic church with beautiful architecture",
                type: "Heritage"
              },
              {
                name: "Dharamkot",
                distance: "25 min walk",
                description: "Peaceful village known for yoga and meditation",
                type: "Wellness"
              }
            ].map((attraction, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{attraction.name}</h3>
                  <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                    {attraction.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed">{attraction.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Navigation className="h-4 w-4 mr-2" />
                  {attraction.distance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-yellow-300">Visit</span>?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Book your stay and experience the magic of the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/rooms" className="flex items-center">
                <span>Book Your Stay</span>
                <Navigation className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-white/50"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
