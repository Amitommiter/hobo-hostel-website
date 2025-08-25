"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ChevronDown, Navigation, Compass, Mountain, Star } from 'lucide-react'

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
      <section className="relative py-20 bg-orange-600 overflow-hidden">
        {/* Animated mountain silhouettes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 animate-fade-in-up">
                <Star className="w-5 h-5 text-yellow-300 animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-sm font-medium">Get in Touch</span>
                <Star className="w-5 h-5 text-yellow-300 animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Contact <span className="text-yellow-300">Us</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Ready to start your Himalayan adventure? We&apos;re here to help make your stay unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Contact Info */}
            <div className="relative">
              <div className="relative bg-white rounded-xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-200">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-4 md:mb-8 text-sm md:text-lg leading-relaxed">
                  We&apos;re here to help make your stay at Hobo Hostel memorable. 
                  Whether you have questions about our rooms, want to book a stay, 
                  or need recommendations for local activities, don&apos;t hesitate to reach out.
                </p>

                <div className="space-y-3 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className="relative flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg md:rounded-2xl bg-gray-50 border border-gray-200 group-hover:bg-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                        <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <info.icon className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base group-hover:text-orange-600 transition-colors duration-300">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-gray-600 hover:text-orange-600 transition-colors duration-300 group-hover:underline text-sm md:text-base break-words"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm md:text-base">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 md:mt-12 bg-orange-50 rounded-lg md:rounded-2xl p-3 md:p-6 border border-orange-200">
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4 flex items-center">
                    <Compass className="w-4 h-4 md:w-5 md:h-5 mr-2 text-orange-600" />
                    Quick Response
                  </h3>
                  <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">
                    We typically respond to all inquiries within 2-4 hours during business hours.
                  </p>
                  <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700">WhatsApp</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700">Instagram</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700">Facebook</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      <span className="text-gray-700">TripAdvisor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Simple Embed */}
            <div className="relative space-y-3 md:space-y-6">
              <div className="relative">
                <div className="bg-white rounded-xl md:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
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

              <div className="bg-white rounded-lg md:rounded-2xl shadow-xl p-3 md:p-6 border border-gray-200">
                <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2 md:mb-4 flex items-center">
                  <Mountain className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 text-orange-600" />
                  How to Find Us
                </h3>
                <div className="space-y-2 md:space-y-4">
                  <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-orange-50 rounded-lg md:rounded-xl hover:bg-orange-100 transition-all duration-300">
                    <div className="w-5 h-5 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">✈</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">From Dharamshala Airport</p>
                      <p className="text-gray-600 text-xs md:text-sm">Take a taxi or bus to McLeod Ganj, then walk to our location.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-orange-50 rounded-lg md:rounded-xl hover:bg-orange-100 transition-all duration-300">
                    <div className="w-5 h-5 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">🚌</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">From Dharamshala Bus Stand</p>
                      <p className="text-gray-600 text-xs md:text-sm">Take a local bus or taxi to McLeod Ganj.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-orange-50 rounded-lg md:rounded-xl hover:bg-orange-100 transition-all duration-300">
                    <div className="w-5 h-5 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">🚗</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">By Car</p>
                                              <p className="text-gray-600 text-xs md:text-sm">We&apos;re located in the heart of McLeod Ganj, easily accessible by road.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-orange-50 rounded-lg md:rounded-xl hover:bg-orange-100 transition-all duration-300">
                    <div className="w-5 h-5 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">🚶</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Walking</p>
                      <p className="text-gray-600 text-xs md:text-sm">5-10 minutes from the main McLeod Ganj square.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 md:mt-6">
                  <a
                    href="https://www.google.com/maps/place/Hobo+Hostel/@32.207449,76.372019,15z/data=!4m9!3m8!1s0x391b53d3f70fc37f:0xbf098a197d5ba456!5m2!4m1!1i2!8m2!3d32.2074489!4d76.3720192!16s%2Fg%2F11c6yzb2vv?hl=en&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 md:px-6 py-2 md:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
                  >
                    <Navigation className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
              Got questions? We&apos;ve got answers. Here are some common questions about staying with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-3 md:p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 h-fit ${
                  openFaq === index ? 'border-orange-500 shadow-orange-100' : 'border-transparent hover:border-orange-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-start w-full text-left text-gray-900 font-semibold group"
                >
                  <span className="group-hover:text-orange-600 transition-colors duration-300 pr-2 md:pr-4 flex-1 text-sm md:text-base">{faq.question}</span>
                  <div className={`w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-1 ${
                    openFaq === index ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500'
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
                    <p className="text-gray-600 leading-relaxed pt-2 md:pt-4 text-sm md:text-base">{faq.answer}</p>
                  </div>
                </div>
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
