
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AdvancedParticlesBackground from "@/components/AdvancedParticlesBackground";
import { useAdvancedScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { Code2, Palette, Users, Zap, Target, Heart } from "lucide-react";

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
  const { ref: skillsRef, getItemAnimationProps: getSkillAnimationProps } = useStaggeredScrollAnimation(6, 100, 'up');

  const personalValues = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Committed to writing clean, efficient, and maintainable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Thinking", 
      description: "Passionate about creating user-centered designs that are both beautiful and functional."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believe in the power of teamwork and open communication to achieve exceptional results."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always exploring new technologies and approaches to solve problems creatively."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations and drive business value."
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Genuinely love what I do and bring enthusiasm to every project I work on."
    }
  ];

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
            className="space-y-8"
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
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`${item.highlight ? 'text-lg font-medium text-white' : 'text-muted-foreground'} leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                animate={textAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <p>{item.text}</p>
              </motion.div>
            ))}

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={textAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {["Problem Solver", "Creative Thinker", "Team Player", "Tech Enthusiast"].map((trait, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <div ref={cardsRef}>            
            <div className="space-y-8">
              <motion.h4 
                className="text-2xl font-serif mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={headerAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Educational Journey
              </motion.h4>
              
              {[
                {
                  title: "Rajalakshmi Engineering College",
                  period: "2022 - 2026",
                  degree: "B.E. Computer Science and Design",
                  description: "Specializing in the intersection of technology and design, with focus on user experience, software engineering, and innovative problem-solving."
                },
                {
                  title: "Chettinad Vidyashram", 
                  period: "2020 - 2022",
                  degree: "Higher Secondary Education",
                  description: "Graduated with distinction in Science stream, laying a strong foundation in mathematics, physics, and computer science."
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
                    />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <motion.h5 
                          className="font-semibold text-lg group-hover:text-accent transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {edu.title}
                        </motion.h5>
                        <span className="text-accent text-sm font-medium bg-accent/10 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-accent/80 font-medium mb-2">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Values Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={headerAnimation.animate.opacity ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h4 className="text-accent font-medium mb-2 tracking-wider">CORE VALUES</h4>
            <h5 className="text-3xl md:text-4xl font-serif text-white">What Drives Me</h5>
          </div>

          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  {...getSkillAnimationProps(index)}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="glass-morphism group hover:border-accent/30 transition-all duration-300 relative overflow-hidden h-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <CardContent className="p-6 relative z-10 text-center">
                      <motion.div
                        className="inline-flex items-center justiy-center w-12 h-12 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6 text-accent" />
                      </motion.div>
                      <h6 className="font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        {value.title}
                      </h6>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
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
