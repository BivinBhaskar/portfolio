import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/personalData';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const glassClass =
    'bg-black border border-purple-600/20';

  return (
    <section id="experience" className="py-12 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            <span className="gradient-text">My Career & Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
          <p className="text-soft-gray/70 mt-3 max-w-xl mx-auto text-sm">
            My journey through enterprise software development, specializing in ERP and CRM systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2
            w-0.5 h-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600" />

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2
                  w-3 h-3 bg-purple-500 rounded-full
                  border-2 border-black shadow-lg shadow-purple-500/50 z-10"
                />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-6 md:text-right' : 'md:pl-6'
                  }`}
                >
                  <motion.div
                    className={`${glassClass} p-4 rounded-lg
                      hover:border-purple-400/60
                      hover:shadow-xl hover:shadow-purple-600/30
                      transition-all duration-500 group relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Company Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-left">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-400/20 border border-purple-600/30 mr-2">
                          <Briefcase className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-off-white text-left">
                            {exp.company}
                          </h3>
                          <div className="flex items-center text-xs text-purple-300 mt-0.5">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 rounded-full bg-purple-600/10 border border-purple-600/20">
                        <span className="text-xs text-purple-400 font-medium">
                          {index === 0 ? 'Current' : 'Previous'}
                        </span>
                      </div>
                    </div>

                    {/* Position Title */}
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-purple-300 mb-1">
                        {exp.position}
                      </h4>
                      <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent" />
                    </div>

                    {/* Achievements */}
                    <div className="space-y-1.5">
                      <h5 className="text-[10px] font-semibold text-soft-gray/60 uppercase tracking-wider">
                        Key Achievements
                      </h5>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className="flex items-start group/item"
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.25, delay: 0.1 * achIndex }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-1 mr-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                          <span className="text-xs text-soft-gray/80 leading-snug group-hover/item:text-off-white transition-colors duration-200">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Summary */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className={`${glassClass} inline-block px-4 py-2 rounded-lg
              hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-600/30
              transition-all duration-500 group relative overflow-hidden`}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)'
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mr-2">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-soft-gray/70">
                  Professional Experience
                </p>
                <p className="text-sm font-semibold text-purple-300">
                  1.5+ years in Software Development
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
