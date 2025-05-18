
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const programmingSkills = [
    "Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL"
  ];
  
  const technologiesTools = [
    "VS Code", "Google Cloud", "AWS", "React", "Express",
    "MongoDB", "Matlab", "Unity", "Blender", "Maya"
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-accent font-medium mb-1">WHAT I KNOW</h2>
          <h3 className="text-3xl md:text-5xl font-serif">Skills</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="glass-morphism relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-accent/10"></div>
            <CardContent className="p-6">
              <h4 className="text-xl font-serif mb-6">Programming Languages</h4>
              <div className="flex flex-wrap gap-3">
                {programmingSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-secondary/50 rounded-md text-sm hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-accent/10"></div>
            <CardContent className="p-6">
              <h4 className="text-xl font-serif mb-6">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {technologiesTools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-secondary/50 rounded-md text-sm hover:bg-accent/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <Card className="glass-morphism relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-accent/10"></div>
            <CardContent className="p-6">
              <h4 className="text-xl font-serif mb-6">Services</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg mb-3">UI/UX Design</h5>
                  <p className="text-muted-foreground">
                    Creating intuitive, visually appealing interfaces that enhance user experience through
                    thoughtful design, user research, and prototyping with tools like Figma.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-lg mb-3">Full-Stack Development</h5>
                  <p className="text-muted-foreground">
                    Building complete web applications with responsive front-end interfaces and robust
                    back-end systems, utilizing modern frameworks and best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
