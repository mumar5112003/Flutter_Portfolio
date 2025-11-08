'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personalInfo'
import { HiAcademicCap, HiBriefcase, HiLocationMarker } from 'react-icons/hi'

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-highlight mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl p-8 card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-accent-primary">Bio</h3>
            <p className="text-dark-textSecondary leading-relaxed mb-6">
              {personalInfo.objective}
            </p>
            <div className="flex items-center space-x-2 text-dark-textSecondary">
              <HiLocationMarker className="w-5 h-5 text-accent-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl p-8 card-hover"
          >
            <div className="flex items-center space-x-3 mb-4">
              <HiAcademicCap className="w-8 h-8 text-accent-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-dark-text">
                {personalInfo.education.degree}
              </p>
              <p className="text-dark-textSecondary">
                {personalInfo.education.university}
              </p>
              <p className="text-dark-textSecondary">
                {personalInfo.education.period}
              </p>
              <p className="text-accent-primary font-semibold">
                CGPA: {personalInfo.education.cgpa}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <div className="flex items-center space-x-3 mb-8">
            <HiBriefcase className="w-8 h-8 text-accent-primary" />
            <h3 className="text-3xl font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {personalInfo.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-6 card-hover border-l-4 border-accent-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-dark-text">{exp.title}</h4>
                    <p className="text-accent-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-dark-textSecondary text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-dark-textSecondary ml-4">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
