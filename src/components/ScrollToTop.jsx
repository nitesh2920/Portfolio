import { useState, useEffect } from 'react';
import { FaArrowUp, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = window.pageYOffset;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    
    setScrollProgress(progress);
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            duration: 0.6
          }}
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(0, 245, 195, 0.2)"
              strokeWidth="4"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
              transition={{ duration: 0.1 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5c3" />
                <stop offset="100%" stopColor="#e94560" />
              </linearGradient>
            </defs>
          </svg>

          {/* Button */}
          <motion.button
            onClick={scrollToTop}
            className="relative w-16 h-16 bg-accent-1 text-primary-bg rounded-full shadow-2xl hover:shadow-accent-1/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent-1/30 group overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(0, 245, 195, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-accent-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-full h-full"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <FaRocket size={20} className="group-hover:animate-bounce" />
              </motion.div>
            </motion.div>
          </motion.button>

          {/* Tooltip */}
          <motion.div
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-secondary-bg text-text-primary px-3 py-2 rounded-lg text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ x: 10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            Back to top
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-secondary-bg"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;