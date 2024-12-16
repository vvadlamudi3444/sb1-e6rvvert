import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Monitor, Shield, Cloud } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <motion.div 
        className="container mx-auto px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedText 
          text="Desktop Transformation Expert"
          className="text-5xl md:text-7xl font-bold mb-6"
          gradient
        />

        <motion.div 
          className="text-xl md:text-2xl text-gray-600 mb-8 space-y-4"
          variants={itemVariants}
        >
          {[
            { icon: Monitor, text: 'Desktop Management & Consulting' },
            { icon: Shield, text: 'Infrastructure Services Expert' },
            { icon: Cloud, text: 'Cloud Solutions Architect' }
          ].map(({ icon: Icon, text }, index) => (
            <motion.p 
              key={index}
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <Icon className="text-purple-600" size={24} />
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            View Experience
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-purple-600" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;