"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Bed, Wifi, Shield, Eye, Zap, Heart, Star, X } from 'lucide-react'
import { useState } from 'react'

export default function DormitoryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  const features = [
    { icon: Bed, title: "Comfortable Bunk Beds", description: "Cozy bunk beds with premium mattresses" },
    { icon: Shield, title: "Privacy Curtains", description: "Individual curtains for personal space" },
    { icon: Eye, title: "Reading Lights", description: "Individual reading lights for late-night reading" },
    { icon: Zap, title: "Charging Points", description: "Convenient charging stations at each bed" },
    { icon: Wifi, title: "Free Wi-Fi", description: "High-speed internet throughout the room" },
    { icon: Heart, title: "Community Vibe", description: "Connect with fellow travelers" }
  ]

  const amenities = [
    "Shared bathroom with hot water",
    "Private balcony with mountain views",
    "Locker storage for valuables",
    "Common area for socializing",
    "Kitchen access",
    "Laundry facilities"
  ]

  const galleryPhotos = [
    {
      src: "/assets/images/rooms/dormitory/dormetry_view.webp",
      alt: "Dormitory view"
    },
    {
      src: "/assets/images/rooms/dormitory/HoboHostel_Room3_03.jpg",
      alt: "Dormitory interior"
    },
    {
      src: "/assets/images/rooms/dormitory/HoboHostel_Room3_14.jpg",
      alt: "Dormitory room"
    },
    {
      src: "/assets/images/rooms/dormitory/Dormetry 4.webp",
      alt: "Dormitory space"
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
                alt="Dormitory photo" 
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
        {/* Dormitory View Background */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/images/rooms/dormitory/dormetry_view.webp" 
            alt="Dormitory view" 
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
              Dormitory
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Perfect for social butterflies who want to meet people from around the world. 
              Our dormitory rooms feature comfortable bunk beds with privacy curtains, individual reading lights, and charging points.
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Room Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a comfortable and social stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Room Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Room Details
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our dormitory rooms are designed for comfort and community. Each bed comes with its own privacy curtain, 
                reading light, and charging point. The rooms are bright and airy with large windows offering stunning mountain views.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Amenities:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <Image 
                  src="/assets/images/rooms/dormitory/HoboHostel_Room3_03.jpg" 
                  alt="Dormitory room" 
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
                  <div className="text-center text-white">
                    <Bed className="h-24 w-24 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Dormitory Room</h3>
                    <p className="text-pink-100">Comfortable bunk beds with privacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dormitory <span className="text-pink-600">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our comfortable and welcoming dormitory spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Ready to Book Your Dormitory?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Join fellow travelers and create memories that last a lifetime
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
