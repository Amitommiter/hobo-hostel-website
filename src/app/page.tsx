
"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mountain, Users, Wifi, Shield, Car, Eye, Zap, Star, Heart, MapPin, CheckCircle, Globe, Coffee, MessageCircle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'


export default function HomePage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Keshlata Singh",
      handle: "@keshlata_singh",
      initials: "KS",
      rating: 5,
      review: "The location was peaceful and surrounded by greenery. It was very spacious, there were many activities to engage. The staff was very cooperative and well managed.",
      date: "6/23/2019"
    },
    {
      name: "Saloni Jain",
      handle: "@saloni_jain",
      initials: "SJ",
      rating: 5,
      review: "One of the best hostel with exceptional hospitality. Settled far apart from the hustle and bustle of Dharmshala, Hobo hostel is just the perfect place to chill with your gang.",
      date: "11/12/2019"
    },
    {
      name: "Tanuj Mall",
      handle: "@tanuj_mall",
      initials: "TM",
      rating: 5,
      review: "I had an one of mine best stay at this place. The hostel staff are quite caring and helpful. A cherry to the cake is the small stream which flow near this hostel.",
      date: "8/10/2019"
    },
    {
      name: "Priya Sharma",
      handle: "@priya_sharma",
      initials: "PS",
      rating: 5,
      review: "Amazing mountain views and the most welcoming staff! The common areas are perfect for meeting fellow travelers. Will definitely come back!",
      date: "3/15/2024"
    },
    {
      name: "Rahul Verma",
      handle: "@rahul_verma",
      initials: "RV",
      rating: 5,
      review: "Perfect location for exploring McLeod Ganj. The rooms are clean, the WiFi is fast, and the atmosphere is just incredible. Highly recommended!",
      date: "2/28/2024"
    },
    {
      name: "Anjali Patel",
      handle: "@anjali_patel",
      initials: "AP",
      rating: 5,
      review: "Stayed here for a week and loved every moment. The staff helped us plan our treks and the food recommendations were spot on!",
      date: "1/20/2024"
    },
    {
      name: "Vikram Singh",
      handle: "@vikram_singh",
      initials: "VS",
      rating: 5,
      review: "Best hostel experience in the Himalayas! The community vibe is amazing and the location is perfect for both adventure and relaxation.",
      date: "12/10/2023"
    },
    {
      name: "Meera Kapoor",
      handle: "@meera_kapoor",
      initials: "MK",
      rating: 5,
      review: "The family room was perfect for our group. Spacious, clean, and with the most beautiful mountain views. Staff went above and beyond!",
      date: "11/5/2023"
    },
    {
      name: "Arjun Reddy",
      handle: "@arjun_reddy",
      initials: "AR",
      rating: 5,
      review: "Incredible value for money! The facilities are top-notch and the staff is incredibly friendly. Made so many friends here!",
      date: "10/18/2023"
    }
  ];

  useEffect(() => {
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section - Modern & Clean */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/images/hero/himalyas-landscape.jpg" 
            alt="Beautiful mountain landscape with Hobo Hostel" 
            fill
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            className="object-cover"
            sizes="100vw"
          />
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        {/* Enhanced Floating Orbs with Micro-interactions */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/15 to-pink-500/15 rounded-full blur-3xl animate-float animation-delay-200"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-float animation-delay-400"></div>

        {/* Hero Content with Enhanced Buttons */}
        <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 max-w-7xl mx-auto h-full flex items-center justify-center">
          <div className="w-full max-w-2xl space-y-6 md:space-y-8">

            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-4 md:space-y-6 animate-fade-in-up animation-delay-200">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight group text-center md:text-left">
                <span className="block text-white drop-shadow-2xl animate-slide-in-left group-hover:scale-105 transition-transform duration-500">Welcome to</span>
                <span className="block drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                  <span className="typewriter-text text-yellow-300">Hobo Hostel</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-xl mx-auto text-center leading-relaxed drop-shadow-2xl font-light">
                Where <span className="text-yellow-300 font-normal">adventure meets comfort</span> in the heart of the Himalayas. 
                Connect with fellow travelers and create memories that last a lifetime.
              </p>
            </div>

            {/* Enhanced CTA Buttons with Micro-interactions */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 animate-fade-in-up animation-delay-400">
              <Button 
                size="lg" 
                className="group bg-black/50 backdrop-blur-md hover:bg-black/70 text-white px-6 md:px-10 py-3 md:py-5 text-sm md:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-yellow-400/50 hover:border-yellow-400"
                asChild
              >
                <Link href="/rooms" className="flex items-center">
                  <span>Book Your Adventure</span>
                  <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-white/60 text-white hover:bg-white/20 px-6 md:px-10 py-3 md:py-5 text-sm md:text-lg font-semibold rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-white/80 hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-white/25 bg-black/30"
                asChild
              >
                <Link href="/culture" className="flex items-center">
                  <Mountain className="mr-2 md:mr-3 h-4 w-4 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Culture
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats with Hover Effects */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-xl pt-6 md:pt-12 animate-fade-in-up animation-delay-600">
              {[
                { number: "500+", label: "Happy Travelers", icon: Users },
                { number: "4.9★", label: "Average Rating", icon: Star },
                { number: "24/7", label: "Support", icon: Heart }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-black/40 backdrop-blur-md rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-1 md:mb-3 group-hover:bg-black/60 transition-all duration-300 border border-white/20">
                    <stat.icon className="h-5 w-5 md:h-8 md:w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  </div>
                  <div className="text-sm md:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 bg-black/30 px-1 md:px-4 py-1 md:py-2 rounded-lg backdrop-blur-sm">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-white group-hover:text-yellow-200 transition-colors duration-300 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll Indicator - Removed for pure image view */}
      </section>

      {/* Features Section - Enhanced with Vibrant Colors & Micro-animations */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
        {/* Mountain Silhouette Background - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 w-32 opacity-5">
          <svg viewBox="0 0 100 800" className="w-full h-full">
            <path 
              d="M0,800 L0,600 Q25,500 50,600 Q75,400 100,600 L100,800 Z" 
              fill="url(#mountainGradientLeft)"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="mountainGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#1f2937', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#374151', stopOpacity: 0.1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Mountain Silhouette Background - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-32 opacity-5">
          <svg viewBox="0 0 100 800" className="w-full h-full">
            <path 
              d="M0,800 L0,600 Q25,500 50,600 Q75,400 100,600 L100,800 Z" 
              fill="url(#mountainGradientRight)"
              className="animate-pulse"
              style={{animationDelay: '0.5s'}}
            />
            <defs>
              <linearGradient id="mountainGradientRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" style={{stopColor: '#1f2937', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#374151', stopOpacity: 0.1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-float animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float animation-delay-400"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-flow">Hobo</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail crafted for the modern traveler seeking adventure without compromise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wifi className="h-8 w-8 text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />,
                title: "Lightning Fast Wi-Fi",
                description: "Stay connected with blazing-fast internet throughout the property",
                bgGradient: "from-blue-500/10 to-cyan-500/10",
                borderGradient: "from-blue-500/30 to-cyan-500/30",
                iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: <Shield className="h-8 w-8 text-green-600 group-hover:text-green-500 transition-colors duration-300" />,
                title: "24/7 Security",
                description: "Round-the-clock monitoring and secure access for your peace of mind",
                bgGradient: "from-green-500/10 to-emerald-500/10",
                borderGradient: "from-green-500/30 to-emerald-500/30",
                iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
              },
              {
                icon: <Car className="h-8 w-8 text-purple-600 group-hover:text-purple-500 transition-colors duration-300" />,
                title: "Free Parking",
                description: "Complimentary secure parking for all guests",
                bgGradient: "from-purple-500/10 to-violet-500/10",
                borderGradient: "from-purple-500/30 to-violet-500/30",
                iconBg: "bg-gradient-to-br from-purple-500/20 to-violet-500/20"
              },
              {
                icon: <Eye className="h-8 w-8 text-orange-600 group-hover:text-orange-500 transition-colors duration-300" />,
                title: "Mountain Views",
                description: "Breathtaking Himalayan vistas from every balcony",
                bgGradient: "from-orange-500/10 to-red-500/10",
                borderGradient: "from-orange-500/30 to-red-500/30",
                iconBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
              },
              {
                icon: <Heart className="h-8 w-8 text-pink-600 group-hover:text-pink-500 transition-colors duration-300" />,
                title: "Community Vibe",
                description: "Connect with fellow travelers in our social spaces",
                bgGradient: "from-pink-500/10 to-rose-500/10",
                borderGradient: "from-pink-500/30 to-rose-500/30",
                iconBg: "bg-gradient-to-br from-pink-500/20 to-rose-500/20"
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-600 group-hover:text-yellow-500 transition-colors duration-300" />,
                title: "Modern Amenities",
                description: "All the comforts you need for a perfect stay",
                bgGradient: "from-yellow-500/10 to-amber-500/10",
                borderGradient: "from-yellow-500/30 to-amber-500/30",
                iconBg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-transparent hover:border-gradient-to-r ${feature.borderGradient} animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50 via-gray-50 to-gray-50 relative">
        {/* Mountain Silhouette Background - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 w-32 opacity-3">
          <svg viewBox="0 0 100 800" className="w-full h-full">
            <path 
              d="M0,800 L0,600 Q25,500 50,600 Q75,400 100,600 L100,800 Z" 
              fill="url(#mountainGradientLeft2)"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="mountainGradientLeft2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#6b7280', stopOpacity: 0.1}} />
                <stop offset="100%" style={{stopColor: '#9ca3af', stopOpacity: 0.05}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Mountain Silhouette Background - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-32 opacity-3">
          <svg viewBox="0 0 100 800" className="w-full h-full">
            <path 
              d="M0,800 L0,600 Q25,500 50,600 Q75,400 100,600 L100,800 Z" 
              fill="url(#mountainGradientRight2)"
              className="animate-pulse"
              style={{animationDelay: '0.5s'}}
            />
            <defs>
              <linearGradient id="mountainGradientRight2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" style={{stopColor: '#6b7280', stopOpacity: 0.1}} />
                <stop offset="100%" style={{stopColor: '#9ca3af', stopOpacity: 0.05}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find <span className="text-purple-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of the Himalayas, surrounded by nature and adventure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Location Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Hobo Hostel<br />
                      Near McLeod Ganj<br />
                      Dharamshala, Himachal Pradesh<br />
                      India - 176219
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Location Highlights</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        5 minutes from McLeod Ganj
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        Walking distance to cafes and shops
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        Peaceful mountain surroundings
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        Easy access to hiking trails
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Coffee className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nearby Attractions</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Dalai Lama Temple Complex</li>
                      <li>• Bhagsu Waterfall</li>
                      <li>• Triund Trek Starting Point</li>
                      <li>• Local Tibetan Markets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    <span>Get Directions</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://www.google.com/maps/place/Hobo+Hostel/@32.207449,76.372019,15z/data=!4m9!3m8!1s0x391b53d3f70fc37f:0xbf098a197d5ba456!5m2!4m1!1i2!8m2!3d32.2074489!4d76.3720192!16s%2Fg%2F11c6yzb2vv?hl=en&entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Open in Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 w-full h-96">
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
                      <h4 className="font-semibold text-gray-900">Hobo Hostel</h4>
                      <p className="text-sm text-gray-600">McLeod Ganj, Dharamshala</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs"
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
                        className="text-xs"
                        asChild
                      >
                        <a 
                          href="tel:+919876543210"
                        >
                          Call
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-purple-600">Adventure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From social dorms to private retreats, find your perfect space
            </p>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dormitory",
                description: "Perfect for social butterflies who want to meet people from around the world",
                price: "",
                features: ["4 beds per room", "Privacy curtains", "Reading lights", "Charging points"],
                image: "/assets/images/rooms/dormitory/dormetry_view.webp",
                link: "/rooms/dormitory",
                rating: 5
              },
              {
                title: "Double Room",
                description: "Your own sanctuary with stunning mountain views and complete privacy",
                price: "",
                features: ["Double bed", "Private entrance", "Mountain balcony", "Shared bathroom"],
                image: "/assets/images/rooms/double-room/DoubleRoom-Balcony view.webp",
                link: "/rooms/double-room",
                rating: 5
              },
              {
                title: "Family Room",
                description: "Spacious accommodation perfect for families with children or small groups",
                price: "",
                features: ["Multiple beds", "Private bathroom", "Mountain views", "Extra space"],
                image: "/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg",
                link: "/rooms/family-room",
                rating: 5
              }
            ].map((room, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 relative overflow-hidden">
                  {/* Horizontal Photo Gallery */}
                  <div className="flex h-full room-card-gallery">
                    {room.title === "Dormitory" && (
                      <>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/HoboHostel_Room3_03.jpg" 
                            alt="Dormitory view" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/dormetry_view.webp" 
                            alt="Dormitory interior" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/HoboHostel_Room3_14.jpg" 
                            alt="Dormitory beds" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/Dormetry 4.webp" 
                            alt="Dormitory space" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Duplicate photos for seamless loop */}
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/HoboHostel_Room3_03.jpg" 
                            alt="Dormitory view" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/dormetry_view.webp" 
                            alt="Dormitory interior" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/HoboHostel_Room3_14.jpg" 
                            alt="Dormitory beds" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/dormitory/Dormetry 4.webp" 
                            alt="Dormitory space" 
                            fill
                            className="object-cover"
                          />
                        </div>
                      </>
                    )}
                    
                    {room.title === "Double Room" && (
                      <>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/DoubleRoom-Balcony view.webp" 
                            alt="Double room balcony" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/DoubleRoom Entrance view.webp" 
                            alt="Double room entrance" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/Double-Room 2.webp" 
                            alt="Double room interior" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/Double_Bed 1.webp" 
                            alt="Double room bed" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/Double Room Bathroom.webp" 
                            alt="Double room bathroom" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Duplicate photos for seamless loop */}
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/DoubleRoom-Balcony view.webp" 
                            alt="Double room balcony" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/DoubleRoom Entrance view.webp" 
                            alt="Double room entrance" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/Double-Room 2.webp" 
                            alt="Double room interior" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/Double_Bed 1.webp" 
                            alt="Double room bed" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/double-room/Double Room Bathroom.webp" 
                            alt="Double room bathroom" 
                            fill
                            className="object-cover"
                          />
                        </div>
                      </>
                    )}
                    
                    {room.title === "Family Room" && (
                      <>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg" 
                            alt="Family room view" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_02.jpg" 
                            alt="Family room interior" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg" 
                            alt="Family room space" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_02.jpg" 
                            alt="Family room view 2" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Duplicate photos for seamless loop */}
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg" 
                            alt="Family room view" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_02.jpg" 
                            alt="Family room interior" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_03.jpg" 
                            alt="Family room space" 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-shrink-0 w-full h-full">
                          <Image 
                            src="/assets/images/rooms/family-room/2024-10_HoboHostel_Room4_02.jpg" 
                            alt="Family room view 2" 
                            fill
                            className="object-cover"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Room Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{room.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">
                        {room.title === "Dormitory" && "Perfect for Social Travelers"}
                        {room.title === "Double Room" && "Ideal for Couples"}
                        {room.title === "Family Room" && "Great for Groups"}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(room.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Scroll Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
                  <div className="space-y-3 mb-6">
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
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Infinite Carousel */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-purple-400">Guests</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real experiences from travelers who found their home away from home
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-12">
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                asChild
              >
                <a href="https://www.tripadvisor.in/Hotel_Review-g319724-d12596592-Reviews-Hobo_Hostel-Dharamsala_Kangra_District_Himachal_Pradesh.html" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  TripAdvisor Reviews
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                asChild
              >
                <a href="https://www.instagram.com/hobohostel/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Infinite Carousel Container */}
          <div className="relative overflow-visible py-8">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ 
                transform: `translateX(-${currentTestimonialIndex * (100 / 3)}%)`,
                width: `${(testimonials.length / 3) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 px-4 flex-shrink-0"
                  style={{ width: `${100 / 3}%` }}
                >
                  <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-500 border border-gray-700 hover:border-purple-500/50 h-full testimonial-card">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                        </div>
                        <div className="absolute -top-1 -left-1 w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">X</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{testimonial.handle}</h4>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                    <div className="text-sm text-gray-500">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentTestimonialIndex / 3) === index 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
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
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your <span className="text-yellow-300">Adventure</span>?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Join thousands of travelers who have discovered the magic of Hobo Hostel
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
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-white/50"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
