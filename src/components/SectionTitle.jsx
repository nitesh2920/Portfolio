import { motion } from 'framer-motion';

const SectionTitle = ({ children, id }) => {
  return (
    <motion.div
      className="relative text-center mb-16 sm:mb-20"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main title */}
      <motion.h2
        id={id}
        className="relative text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-accent-1 py-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-accent-1 to-accent-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
      </motion.h2>

      {/* Background text */}
      <motion.span 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold text-secondary-bg/10 z-0 select-none pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        {children}
      </motion.span>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 left-1/4 w-2 h-2 bg-accent-1 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        animate={{ y: [0, -10, 0] }}
        style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
      />
      <motion.div
        className="absolute -top-2 right-1/4 w-1 h-1 bg-accent-2 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        animate={{ y: [0, -8, 0] }}
        style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
      />
      <motion.div
        className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-accent-1 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
        animate={{ y: [0, 8, 0] }}
        style={{ animationDuration: '5s', animationIterationCount: 'infinite' }}
      />
    </motion.div>
  );
};

export default SectionTitle;