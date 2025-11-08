'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personalInfo'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <Logo variant="icon-only" size="sm" />
            <span className="text-dark-textSecondary">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-primary transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-dark-textSecondary hover:text-accent-primary transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
