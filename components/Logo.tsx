'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface LogoProps {
  variant?: 'default' | 'icon-only' | 'text-only'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ variant = 'default', size = 'md', className = '' }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 md:w-12 md:h-12',
    lg: 'w-16 h-16 md:w-20 md:h-20'
  }

  const textSizes = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl lg:text-2xl',
    lg: 'text-2xl md:text-3xl lg:text-4xl'
  }

  return (
    <motion.div
      className={`flex items-center space-x-2 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Flutter-inspired Icon */}
      {(variant === 'default' || variant === 'icon-only') && (
        <motion.svg
          className={`${sizeClasses[size]} flex-shrink-0`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          <defs>
            {/* Flutter blue to teal gradient */}
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#027DFD" />
              <stop offset="50%" stopColor="#42A5F5" />
              <stop offset="100%" stopColor="#66BB6A" />
            </linearGradient>
            {/* Accent gradient matching portfolio theme */}
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          
          {/* Rounded square background with gradient */}
          <motion.rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="18"
            fill="url(#logoGradient)"
            animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
          
          {/* Stylized "F" letter */}
          <motion.path
            d="M 32 28 L 32 72 L 40 72 L 40 52 L 58 52 L 62 48 L 62 44 L 40 44 L 40 36 L 68 36 L 68 28 Z"
            fill="white"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          
          {/* Small decorative dot */}
          <motion.circle
            cx="72"
            cy="32"
            r="6"
            fill="url(#accentGradient)"
            animate={isHovered ? { scale: [1, 1.4, 1], opacity: [1, 0.8, 1] } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
        </motion.svg>
      )}

      {/* Text */}
      {(variant === 'default' || variant === 'text-only') && (
        <motion.span
          className={`font-bold ${textSizes[size]}`}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={isHovered ? { x: [0, 2, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          Mr. Flutter
        </motion.span>
      )}
    </motion.div>
  )
}
