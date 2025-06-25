
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  year: string;
  image: string;
  github: string;
  demo: string;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  year,
  image,
  github,
  demo,
  index,
  isVisible
}) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.9
      }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.02}
        transitionSpeed={1000}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="#f59e0b"
        glarePosition="all"
        glareBorderRadius="12px"
      >
        <Card className="glass-morphism overflow-hidden h-full group relative">
          {/* Animated glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
            whileHover={{
              background: [
                "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)",
                "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)",
                "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)"
              ],
              transition: { duration: 2, repeat: Infinity }
            }}
          />
          
          <CardContent className="p-0 relative z-10">
            <div className="relative overflow-hidden">
              <AspectRatio ratio={16/10} className="h-48">
                <motion.img 
                  src={image} 
                  alt={title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </AspectRatio>
              
              {/* Animated year badge */}
              <motion.div 
                className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium"
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {year}
              </motion.div>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: 'translateX(-100%)',
                }}
                whileHover={{
                  transform: 'translateX(100%)',
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </div>
            
            <div className="p-6">
              <motion.h4 
                className="font-medium text-xl bg-gradient-to-r from-white via-white/90 to-accent/70 bg-clip-text text-transparent mb-3 group-hover:from-accent group-hover:to-purple-400 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {title}
              </motion.h4>
              
              <motion.p 
                className="text-muted-foreground mb-4 text-sm leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {description}
              </motion.p>
              
              <div className="mb-6">
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {technologies.slice(0, 3).map((tech, idx) => (
                    <motion.span 
                      key={idx} 
                      className="text-xs px-3 py-1 bg-secondary/60 rounded-full border border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(245, 158, 11, 0.1)"
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: index * 0.1 + 0.6 + idx * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {technologies.length > 3 && (
                    <motion.span 
                      className="text-xs px-3 py-1 bg-secondary/40 rounded-full text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.9 }}
                    >
                      +{technologies.length - 3}
                    </motion.span>
                  )}
                </motion.div>
              </div>
              
              <motion.div 
                className="flex space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group/btn hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 relative overflow-hidden" 
                  asChild
                >
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2 group-hover/btn:text-accent transition-colors" />
                    <span className="relative z-10">Code</span>
                    <motion.div 
                      className="absolute inset-0 bg-accent/5"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group/btn hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 relative overflow-hidden" 
                  asChild
                >
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:text-accent transition-colors" />
                    <span className="relative z-10">Demo</span>
                    <motion.div 
                      className="absolute inset-0 bg-accent/5"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
