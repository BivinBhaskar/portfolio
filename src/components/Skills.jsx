import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Code2, BarChart3 } from 'lucide-react';
import Card from './ui/Card';
import { skillsData } from '../data/personalData';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const skillCategories = [
    { title: 'Backend & .NET', icon: Code2, skills: skillsData.backend, color: 'purple-600' },
    { title: 'Frontend', icon: Code2, skills: skillsData.frontend, color: 'purple-400' },
    { title: 'Database', icon: Database, skills: skillsData.database, color: 'purple-600' },
    { title: 'Cloud & Tools', icon: Cloud, skills: skillsData.cloudTools, color: 'purple-400' },
    { title: 'Data Analytics', icon: BarChart3, skills: skillsData.dataAnalytics, color: 'purple-600' }
  ];

  const glassClass =
    'bg-black border border-purple-600/20';

  return (
    <section id="skills" className="py-16 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
          <p className="text-soft-gray/70 mt-4 max-w-xl mx-auto text-sm">
            Comprehensive skill set spanning backend development, frontend technologies,
            databases, cloud services, and data analytics
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card
                className={`${glassClass} h-full p-4 rounded-lg
                  hover:border-purple-400/50
                  hover:shadow-xl hover:shadow-purple-600/30
                  transition-all duration-500 group`}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-3">
                  <div className="p-1.5 rounded-md bg-black/50 border border-purple-600/20 mr-2">
                    <category.icon className={`w-4 h-4 text-${category.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-off-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center justify-between
                        p-2 rounded-md text-xs
                        bg-black/50 backdrop-blur-sm
                        border border-purple-600/20
                        hover:border-purple-400/50
                        transition-all duration-300"
                    >
                      <span className="text-soft-gray font-medium">
                        {skill}
                      </span>

                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${
                              i < 2 ? 'bg-purple-500' : 'bg-soft-gray/30'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className={`${glassClass} inline-block px-4 py-2 text-xs rounded-lg
            hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-600/20
            transition-all duration-300`}>
            <div className="flex items-center space-x-4">

              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <span className="text-soft-gray">Expert</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <div className="w-2 h-2 rounded-full bg-soft-gray/30" />
                </div>
                <span className="text-soft-gray">Proficient</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <div className="w-2 h-2 rounded-full bg-soft-gray/30" />
                  <div className="w-2 h-2 rounded-full bg-soft-gray/30" />
                </div>
                <span className="text-soft-gray">Familiar</span>
              </div>

            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
