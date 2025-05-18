import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-accent font-medium mb-1">WHO AM I</h2>
          <h3 className="text-3xl md:text-5xl font-serif">About Me</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science and Design student at Rajalakshmi Engineering College, 
              with a deep passion for creating intuitive and visually appealing digital experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology and design has been driven by curiosity and the desire 
              to solve complex problems through elegant solutions. I'm constantly exploring new 
              technologies and approaches to enhance my skills as both a UI/UX designer and full-stack developer.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Beyond technical skills, I pride myself on being a fast learner who thrives in 
              collaborative environments and can quickly adapt to new challenges and technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-6">Educational Background</h4>
            
            <div className="space-y-6">
              <Card className="glass-morphism">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-medium">Rajalakshmi Engineering College</h5>
                    <span className="text-accent text-sm">2022-2026</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">B.E. Computer Science and Design</p>
                  
                </CardContent>
              </Card>
              
              <Card className="glass-morphism">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-medium">Chettinad Vidyashram</h5>
                    <span className="text-accent text-sm">2022</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Higher Secondary Education</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Element */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>;
};
export default AboutSection;