import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Wifi, Shield, Eye, Zap, Star, CheckCircle } from 'lucide-react'

export default function RoomsPage() {
  const rooms = [
    {
      title: "Dormitory",
      description: "Perfect for social travelers who want to meet people from around the world. Our dormitory rooms feature comfortable bunk beds with privacy curtains, individual reading lights, and charging points.",
      features: ["4 beds per room", "Privacy curtains", "Reading lights", "Charging points", "Balcony access", "Shared bathroom"],
      image: "/assets/images/rooms/dormitory/dormetry_view.webp",
      link: "/rooms/dormitory"
    },
    {
      title: "Double Room",
      description: "Your own space to recharge and relax. Double rooms come with a double bed, shared bathroom, private entrance, and a balcony with stunning mountain views.",
      features: ["Double bed", "Private entrance", "Mountain view balcony", "Shared bathroom", "Peaceful atmosphere", "Perfect for couples"],
      image: "/assets/images/rooms/double-room/DoubleRoom-Balcony view.webp",
      link: "/rooms/double-room"
    },
    {
      title: "Family Room",
      description: "Spacious accommodation perfect for families and groups. Our family rooms offer multiple beds, private bathroom, and extra space for everyone to feel comfortable.",
      features: ["Multiple beds", "Private bathroom", "Mountain views", "Extra space", "Family-friendly", "Perfect for groups"],
      image: "/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg",
      link: "/rooms/family-room"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-purple-400">Rooms</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully designed accommodations, each offering comfort, community, and stunning mountain views
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                {/* Room Header - Single Photo with Better View */}
                <div className="relative h-48 overflow-hidden">
                  {room.title === "Dormitory" && (
                    <Image 
                      src="/assets/images/rooms/dormitory/dormetry_view.webp"
                      alt="Dormitory view" 
                      fill
                      className="object-cover"
                    />
                  )}
                  
                  {room.title === "Double Room" && (
                    <Image 
                      src="/assets/images/rooms/double-room/DoubleRoom-Balcony view.webp"
                      alt="Double room view" 
                      fill
                      className="object-cover"
                    />
                  )}
                  
                  {room.title === "Family Room" && (
                    <Image 
                      src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg"
                      alt="Family room view" 
                      fill
                      className="object-cover"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{room.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Room Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - All same color and aligned */}
                  <div className="mt-auto">
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 font-semibold transition-all duration-300"
                      asChild
                    >
                      <Link href={room.link} className="flex items-center justify-center">
                        Book {room.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All Rooms Include
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential amenities available in all our accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wifi,
                title: "Free Wi-Fi",
                description: "High-speed internet in all rooms and common areas",
                color: "text-blue-600"
              },
              {
                icon: Shield,
                title: "24/7 Security",
                description: "Round-the-clock check-in and security monitoring",
                color: "text-green-600"
              },
              {
                icon: Eye,
                title: "Mountain Views",
                description: "Balconies with breathtaking Himalayan vistas",
                color: "text-purple-600"
              },
              {
                icon: Zap,
                title: "Modern Amenities",
                description: "Charging points and reading lights in every bed",
                color: "text-orange-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-50 transition-colors duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Choose your perfect accommodation and start your Himalayan adventure
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="group bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/forms/checkin" className="flex items-center">
              <span>Book Now</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
