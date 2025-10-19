import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      staggerChildren: 0.1, 
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};

const SkillCard = ({ name, icon, index }) => (
  <motion.div
    variants={skillItemVariants}
    className="group flex flex-col items-center p-6 bg-secondary-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent-1/30"
    whileHover={{ 
      y: -8, 
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0, 245, 195, 0.15)"
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <motion.div 
      className="text-accent-1 text-4xl mb-3"
      whileHover={{ 
        rotate: [0, -10, 10, 0],
        scale: 1.1
      }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <span className="text-text-primary text-sm font-mono font-medium group-hover:text-accent-1 transition-colors duration-300">
      {name}
    </span>
  </motion.div>
);

const CompetencyTag = ({ competency, index }) => (
  <motion.span
    variants={skillItemVariants}
    className="bg-secondary-bg text-text-secondary py-3 px-5 rounded-full text-sm font-mono shadow-md hover:shadow-lg border border-transparent hover:border-accent-1/30 transition-all duration-300 cursor-default"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(0, 245, 195, 0.1)"
    }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
  >
    {competency}
  </motion.span>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary-bg relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-accent-1 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-accent-2 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle id="skills-title">My Tech Arsenal</SectionTitle>
        
        <div className="space-y-16">
          {/* Languages */}
          <motion.div 
            variants={skillCategoryVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-accent-2 mb-8 font-mono text-center"
              whileHover={{ scale: 1.05 }}
            >
              Languages
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.languages.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div 
            variants={skillCategoryVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-accent-2 mb-8 font-mono text-center"
              whileHover={{ scale: 1.05 }}
            >
              Frameworks & Libraries
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.frameworksAndLibraries.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div 
            variants={skillCategoryVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-accent-2 mb-8 font-mono text-center"
              whileHover={{ scale: 1.05 }}
            >
              Tools & Platforms
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.toolsAndPlatforms.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Core Competencies */}
          <motion.div 
            variants={skillCategoryVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-accent-2 mb-8 font-mono text-center"
              whileHover={{ scale: 1.05 }}
            >
              Core Competencies
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.coreCompetencies.map((competency, index) => (
                <CompetencyTag key={index} competency={competency} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;