
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import EnhancedParticlesBackground from "@/components/EnhancedParticlesBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2, delay: 200 });

  return (
    <section id="about" className="py-20 relative">
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
            WHO AM I
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About Me
          </motion.h3>
        </motion.div>
        
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm a Computer Science and Design student at Rajalakshmi Engineering College, 
              with a deep passion for creating intuitive and visually appealing digital experiences.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              My journey in technology and design has been driven by curiosity and the desire 
              to solve complex problems through elegant solutions. I'm constantly exploring new 
              technologies and approaches to enhance my skills as both a UI/UX designer and full-stack developer.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Beyond technical skills, I pride myself on being a fast learner who thrives in 
              collaborative environments and can quickly adapt to new challenges and technologies.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h4 
              className="text-lg font-serif mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Educational Background
            </motion.h4>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={contentVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-morphism group hover:border-accent/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium group-hover:text-accent transition-colors">Rajalakshmi Engineering College</h5>
                      <span className="text-accent text-sm">2022-2026</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">B.E. Computer Science and Design</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={contentVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-morphism group hover:border-accent/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium group-hover:text-accent transition-colors">Chettinad Vidyashram</h5>
                      <span className="text-accent text-sm">2022</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Higher Secondary Education</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Element */}
      <motion.div 
        className="absolute top-1/2 transform -translate-y-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default AboutSection;
