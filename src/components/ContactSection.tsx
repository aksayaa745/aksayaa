
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Loader, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import EnhancedParticlesBackground from "@/components/EnhancedParticlesBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Interface for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2, delay: 200 });

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Error state
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user types
    if (errors[id as keyof FormData]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    // Initialize EmailJS with your public key
    emailjs.init('oMFxtadRyNCQJsBQ9');
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_j4b0q8f', // Your Service ID
        'template_btu3t75', // Your updated Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );
      
      // Show success message
      toast.success('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "aksayaa745@gmail.com",
      link: "mailto:aksayaa745@gmail.com"
    },
    {
      icon: Phone,
      text: "+91 9445626989",
      link: "tel:+919445626989"
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/aksayaa-s-v",
      link: "https://www.linkedin.com/in/aksayaa-s-v-a80b962a8/"
    },
    {
      icon: Github,
      text: "github.com/aksayaa745",
      link: "https://github.com/aksayaa745"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <EnhancedParticlesBackground variant="contact" intensity="medium" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-accent font-medium mb-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Contact
          </motion.h3>
        </motion.div>
        
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h4 
              className="text-xl font-serif mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Let's Connect
            </motion.h4>
            
            <motion.p 
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Feel free to reach out for collaborations, opportunities, or just to say hello!
              I'm always open to discussing new projects and ideas.
            </motion.p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={contentVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 158, 11, 0.2)" }}
                  >
                    <item.icon className="h-5 w-5 text-accent" />
                  </motion.div>
                  {item.link.startsWith('http') || item.link.startsWith('mailto') || item.link.startsWith('tel') ? (
                    <a 
                      href={item.link}
                      target={item.link.startsWith('http') ? "_blank" : "_self"}
                      rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                      className="hover:text-accent transition-colors group"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-morphism hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-6">
                <motion.h4 
                  className="text-lg font-serif mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Send Me a Message
                </motion.h4>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        className="bg-secondary/30 border-secondary focus:border-accent transition-colors"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-secondary/30 border-secondary focus:border-accent transition-colors"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <label htmlFor="subject" className="text-sm">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      className="bg-secondary/30 border-secondary focus:border-accent transition-colors"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <label htmlFor="message" className="text-sm">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      className="bg-secondary/30 border-secondary min-h-[120px] focus:border-accent transition-colors"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <Loader className="h-4 w-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
