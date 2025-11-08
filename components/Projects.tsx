'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { HiExternalLink, HiX } from 'react-icons/hi'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (selectedProject !== null) {
      setSelectedImageIndex(0)
      setImageErrors({})
    }
  }, [selectedProject])

  const handleImageError = (imagePath: string) => {
    setImageErrors(prev => ({ ...prev, [imagePath]: true }))
    console.error('Failed to load image:', imagePath)
  }

  const getImageSrc = (imagePath: string) => {
    // Ensure path starts with / for absolute paths
    if (!imagePath.startsWith('/')) {
      return `/${imagePath}`
    }
    return imagePath
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-highlight mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-effect rounded-2xl overflow-hidden card-hover group flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-[3/4] max-w-[280px] mx-auto overflow-hidden bg-dark-card flex items-center justify-center">
                <img
                  src={getImageSrc(project.images[0])}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={() => handleImageError(project.images[0])}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <motion.button
                    onClick={() => setSelectedProject(index)}
                    className="w-full px-4 py-2 bg-accent-primary text-white rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-dark-text">{project.title}</h3>
                <p className="text-dark-textSecondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-xs text-dark-textSecondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-xs text-dark-textSecondary">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      <span className="text-sm">Website</span>
                      <HiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.playstore && (
                    <a
                      href={project.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      <span className="text-sm">Play Store</span>
                      <HiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-bg/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject !== null && (
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold text-dark-text">
                        {projects[selectedProject].title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-dark-textSecondary hover:text-dark-text transition-colors"
                      >
                        <HiX className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Main Image Display */}
                    <div className="mb-4">
                      <div className="relative w-full aspect-[3/4] min-h-[400px] max-h-[600px] rounded-lg overflow-hidden bg-dark-card flex items-center justify-center p-4">
                        {imageErrors[projects[selectedProject].images[selectedImageIndex]] ? (
                          <div className="text-center text-dark-textSecondary">
                            <p className="mb-2">Image failed to load</p>
                            <p className="text-sm">Path: {projects[selectedProject].images[selectedImageIndex]}</p>
                          </div>
                        ) : (
                          <img
                            key={`main-${selectedImageIndex}-${projects[selectedProject].id}`}
                            src={getImageSrc(projects[selectedProject].images[selectedImageIndex])}
                            alt={`${projects[selectedProject].title} - Image ${selectedImageIndex + 1}`}
                            className="w-full h-full object-contain max-w-full max-h-full"
                            loading="eager"
                            onError={() => handleImageError(projects[selectedProject].images[selectedImageIndex])}
                          />
                        )}
                      </div>
                    </div>

                    {/* Image Gallery Thumbnails */}
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-6">
                      {projects[selectedProject].images.map((image, imgIndex) => (
                        <button
                          key={`thumb-${imgIndex}-${projects[selectedProject].id}`}
                          onClick={() => setSelectedImageIndex(imgIndex)}
                          className={`relative aspect-[3/4] h-20 md:h-24 rounded-lg overflow-hidden bg-dark-card border-2 transition-all flex items-center justify-center ${
                            selectedImageIndex === imgIndex
                              ? 'border-accent-primary ring-2 ring-accent-primary/50'
                              : 'border-dark-border hover:border-accent-primary/50'
                          }`}
                        >
                          {imageErrors[image] ? (
                            <div className="text-xs text-dark-textSecondary text-center p-2">
                              Error
                            </div>
                          ) : (
                            <img
                              src={getImageSrc(image)}
                              alt={`${projects[selectedProject].title} - Thumbnail ${imgIndex + 1}`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                              onError={() => handleImageError(image)}
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-dark-textSecondary mb-6 leading-relaxed">
                      {projects[selectedProject].fullDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-dark-text mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-dark-textSecondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      {projects[selectedProject].links.website && (
                        <a
                          href={projects[selectedProject].links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-accent-primary text-white rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors flex items-center space-x-2"
                        >
                          <span>Visit Website</span>
                          <HiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {projects[selectedProject].links.playstore && (
                        <a
                          href={projects[selectedProject].links.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 glass-effect border border-dark-border text-dark-text rounded-lg font-semibold hover:border-accent-primary transition-colors flex items-center space-x-2"
                        >
                          <span>Play Store</span>
                          <HiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
