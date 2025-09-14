'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Calendar, Heart } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  const values = [
    {
      title: "Our Mission",
      description: "Huguen is dedicated exclusively to the hospitality and hotel sector. We combine technology with design to create digital platforms that enhance guest experiences and drive revenue for hotels, resorts, villas, and homestays.",
      image: "/BeeRun.png"
    },
    {
      title: "Our Promise",
      description: "We deliver tailored solutions for the hospitality industry with scalable, secure, and performance-driven platforms. Our ongoing support keeps you ahead of the competition.",
      image: "/BeeSmile.png"
    },
    {
      title: "Our Vision",
      description: "At Huguen, we believe every hotel deserves a digital presence as elegant as the experience it offers. Our goal is to empower hospitality businesses with technology that reduces costs, drives direct bookings, and enhances guest trust.",
      image: "/BeeMountain.png"
    }
  ]

  return (
    <section id="about" ref={ref} className="min-h-screen bg-tertiary py-20">
      <div className="container-max-width section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-secondary mb-6">
            About <span className="text-gradient">Huguen</span>
          </h2>
          <p className="text-lg text-on-tertiary max-w-3xl mx-auto">
            Delhi-based full-stack solution firm dedicated exclusively to the hospitality sector. We combine technology with design to create digital platforms that enhance guest experiences and drive revenue.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-on-secondary mb-6">
              Transforming Hospitality Digitally
            </h3>
            <p className="text-on-tertiary mb-6 leading-relaxed">
              Huguen specializes in creating comprehensive digital solutions for the hospitality industry. 
              From custom websites to integrated booking systems, we help hotels, resorts, villas, and homestays 
              establish a strong online presence that drives direct bookings and enhances guest experiences.
            </p>
            <p className="text-on-tertiary mb-8 leading-relaxed">
              Our expertise spans across website development, payment gateway integration, channel management, 
              and digital marketing. We understand the unique challenges of the hospitality sector and deliver 
              solutions that not only look great but also perform exceptionally well.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View Our Services
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Huguen Technology Solutions"
                fill
                className="object-cover"
              />
            </div>
          
          </motion.div>
        </div>

        {/* Stats Section */}
    
        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-on-secondary text-center mb-12">
            Our Mission, Promise & Vision
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 1.0 + index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-on-secondary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-on-tertiary">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
