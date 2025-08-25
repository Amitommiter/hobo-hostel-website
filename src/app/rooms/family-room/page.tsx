"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Bed, Shield, Eye, Zap, Heart, Star, Home, X } from 'lucide-react'
import { useState } from 'react'

export default function FamilyRoomPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  const roomTypes = [
    {
      title: "Premium Family Room",
      description: "Luxury family accommodation with premium amenities and spacious layout",
      price: "₹",
      features: ["Multiple beds", "Premium amenities", "Mountain view", "Private bathroom"],
      gradient: "from-pink-500 to-rose-500",
      link: "/forms/checkin"
    },
    {
      title: "Normal Family Room",
      description: "Comfortable family accommodation with all essential amenities",
      price: "₹",
      features: ["Multiple beds", "Essential amenities", "Window view", "Shared bathroom"],
      gradient: "from-blue-500 to-cyan-500",
      link: "/forms/checkin"
    }
  ]

  const amenities = [
    "Multiple beds for family accommodation",
    "Spacious room layout",
    "Private or shared bathroom",
    "Storage space for luggage",
    "Family-friendly amenities",
    "Daily housekeeping"
  ]

  const galleryPhotos = [
    {
      src: "/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg",
      alt: "Family room view"
    },
    {
      src: "/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_02.jpg",
      alt: "Family room interior"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full h-full">
              <Image 
                src={selectedPhoto} 
                alt="Family room photo" 
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-900 via-rose-900 to-purple-900 text-white">
        {/* Family Room View Background */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg" 
            alt="Family room view" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-600 to-purple-600 opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
              <Link href="/rooms">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Rooms
              </Link>
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Family Room
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Spacious accommodation perfect for families and groups. 
              Choose between premium luxury or comfortable standard accommodation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-pink-400">From ₹</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Family Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect family room option for your stay
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {roomTypes.map((room, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
              >
                {/* Room Image with Gradient Background */}
                <div className={`h-64 relative overflow-hidden bg-gradient-to-br ${room.gradient}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{room.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">From {room.price}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Room Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {room.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${room.gradient} hover:scale-105 text-white rounded-2xl py-4 text-lg font-bold transition-all duration-300`}
                    asChild
                  >
                    <Link href={room.link} className="flex items-center justify-center">
                      Book {room.title}
                      <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Family-Friendly Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a comfortable family stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Spacious Layout", description: "Plenty of room for the whole family" },
              { icon: Bed, title: "Multiple Beds", description: "Comfortable sleeping arrangements" },
              { icon: Shield, title: "Safe Environment", description: "Secure and family-friendly atmosphere" },
              { icon: Eye, title: "Mountain Views", description: "Beautiful views for the whole family" },
              { icon: Zap, title: "Modern Amenities", description: "All the comforts you need" },
              { icon: Heart, title: "Family Atmosphere", description: "Warm and welcoming environment" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Room Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a comfortable family stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-900 font-medium">{amenity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Family Room <span className="text-pink-600">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our spacious and comfortable family room spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryPhotos.map((photo, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <div className="aspect-square relative">
                  <Image 
                    src={photo.src} 
                    alt={photo.alt} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Family Room?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Create unforgettable family memories in the heart of the Himalayas
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
            asChild
          >
            <Link href="/forms/checkin">
              Book Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
