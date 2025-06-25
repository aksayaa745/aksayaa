
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import AdvancedParticlesBackground from "@/components/AdvancedParticlesBackground";
import { useAdvancedScrollAnimation } from "@/hooks/useAdvancedScrollAnimation";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Individual animation hooks for different elements
  const { ref: containerRef, animationProps: containerAnimation } = useAdvancedScrollAnimation({ 
    direction: 'fade', 
    threshold: 0.2 
  });
  
  const { animationProps: textAnimation } = useAdvancedScrollAnimation({ 
    direction: 'up', 
    delay: 200,
    distance: 60
  });
  
  const { animationProps: avatarAnimation } = useAdvancedScrollAnimation({ 
    direction: 'scale', 
    delay: 400
  });
  
  const { animationProps: buttonsAnimation } = useAdvancedScrollAnimation({ 
    direction: 'up', 
    delay: 600,
    distance: 30
  });
  
  const titles = [
    "UI/UX Designer",
    "Full Stack Developer", 
    "Creative Thinker"
  ];
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-10"
    >
      <AdvancedParticlesBackground variant="hero" intensity="high" />
      
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        {...containerAnimation}
      >
        <motion.div 
          className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/3 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left column - Enhanced Text and CTA */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            {...textAnimation}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-2 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.span 
                  className="h-2 w-2 rounded-full bg-accent"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-sm font-medium text-accent">Available for new opportunities</p>
              </motion.div>
              
              <div className="space-y-3">
                <motion.h1 
                  className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-white via-white/90 to-accent/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                >
                  <motion.span 
                    className="block text-2xl md:text-3xl font-light tracking-wide text-foreground mb-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    I'm
                  </motion.span>
                  AKSAYAA
                </motion.h1>
                
                <div className="h-12 mt-2">
                  <Carousel
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-1 h-12">
                      {titles.map((title, index) => (
                        <CarouselItem key={index} className="p-1">
                          <motion.h3 
                            className="text-2xl md:text-4xl font-serif opacity-80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + index * 0.1 }}
                          >
                            {title}
                          </motion.h3>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                
                <motion.p 
                  className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  Specialized in creating engaging digital experiences through UI/UX Design,
                  Frontend Development, and exploring new technologies.
                </motion.p>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              {...buttonsAnimation}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={scrollToContact} 
                  className="bg-accent hover:bg-accent/90 text-white group relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(245, 158, 11, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  variant="outline" 
                  className="border-accent/30 hover:bg-accent/10 text-accent relative group overflow-hidden"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <motion.div 
                    className="absolute inset-0 bg-accent/5"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Enhanced Profile Image with 3D effects */}
          <motion.div 
            className="lg:w-1/2 flex justify-center items-center"
            {...avatarAnimation}
          >
            <div className="relative">
              {/* Enhanced orbit decoration with particles */}
              <motion.div 
                className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full opacity-70"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Multiple glowing backgrounds */}
              <motion.div 
                className="absolute inset-[-15%] bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent rounded-full blur-2xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute inset-[-20%] bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [360, 270, 180, 90, 0]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              {/* Enhanced profile image container */}
              <motion.div 
                className="relative z-10"
                animate={{ 
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
              >
                <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-accent/20 p-1 shadow-2xl shadow-accent/10">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="https://i.ibb.co/5g3yxYJG/mecore.jpg" 
                      alt="Aksayaa's profile picture" 
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback className="w-full h-full bg-secondary/50 flex items-center justify-center text-muted-foreground">
                      A
                    </AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
              
              {/* Enhanced floating decorative elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i}
                  className={`absolute w-${2 + i} h-${2 + i} bg-accent/${30 - i * 5} rounded-full blur-sm`}
                  style={{
                    top: `${20 + i * 15}%`,
                    right: `${10 + i * 10}%`,
                    transform: `rotate(${i * 60}deg) translateX(${100 + i * 20}px)`
                  }}
                  animate={{ 
                    scale: [1, 1.2 + i * 0.1, 1],
                    opacity: [0.3, 0.6 + i * 0.1, 0.3],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 3 + i, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
