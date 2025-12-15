import SectionTitle from './SectionTitle';
import { achievementsAndLeadership } from '../data/portfolioData.jsx';
import { FaAward, FaUsers, FaBriefcase, FaGithub, FaTrophy } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experienceItemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
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



const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const getIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    const iconSize = "w-5 h-5 sm:w-6 sm:h-6"; 
    if (lowerTitle.includes("finalist") || lowerTitle.includes("hackathon")) return <FaTrophy className={`text-accent-1 ${iconSize}`} />;
    if (lowerTitle.includes("open")) return <FaGithub className={`text-accent-1 ${iconSize}`} />;
    if (lowerTitle.includes("executive")) return <FaUsers className={`text-accent-1 ${iconSize}`} />;
    if (lowerTitle.includes("medalist") || lowerTitle.includes("holder")) return <FaAward className={`text-accent-1 ${iconSize}`} />;
    return <FaBriefcase className={`text-accent-1 ${iconSize}`} />;
  };

  return (
    <section id="experience" className="py-20 bg-secondary-bg relative overflow-hidden" ref={containerRef}>
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
        <div className="relative">
          <SectionTitle id="experience-title">Achievements & Leadership</SectionTitle>
          
          {/* Floating NEW Achievement Notification */}
        
        </div>

        <div className="relative max-w-6xl mx-auto mt-16">
          {/* Static Timeline Background */}
          <div className="absolute left-[calc(2rem-1px)] sm:left-[calc(2.5rem-1px)] top-0 h-full w-1 bg-gray-600/30 rounded-full" />
          
          {/* Animated Timeline Progress */}
          <motion.div 
            className="absolute left-[calc(2rem-1px)] sm:left-[calc(2.5rem-1px)] top-0 w-1 bg-gradient-to-b from-accent-1 via-accent-2 to-accent-1 rounded-full origin-top"
            style={{ height: progressHeight }}
          />
          
          {/* Timeline dots */}
          <div className="absolute left-[calc(2rem-4px)] sm:left-[calc(2.5rem-4px)] top-0 h-full">
            {achievementsAndLeadership.map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-3 h-3 bg-accent-1 rounded-full border-2 border-primary-bg shadow-lg"
                style={{ top: `${(index + 1) * (100 / (achievementsAndLeadership.length + 1))}%` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  boxShadow: "0 0 20px rgba(0, 245, 195, 0.6)"
                }}
                transition={{ 
                  delay: index * 0.2 + 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.5,
                  boxShadow: "0 0 30px rgba(0, 245, 195, 0.8)"
                }}
              />
            ))}
          </div>

          {achievementsAndLeadership.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 flex items-start"
              custom={index}
              variants={experienceItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Enhanced Icon */}
              <motion.div 
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-primary-bg rounded-full border-3 border-accent-1 flex items-center justify-center mr-6 sm:mr-8 relative z-10 shadow-xl"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 360,
                  boxShadow: "0 0 30px rgba(0, 245, 195, 0.5)"
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative z-10">
                  {getIcon(item.role)}
                </div>
              </motion.div>

              {/* Enhanced Content Card */}
              <motion.div 
                className={`group flex-grow p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                  item.role.includes('Grand Finalist') 
                    ? 'bg-gradient-to-br from-primary-bg to-accent-1/5 border-accent-1/50 hover:border-accent-1' 
                    : 'bg-primary-bg border-transparent hover:border-accent-1/30'
                }`}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  boxShadow: item.role.includes('Grand Finalist') 
                    ? "0 20px 40px rgba(0, 245, 195, 0.25)" 
                    : "0 20px 40px rgba(0, 245, 195, 0.15)"
                }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div className="flex items-center gap-3">
                    <motion.h3 
                      className={`text-xl sm:text-2xl lg:text-2xl font-bold font-mono group-hover:scale-105 transition-transform duration-300 ${
                        item.role.includes('Grand Finalist') ? 'text-accent-1' : 'text-accent-1'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.role}
                    </motion.h3>
                    {item.role.includes('Grand Finalist') && (
                      <motion.div
                        className="relative px-3 py-1 bg-gradient-to-r from-accent-1/20 to-accent-2/20 text-accent-1 text-xs font-bold rounded-full border border-accent-1/50 overflow-hidden"
                        animate={{ 
                          boxShadow: [
                            "0 0 0px rgba(0, 245, 195, 0.4)",
                            "0 0 20px rgba(0, 245, 195, 0.6)",
                            "0 0 0px rgba(0, 245, 195, 0.4)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative z-10">NEW</span>
                      </motion.div>
                    )}
                  </div>
                  <p className={`text-sm font-mono px-3 py-1 rounded-full mt-2 sm:mt-0 ${
                    item.role.includes('Grand Finalist') 
                      ? 'text-accent-1 bg-accent-1/10 border border-accent-1/30' 
                      : 'text-text-secondary bg-secondary-bg/50'
                  }`}>
                    {item.duration}
                  </p>
                </div>
                
                <motion.p 
                  className="text-lg text-accent-2 font-bold mb-4 group-hover:text-accent-1 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {item.organization}
                </motion.p>
                
                {item.points.length > 0 ? (
                  <ul className="space-y-3 text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                    {item.points.map((point, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start text-sm sm:text-base leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-accent-1 rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse"></div>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-secondary/80 italic text-sm sm:text-base">
                    Details forthcoming.
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;