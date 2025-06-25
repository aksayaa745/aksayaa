
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import EnhancedParticlesBackground from "@/components/EnhancedParticlesBackground";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2, delay: 200 });

  const programmingSkills = [
    "Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL"
  ];
  
  const technologiesTools = [
    "VS Code", "Google Cloud", "AWS", "React", "Express",
    "MongoDB", "Matlab", "Unity", "Blender", "Maya"
  ];
  
  return (
    <section id="skills" className="py-20 relative">
      <EnhancedParticlesBackground variant="about" intensity="low" />
      
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
            WHAT I KNOW
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Skills
          </motion.h3>
        </motion.div>
        
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={cardsVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="glass-morphism relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-accent/10"
                initial={{ scaleX: 0 }}
                animate={cardsVisible ? { scaleX: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ originX: 0 }}
              />
              <CardContent className="p-6">
                <motion.h4 
                  className="text-xl font-serif mb-6 group-hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Programming Languages
                </motion.h4>
                <div className="flex flex-wrap gap-3">
                  {programmingSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-2 bg-secondary/50 rounded-md text-sm hover:bg-accent/20 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={cardsVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: 0.6 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(245, 158, 11, 0.2)"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={cardsVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="glass-morphism relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-accent/10"
                initial={{ scaleX: 0 }}
                animate={cardsVisible ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{ originX: 0 }}
              />
              <CardContent className="p-6">
                <motion.h4 
                  className="text-xl font-serif mb-6 group-hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Technologies & Tools
                </motion.h4>
                <div className="flex flex-wrap gap-3">
                  {technologiesTools.map((tool, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-2 bg-secondary/50 rounded-md text-sm hover:bg-accent/20 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={cardsVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: 0.8 + index * 0.08,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(245, 158, 11, 0.2)"
                      }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={cardsVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <Card className="glass-morphism relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-accent/10"
              initial={{ scaleX: 0 }}
              animate={cardsVisible ? { scaleX: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ originX: 0 }}
            />
            <CardContent className="p-6">
              <motion.h4 
                className="text-xl font-serif mb-6 group-hover:text-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Services
              </motion.h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardsVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <h5 className="text-lg mb-3">UI/UX Design</h5>
                  <p className="text-muted-foreground">
                    Creating intuitive, visually appealing interfaces that enhance user experience through
                    thoughtful design, user research, and prototyping with tools like Figma.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={cardsVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <h5 className="text-lg mb-3">Full-Stack Development</h5>
                  <p className="text-muted-foreground">
                    Building complete web applications with responsive front-end interfaces and robust
                    back-end systems, utilizing modern frameworks and best practices.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
