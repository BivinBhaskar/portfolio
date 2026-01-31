import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/personalData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black">
      <div className="glass-card border-t border-soft-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          
          {/* Main Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <motion.p
              className="text-soft-gray/60 text-xs text-center md:text-left"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              © {currentYear} Designed & Developed by{' '}
              <span className="text-purple-600 font-medium font-hero-script">
                Bivin Bhaskar
              </span>
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-4 justify-center md:justify-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <motion.a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray hover:text-electric-blue transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray hover:text-electric-blue transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                href={`mailto:${personalData.email}`}
                className="text-soft-gray hover:text-electric-blue transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
