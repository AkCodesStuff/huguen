'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToNext = (): void => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleGetStartedClick = (): void => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServicesClick = (): void => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/huguenbg.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max-width section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-1 mb-6"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-white text-sm font-medium drop-shadow-lg">5.0 Rating</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            Transform Your{' '}
            <span className="text-gradient">Hospitality</span>
            <br />
            Business Digitally
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-lg"
          >
            Professional websites and digital solutions designed specifically for hotels, restaurants, and hospitality businesses
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 shadow-2xl"
              onClick={handleGetStartedClick}
              type="button"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 backdrop-blur-sm bg-white/10"
              onClick={handleServicesClick}
              type="button"
            >
              Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg p-2"
        type="button"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2 drop-shadow-lg">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 drop-shadow-lg" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero