import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Brain,
  Accessibility
} from "lucide-react";
import Card from "./ui/Card";
import { projectsData } from "../data/personalData";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getProjectIcon = (title) => {
    if (title.includes("ERP") || title.includes("CRM") || title.includes("INVOBY"))
      return Database;
    if (title.includes("Prediction") || title.includes("Risk"))
      return Brain;
    if (title.includes("HearOS"))
      return Accessibility;
    return Code;
  };

  const glassClass =
    "bg-black border border-purple-600/20";

  return (
    <section id="projects" className="py-16 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="gradient-text">My Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
          <p className="text-soft-gray/70 mt-4 max-w-xl mx-auto text-sm">
            A selection of my key projects showcasing expertise in ERP/CRM systems,
            machine learning, and accessibility solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => {
            const Icon = getProjectIcon(project.title);

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`${glassClass} h-full p-4 rounded-lg
                    hover:border-purple-400/50
                    hover:shadow-xl hover:shadow-purple-600/30
                    transition-all duration-500 group`}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-1.5 rounded-md bg-black/50 border border-purple-600/20">
                      <Icon className="w-4 h-4 text-purple-500" />
                    </div>

                    <div className="flex space-x-1">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md bg-black/50 border border-purple-600/20 backdrop-blur-sm
                            hover:border-purple-400/50 transition-colors duration-300"
                        >
                          <Github className="w-3 h-3 text-soft-gray hover:text-purple-400 transition-colors duration-300" />
                        </a>
                      )}

                      {project.externalLink && (
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md bg-black/50 border border-purple-600/20 backdrop-blur-sm
                            hover:border-purple-400/50 transition-colors duration-300"
                        >
                          <ExternalLink className="w-3 h-3 text-soft-gray hover:text-purple-400 transition-colors duration-300" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-off-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-soft-gray/70 text-xs leading-snug mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-soft-gray mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 text-[10px] rounded
                            bg-purple-600/10 text-purple-400
                            border border-purple-600/20 backdrop-blur-sm
                            hover:border-purple-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-purple-600/20 pt-2">
                    <h4 className="text-xs font-semibold text-soft-gray mb-2">
                      Key Features
                    </h4>
                    <div className="space-y-1.5">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center text-xs text-soft-gray/70"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className={`${glassClass} inline-flex items-center px-4 py-2 text-xs`}>
            <Github className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-soft-gray">
              View more projects on{" "}
              <a
                href="https://github.com/BivinBhaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                GitHub
              </a>
            </span>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
