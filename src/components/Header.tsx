
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="font-serif text-xl md:text-2xl font-bold text-gradient">Aksayaa.</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["home", "about", "experience", "skills", "portfolio", "contact"].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Contact Button (Desktop) */}
        <Button
          onClick={() => scrollToSection("contact")}
          className="hidden md:flex bg-accent hover:bg-accent/90 text-white"
        >
          Contact
        </Button>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["home", "about", "experience", "skills", "portfolio", "contact"].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
