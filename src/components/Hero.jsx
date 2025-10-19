import { TypeAnimation } from 'react-type-animation';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary-bg relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-accent-1 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-accent-2 rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-1 rounded-full opacity-25"
          animate={{
            y: [0, -25, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <motion.div
        className="container mx-auto mt-9 px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h3 
            className="text-accent-1 font-mono text-lg md:mt-6 sm:text-xl mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hi, my name is
          </motion.h3>
          
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-text-primary mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {personalInfo.name}.
          </motion.h1>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-secondary mb-6"
            whileHover={{ scale: 1.01 }}
          >
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
          </motion.h2>
          
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed"
            whileHover={{ scale: 1.02 }}
          >
            {personalInfo.bio}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 245, 195, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="px-8 py-4 font-mono text-lg bg-accent-1 text-primary-bg rounded-lg cursor-pointer shadow-lg transition-all duration-300 hover:bg-opacity-90 transform hover:-translate-y-1"
            >
              View My Work
            </button>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 245, 195, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-mono text-lg border-2 border-accent-1 text-accent-1 rounded-lg hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 flex items-center shadow-lg transform hover:-translate-y-1"
            >
              <FaDownload className="mr-2" /> Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8"
        >
          {Object.values(socialLinks).map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-all duration-300 p-2 rounded-full hover:bg-accent-1/10"
              aria-label={link.url.split(':')[0]}
              variants={socialVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                boxShadow: "0 5px 15px rgba(0, 245, 195, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          className="cursor-pointer group flex flex-col items-center"
        >
          <motion.span 
            className="text-accent-1 font-mono text-sm mb-2 group-hover:text-accent-2 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Scroll Down
          </motion.span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-accent-1 group-hover:text-accent-2 transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            whileHover={{ scale: 1.1 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;