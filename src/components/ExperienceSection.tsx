
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Product Design Virtual Internship",
    company: "Accenture",
    period: "Dec 2024",
    description: "Conducted market analysis and executed design iterations using Figma. Collaborated with cross-functional teams to create user-centered design solutions."
  },
  {
    title: "Machine Learning for Signal Processing",
    company: "ABV-IITM",
    period: "July 2024",
    description: "Applied machine learning techniques to signal processing challenges, developing models for pattern recognition and data analysis."
  },
  {
    title: "Hackathon Participant",
    company: "PES University - Synapse'2.0",
    period: "April 2024",
    description: "Participated in a 24-hour hackathon focused on developing innovative technology solutions to real-world problems."
  },
  {
    title: "Web Development Intern",
    company: "NSIC Chennai",
    period: "Jan 2024",
    description: "Contributed to front-end development projects, implementing responsive designs and optimizing web performance."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-accent font-medium mb-1">MY JOURNEY</h2>
          <h3 className="text-3xl md:text-5xl font-serif">Experience</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-morphism overflow-hidden group">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="h-1 w-20 bg-accent/30 mb-4 group-hover:w-32 transition-all duration-300"></div>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-lg">{exp.title}</h4>
                    <span className="text-accent text-sm">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">@ {exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background Element */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default ExperienceSection;
