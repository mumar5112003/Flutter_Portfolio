'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from './Logo'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    
    // Set mounted state to prevent layout shift
    setIsMounted(true)
    
    // Set initial scroll state
    setIsScrolled(window.pageYOffset > 50)
    
    let lastScrollTop = 0
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          setIsScrolled(scrollTop > 50)
          lastScrollTop = scrollTop
          ticking = false
        })
        ticking = true
      }
    }

    // Prevent viewport resize on mobile
    const handleResize = () => {
      // Force navbar to stay at top
      const nav = document.querySelector('nav')
      if (nav) {
        nav.style.top = '0px'
      }
    }

    // Handle viewport height changes on mobile
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setViewportHeight()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', () => {
      checkMobile()
      handleResize()
      setViewportHeight()
    }, { passive: true })
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        checkMobile()
        setViewportHeight()
        fixNavbarPosition()
      }, 100)
    }, { passive: true })
    
    // Fix for iOS Safari address bar - multiple attempts
    const fixNavbarPosition = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        nav.style.position = 'fixed'
        nav.style.top = '0px'
        nav.style.left = '0px'
        nav.style.right = '0px'
        nav.style.transform = 'translate3d(0, 0, 0)'
        nav.style.webkitTransform = 'translate3d(0, 0, 0)'
      }
    }
    
    // Fix immediately and on intervals
    fixNavbarPosition()
    setTimeout(() => {
      setViewportHeight()
      fixNavbarPosition()
      // Prevent scroll to top if user has scrolled
      if (window.pageYOffset === 0) {
        window.scrollTo(0, 0)
      }
    }, 50)
    
    setTimeout(() => {
      setViewportHeight()
      fixNavbarPosition()
    }, 200)
    
    setTimeout(() => {
      setViewportHeight()
      fixNavbarPosition()
    }, 500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('resize', setViewportHeight)
      window.removeEventListener('orientationchange', setViewportHeight)
    }
  }, [])

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    
    if (!element) {
      return false
    }
    
    // Get element position relative to document
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const navbarHeight = 80
    const elementTop = rect.top + scrollTop
    const offsetPosition = elementTop - navbarHeight
    
    // Scroll to position
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    })
    
    return true
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Close mobile menu
    setIsMobileMenuOpen(false)
    
    // Extract section ID from href
    const sectionId = href.replace('#', '')
    
    // Use requestAnimationFrame for better mobile compatibility
    requestAnimationFrame(() => {
      if (sectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        return
      }
      
      // Try scrolling immediately
      if (!scrollToElement(sectionId)) {
        // If element not found, wait a bit and try again
        setTimeout(() => {
          if (!scrollToElement(sectionId)) {
            // Last resort: use hash navigation
            window.location.hash = href
            // Scroll after hash change
            setTimeout(() => scrollToElement(sectionId), 50)
          }
        }, 100)
      }
    })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        width: '100%',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        margin: 0,
        padding: 0,
        zIndex: 9999
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
            className="flex items-center cursor-pointer"
          >
            <Logo variant="default" size="md" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '')
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    if (sectionId === 'home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else {
                      scrollToElement(sectionId)
                    }
                  }}
                  className="text-dark-textSecondary hover:text-accent-primary transition-colors duration-200 font-medium cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-text p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-dark-border"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-2 text-dark-textSecondary hover:text-accent-primary hover:bg-dark-card rounded-lg transition-colors duration-200 active:bg-dark-card active:text-accent-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
