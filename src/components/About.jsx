import SectionTitle from './SectionTitle';
import { education } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-accent-1 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-accent-2 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle id="about-title">About Me</SectionTitle>
        
        {/* Bio Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="p-8 bg-primary-bg rounded-2xl shadow-xl border border-transparent hover:border-accent-1/30 transition-all duration-500"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 245, 195, 0.1)"
            }}
          >
            <motion.p 
              className="text-lg text-text-secondary leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              Hello! I'm <span className="text-accent-1 font-semibold">Nitesh</span>, a driven 
              <span className="text-accent-1 font-semibold"> Full Stack Developer</span> with a strong foundation in computer science and a knack for crafting efficient, user-centric applications. My journey into tech is fueled by a desire to learn, innovate, and contribute to projects that make a difference. I thrive in collaborative environments and am always excited to tackle new challenges.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-center text-accent-1 mb-12 font-mono flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaGraduationCap className="mr-3 text-accent-1" />
            Education Journey
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="group bg-primary-bg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-accent-1/30"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0, 245, 195, 0.15)"
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="mr-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {edu.institution.toLowerCase().includes("university") ? 
                      <FaUniversity className="text-accent-1 text-3xl" /> : 
                      <FaSchool className="text-accent-1 text-3xl" />
                    }
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary group-hover:text-accent-1 transition-colors duration-300">
                      {edu.institution}
                    </h4>
                  </div>
                </div>
                
                <motion.p 
                  className="text-text-secondary font-semibold mb-2 group-hover:text-text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {edu.degree}
                </motion.p>
                
                <p className="text-sm text-text-secondary font-mono mb-3 bg-secondary-bg/50 px-3 py-1 rounded-full inline-block">
                  {edu.duration}
                </p>
                
                <p className="text-sm text-accent-1 font-mono font-semibold">
                  {edu.score}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;