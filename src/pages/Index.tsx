
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import EnhancedPortfolioSection from '@/components/EnhancedPortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Aksayaa S V | UI/UX Designer & Full-Stack Developer";
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: [0.4, 0, 0.2, 1] as const,
    duration: 0.8
  };

  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-background text-foreground"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EnhancedPortfolioSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
