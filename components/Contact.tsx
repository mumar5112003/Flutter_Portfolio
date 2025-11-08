'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personalInfo'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi'
import emailjs from '@emailjs/browser'
import { emailjsConfig, isEmailjsConfigured } from '@/lib/emailjs.config'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [emailjsReady, setEmailjsReady] = useState(false)

  useEffect(() => {
    // Initialize EmailJS
    console.log('EmailJS Config Check:', {
      publicKey: emailjsConfig.publicKey ? 'Set' : 'Missing',
      serviceId: emailjsConfig.serviceId ? 'Set' : 'Missing',
      templateId: emailjsConfig.templateId ? 'Set' : 'Missing',
      isConfigured: isEmailjsConfigured()
    })
    
    if (isEmailjsConfigured()) {
      emailjs.init(emailjsConfig.publicKey)
      setEmailjsReady(true)
      console.log('EmailJS initialized successfully')
    } else {
      console.warn('EmailJS not configured. Using mailto fallback.')
      console.warn('Make sure .env.local file exists and restart dev server.')
    }
  }, [])
  const contactMethods = [
    {
      icon: <HiMail className="w-6 h-6" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-highlight mx-auto"></div>
          <p className="text-dark-textSecondary mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent-primary/20 rounded-lg text-accent-primary">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-text mb-1">
                      {method.label}
                    </h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-dark-textSecondary hover:text-accent-primary transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-dark-textSecondary">{method.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-dark-text mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-card border border-dark-border rounded-lg text-dark-textSecondary hover:border-accent-primary hover:text-accent-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-dark-card border border-dark-border rounded-lg text-dark-textSecondary hover:border-accent-primary hover:text-accent-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-dark-text mb-6">Send a Message</h3>
            <form 
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault()
                setFormStatus('loading')
                setFormMessage('')

                const form = e.target as HTMLFormElement
                const formData = new FormData(form)
                const name = formData.get('name') as string
                const email = formData.get('email') as string
                const message = formData.get('message') as string

                try {
                  // Try EmailJS first if configured
                  console.log('Form submission - EmailJS status:', {
                    emailjsReady,
                    isConfigured: isEmailjsConfigured(),
                    serviceId: emailjsConfig.serviceId,
                    templateId: emailjsConfig.templateId
                  })
                  
                  if (emailjsReady && isEmailjsConfigured()) {
                    const templateParams = {
                      from_name: name,
                      from_email: email,
                      message: message,
                      to_email: personalInfo.email,
                      reply_to: email,
                    }

                    console.log('Sending email via EmailJS...', templateParams)
                    await emailjs.send(
                      emailjsConfig.serviceId,
                      emailjsConfig.templateId,
                      templateParams
                    )
                    console.log('Email sent successfully via EmailJS')

                    setFormStatus('success')
                    setFormMessage('Message sent successfully! I\'ll get back to you soon.')
                    form.reset()

                    // Reset status after 5 seconds
                    setTimeout(() => {
                      setFormStatus('idle')
                      setFormMessage('')
                    }, 5000)
                  } else {
                    // Fallback to mailto if EmailJS is not configured
                    const subject = `Portfolio Contact: ${name}`
                    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                    
                    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    
                    setFormStatus('success')
                    setFormMessage('Your email client should open. If it doesn\'t, please send an email directly to ' + personalInfo.email)
                    
                    setTimeout(() => {
                      form.reset()
                      setFormStatus('idle')
                      setFormMessage('')
                    }, 5000)
                  }
                } catch (error) {
                  console.error('Error sending message:', error)
                  setFormStatus('error')
                  setFormMessage('Failed to send message. Please try again or email directly at ' + personalInfo.email)
                  
                  // Reset error message after 5 seconds
                  setTimeout(() => {
                    setFormStatus('idle')
                    setFormMessage('')
                  }, 5000)
                }
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-textSecondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-textSecondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-textSecondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              {/* Status Message */}
              {formMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-start space-x-3 ${
                    formStatus === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : formStatus === 'error'
                      ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                      : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                  }`}
                >
                  {formStatus === 'success' ? (
                    <HiCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : formStatus === 'error' ? (
                    <HiXCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : null}
                  <p className="text-sm">{formMessage}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full px-6 py-3 bg-accent-primary text-white rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={formStatus === 'loading' ? {} : { scale: 1.02 }}
                whileTap={formStatus === 'loading' ? {} : { scale: 0.98 }}
              >
                {formStatus === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
