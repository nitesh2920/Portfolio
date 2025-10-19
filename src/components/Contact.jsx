import SectionTitle from './SectionTitle';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaEnvelope, FaRocket } from 'react-icons/fa';

const contactItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 100
    }
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-accent-1 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-accent-2 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-accent-1 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle id="contact-title">Get In Touch</SectionTitle>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced description card */}
          <motion.div
            className="p-8 mb-12 bg-secondary-bg rounded-2xl shadow-xl border border-transparent hover:border-accent-1/30 transition-all duration-500"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 245, 195, 0.1)"
            }}
          >
            <motion.div
              className="inline-block p-4 bg-accent-1/10 rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <FaEnvelope className="text-accent-1 text-3xl" />
            </motion.div>
            
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I'm currently <span className="text-accent-1 font-semibold">open to new opportunities</span> and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <p className="text-accent-1 font-mono text-sm">
              Let's build something amazing together! 🚀
            </p>
          </motion.div>

          {/* Enhanced CTA button */}
          <motion.div
            variants={contactItemVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="group relative inline-flex items-center px-12 py-5 font-mono text-xl bg-accent-1 text-primary-bg rounded-xl shadow-2xl hover:shadow-accent-1/40 transition-all duration-500 overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0, 245, 195, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <FaRocket className="mr-3 group-hover:animate-bounce" />
                Say Hello
              </span>
              <div className="absolute inset-0 bg-accent-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {Object.entries(socialLinks).map(([key, link], index) => (
              <motion.a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-secondary-bg rounded-xl shadow-lg hover:shadow-xl border border-transparent hover:border-accent-1/30 transition-all duration-300"
                aria-label={key}
                variants={contactItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.1,
                  boxShadow: "0 15px 30px rgba(0, 245, 195, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="text-text-secondary group-hover:text-accent-1 transition-colors duration-300">
                  {link.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Additional contact info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-text-secondary font-mono text-sm">
              Or reach me directly at{' '}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-accent-1 hover:text-accent-2 transition-colors duration-300 underline decoration-accent-1/30 hover:decoration-accent-2"
                whileHover={{ scale: 1.05 }}
              >
                {personalInfo.email}
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;