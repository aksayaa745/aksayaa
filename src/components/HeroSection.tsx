
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/3 rounded-full blur-3xl opacity-20"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left column - Text and CTA */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            {/* Redesigned intro section with better hierarchy */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <p className="text-sm font-medium text-accent">Available for new opportunities</p>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-white via-white/90 to-accent/80 bg-clip-text text-transparent">
                  <span className="block text-2xl md:text-3xl font-light tracking-wide text-foreground mb-1">I'm</span>
                  AKSAYAA
                </h1>
                
                <div className="h-12 mt-2">
                  <Carousel
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                    className="w-full"
                    onSelect={(api) => {
                      if (api) {
                        const index = api.selectedScrollSnap();
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <CarouselContent className="-ml-1 h-12">
                      {titles.map((title, index) => (
                        <CarouselItem key={index} className="p-1">
                          <h3 className="text-2xl md:text-4xl font-serif opacity-80">
                            {title}
                          </h3>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                
                <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed mt-4">
                  Specialized in creating engaging digital experiences through UI/UX Design,
                  Frontend Development, and exploring new technologies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToContact} 
                className="bg-accent hover:bg-accent/90 text-white group"
              >
                Get In Touch
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline" 
                className="border-accent/30 hover:bg-accent/10 text-accent"
              >
                View Portfolio
              </Button>
            </div>
          </div>
          
          {/* Right column - Profile Image */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Orbit decoration */}
              <div className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full animate-[spin_20s_linear_infinite] opacity-70"></div>
              
              {/* Glowing background */}
              <div className="absolute inset-[-10%] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl opacity-30"></div>
              
              {/* Profile image container */}
              <div className="relative z-10 animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 p-1">
                  <div className="w-full h-full bg-secondary/50 rounded-full flex items-center justify-center overflow-hidden">
                    <span className="text-muted-foreground">Profile Image</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-sm"></div>
            </div>
          </div>
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
