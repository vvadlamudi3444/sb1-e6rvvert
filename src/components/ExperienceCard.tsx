import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Server, Shield, Wrench } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  inView: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, inView }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="text-purple-600" size={24} />;
      case 1:
        return <Server className="text-purple-600" size={24} />;
      case 2:
        return <Wrench className="text-purple-600" size={24} />;
      default:
        return <Briefcase className="text-purple-600" size={24} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {getIcon(index)}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">{experience.role}</h3>
          <p className="text-purple-600 font-medium">{experience.company}</p>
          <p className="text-gray-500 text-sm mb-4">{experience.period} | {experience.location}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="text-sm">{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;