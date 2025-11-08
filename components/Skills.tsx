'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export default function Skills() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-highlight mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{skillCategory.icon}</span>
                <h3 className="text-xl font-bold text-accent-primary">
                  {skillCategory.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-sm text-dark-textSecondary hover:border-accent-primary hover:text-accent-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
