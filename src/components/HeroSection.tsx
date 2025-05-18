
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <p className="text-sm text-muted-foreground">Available for new opportunities</p>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-light">Hey, there</h2>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-gradient">
              I AM<br />AKSAYAA
            </h1>
            
            <div className="mt-4 mb-6">
              <h3 className="text-xl md:text-3xl font-serif">
                DIGITAL<br />PRODUCT<br />DESIGNER
              </h3>
              <p className="mt-4 text-muted-foreground max-w-lg">
                Specialized in UI/UX Design, Frontend Development, and exploring 
                new technologies with a passion for creating engaging user experiences.
              </p>
            </div>
            
            <Button onClick={scrollToContact} className="bg-accent hover:bg-accent/90 text-white">
              Get In Touch
            </Button>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center items-center">
            <div className="relative z-10 animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20">
                <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-muted-foreground">Profile Image</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
