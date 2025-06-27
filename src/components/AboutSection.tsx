
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
    <section id="about" className="py-20 relative overflow-hidden">
      <AdvancedParticlesBackground variant="about" intensity="medium" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          className="mb-16 text-center"
          {...headerAnimation}
        >
          <motion.h2 
            className="text-accent font-medium mb-2 tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerAnimation.animate.opacity ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            GET TO KNOW ME
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-6xl font-serif bg-gradient-to-r from-white via-white/90 to-accent/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerAnimation.animate.opacity ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About Me
          </motion.h3>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="space-y-8 relative z-20"
            {...textAnimation}
          >
            {[
              {
                text: "Hello! I'm Aksayaa S V, a passionate Computer Science and Design student at Rajalakshmi Engineering College. I'm on a mission to bridge the gap between technology and creativity, crafting digital experiences that are not just functional, but truly memorable.",
                highlight: true
              },
              {
                text: "My journey began with a simple fascination for how things work behind the screen. This curiosity evolved into a deep passion for both the technical intricacies of development and the artistic nuances of design. I believe that great software is born at the intersection of robust engineering and thoughtful user experience.",
                highlight: false
              },
              {
                text: "What sets me apart is my ability to wear multiple hats - from conceptualizing user flows and designing interfaces to architecting databases and optimizing performance. I'm constantly learning, always questioning, and perpetually excited about the next challenge.",
                highlight: false
              },
              {
                text: "When I'm not coding or designing, you'll find me exploring the latest tech trends, contributing to open-source projects, or mentoring fellow students. I believe in the power of community and the importance of giving back to the ecosystem that has given me so much.",
                highlight: false
              },
              {
                text: "My technical expertise spans across modern web technologies including React, Node.js, Python, and various design tools. I'm particularly passionate about creating accessible, user-centered designs that solve real-world problems while maintaining aesthetic appeal.",
                highlight: false
              },
              {
                text: "Beyond technical skills, I bring a collaborative spirit and strong communication abilities to every project. I thrive in team environments where diverse perspectives come together to create something extraordinary. My goal is to continue growing as both a developer and designer while contributing to meaningful projects that make a positive impact.",
                highlight: false
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`${item.highlight ? 'text-lg font-medium text-white' : 'text-gray-200'} leading-relaxed relative z-20`}
                style={{ 
                  color: item.highlight ? '#FFFFFF' : '#E5E7EB',
                  position: 'relative',
                  zIndex: 20
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={textAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <p>{item.text}</p>
              </motion.div>
            ))}

            <motion.div
              className="flex flex-wrap gap-3 mt-8 relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={textAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {["Problem Solver", "Creative Thinker", "Team Player", "Tech Enthusiast", "UI/UX Designer", "Full-Stack Developer"].map((trait, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium relative z-20"
                  style={{ position: 'relative', zIndex: 20 }}
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <div ref={cardsRef} className="relative z-20">            
            <div className="space-y-8">
              <motion.h4 
                className="text-2xl font-serif mb-6 text-white relative z-20"
                style={{ color: '#FFFFFF', position: 'relative', zIndex: 20 }}
                initial={{ opacity: 0, y: 20 }}
                animate={headerAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Educational Journey & Achievements
              </motion.h4>
              
              {[
                {
                  title: "Rajalakshmi Engineering College",
                  period: "2022 - 2026",
                  degree: "B.E. Computer Science and Design",
                  description: "Specializing in the intersection of technology and design, with focus on user experience, software engineering, and innovative problem-solving. Currently maintaining a strong academic record while actively participating in tech communities and hackathons."
                },
                {
                  title: "Chettinad Vidyashram", 
                  period: "2020 - 2022",
                  degree: "Higher Secondary Education",
                  description: "Graduated with distinction in Science stream, laying a strong foundation in mathematics, physics, and computer science. Developed early programming skills and participated in various science competitions and tech events."
                },
                {
                  title: "Professional Development",
                  period: "Ongoing",
                  degree: "Continuous Learning",
                  description: "Actively pursuing certifications in cloud technologies, advanced React patterns, and design systems. Regular participant in tech meetups, workshops, and online learning platforms to stay current with industry trends."
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  {...getItemAnimationProps(index)}
                  className="relative z-20"
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="glass-morphism group hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <motion.h5 
                          className="font-semibold text-lg group-hover:text-accent transition-colors text-white"
                          style={{ color: '#FFFFFF' }}
                          whileHover={{ x: 5 }}
                        >
                          {edu.title}
                        </motion.h5>
                        <span className="text-accent text-sm font-medium bg-accent/10 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-accent/80 font-medium mb-2">{edu.degree}</p>
                      <p className="text-sm leading-relaxed text-gray-200" style={{ color: '#E5E7EB' }}>
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -80, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
};

export default AboutSection;
