import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, Sparkles, Trophy, Code } from 'lucide-react';
import geswykLogo from '@/assets/geswy-logo.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent rounded-full animate-glow"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={geswykLogo} 
            alt="Geswy Gaming Portfolio" 
            className="h-24 mx-auto rounded-lg shadow-glow"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          GESWY
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Gaming meets Creativity
        </p>
        
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
          Welcome to Geswy's World - Where 3+ years of video editing, creative design, 
          and gaming passion collide in a stunning digital showcase.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
          >
            <Gamepad2 className="mr-2 h-5 w-5" />
            Explore Games
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
          >
            <Code className="mr-2 h-5 w-5" />
            View Portfolio
          </Button>
        </div>

        {/* Skills badges */}
        <div className="flex flex-wrap gap-4 justify-center mt-16">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm">Video Editing</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm">Creative Design</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border">
            <Gamepad2 className="h-4 w-4 text-primary" />
            <span className="text-sm">Gaming Enthusiast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;