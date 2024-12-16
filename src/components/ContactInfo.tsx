import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = {
    email: 'kuchihr7@gmail.com',
    phone: '(425) 494 8785',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername'
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9 }
  };

  return (
    <div className="flex items-center space-x-6">
      <motion.a
        href={`mailto:${contactDetails.email}`}
        className="flex items-center text-sm text-gray-600 hover:text-purple-600"
        whileHover="hover"
        whileTap="tap"
        variants={iconVariants}
      >
        <Mail size={16} className="mr-1" />
        <span className="hidden md:inline">{contactDetails.email}</span>
      </motion.a>
      
      <motion.a
        href={`tel:${contactDetails.phone.replace(/[()-\s]/g, '')}`}
        className="flex items-center text-sm text-gray-600 hover:text-purple-600"
        whileHover="hover"
        whileTap="tap"
        variants={iconVariants}
      >
        <Phone size={16} className="mr-1" />
        <span className="hidden md:inline">{contactDetails.phone}</span>
      </motion.a>

      <div className="flex space-x-4">
        <motion.a
          href={contactDetails.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600"
          whileHover="hover"
          whileTap="tap"
          variants={iconVariants}
        >
          <Linkedin size={20} />
        </motion.a>
        <motion.a
          href={contactDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600"
          whileHover="hover"
          whileTap="tap"
          variants={iconVariants}
        >
          <Github size={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default ContactInfo;