
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Loader, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import emailjs from 'emailjs-com';

// Interface for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
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
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        className="bg-secondary/30 border-secondary"
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
                        className="bg-secondary/30 border-secondary"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      className="bg-secondary/30 border-secondary"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      className="bg-secondary/30 border-secondary min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
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
