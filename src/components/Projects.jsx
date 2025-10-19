import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData.jsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LinkPreview } from "./ui/link-preview.jsx";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  })
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group bg-secondary-bg rounded-xl shadow-xl overflow-hidden flex flex-col border border-transparent hover:border-accent-1/30 transition-all duration-500"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 245, 195, 0.15)"
      }}
    >
      <div className="p-8 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-accent-1 font-mono group-hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {project.title}
          </motion.h3>
          {project.icon && (
            <motion.div 
              className="text-accent-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {project.icon}
            </motion.div>
          )}
        </div>

        {/* Meta info */}
        <p className="text-xs text-text-secondary font-mono mb-4 bg-primary-bg/50 px-3 py-1 rounded-full inline-block w-fit">
          {project.date} | {project.category}
        </p>

        {/* Description */}
        <motion.p 
          className="text-sm text-text-secondary mb-6 flex-grow leading-relaxed group-hover:text-text-primary transition-colors duration-300"
          whileHover={{ scale: 1.01 }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-text-primary mb-3 font-mono flex items-center">
            <span className="w-2 h-2 bg-accent-1 rounded-full mr-2 animate-pulse"></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                className="text-xs bg-primary-bg text-accent-1 px-3 py-2 rounded-full font-mono border border-accent-1/20 hover:border-accent-1/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 5px 15px rgba(0, 245, 195, 0.2)"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-auto flex justify-between space-x-4 pt-6 border-t border-primary-bg/50">
          {project.githubLink && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <LinkPreview
                url={project.githubLink}
                className="w-full"
              >
                <div className="group/btn flex items-center justify-center px-4 py-3 bg-primary-bg text-text-secondary hover:text-accent-1 transition-all duration-300 rounded-lg border border-transparent hover:border-accent-1/30 font-mono text-sm">
                  <FaGithub size={18} className="mr-2 group-hover/btn:animate-bounce" />
                  <span>Code</span>
                </div>
              </LinkPreview>
            </motion.div>
          )}

          {project.liveLink && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <LinkPreview
                url={project.liveLink}
                className="w-full"
              >
                <div className="group/btn flex items-center justify-center px-4 py-3 bg-accent-1 text-primary-bg hover:bg-opacity-90 transition-all duration-300 rounded-lg font-mono text-sm shadow-lg hover:shadow-accent-1/30">
                  <FaExternalLinkAlt size={16} className="mr-2 group-hover/btn:animate-bounce" />
                  <span className="font-semibold">Live Demo</span>
                </div>
              </LinkPreview>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border border-accent-1 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 border border-accent-2 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle id="projects-title">My Creations</SectionTitle>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
