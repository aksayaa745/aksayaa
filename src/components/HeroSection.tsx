
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import EnhancedParticlesBackground from "@/components/EnhancedParticlesBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
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

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-10">
      <EnhancedParticlesBackground variant="hero" intensity="high" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/3 rounded-full blur-3xl opacity-20"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left column - Text and CTA */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Redesigned intro section with better hierarchy */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-2 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.span 
                  className="h-2 w-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-sm font-medium text-accent">Available for new opportunities</p>
              </motion.div>
              
              <div className="space-y-3">
                <motion.h1 
                  className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-white via-white/90 to-accent/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="block text-2xl md:text-3xl font-light tracking-wide text-foreground mb-1">I'm</span>
                  AKSAYAA
                </motion.h1>
                
                <div className="h-12 mt-2">
                  <Carousel
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                    className="w-full"
                    onSelect={(api: any) => {
                      const index = api.selectedScrollSnap();
                      setActiveIndex(index);
                    }}
                  >
                    <CarouselContent className="-ml-1 h-12">
                      {titles.map((title, index) => (
                        <CarouselItem key={index} className="p-1">
                          <motion.h3 
                            className="text-2xl md:text-4xl font-serif opacity-80"
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 + index * 0.1 }}
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
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Specialized in creating engaging digital experiences through UI/UX Design,
                  Frontend Development, and exploring new technologies.
                </motion.p>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
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
          
          {/* Right column - Enhanced Profile Image (increased size) */}
          <motion.div 
            className="lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Orbit decoration */}
              <motion.div 
                className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full opacity-70"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Enhanced glowing background */}
              <motion.div 
                className="absolute inset-[-15%] bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent rounded-full blur-2xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Profile image container - Increased size */}
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
                whileHover={{ scale: 1.05 }}
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
              
              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper function to scroll to a section
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default HeroSection;
