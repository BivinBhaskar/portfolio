import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import Button from './ui/Button';
import { personalData } from '../data/personalData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullName = personalData.name;

  // Scroll-based animation for photo
  const { scrollYProgress } = useScroll();

  const photoScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [1, 0.35, 0.005]
  );

  const photoOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    [1, 0.4, 0]
  );

  // Typewriter effect with loop
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 800);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fullName]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[70vh]">

          {/* Left: Profile Image */}
          <div className="flex justify-center lg:justify-start lg:pt-8">
            <motion.div
              className="relative origin-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                scale: photoScale,
                opacity: photoOpacity,
              }}
              whileHover={{
                scale:
                  photoScale.get() > 0.2
                    ? photoScale.get() * 1.03
                    : photoScale.get(),
              }}
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-purple-600/30 shadow-2xl shadow-purple-700/40 bg-gradient-to-br from-black to-black">
                <img
                  src="/profile.jpg"
                  alt={personalData.name}
                  className="w-full h-full object-cover object-[50%_25%] transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right: Content */}
          <motion.div
            className="text-center lg:text-left lg:pt-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight relative">
              <span className="text-purple-400">Hi, I'm</span>
              <br />

              {/* Width reserver */}
              <span className="block font-hero-display text-purple-600 opacity-0 select-none">
                {fullName}
              </span>

              {/* Typewriter text */}
              <span className="absolute left-0 top-[3.2rem] md:top-[3.8rem] lg:top-[4.5rem] text-purple-600 font-hero-display">
                {displayText}
                <motion.span
                  animate={{ opacity: [0, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-1 h-8 bg-purple-600 ml-1 align-middle"
                />
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-lg md:text-xl lg:text-2xl text-purple-300/80 mb-8 font-light leading-relaxed font-hero-modern">
              {personalData.title2}
            </h2>

            {/* Button */}
            <div className="mb-8">
              <Button
                href="#about"
                size="sm"
                className="group bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-purple-600/50 transition-all duration-300"
              >
                Know More
                <ArrowDown
                  className="ml-2 group-hover:translate-y-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row flex-nowrap justify-center lg:justify-start items-center space-x-4 mb-8">
              <motion.a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-purple-600/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-purple-300 hover:text-purple-500" />
              </motion.a>

              <motion.a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-purple-600/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-purple-300 hover:text-purple-500" />
              </motion.a>

              <motion.a
                href={`mailto:${personalData.email}`}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-purple-600/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-purple-300 hover:text-purple-500" />
              </motion.a>

              <a
                href="https://drive.google.com/file/d/1khmYcJJvuVgaloZxfNW5OvGhbSY4OVC1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-300/50 hover:text-purple-500"
                >
                  <Download className="mr-2" size={14} />
                  Get Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
