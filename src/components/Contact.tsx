import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send, Github, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your next project 
            and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project inquiry, collaboration, etc." 
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, timeline, and goals..."
                      rows={6}
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    Usually within 24 hours
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Project Types</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Video Editing</li>
                    <li>• Thumbnail Design</li>
                    <li>• Creative Content</li>
                    <li>• Web Development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;