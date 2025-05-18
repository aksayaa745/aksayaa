
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Accident Detection, Alert & Assistance System",
    description: "ML-based real-time vehicle accident and helmet detection system with immediate alerts",
    technologies: ["Python", "OpenCV", "Flask", "SQLite", "Twilio", "SendGrid"],
    year: "2025",
    image: ""
  },
  {
    title: "3D Endless Runner Game",
    description: "Developed in Unity using Mixamo animations, showcased at college game expo",
    technologies: ["Unity", "C#", "Mixamo", "3D Modeling"],
    year: "2025",
    image: ""
  },
  {
    title: "Airline Reservation System",
    description: "Web application with CRUD operations for flight bookings and user management",
    technologies: ["Flask", "MySQL", "HTML/CSS", "JavaScript"],
    year: "2024",
    image: ""
  },
  {
    title: "Habit Tracker Mobile App",
    description: "Mobile application to track daily habits and personal goals",
    technologies: ["React Native", "Firebase", "Redux"],
    year: "2024",
    image: ""
  }
];

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-accent font-medium mb-1">MY WORK</h2>
          <h3 className="text-3xl md:text-5xl font-serif">Projects</h3>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full">
                  <Card className="glass-morphism overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="h-60 lg:h-auto bg-secondary/50 flex items-center justify-center">
                          <span className="text-muted-foreground">Project Image</span>
                        </div>
                        
                        <div className="p-6 lg:p-8">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-medium text-xl">{project.title}</h4>
                            <span className="text-accent text-sm">{project.year}</span>
                          </div>
                          
                          <p className="text-muted-foreground mb-6">{project.description}</p>
                          
                          <div className="mb-6">
                            <h5 className="text-sm font-medium mb-3">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-secondary/60 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <Button variant="outline" size="sm" className="group">
                              <Github className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                              Code
                            </Button>
                            <Button variant="outline" size="sm" className="group">
                              <ExternalLink className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                              Live Demo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevProject}
              className="h-10 w-10 rounded-full hover:bg-accent/20 hover:text-accent"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-accent" : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextProject}
              className="h-10 w-10 rounded-full hover:bg-accent/20 hover:text-accent"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default PortfolioSection;
