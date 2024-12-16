import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className="hidden md:flex space-x-8"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {navItems.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          className="text-gray-600 hover:text-purple-600 transition-colors"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {item.label}
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default Navigation;