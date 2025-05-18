
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-serif text-lg font-bold text-gradient">Aksayaa.</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aksayaa S V. All rights reserved.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/in/aksayaa-s-v-a80b962a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            
            <a 
              href="https://github.com/aksayaa745" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            
            <a 
              href="mailto:aksayaa745@gmail.com" 
              className="h-8 w-8 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
