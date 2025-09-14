'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Globe, 
  CreditCard, 
  Database, 
  Cloud, 
  BarChart3, 
  Smartphone,
  Shield,
  Clock,
  Users,
  Coffee
} from 'lucide-react'
import Image from 'next/image'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Hotel Websites",
      description: "Elegant, fast, and mobile-friendly websites designed specifically for hospitality businesses",
      image: "/webD.jpg"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Hospitality Management Systems",
      description: "Streamlined check-ins, billing, and CRM solutions for efficient hotel operations",
      image: "/hospitality.jpg"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Engine Integration",
      description: "Direct reservations with secure payment gateways to save 15-20% OTA commission",
      image: "/engine.jpg"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Channel Manager Setup",
      description: "Sync with OTAs like Booking.com & Airbnb for seamless inventory management",
      image: "/channel.jpg"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Data Solutions",
      description: "Secure storage and real-time access to your hotel data from anywhere",
      image: "/cloud.jpg"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Branding & Digital Marketing",
      description: "SEO, social media, and guest acquisition strategies to boost your online presence",
      image: "/seo.jpg"
    }
  ]

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "Secure & Safe" },
    { icon: <Clock className="w-6 h-6" />, text: "24/7 Service" },
    { icon: <Users className="w-6 h-6" />, text: "Expert Staff" },
    { icon: <Coffee className="w-6 h-6" />, text: "Premium Quality" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" ref={ref} className="min-h-screen bg-tertiary py-20">
      <div className="container-max-width section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-secondary mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-on-tertiary max-w-3xl mx-auto">
            Comprehensive hospitality technology solutions designed to enhance guest experiences and drive revenue for hotels, resorts, villas, and homestays.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary text-on-primary p-3 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-on-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-on-tertiary">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-on-secondary mb-4">
              Why Choose Huguen?
            </h3>
            <p className="text-on-tertiary max-w-2xl mx-auto">
              We are committed to providing tailored solutions for the hospitality industry with scalable, secure, and performance-driven platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <p className="font-semibold text-on-secondary">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
