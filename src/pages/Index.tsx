import React from 'react';
import Hero from '@/components/Hero';
import GamesShowcase from '@/components/GamesShowcase';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <GamesShowcase />
      <About />
      <Contact />
    </div>
  );
};

export default Index;