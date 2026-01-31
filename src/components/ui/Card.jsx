import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = true,
  ...props 
}) => {
  const baseClasses = 'rounded-lg p-4 transition-all duration-300';
  const glassClasses = glass ? 'glass-card' : 'bg-black border border-purple-600/20';
  const hoverClasses = hover ? 'hover-glow hover:border-purple-400/50' : '';
  
  const classes = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
