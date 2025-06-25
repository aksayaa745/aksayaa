
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'circle' | 'star' | 'hexagon';
  life: number;
  maxLife: number;
}

interface EnhancedParticlesBackgroundProps {
  variant?: 'hero' | 'projects' | 'about' | 'contact';
  intensity?: 'low' | 'medium' | 'high';
}

const EnhancedParticlesBackground: React.FC<EnhancedParticlesBackgroundProps> = ({ 
  variant = 'hero', 
  intensity = 'medium' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const isMobile = window.innerWidth < 768;
    
    // Adjust particle count based on variant and intensity
    const getParticleCount = () => {
      const baseCount = isMobile ? 20 : 60;
      const multipliers = {
        low: 0.5,
        medium: 1,
        high: 1.5
      };
      const variantMultipliers = {
        hero: 1.2,
        projects: 1,
        about: 0.8,
        contact: 0.6
      };
      return Math.floor(baseCount * multipliers[intensity] * variantMultipliers[variant]);
    };

    // Color schemes based on variant
    const getColorPalette = () => {
      const palettes = {
        hero: ['hsl(200, 80%, 60%)', 'hsl(280, 80%, 60%)', 'hsl(35, 91%, 58%)'],
        projects: ['hsl(260, 80%, 65%)', 'hsl(320, 80%, 65%)', 'hsl(35, 91%, 58%)'],
        about: ['hsl(200, 70%, 55%)', 'hsl(35, 91%, 58%)', 'hsl(180, 70%, 55%)'],
        contact: ['hsl(280, 70%, 60%)', 'hsl(35, 91%, 58%)', 'hsl(240, 70%, 60%)']
      };
      return palettes[variant];
    };

    const initParticles = () => {
      particlesRef.current = [];
      const colors = getColorPalette();
      const particleCount = getParticleCount();
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() < 0.7 ? 'circle' : (Math.random() < 0.8 ? 'star' : 'hexagon');
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * (type === 'circle' ? 2 : 3) + 1,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          type,
          life: Math.random() * 200,
          maxLife: 200 + Math.random() * 100
        });
      }
    };

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size * 0.5;
      
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const angle = (i * Math.PI) / spikes;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const pointX = x + Math.cos(angle) * radius;
        const pointY = y + Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(pointX, pointY);
        else ctx.lineTo(pointX, pointY);
      }
      ctx.closePath();
    };

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const pointX = x + Math.cos(angle) * size;
        const pointY = y + Math.sin(angle) * size;
        
        if (i === 0) ctx.moveTo(pointX, pointY);
        else ctx.lineTo(pointX, pointY);
      }
      ctx.closePath();
    };

    const drawParticle = (particle: Particle) => {
      const alpha = (Math.sin(particle.life * 0.02) + 1) * 0.5 * particle.opacity;
      
      ctx.save();
      ctx.globalAlpha = alpha;
      
      if (particle.type === 'circle') {
        // Circle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${alpha * 0.1})`).replace('hsl', 'hsla');
        ctx.fill();
      } else if (particle.type === 'star') {
        drawStar(ctx, particle.x, particle.y, particle.size);
        ctx.fillStyle = particle.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
        ctx.fill();
        ctx.strokeStyle = particle.color.replace(')', `, ${alpha * 0.5})`).replace('hsl', 'hsla');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (particle.type === 'hexagon') {
        drawHexagon(ctx, particle.x, particle.y, particle.size);
        ctx.strokeStyle = particle.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const connectParticles = (p1: Particle, p2: Particle) => {
      const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
      const maxDistance = isMobile ? 60 : 100;
      
      if (distance < maxDistance && p1.type === 'circle' && p2.type === 'circle') {
        const opacity = (1 - distance / maxDistance) * 0.05;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `hsla(35, 91%, 58%, ${opacity})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction (desktop only)
        if (!isMobile) {
          const mouseDistance = Math.sqrt(
            Math.pow(particle.x - mouseRef.current.x, 2) + 
            Math.pow(particle.y - mouseRef.current.y, 2)
          );
          
          if (mouseDistance < 80) {
            const force = (80 - mouseDistance) / 80;
            const angle = Math.atan2(particle.y - mouseRef.current.y, particle.x - mouseRef.current.x);
            particle.vx += Math.cos(angle) * force * 0.005;
            particle.vy += Math.sin(angle) * force * 0.005;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Boundary collision with smooth bouncing
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Add slight friction
        particle.vx *= 0.998;
        particle.vy *= 0.998;

        // Regenerate particle if it's lived too long
        if (particle.life > particle.maxLife) {
          const colors = getColorPalette();
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }

        drawParticle(particle);

        // Connect nearby circle particles
        if (particle.type === 'circle') {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            if (particlesRef.current[j].type === 'circle') {
              connectParticles(particle, particlesRef.current[j]);
            }
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    animate();

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        opacity: variant === 'hero' ? 0.8 : 0.6
      }}
    />
  );
};

export default EnhancedParticlesBackground;
