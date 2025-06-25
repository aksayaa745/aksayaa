
import React from 'react';
import { motion } from "framer-motion";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import EnhancedParticlesBackground from "@/components/EnhancedParticlesBackground";
import ProjectCard from "@/components/ProjectCard";

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
  const { ref: headerRef, isVisible: headerVisible } = useStaggeredAnimation(1, 0);
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(projects.length, 150);

  return (
    <section id="portfolio" className="py-20 relative bg-secondary/20 overflow-hidden">
      <EnhancedParticlesBackground variant="projects" intensity="medium" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h2 
            className="text-accent font-medium mb-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            MY WORK
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif bg-gradient-to-r from-white via-white/90 to-accent/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Featured Projects
          </motion.h3>
        </motion.div>
        
        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default EnhancedPortfolioSection;
