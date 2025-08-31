
"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mountain, Users, Wifi, Shield, Car, Eye, Zap, Star, Heart, MapPin, CheckCircle, Globe, Coffee, MessageCircle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'


export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
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
    },
    {
      name: "Sneha Gupta",
      handle: "@sneha_gupta",
      initials: "SG",
      rating: 5,
      review: "The dormitory was spotless and the bunk beds were comfortable. Loved the common kitchen where we could cook together!",
      date: "9/22/2023"
    },
    {
      name: "Rohan Mehta",
      handle: "@rohan_mehta",
      initials: "RM",
      rating: 5,
      review: "Perfect for solo travelers! The staff organized group activities and I met amazing people from around the world.",
      date: "8/15/2023"
    },
    {
      name: "Zara Khan",
      handle: "@zara_khan",
      initials: "ZK",
      rating: 5,
      review: "The double room was cozy and romantic. The balcony view of the mountains was breathtaking. Highly recommend for couples!",
      date: "7/8/2023"
    },
    {
      name: "Aditya Joshi",
      handle: "@aditya_joshi",
      initials: "AJ",
      rating: 5,
      review: "Great location near the main square but still quiet. The WiFi was reliable and the staff helped with all our travel plans.",
      date: "6/12/2023"
    },
    {
      name: "Pooja Desai",
      handle: "@pooja_desai",
      initials: "PD",
      rating: 5,
      review: "The breakfast was delicious and the coffee was amazing! The common area is perfect for working remotely with mountain views.",
      date: "5/25/2023"
    },
    {
      name: "Karan Malhotra",
      handle: "@karan_malhotra",
      initials: "KM",
      rating: 5,
      review: "Best hostel I've stayed at in India! The atmosphere is so welcoming and the location is perfect for exploring the area.",
      date: "4/18/2023"
    },
    {
      name: "Ishita Sharma",
      handle: "@ishita_sharma",
      initials: "IS",
      rating: 5,
      review: "The family room was perfect for our group of friends. Spacious, clean, and with amazing mountain views. Staff was incredibly helpful!",
      date: "3/30/2023"
    },
    {
      name: "Dhruv Patel",
      handle: "@dhruv_patel",
      initials: "DP",
      rating: 5,
      review: "Incredible value for money! The facilities exceeded my expectations and the staff made me feel like family.",
      date: "2/14/2023"
    },
    {
      name: "Aisha Khan",
      handle: "@aisha_khan",
      initials: "AK",
      rating: 5,
      review: "The dormitory was clean and comfortable. Loved the social atmosphere and made friends from different countries!",
      date: "1/8/2023"
    },
    {
      name: "Rajat Verma",
      handle: "@rajat_verma",
      initials: "RV",
      rating: 5,
      review: "Perfect location for exploring McLeod Ganj and Dharamshala. The staff helped us plan the best routes and activities.",
      date: "12/20/2022"
    },
    {
      name: "Neha Singh",
      handle: "@neha_singh",
      initials: "NS",
      rating: 5,
      review: "Amazing mountain views from every room! The common areas are perfect for relaxing and meeting other travelers.",
      date: "11/5/2022"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.5; // Max scroll distance
      const scrollOffset = Math.min(scrollY * 0.5, maxScroll); // Parallax effect
      
      document.documentElement.style.setProperty('--scroll-offset', `${scrollOffset}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const testimonialContainer = document.querySelector('.testimonial-scroll-container');
    if (!testimonialContainer) return;

    const scrollTestimonials = () => {
      testimonialContainer.scrollLeft += 1;
      
      // Reset scroll position when reaching the end
      if (testimonialContainer.scrollLeft >= testimonialContainer.scrollWidth / 2) {
        testimonialContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(scrollTestimonials, 30);
    return () => clearInterval(interval);
  }, []);




  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image - Fixed at Top */}
      <div className="fixed top-0 left-0 right-0 h-screen z-0">
        <Image 
          src="/assets/images/hero/himalyas-landscape.jpg" 
          alt="Beautiful mountain landscape with Hobo Hostel" 
          fill
          priority
          quality={85}
          className="object-cover"
        />
        {/* Enhanced blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]"></div>
      </div>

      {/* Page Content - Slides Over Background */}
      <div className="relative z-10 transform transition-transform duration-1000 ease-out" style={{ transform: 'translateY(var(--scroll-offset, 0px))' }}>
        {/* Hero Section - Modern & Clean */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
          {/* Enhanced Floating Orbs with Micro-interactions */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/15 to-pink-500/15 rounded-full blur-3xl animate-float animation-delay-200"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-float animation-delay-400"></div>

          {/* Hero Content with Enhanced Buttons */}
          <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 max-w-7xl mx-auto h-full flex items-center justify-center">
            <div className="w-full max-w-2xl space-y-6 md:space-y-8">

              {/* Main Heading with Enhanced Typography */}
              <div className="space-y-4 md:space-y-6 animate-fade-in-up animation-delay-200">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight group text-center md:text-left">
                  <span className="block text-white drop-shadow-2xl animate-slide-in-left group-hover:scale-105 transition-transform duration-500">Welcome to</span>
                  <span className="block drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <span className="typewriter-text text-yellow-300">Hobo Hostel</span>
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-xl mx-auto text-center leading-relaxed drop-shadow-2xl font-light px-4">
                  Where <span className="text-yellow-300 font-normal">adventure meets comfort</span> in the heart of the Himalayas. 
                  Connect with fellow travelers and create memories that last a lifetime.
                </p>
              </div>

              {/* Enhanced CTA Buttons with Micro-interactions */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-6 animate-fade-in-up animation-delay-400 px-4">
                <Button 
                  size="lg" 
                  className="group bg-black/50 backdrop-blur-md hover:bg-black/70 text-white px-4 sm:px-6 md:px-10 py-3 md:py-5 text-sm md:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-yellow-400/50 hover:border-yellow-400"
                  asChild
                >
                  <Link href="/rooms" className="flex items-center justify-center">
                    <span>Book Your Adventure</span>
                    <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-2 border-white/60 text-white hover:bg-white/20 px-4 sm:px-6 md:px-10 py-3 md:py-5 text-sm md:text-lg font-semibold rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-white/80 hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-white/25 bg-black/30"
                  asChild
                >
                  <Link href="/rooms" className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Explore Rooms
                  </Link>
                </Button>
              </div>

            </div>
          </div>

          {/* Scroll Indicator - Removed for pure image view */}
        </section>

        {/* Why Choose Hobo Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Hobo</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every detail crafted for the modern traveler seeking adventure without compromise
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Wifi,
                  title: "Lightning Fast Wi-Fi",
                  description: "Stay connected with blazing-fast internet throughout the property",
                  color: "text-blue-400"
                },
                {
                  icon: Shield,
                  title: "24/7 Security",
                  description: "Round-the-clock monitoring and secure access for your peace of mind",
                  color: "text-green-400"
                },
                {
                  icon: Car,
                  title: "Free Parking",
                  description: "Complimentary secure parking for all guests",
                  color: "text-purple-400"
                },
                {
                  icon: Eye,
                  title: "Mountain Views",
                  description: "Breathtaking Himalayan vistas from every balcony",
                  color: "text-orange-400"
                },
                {
                  icon: Heart,
                  title: "Community Vibe",
                  description: "Connect with fellow travelers in our social spaces",
                  color: "text-pink-400"
                },
                {
                  icon: Zap,
                  title: "Modern Amenities",
                  description: "All the comforts you need for a perfect stay",
                  color: "text-yellow-400"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-gray-700"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                    <feature.icon className={`h-6 w-6 md:h-8 md:w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cottage Section */}
        <section className="py-24 bg-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our <span className="text-purple-400">Cottage</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the charm and comfort of our beautiful cottage accommodations
              </p>
            </div>

            <div className="space-y-6">
              {/* Row 1 */}
              <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                {/* Cottage Photo 1 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/2024-10_HoboHostel_14.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/2024-10_HoboHostel_14.jpg" 
                    alt="Cottage view 1" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 2 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/2024-10_HoboHostel_05.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/2024-10_HoboHostel_05.jpg" 
                    alt="Cottage view 2" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 3 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/2024-10_HoboHostel_17.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/2024-10_HoboHostel_17.jpg" 
                    alt="Cottage view 3" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 4 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/2024-10_HoboHostel_19.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/2024-10_HoboHostel_19.jpg" 
                    alt="Cottage view 4" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 5 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/2024-10_HoboHostel_36.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/2024-10_HoboHostel_36.jpg" 
                    alt="Cottage view 5" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                {/* Cottage Photo 6 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/area1.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/area1.jpg" 
                    alt="Cottage area 1" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 7 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/area2.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/area2.jpg" 
                    alt="Cottage area 2" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 8 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/dinning 1.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/dinning 1.jpg" 
                    alt="Cottage dining 1" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 9 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/dinning2.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/dinning2.jpg" 
                    alt="Cottage dining 2" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>

                {/* Cottage Photo 10 */}
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-50 flex-shrink-0 w-80 h-80 cursor-pointer"
                  onClick={() => setSelectedImage("/assets/images/cottage/entrance.jpg")}
                >
                  <Image 
                    src="/assets/images/cottage/entrance.jpg" 
                    alt="Cottage entrance" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/rooms" className="flex items-center">
                  <span>View All Photos</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
        </section>

        {/* Rooms Section */}
        <section className="py-24 bg-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="text-purple-400">Adventure</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <div key={index} className={`group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                'border-transparent hover:border-purple-500/30 hover:shadow-purple-500/40'
              }`}>
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
                <div className="p-6 border-t border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                  <p className="text-gray-300 mb-6 leading-relaxed">{room.description}</p>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-white mb-3">Room Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
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

        {/* Infinite Carousel Container - Full Width */}
        <div className="relative overflow-hidden py-8">
          <div className="testimonial-scroll-container flex gap-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/4 px-4 flex-shrink-0 sm:px-4"
                style={{ width: `${100 / 4}%` }}
              >
                <div className="bg-gray-800 rounded-2xl p-4 hover:bg-gray-750 transition-all duration-500 border border-gray-700 hover:border-orange-500/50 h-80 testimonial-card">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                      </div>
                      <div className="absolute -top-1 -left-1 w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">X</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">{testimonial.handle}</h4>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image 
              src={selectedImage}
              alt="Full size cottage view"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
