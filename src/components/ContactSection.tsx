
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-accent font-medium mb-1">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-5xl font-serif">Contact</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xl font-serif mb-6">Let's Connect</h4>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <span>aksayaa745@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span>+91 9445626989</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/aksayaa-s-v-a80b962a8/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  linkedin.com/in/aksayaa-s-v
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-accent" />
                </div>
                <a 
                  href="https://github.com/aksayaa745" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  github.com/aksayaa745
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h4 className="text-lg font-serif mb-6">Send Me a Message</h4>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        className="bg-secondary/30 border-secondary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-secondary/30 border-secondary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      className="bg-secondary/30 border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      className="bg-secondary/30 border-secondary min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
