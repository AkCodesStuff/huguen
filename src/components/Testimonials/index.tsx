'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Hotel Owner",
      location: "Delhi, India",
      rating: 5,
      text: "Huguen transformed our hotel's digital presence completely. Our direct bookings increased by 40% within 3 months. The website is beautiful and the booking system works flawlessly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },

    {
      name: "Amit Patel",
      role: "Villa Owner",
      location: "Udaipur, India",
      rating: 5,
      text: "From website design to channel management, Huguen handled everything seamlessly. Our online visibility improved dramatically and guest bookings are now much easier to manage.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sunita Reddy",
      role: "Homestay Owner",
      location: "Kerala, India",
      rating: 5,
      text: "The SEO services brought us so many new guests. Huguen made our small homestay look as professional as any luxury hotel online. Amazing work!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },


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
    <section id="testimonials" ref={ref} className="min-h-screen bg-secondary py-20">
      <div className="container-max-width section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-secondary mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-on-tertiary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued hospitality clients have to say about their digital transformation journey with Huguen.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-primary text-on-primary p-2 rounded-full">
                <Quote className="w-6 h-6" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-on-tertiary mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Guest Info */}
           
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-tertiary rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-on-secondary mb-6">
              Exceptional Client Satisfaction
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-on-tertiary">Overall Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-on-tertiary">Would Recommend</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-on-tertiary">Hotels Served</div>
              </div>
            </div>

            <p className="text-on-tertiary text-lg max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the consistently high ratings and 
              positive feedback from our hospitality clients. We're proud to be recognized as 
              a leading technology partner for the hospitality industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
