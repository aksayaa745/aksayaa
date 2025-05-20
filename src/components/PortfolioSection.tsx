
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "Accident Detection, Alert & Assistance System",
    description: "ML-based real-time vehicle accident and helmet detection system with immediate alerts",
    technologies: ["Python", "OpenCV", "Flask", "SQLite", "Twilio", "SendGrid"],
    year: "2025",
    image: "https://i.ibb.co/3mznxWPh/image.png",
    github: "https://github.com/aksayaa745/Accident_Detection_ml",
    demo: "https://accidentdetection.demo.app"
  },
  {
    title: "3D Endless Runner Game",
    description: "Developed in Unity using Mixamo animations, showcased at college game expo",
    technologies: ["Unity", "C#", "Mixamo", "3D Modeling"],
    year: "2025",
    image: "https://i.ibb.co/1tDgG0ZS/Screenshot-2025-04-23-213907.png",
    github: "https://github.com/aksayaa/endless-runner",
    demo: "https://endlessrunner.demo.app"
  },
  {
    title: "WheelWhiz",
    description: "A smart vehicle record at your finger tips",
    technologies: ["React Native", "TensorFlow", "Firebase", "Node.js"],
    year: "2025",
    image: "https://i.ibb.co/YBDksxXk/Screenshot-2025-05-12-114634.png",
    github: "https://github.com/aksayaa/wheelwhiz",
    demo: "https://wheelwhiz.demo.app"
  },
  {
    title: "Airline Reservation System",
    description: "Web application with CRUD operations for flight bookings and user management",
    technologies: ["Flask", "MySQL", "HTML/CSS", "JavaScript"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    github: "https://github.com/aksayaa/airline-reservations",
    demo: "https://airlinereservation.demo.app"
  },
  {
    title: "Habit Tracker Mobile App",
    description: "Mobile application to track daily habits and personal goals",
    technologies: ["React Native", "Firebase", "Redux"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    github: "https://github.com/aksayaa/habit-tracker",
    demo: "https://habittracker.demo.app"
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
                        <div className="h-60 lg:h-auto bg-secondary/50 overflow-hidden">
                          <AspectRatio ratio={16/9} className="h-full">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                          </AspectRatio>
                        </div>
                        
                        <div className="p-6 lg:p-8">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-medium text-xl text-gradient">{project.title}</h4>
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
                            <Button variant="outline" size="sm" className="group" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                                Code
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" className="group" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                                Live Demo
                              </a>
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
