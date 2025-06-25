
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import EnhancedParticlesBackground from "@/components/EnhancedParticlesBackground";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Product Design Virtual Internship",
    company: "Accenture",
    period: "Dec 2024",
    description: "Conducted market analysis and executed design iterations using Figma. Collaborated with cross-functional teams to create user-centered design solutions."
  },
  {
    title: "Machine Learning for Signal Processing",
    company: "ABV-IITM",
    period: "July 2024",
    description: "Applied machine learning techniques to signal processing challenges, developing models for pattern recognition and data analysis."
  },
  {
    title: "Hackathon Participant",
    company: "PES University - Synapse'2.0",
    period: "April 2024",
    description: "Participated in a 24-hour hackathon focused on developing innovative technology solutions to real-world problems."
  },
  {
    title: "Web Development Intern",
    company: "NSIC Chennai",
    period: "Jan 2024",
    description: "Contributed to front-end development projects, implementing responsive designs and optimizing web performance."
  }
];

const ExperienceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(experiences.length, 150);

  return (
    <section id="experience" className="py-20 relative bg-secondary/20">
      <EnhancedParticlesBackground variant="about" intensity="medium" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-accent font-medium mb-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            MY JOURNEY
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience
          </motion.h3>
        </motion.div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={visibleItems[index] ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-morphism overflow-hidden group h-full hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-6">
                    <motion.div 
                      className="h-1 w-20 bg-accent/30 mb-4 group-hover:w-32 transition-all duration-300"
                      whileHover={{ backgroundColor: "rgba(245, 158, 11, 0.6)" }}
                    />
                    <div className="flex justify-between items-start mb-3">
                      <motion.h4 
                        className="font-medium text-lg group-hover:text-accent transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        {exp.title}
                      </motion.h4>
                      <motion.span 
                        className="text-accent text-sm"
                        initial={{ opacity: 0 }}
                        animate={visibleItems[index] ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    <motion.p 
                      className="text-sm text-muted-foreground mb-3"
                      initial={{ opacity: 0 }}
                      animate={visibleItems[index] ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      @ {exp.company}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={visibleItems[index] ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {exp.description}
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Element */}
      <motion.div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default ExperienceSection;
