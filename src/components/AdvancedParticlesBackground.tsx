
import React, { useCallback } from 'react';
import { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

interface AdvancedParticlesBackgroundProps {
  variant?: 'hero' | 'about' | 'experience' | 'skills' | 'portfolio' | 'contact';
  intensity?: 'low' | 'medium' | 'high';
}

const AdvancedParticlesBackground: React.FC<AdvancedParticlesBackgroundProps> = ({ 
  variant = 'hero', 
  intensity = 'medium' 
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getParticleConfig = () => {
    const isMobile = window.innerWidth < 768;
    
    const densityMultipliers = {
      low: isMobile ? 15 : 25,
      medium: isMobile ? 25 : 50,
      high: isMobile ? 35 : 80
    };

    const colorSchemes = {
      hero: ["#3b82f6", "#8b5cf6", "#f59e0b", "#06b6d4"],
      about: ["#06b6d4", "#f59e0b", "#3b82f6"],
      experience: ["#8b5cf6", "#f59e0b", "#06b6d4"],
      skills: ["#f59e0b", "#3b82f6", "#8b5cf6"],
      portfolio: ["#8b5cf6", "#f59e0b", "#3b82f6"],
      contact: ["#06b6d4", "#8b5cf6", "#f59e0b"]
    };

    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: isMobile ? 30 : 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: !isMobile,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: colorSchemes[variant],
        },
        links: {
          color: "#f59e0b",
          distance: isMobile ? 100 : 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: isMobile ? 0.5 : 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: densityMultipliers[intensity],
        },
        opacity: {
          value: { min: 0.1, max: 0.6 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle", "star"],
          options: {
            star: {
              sides: 5,
            },
            triangle: {
              sides: 3,
            },
          },
        },
        size: {
          value: { min: 1, max: isMobile ? 3 : 5 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
            color: {
              value: "#f59e0b",
            },
          },
        },
      },
      detectRetina: true,
    };
  };

  return (
    <Particles
      id={`particles-${variant}`}
      options={getParticleConfig()}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: variant === 'hero' ? 0.8 : 0.6 }}
    />
  );
};

export default AdvancedParticlesBackground;
