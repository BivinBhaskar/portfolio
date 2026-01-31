import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building } from 'lucide-react';
import Card from './ui/Card';
import { certificationsData } from '../data/personalData';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
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

  const glassClass =
    'glass-card bg-white/5 backdrop-blur-xl border border-soft-gray/10';

  return (
    <section id="certifications" className="py-16 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
          <p className="text-soft-gray/70 mt-4 max-w-xl mx-auto text-sm">
            Professional certifications and continuous learning in software development,
            data science, and AI
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificationsData.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`${glassClass} h-full p-4
                  hover:border-purple-600/30
                  hover:shadow-lg hover:shadow-purple-600/10
                  transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-purple-600/15 backdrop-blur-md mr-3">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-off-white group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-soft-gray/70">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-center text-xs text-soft-gray/60 mb-2">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {cert.year}
                </div>

                {/* Issuer Footer */}
                <div className="pt-2 border-t border-soft-gray/10">
                  <div className="flex items-center justify-between text-xs text-soft-gray/60">
                    <div className="flex items-center">
                      <Building className="w-3 h-3 mr-1" />
                      {cert.issuer}
                    </div>
                    <div className="px-2 py-0.5 rounded text-[10px]
                      bg-purple-600/10 text-purple-400
                      border border-purple-600/20 backdrop-blur-sm">
                      Verified
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { count: '5+', label: 'Certifications' },
            { count: '3+', label: 'Institutions' },
            { count: '2025', label: 'Latest Year' },
            { count: 'AI/ML', label: 'Focus Area' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`${glassClass} p-3 text-center text-xs
                hover:border-purple-600/30 hover:shadow-lg hover:shadow-purple-600/10
                transition-all duration-300`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-xl font-bold text-purple-400 mb-1">
                {stat.count}
              </div>
              <div className="text-soft-gray/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card
            className={`${glassClass} max-w-3xl mx-auto p-5
              hover:border-purple-600/30
              hover:shadow-lg hover:shadow-purple-600/10
              transition-all duration-300`}
          >
            <div className="flex items-center justify-center mb-3">
              <div className="p-2 rounded-lg bg-purple-600/15 backdrop-blur-md">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-off-white mb-2">
              Commitment to Continuous Learning
            </h3>

            <p className="text-soft-gray/70 text-sm leading-relaxed">
              I believe in staying current with the latest technologies and best practices.
              My certifications reflect my dedication to mastering both established and
              emerging technologies in software development, data science, and artificial intelligence.
            </p>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
