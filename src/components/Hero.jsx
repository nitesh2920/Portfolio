import { TypeAnimation } from 'react-type-animation';
import { personalInfo, socialLinks, achievementsAndLeadership } from '../data/portfolioData.jsx';
import { FaDownload, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { scrollToElement } from '../utils/lenisScroll.js';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary-bg relative overflow-hidden">
      {/* Static background elements for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-1 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-2 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-1 rounded-full opacity-25"></div>
      </div>
      
      <motion.div
        className="container mx-auto mt-9 px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Latest Achievement Banner */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative group"
        >
          <button
            onClick={() => scrollToElement('experience')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-1/10 via-accent-2/10 to-accent-1/10 backdrop-blur-sm border border-accent-1/30 rounded-full px-6 py-3 shadow-lg cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-105 relative"
            title="Click to view all achievements"
          >
            <div className="text-accent-1">
              <FaTrophy size={20} />
            </div>
            
            <div className="text-left">
              <div className="text-accent-1 font-bold text-sm sm:text-base font-mono">
                🎉 {achievementsAndLeadership[0].role}
              </div>
              <div className="text-text-secondary text-xs sm:text-sm">
                {achievementsAndLeadership[0].organization} • {achievementsAndLeadership[0].duration}
              </div>
            </div>
            
            <div className="px-3 py-1 bg-accent-1/20 text-accent-1 text-xs font-bold rounded-full border border-accent-1/50">
              NEW
            </div>
          </button>
          
          {/* Hover tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-secondary-bg text-text-primary px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            Click to view all achievements
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary-bg rotate-45"></div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-accent-1 font-mono text-lg md:mt-6 sm:text-xl mb-3">
            Hi, my name is
          </h3>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-text-primary mb-4">
            {personalInfo.name}.
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-secondary mb-6">
            <TypeAnimation
              sequence={[
                'I build things for the web.',
                2000,
                'I am a Full Stack Developer.',
                2000,
                'I love to code.',
                2000,
                'I solve problems.',
                2000,
                'I create digital experiences.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </h2>
          
          <p className="text-text-secondary max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button
            onClick={() => scrollToElement('projects')}
            className="px-8 py-4 font-mono text-lg bg-accent-1 text-primary-bg rounded-lg cursor-pointer shadow-lg transition-all duration-200 hover:bg-opacity-90 hover:shadow-xl"
          >
            View My Work
          </button>
          
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 font-mono text-lg border-2 border-accent-1 text-accent-1 rounded-lg hover:bg-accent-1 hover:text-primary-bg transition-all duration-200 flex items-center shadow-lg"
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
        </div>

        <div className="flex justify-center space-x-8">
          {Object.values(socialLinks).map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-colors duration-200 p-2 rounded-full hover:bg-accent-1/10"
              aria-label={link.url.split(':')[0]}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToElement('about')}
          className="cursor-pointer group flex flex-col items-center"
        >
          <span className="text-accent-1 font-mono text-sm mb-2 group-hover:text-accent-2 transition-colors duration-200">
            Scroll Down
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-accent-1 group-hover:text-accent-2 transition-colors duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;