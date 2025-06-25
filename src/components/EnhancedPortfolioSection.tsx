
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from 'react-parallax-tilt';
import ParticlesBackground from "@/components/ParticlesBackground";

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

const EnhancedPortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    },
  };

  return (
    <section id="portfolio" className="py-20 relative bg-secondary/20 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <motion.h2 
            className="text-accent font-medium mb-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            MY WORK
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif bg-gradient-to-r from-white via-white/90 to-accent/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Featured Projects
          </motion.h3>
        </motion.div>
        
        {/* Enhanced Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={1000}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#f59e0b"
                glarePosition="all"
                glareBorderRadius="12px"
              >
                <Card className="glass-morphism overflow-hidden h-full group relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  
                  <CardContent className="p-0 relative z-10">
                    <div className="relative overflow-hidden">
                      <AspectRatio ratio={16/10} className="h-48">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </AspectRatio>
                      
                      {/* Year badge */}
                      <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {project.year}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <motion.h4 
                        className="font-medium text-xl text-gradient mb-3 group-hover:text-accent transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h4>
                      
                      <motion.p 
                        className="text-muted-foreground mb-4 text-sm leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <motion.span 
                              key={idx} 
                              className="text-xs px-3 py-1 bg-secondary/60 rounded-full border border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs px-3 py-1 bg-secondary/40 rounded-full text-muted-foreground">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group/btn hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 relative overflow-hidden" 
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 group-hover/btn:text-accent transition-colors" />
                            <span className="relative z-10">Code</span>
                            <div className="absolute inset-0 bg-accent/5 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group/btn hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 relative overflow-hidden" 
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:text-accent transition-colors" />
                            <span className="relative z-10">Demo</span>
                            <div className="absolute inset-0 bg-accent/5 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel for remaining projects */}
        {projects.length > 3 && (
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.6, 1] }}
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.01}
                    transitionSpeed={1000}
                  >
                    <Card className="glass-morphism overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                          <div className="h-60 lg:h-auto bg-secondary/50 overflow-hidden relative">
                            <AspectRatio ratio={16/9} className="h-full">
                              <img 
                                src={projects[activeIndex + 3]?.image} 
                                alt={projects[activeIndex + 3]?.title} 
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                            </AspectRatio>
                          </div>
                          
                          <div className="p-6 lg:p-8 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-medium text-xl text-gradient">{projects[activeIndex + 3]?.title}</h4>
                              <span className="text-accent text-sm bg-accent/10 px-2 py-1 rounded-full">
                                {projects[activeIndex + 3]?.year}
                              </span>
                            </div>
                            
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                              {projects[activeIndex + 3]?.description}
                            </p>
                            
                            <div className="mb-6">
                              <h5 className="text-sm font-medium mb-3 text-accent/80">Technologies Used:</h5>
                              <div className="flex flex-wrap gap-2">
                                {projects[activeIndex + 3]?.technologies.map((tech, idx) => (
                                  <span key={idx} className="text-xs px-3 py-1 bg-secondary/60 rounded-full border border-accent/20">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex space-x-3">
                              <Button variant="outline" size="sm" className="group hover:bg-accent/10 hover:border-accent/50" asChild>
                                <a href={projects[activeIndex + 3]?.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                                  Code
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" className="group hover:bg-accent/10 hover:border-accent/50" asChild>
                                <a href={projects[activeIndex + 3]?.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                                  Live Demo
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Tilt>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Enhanced Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevProject}
                  className="h-12 w-12 rounded-full hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all duration-300 group"
                >
                  <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
              
              <div className="flex items-center space-x-3">
                {projects.slice(3).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-8 bg-accent shadow-lg shadow-accent/25" : "w-3 bg-muted hover:bg-accent/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextProject}
                  className="h-12 w-12 rounded-full hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all duration-300 group"
                >
                  <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default EnhancedPortfolioSection;
