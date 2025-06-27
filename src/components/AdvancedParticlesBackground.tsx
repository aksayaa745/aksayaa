
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
    console.log('Initializing particles engine for variant:', variant);
    await loadSlim(engine);
  }, [variant]);

  const getParticleConfig = () => {
    const isMobile = window.innerWidth < 768;
    
    const densityMultipliers = {
      low: isMobile ? 20 : 40,
      medium: isMobile ? 35 : 70,
      high: isMobile ? 50 : 100
    };

    const colorSchemes = {
      hero: ["#3b82f6", "#8b5cf6", "#f59e0b", "#06b6d4", "#ffffff"],
      about: ["#06b6d4", "#f59e0b", "#3b82f6", "#ffffff", "#e5e7eb"],
      experience: ["#8b5cf6", "#f59e0b", "#06b6d4", "#ffffff"],
      skills: ["#f59e0b", "#3b82f6", "#8b5cf6", "#ffffff"],
      portfolio: ["#8b5cf6", "#f59e0b", "#3b82f6", "#ffffff"],
      contact: ["#06b6d4", "#8b5cf6", "#f59e0b", "#ffffff"]
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
            mode: ["repulse", "grab"],
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 120,
            duration: 0.4,
          },
          grab: {
            distance: 140,
            links: {
              opacity: 0.5
            }
          },
        },
      },
      particles: {
        color: {
          value: colorSchemes[variant],
        },
        links: {
          color: "#f59e0b",
          distance: isMobile ? 120 : 180,
          enable: true,
          opacity: 0.3,
          width: 1.5,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: isMobile ? 0.8 : 1.5,
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
          value: { min: 0.2, max: 0.8 },
          animation: {
            enable: true,
            speed: 1.5,
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
          value: { min: 1, max: isMobile ? 4 : 6 },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.08,
            opacity: 1,
            color: {
              value: ["#ffffff", "#f59e0b"],
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
      particlesInit={particlesInit}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: variant === 'hero' ? 0.9 : 0.7 }}
    />
  );
};

export default AdvancedParticlesBackground;
