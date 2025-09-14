'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'
import { useEffect, useRef, useState, useCallback } from 'react'

interface MousePosition {
  x: number
  y: number
}

interface HexagonProps {
  x: number
  y: number
  baseSize: number
  distance: number
  hoverRadius: number
}

const HoneycombBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })

  const drawHexagon = useCallback((
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    fillColor: string,
    strokeColor: string
  ): void => {
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i
      const xPos = x + size * Math.cos(angle)
      const yPos = y + size * Math.sin(angle)
      if (i === 0) {
        ctx.moveTo(xPos, yPos)
      } else {
        ctx.lineTo(xPos, yPos)
      }
    }
    ctx.closePath()
    ctx.fillStyle = fillColor
    ctx.fill()
    ctx.strokeStyle = strokeColor
    ctx.lineWidth = 1.5
    ctx.stroke()
  }, [])

  const getDistance = useCallback((x1: number, y1: number, x2: number, y2: number): number => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  }, [])

  const calculateHexagonStyle = useCallback(({ x, y, baseSize, distance, hoverRadius }: HexagonProps) => {
    let fillColor = 'white'
    let size = baseSize

    if (distance < hoverRadius) {
      const intensity = 1 - (distance / hoverRadius)
      
      // Color transition - more vibrant yellow
      const yellow = Math.floor(255 * intensity)
      fillColor = `rgb(255, ${255 - yellow * 0.4}, ${255 - yellow * 0.9})`
      
      // Size increase for popping effect
      const sizeMultiplier = 1 + (intensity * 0.3) // Up to 30% size increase
      size = baseSize * sizeMultiplier
    }

    return { fillColor, size }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Hexagon properties
    const hexSize = 35
    const hexHeight = hexSize * Math.sqrt(3)
    const hexWidth = hexSize * 2
    const vertDist = hexHeight * 0.75
    const horizDist = hexWidth * 0.75
    const hoverRadius = 140

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cols = Math.ceil(canvas.width / horizDist) + 2
      const rows = Math.ceil(canvas.height / vertDist) + 2

      // Store hexagon data for sorting
      const hexagons: Array<{
        x: number
        y: number
        distance: number
        fillColor: string
        size: number
      }> = []

      // Calculate all hexagon properties
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * horizDist + (row % 2 === 1 ? horizDist / 2 : 0)
          const y = row * vertDist

          const distance = getDistance(mousePos.x, mousePos.y, x, y)
          const { fillColor, size } = calculateHexagonStyle({
            x,
            y,
            baseSize: hexSize * 0.8,
            distance,
            hoverRadius
          })

          hexagons.push({ x, y, distance, fillColor, size })
        }
      }

      // Sort hexagons by distance (farthest first) to ensure proper layering
      hexagons.sort((a, b) => b.distance - a.distance)

      // Draw all hexagons
      hexagons.forEach(({ x, y, fillColor, size }) => {
        drawHexagon(ctx, x, y, size, fillColor, '#d1d5db')
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    const handleMouseLeave = (): void => {
      setMousePos({ x: -1000, y: -1000 }) // Move cursor off-screen
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos, drawHexagon, getDistance, calculateHexagonStyle])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: '#f9fafb' }}
    />
  )
}

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
      {/* Honeycomb Background */}
      <HoneycombBackground />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/5 z-5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-max-width section-padding text-center pointer-events-none">
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
            <span className="ml-2 text-gray-800 text-sm font-medium">5.0 Rating</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Transform Your{' '}
            <span className="text-gradient">Hospitality</span>
            <br />
            Business Digitally
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={handleGetStartedClick}
              type="button"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-lg p-2"
        type="button"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-700"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero