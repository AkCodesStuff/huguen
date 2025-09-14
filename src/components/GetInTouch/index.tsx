'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import Image from 'next/image'


const GetInTouch = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    type: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "Delhi, India",
      description: "Delhi-based full-stack solution firm"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91-8628801218",
      description: "24/7 Technical Support"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@huguen.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "9:00 AM - 6:00 PM IST",
      description: "Monday to Friday"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitted(true)
  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyG33ycn_fZWbxetzdA8j6K94NdPdsjki2jRLPPLcIr7TDY-xKGO4Q-z5OX9YJlj94c7Q/exec", {
      method: "POST",
      body: JSON.stringify(formData)
    })
    console.log("Data sent", res)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
    
        budget: '',
        type: '',
        message: ''
      })
    }, 3000)
  } catch (err) {
    console.error("Failed to send", err)
    setIsSubmitted(false)
  }
}


  return (
    <section id="contact" ref={ref} className="min-h-screen bg-tertiary py-20">
      <div className="container-max-width section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-secondary mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-on-tertiary max-w-3xl mx-auto">
            Ready to transform your hospitality business digitally? Contact us today to discuss your project or learn more about our comprehensive services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-on-secondary mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary text-on-primary p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-secondary mb-1">
                      {info.title}
                    </h4>
                    <p className="text-on-secondary font-medium">
                      {info.details}
                    </p>
                    <p className="text-on-tertiary text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hotel Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Huguen Office</p>
                <p className="text-sm">Delhi, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-on-secondary mb-6">
              Start Your Project
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-on-secondary mb-2">
                  Thank You!
                </h4>
                <p className="text-on-tertiary">
                  Your project inquiry has been sent successfully. We'll get back to you within 24 hours with a detailed proposal.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-on-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-on-secondary mb-2">
                      Email Address 
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-on-secondary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-on-secondary mb-2">
                      Business Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select business type</option>
                      <option value="hotel">Hotel</option>
                      <option value="resort">Resort</option>
                      <option value="villa">Villa</option>
                      <option value="homestay">Homestay</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                   
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-on-secondary mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-25k">₹10,000 - ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="above-100k">Above ₹1,00,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-on-secondary mb-2">
                    Project Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, current challenges, and what you hope to achieve..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
