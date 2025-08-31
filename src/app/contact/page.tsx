"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ChevronDown, Navigation, Compass, Mountain, Star, Coffee, Heart, Wifi, Car } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Hobo Hostel, McLeod Ganj, Dharamshala, Himachal Pradesh, India',
    link: 'https://www.google.com/maps/place/Hobo+Hostel/@32.207449,76.372019,15z/data=!4m9!3m8!1s0x391b53d3f70fc37f:0xbf098a197d5ba456!5m2!4m1!1i2!8m2!3d32.2074489!4d76.3720192!16s%2Fg%2F11c6yzb2vv?hl=en&entry=ttu'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 81294 32880',
    link: 'tel:+918129432880'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@hobohostel.com',
    link: 'mailto:hello@hobohostel.com'
  },
  {
    icon: Clock,
    title: 'Reception Hours',
    content: '24/7 - We\'re always here for you!',
    link: null
  }
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqData = [
    {
      question: 'What time is check-in and check-out?',
      answer: 'Check-in is available 24/7, and check-out is at 11:00 AM. We can store your luggage if you arrive early or leave late.'
    },
    {
      question: 'Do you provide towels and linens?',
      answer: 'Yes, all beds come with fresh linens and towels are provided. You can also rent additional towels if needed.'
    },
    {
      question: 'Is breakfast included?',
      answer: 'We offer complimentary coffee and tea. Breakfast is available for purchase at our café or you can use our kitchen facilities.'
    },
    {
      question: 'Do you have parking available?',
      answer: 'We don\'t have on-site parking, but there are several parking options nearby. We can provide directions to the nearest parking area.'
    },
    {
      question: 'Can I book a private room for a group?',
      answer: 'Yes, we have private rooms that can accommodate 1-2 people. For larger groups, we can arrange multiple rooms or suggest nearby options.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, and digital payments including UPI, Paytm, and other popular Indian payment methods.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section with Enhanced Creativity */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated mountain silhouettes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 animate-fade-in-up">
                <Star className="w-5 h-5 text-purple-300 animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-sm font-medium">Get in Touch</span>
                <Star className="w-5 h-5 text-purple-300 animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Contact <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Ready to start your Himalayan adventure? We&apos;re here to help make your stay unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 md:py-20 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="relative h-full">
              <div className="relative bg-gray-900 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-2xl border border-gray-800 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 mb-3 md:mb-6 text-sm md:text-base leading-relaxed">
                    We&apos;re here to help make your stay at Hobo Hostel memorable. 
                    Whether you have questions about our rooms, want to book a stay, 
                    or need recommendations for local activities, don&apos;t hesitate to reach out.
                  </p>

                  <div className="space-y-2 md:space-y-4">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className="relative flex items-start space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:bg-gray-700/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 before:rounded-lg md:before:rounded-xl overflow-hidden">
                          <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                            <info.icon className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                          </div>
                          <div className="flex-1 min-w-0 relative z-10">
                            <h3 className="font-semibold text-white mb-1 text-sm md:text-base group-hover:text-purple-400 transition-colors duration-300">{info.title}</h3>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group-hover:underline text-xs md:text-sm break-words"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-xs md:text-sm">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Simple Embed */}
            <div className="relative h-fit">
              <div className="relative space-y-4 md:space-y-6 h-full">
                <div className="relative">
                  <div className="bg-gray-900 rounded-xl md:rounded-3xl shadow-2xl border border-gray-800 overflow-hidden">
                    <div className="h-56 md:h-96 w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.1234567890123!2d76.3698306!3d32.2074489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b53d3f70fc37f%3A0xbf098a197d5ba456!2sHobo%20Hostel!5e0!3m2!1sen!2sin!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hobo Hostel Location"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* How to Find Us - Redesigned */}
                <div className="bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-800 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white flex items-center">
                      <Mountain className="w-5 h-5 md:w-6 md:h-6 mr-2 text-purple-400" />
                      How to Find Us
                    </h3>
                    <a
                      href="https://www.google.com/maps/place/Hobo+Hostel/@32.207449,76.372019,15z/data=!4m9!3m8!1s0x391b53d3f70fc37f:0xbf098a197d5ba456!5m2!4m1!1i2!8m2!3d32.2074489!4d76.3720192!16s%2Fg%2F11c6yzb2vv?hl=en&entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Directions
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">✈</span>
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">Airport</p>
                        <p className="text-gray-400 text-xs">15 min drive</p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">🚌</span>
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">Bus Stand</p>
                        <p className="text-gray-400 text-xs">5 min walk</p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">🚗</span>
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">By Car</p>
                        <p className="text-gray-400 text-xs">Parking available</p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">🚶</span>
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">Walking</p>
                        <p className="text-gray-400 text-xs">From main square</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-8 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              How to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Reach</span> Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
              Multiple transportation options to reach Hobo Hostel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <span className="text-2xl">✈️</span>,
                title: "By Air",
                description: "Nearest airport is Gaggal Airport (DHM), 15 km away",
                details: "Take a taxi or bus from the airport to McLeod Ganj",
                color: "blue"
              },
              {
                icon: <span className="text-2xl">🚂</span>,
                title: "By Train",
                description: "Nearest railway station is Pathankot, 85 km away",
                details: "Take a bus or taxi from Pathankot to McLeod Ganj",
                color: "green"
              },
              {
                icon: <span className="text-2xl">🚌</span>,
                title: "By Bus",
                description: "Direct buses from Delhi, Chandigarh, and other cities",
                details: "Get down at McLeod Ganj bus stand and walk 5 minutes",
                color: "purple"
              },
              {
                icon: <span className="text-2xl">🚗</span>,
                title: "By Car",
                description: "Well-connected by road from major cities",
                details: "Parking available at the hostel premises",
                color: "orange"
              }
            ].map((option, index) => (
              <div key={index} className={`bg-gray-900 rounded-xl p-6 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                option.color === 'blue' ? 'border-transparent hover:border-blue-500 hover:shadow-blue-500/25' :
                option.color === 'green' ? 'border-transparent hover:border-green-500 hover:shadow-green-500/25' :
                option.color === 'purple' ? 'border-transparent hover:border-purple-500 hover:shadow-purple-500/25' :
                'border-transparent hover:border-orange-500 hover:shadow-orange-500/25'
              }`}>
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-3 text-sm leading-relaxed">{option.description}</p>
                <p className="text-xs text-gray-400">{option.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
              Got questions? We&apos;ve got answers. Here are some common questions about staying with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-lg p-3 md:p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 h-fit ${
                  openFaq === index ? 'border-purple-500 shadow-purple-100' : 'border-transparent hover:border-purple-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-start w-full text-left text-white font-semibold group"
                >
                  <span className="group-hover:text-purple-400 transition-colors duration-300 pr-2 md:pr-4 flex-1 text-sm md:text-base">{faq.question}</span>
                  <div className={`w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-1 ${
                    openFaq === index ? 'bg-purple-100 text-purple-600' : 'bg-gray-800 text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-500'
                  }`}>
                    <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 leading-relaxed pt-2 md:pt-4 text-sm md:text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-8 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Nearby <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Attractions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
              Explore the beautiful surroundings and local attractions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{attraction.name}</h3>
                  <span className="text-xs bg-purple-900 text-purple-300 px-3 py-1 rounded-full">
                    {attraction.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-3 text-sm leading-relaxed">{attraction.description}</p>
                <div className="flex items-center text-xs text-gray-400">
                  <Navigation className="h-4 w-4 mr-2" />
                  {attraction.distance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Book Your Stay?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us now to check availability and secure your spot at Hobo Hostel. 
              We can&apos;t wait to welcome you to our community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Us Now
              </a>
              <a 
                href="mailto:hello@hobohostel.com"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
