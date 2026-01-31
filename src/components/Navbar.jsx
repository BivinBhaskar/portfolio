import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/personalData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Certifications',
    'Contact',
  ];

  return (
    <motion.nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'glass-card border-none'
      : 'bg-transparent'
  }`}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo */}
<motion.div
  className="flex-shrink-0"
  whileHover={{ scale: 1.05 }}
>
  <a href="#hero" className="gradient-text text-lg font-hero-script">
    {personalData.name}
  </a>
</motion.div>

          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-soft-gray hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-gray hover:text-purple-600 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-gray hover:text-purple-600 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalData.email}`}
              className="text-soft-gray hover:text-purple-600 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-soft-gray hover:text-purple-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden glass-card mt-4 shadow-lg shadow-purple-900/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-soft-gray hover:text-purple-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="flex space-x-4 px-3 py-2">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gray hover:text-purple-600 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gray hover:text-purple-600 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-soft-gray hover:text-purple-600 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
