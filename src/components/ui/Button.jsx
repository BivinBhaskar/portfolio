import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600/50 border border-purple-600/20';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-600/50',
    secondary: 'bg-black/80 border border-purple-600/20 text-purple-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-600/30',
    ghost: 'text-soft-gray hover:text-purple-400 hover:bg-black/50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href, ...props } : { onClick, type: 'button', ...props };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Component className={classes} {...componentProps}>
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;
