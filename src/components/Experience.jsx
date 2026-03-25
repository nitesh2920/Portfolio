import SectionTitle from './SectionTitle';
import { Timeline } from './ui/timeline';
import { achievementsAndLeadership, workExperience } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {

  const renderContentCards = (items) => {
    return (
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div 
              className={`group relative p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                item.role.includes('Grand Finalist') 
                  ? 'bg-gradient-to-br from-primary-bg to-accent-1/5 border-accent-1/50 hover:border-accent-1' 
                  : 'bg-primary-bg border-secondary-bg hover:border-accent-1/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <div className="flex items-center gap-3">
                  <h3 className={`text-xl sm:text-2xl font-bold font-mono group-hover:scale-[1.02] transition-transform duration-300 ${
                    item.role.includes('Grand Finalist') ? 'text-accent-1' : 'text-accent-1'
                  }`}>
                    {item.role}
                  </h3>
                  {item.role.includes('Grand Finalist') && (
                    <span className="px-2 py-1 bg-accent-1/10 text-accent-1 text-xs font-bold rounded border border-accent-1/30">
                      NEW
                    </span>
                  )}
                </div>
                <span className={`text-sm font-mono px-3 py-1 rounded-full ${
                  item.role.includes('Grand Finalist') 
                    ? 'text-accent-1 bg-accent-1/10 border border-accent-1/30' 
                    : 'text-text-secondary bg-secondary-bg'
                }`}>
                  {item.duration}
                </span>
              </div>
              
              <p className="text-lg text-accent-2 font-semibold mb-4 group-hover:text-accent-1 transition-colors duration-300">
                {item.organization}
              </p>
              
              {item.points.length > 0 ? (
                <ul className="space-y-2 text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-accent-1/50 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-accent-1 transition-colors"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-text-secondary/80 italic text-sm sm:text-base">
                  Details forthcoming.
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const timelineData = [
    {
      title: "Work Experience",
      content: renderContentCards(workExperience)
    },
    {
      title: "Achievements & Leadership",
      content: renderContentCards(achievementsAndLeadership)
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle id="experience-title">My Journey</SectionTitle>
        <div className="mt-8">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default Experience;