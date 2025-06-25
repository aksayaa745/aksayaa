
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AdvancedParticlesBackground from "@/components/AdvancedParticlesBackground";
import { useAdvancedScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useAdvancedScrollAnimation";

const AboutSection = () => {
  const { ref: headerRef, animationProps: headerAnimation } = useAdvancedScrollAnimation({ 
    direction: 'up', 
    threshold: 0.3 
  });
  
  const { animationProps: textAnimation } = useAdvancedScrollAnimation({ 
    direction: 'right', 
    delay: 200,
    distance: 80
  });
  
  const { ref: cardsRef, getItemAnimationProps } = useStaggeredScrollAnimation(2, 150, 'scale');

  return (
    <section id="about" className="py-20 relative">
      <AdvancedParticlesBackground variant="about" intensity="medium" />
      
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
            WHO AM I
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif bg-gradient-to-r from-white via-white/90 to-accent/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerAnimation.animate.opacity ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About Me
          </motion.h3>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            className="space-y-6"
            {...textAnimation}
          >
            {[
              "I'm a Computer Science and Design student at Rajalakshmi Engineering College, with a deep passion for creating intuitive and visually appealing digital experiences.",
              "My journey in technology and design has been driven by curiosity and the desire to solve complex problems through elegant solutions. I'm constantly exploring new technologies and approaches to enhance my skills as both a UI/UX designer and full-stack developer.",
              "Beyond technical skills, I pride myself on being a fast learner who thrives in collaborative environments and can quickly adapt to new challenges and technologies."
            ].map((text, index) => (
              <motion.p 
                key={index}
                className={`${index === 0 ? 'text-lg' : 'text-muted-foreground'} leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                animate={textAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
          
          <div ref={cardsRef}>
            <motion.h4 
              className="text-lg font-serif mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={headerAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Educational Background
            </motion.h4>
            
            <div className="space-y-6">
              {[
                {
                  title: "Rajalakshmi Engineering College",
                  period: "2022-2026",
                  degree: "B.E. Computer Science and Design"
                },
                {
                  title: "Chettinad Vidyashram", 
                  period: "2022",
                  degree: "Higher Secondary Education"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  {...getItemAnimationProps(index)}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="glass-morphism group hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        background: "linear-gradient(90deg, rgba(245, 158, 11, 0.1), transparent)"
                      }}
                    />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex justify-between items-start mb-1">
                        <motion.h5 
                          className="font-medium group-hover:text-accent transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {edu.title}
                        </motion.h5>
                        <span className="text-accent text-sm">{edu.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Element */}
      <motion.div 
        className="absolute top-1/2 transform -translate-y-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0]
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

export default AboutSection;
