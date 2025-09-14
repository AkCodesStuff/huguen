'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star, Crown, Zap } from 'lucide-react'
import Image from 'next/image'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pricingPlans = [
    {
      name: "Website Plan",
      price: 4499,
      period: "one-time",
      icon: <Star className="w-8 h-8" />,
      image: "/BeeEditor.png",
      features: [
        "Professional website redesign",
        "Comparable to flagship hotels",
        "Mobile-friendly design",
        "SEO optimized",
        "Fast loading speed",
        "Content management system"
      ],
      popular: false
    },
    {
      name: "Website + Payment Gateway",
      price: 5999,
      period: "one-time",
      icon: <Crown className="w-8 h-8" />,
      image: "/BeeReceptionist.png",
      features: [
        "Everything in Website Plan",
        "Secure payment gateway",
        "Direct reservations",
        "Save 15-20% OTA commission",
        "Multiple payment options",
        "Real-time booking system"
      ],
      popular: true
    },
    {
      name: "Complete Package",
      price: 12999,
      period: "one-time",
      icon: <Zap className="w-8 h-8" />,
      image: "/BeeManager.png",
      features: [
        "Everything in previous plans",
        "1 Year SEO included",
        "Online client database",
        "Management system access",
        "Channel manager setup",
        "Digital marketing support",
        "24/7 technical support"
      ],
      popular: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
            Our <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-on-tertiary max-w-3xl mx-auto">
            Choose from our comprehensive pricing plans designed to meet the unique needs of your hospitality business.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-on-primary text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full">
                  {plan.icon}
                </div>
              </div>

              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-on-secondary mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">₹{plan.price.toLocaleString()}</span>
                    <span className="text-on-tertiary ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-on-tertiary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-on-primary hover:bg-opacity-90'
                      : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-primary'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subscription Plans */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-tertiary rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-3xl font-bold text-on-secondary">SUBSCRIPTIONS</h3>
            </div>
            <p className="text-on-tertiary max-w-2xl mx-auto">
              Ongoing support and maintenance plans to keep your hospitality business ahead of the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h4 className="text-lg font-bold text-on-secondary mb-2">Tier 1</h4>
              <div className="text-2xl font-bold text-primary mb-3">₹25,000</div>
              <div className="text-sm text-on-tertiary mb-4">/ Year</div>
              <ul className="text-sm text-on-tertiary space-y-2">
                <li>• Unlimited changes</li>
                <li>• Unlimited redesigns</li>
                <li>• Free SEO included</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h4 className="text-lg font-bold text-on-secondary mb-2">Tier 2</h4>
              <div className="text-2xl font-bold text-primary mb-3">₹7,999</div>
              <div className="text-sm text-on-tertiary mb-4">/ Year</div>
              <ul className="text-sm text-on-tertiary space-y-2">
                <li>• 15 major changes/M</li>
                <li>• 5 redesigns included</li>
                <li>• Priority support</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h4 className="text-lg font-bold text-on-secondary mb-2">Tier 3</h4>
              <div className="text-2xl font-bold text-primary mb-3">₹4,999</div>
              <div className="text-sm text-on-tertiary mb-4">/ Year</div>
              <ul className="text-sm text-on-tertiary space-y-2">
                <li>• 10 major changes/M</li>
                <li>• 2 redesigns included</li>
                <li>• Standard support</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h4 className="text-lg font-bold text-on-secondary mb-2">Tier 4</h4>
              <div className="text-2xl font-bold text-primary mb-3">₹1,499</div>
              <div className="text-sm text-on-tertiary mb-4">/ Year</div>
              <ul className="text-sm text-on-tertiary space-y-2">
                <li>• 5 major changes/M</li>
                <li>• No redesigns</li>
                <li>• Basic support</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-on-tertiary">
              *Domain Charges and Gateway Fees Applicable Separately | All prices are subject to taxes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
