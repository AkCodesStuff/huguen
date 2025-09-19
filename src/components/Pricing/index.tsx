'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Zap, Clock, CheckCircle } from 'lucide-react'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" ref={ref} className="min-h-screen bg-secondary py-20">
      <div className="container-max-width section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-secondary mb-6">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-on-tertiary max-w-2xl mx-auto">
            Professional hospitality websites that grow your business, starting at an affordable price point.
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-8"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-primary">₹4,999</span>
                  <span className="text-xl text-on-tertiary">/ site</span>
                </div>
                <p className="text-xl text-on-secondary font-semibold mb-2">
                  Professional Website Solutions
                </p>
                <p className="text-on-tertiary">
                  Starting price for custom hospitality websites
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <CheckCircle className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-on-secondary mb-2">Website Design</h4>
                  <p className="text-sm text-on-tertiary">Custom responsive design for your hospitality business</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-on-secondary mb-2">Monthly Plans</h4>
                  <p className="text-sm text-on-tertiary">Flexible subscription options for ongoing support</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-on-secondary mb-2">Premium Features</h4>
                  <p className="text-sm text-on-tertiary">Payment gateways, SEO, and management systems</p>
                </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-4"
              >
                <p className="text-on-tertiary mb-6">
                  Get detailed pricing for your specific needs and explore our monthly subscription plans
                </p>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Connect Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-on-tertiary">
                    <span className="font-medium">Note:</span> Domain charges and payment gateway fees apply separately. All prices subject to applicable taxes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-on-secondary font-medium">
              Monthly subscriptions available from ₹499/month
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing