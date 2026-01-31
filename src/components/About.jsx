import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target, Code } from 'lucide-react';
import Card from './ui/Card';
import { aboutData, personalData } from '../data/personalData';

const glowVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: [0.15, 0.35, 0.15],
    scale: [0.95, 1.05, 0.95],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' }
  }
};

const features = [
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'BSc graduate pursuing MCA with strong CS & software engineering fundamentals'
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: `${aboutData.experience} of experience in ${aboutData.specialization}`
  },
  {
    icon: Code,
    title: 'Tech Stack',
    description: 'ASP.NET Core, SQL Server & modern web technologies'
  },
  {
    icon: Target,
    title: 'Focus',
    description: aboutData.focus
  }
];

const AnimatedCard = ({ children, className }) => (
  <Card
    className={`relative overflow-hidden glass-card border border-soft-gray/10 backdrop-blur-xl ${className}`}
  >
    <motion.div
      variants={glowVariants}
      initial="initial"
      animate="animate"
      className="absolute inset-0 bg-gradient-to-br
        from-purple-600/20 via-purple-500/10 to-purple-400/20"
    />
    <div className="relative z-10">{children}</div>
  </Card>
);

const About = () => {
  return (
    <section id="about" className="py-14 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid lg:grid-cols-2 gap-5 items-center mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <AnimatedCard className="p-4">
              <h3 className="text-lg font-semibold mb-3 text-off-white">
                Who Am I?
              </h3>

              <p className="text-soft-gray/80 leading-relaxed mb-3 text-xs">
                I am a .NET Full Stack Developer focused on building scalable,
                secure, and high-performance applications using ASP.NET Core,
                C#, and SQL Server. I enjoy solving complex problems and
                delivering clean, reliable solutions,collaborating with teams, 
                and exploring data-driven insights to make software smarter and more efficient.
              </p>

              {/* Core Strengths */}
              <div className="mb-3">
                <h4 className="text-xs font-semibold mb-2 text-purple-500">
                  Core Strengths
                </h4>
                <div className="flex flex-wrap gap-1">
                  {aboutData.strengths.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full text-[11px]
                        bg-purple-600/10 text-purple-400
                        border border-purple-600/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Expertise */}
              <div>
                <h4 className="text-xs font-semibold mb-2 text-purple-400">
                  Additional Expertise
                </h4>
                <div className="flex flex-wrap gap-1">
                  {aboutData.secondary.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full text-[11px]
                        bg-purple-400/10 text-purple-300
                        border border-purple-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            variants={containerVariants}
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AnimatedCard className="p-3 text-center hover:border-purple-600/30 transition-all">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-md bg-purple-600/20">
                      <feature.icon className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-xs font-semibold mb-1 text-off-white">
                    {feature.title}
                  </h3>
                  <p className="text-soft-gray/70 text-[11px] leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Location */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedCard className="inline-block px-3 py-2">
            <p className="text-soft-gray text-xs">
              📍 Based in{' '}
              <span className="text-purple-400 font-semibold">
                {personalData.location}
              </span>
            </p>
          </AnimatedCard>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
