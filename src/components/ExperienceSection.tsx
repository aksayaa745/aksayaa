
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AdvancedParticlesBackground from "@/components/AdvancedParticlesBackground";
import { useAdvancedScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useAdvancedScrollAnimation";

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
  const { ref: headerRef, animationProps: headerAnimation } = useAdvancedScrollAnimation({ 
    direction: 'up', 
    threshold: 0.3 
  });
  
  const { ref: cardsRef, getItemAnimationProps } = useStaggeredScrollAnimation(experiences.length, 150, 'up');

  return (
    <section id="experience" className="py-20 relative bg-secondary/20">
      <AdvancedParticlesBackground variant="experience" intensity="medium" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          className="mb-12 text-center"
          {...headerAnimation}
        >
          <motion.h2 
            className="text-accent font-medium mb-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerAnimation.animate.opacity ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            MY JOURNEY
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif bg-gradient-to-r from-white via-white/90 to-accent/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerAnimation.animate.opacity ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience
          </motion.h3>
        </motion.div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...getItemAnimationProps(index)}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-morphism overflow-hidden group h-full hover:border-accent/30 transition-all duration-300 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{
                    opacity: 1,
                    background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), transparent, rgba(139, 92, 246, 0.1))"
                  }}
                />
                <CardContent className="p-0 relative z-10">
                  <div className="p-6">
                    <motion.div 
                      className="h-1 w-20 bg-accent/30 mb-4 group-hover:w-32 transition-all duration-300"
                      whileHover={{ 
                        backgroundColor: "rgba(245, 158, 11, 0.6)",
                        boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)"
                      }}
                    />
                    <div className="flex justify-between items-start mb-3">
                      <motion.h4 
                        className="font-medium text-lg group-hover:text-accent transition-colors"
                        whileHover={{ 
                          scale: 1.02,
                          x: 5
                        }}
                      >
                        {exp.title}
                      </motion.h4>
                      <motion.span 
                        className="text-accent text-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={getItemAnimationProps(index).animate.opacity ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    <motion.p 
                      className="text-sm text-muted-foreground mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={getItemAnimationProps(index).animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      @ {exp.company}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={getItemAnimationProps(index).animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
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
      
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </section>
  );
};

export default ExperienceSection;
