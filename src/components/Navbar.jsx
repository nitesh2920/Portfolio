import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen 
          ? 'bg-secondary-bg/95 backdrop-blur-lg shadow-2xl py-4 border-b border-accent-1/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <button
            onClick={() => {
              const element = document.getElementById('hero');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="group cursor-pointer"
          >
            <motion.h1 
              className="text-2xl md:text-3xl font-bold font-mono text-accent-1"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(0, 245, 195, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {personalInfo.name}
              <span className="animate-pulse">.</span>
            </motion.h1>
          </button>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div 
          className="hidden lg:flex items-center"
          variants={itemVariants}
        >
          <div className="flex space-x-4 xl:space-x-6 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  onClick={() => {
                    const element = document.getElementById(item.to);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="relative text-text-secondary hover:text-accent-1 font-mono transition-all duration-300 cursor-pointer py-2 px-2 xl:px-3 rounded-lg hover:bg-accent-1/10 group text-sm xl:text-base"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-1 group-hover:w-full transition-all duration-300"></span>
                </button>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="ml-6 xl:ml-8"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(0, 245, 195, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-4 xl:px-6 py-2 xl:py-3 font-mono border-2 border-accent-1 text-accent-1 rounded-lg hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 overflow-hidden text-sm xl:text-base whitespace-nowrap inline-block"
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-accent-1 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Medium screens menu (tablet) */}
        <motion.div 
          className="hidden md:flex lg:hidden space-x-2 items-center"
          variants={itemVariants}
        >
          {/* Show all nav items but with shorter names for some */}
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  const element = document.getElementById(item.to);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="relative text-text-secondary hover:text-accent-1 font-mono transition-all duration-300 cursor-pointer py-2 px-1.5 rounded-lg hover:bg-accent-1/10 group text-xs"
              >
                {/* Use shorter names for medium screens */}
                {item.name === 'Experience' ? 'Exp' : item.name === 'Projects' ? 'Work' : item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-1 group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>
          ))}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-2 py-1.5 font-mono border-2 border-accent-1 text-accent-1 rounded-lg hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 overflow-hidden text-xs whitespace-nowrap"
            >
              <span className="relative z-10">CV</span>
              <div className="absolute inset-0 bg-accent-1 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="flex md:hidden"
          variants={itemVariants}
        >
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-accent-1 focus:outline-none p-2 rounded-lg hover:bg-accent-1/10 transition-colors duration-300 z-50 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-secondary-bg/95 backdrop-blur-lg border-t border-accent-1/20"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={mobileItemVariants}
              >
                <button
                  onClick={() => {
                    const element = document.getElementById(item.to);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-6 py-4 text-text-secondary hover:text-accent-1 hover:bg-primary-bg/50 font-mono transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-accent-1"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
            
            <motion.div
              variants={mobileItemVariants}
              className="p-4"
            >
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 font-mono border-2 border-accent-1 text-accent-1 rounded-lg hover:bg-accent-1 hover:text-primary-bg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;